import test from 'node:test';
import assert from 'node:assert/strict';
import { PulseTask, ReviewOffer, account } from '../src/data/pulseAgent.mjs';
const run = id => { const task = new PulseTask(); task.reset(id); task.start(id === 'connection' || id === 'payment' ? 'skip £75' : id === 'ambiguous' ? 'skip it' : id === 'boundary' ? 'buy stock' : 'test'); for (let i=0;i<3;i++) task.advance(); return task; };
test('financial records reconcile in integer pence', () => assert.equal(account.opening + account.contribution + account.market + account.fees, account.closing));
test('complete, missing and empty records have distinct outcomes', () => { for (const [id,status] of [['complete','complete'],['missing','partial'],['empty','empty']]) assert.equal(run(id).status,status); });
test('unknown outcomes are checked without duplicate writes', () => { const t=run('connection'); assert.equal(t.writes,0); assert.equal(t.approve('wrong'),false); assert.equal(t.approve(t.proposal.id),true); t.finishAction(); assert.equal(t.status,'unknown'); t.approve(t.proposal.id); t.finishAction(); t.checkStatus(); t.confirmReceipt(); assert.equal(t.writes,1); assert.equal(t.status,'success'); });
test('cancel invalidates approval and blocks execution', () => { const t=run('ambiguous'); assert.equal(t.status,'clarify'); t.propose(); const id=t.proposal.id; t.cancel(); assert.equal(t.approve(id),false); t.finishAction(); assert.equal(t.writes,0); });
test('cancelled reads cannot complete from delayed callbacks', () => { const t=new PulseTask(); t.start('why'); t.advance(); t.cancel(); t.advance(); assert.equal(t.status,'cancelled'); });
test('failed reads preserve input and can recover', () => { const t=run('failure'); assert.equal(t.status,'failed'); t.retry(); for(let i=0;i<3;i++)t.advance(); assert.equal(t.status,'complete'); assert.equal(t.question,'test'); });
test('repeated pressure never enables actions', () => { const t=run('boundary'); for(let i=0;i<5;i++)t.block(); assert.equal(t.status,'blocked'); assert.equal(t.writes,0); assert.equal(t.proposal,null); });
test('an explanatory request in the interrupted-action scenario never becomes an action', () => { const t=new PulseTask(); t.reset('connection'); t.start('Explain my September balance'); for(let i=0;i<3;i++)t.advance(); assert.equal(t.status,'complete'); assert.equal(t.proposal,null); });
test('empty accounts cannot create payment proposals', () => { const t=run('empty'); t.propose(); assert.equal(t.status,'empty'); assert.equal(t.proposal,null); });
test('verified action remains recorded during a later investigation', () => { const t=run('complete'); t.propose(); t.approve(t.proposal.id); t.finishAction(); t.start('Explain my balance'); for(let i=0;i<3;i++)t.advance(); assert.equal(t.status,'complete'); assert.equal(t.writes,1); assert.ok(t.receipt); });

test('a separate payment task requires approval before a successful write', () => { const t=run('payment'); assert.equal(t.status,'approval'); assert.equal(t.writes,0); t.approve(t.proposal.id); t.finishAction(); assert.equal(t.status,'success'); assert.equal(t.writes,1); });

test('discrepancy chooses a transfer lookup and excludes pending money', () => {
  const t=run('adaptive'); assert.equal(t.status,'discrepancy'); assert.equal(t.pendingVerified,false);
  t.investigateTransfer(); t.advance(); assert.equal(t.status,'running'); t.advance();
  assert.equal(t.status,'complete'); assert.equal(t.pendingVerified,true); assert.equal(t.writes,0);
  t.respond('Where is the missing £50?'); t.respond('Does it change my return?');
  assert.match(t.messages[0].answer,/TX-0930-P/); assert.match(t.messages[1].answer,/not an investment return/);
});
test('unavailable transfer source stops without claiming money is pending', () => {
  const t=run('adaptive'); t.pendingAvailable=false; t.investigateTransfer(); t.advance(); t.advance();
  assert.equal(t.status,'unresolved'); assert.equal(t.pendingVerified,false); const n=t.log.length; t.advance(); assert.equal(t.log.length,n);
  t.respond('Where is the missing £50?'); assert.match(t.messages[0].answer,/not been resolved/);
});
test('follow-up reference switches between fees and pending transfer', () => {
  const t=run('adaptive'); t.investigateTransfer(); t.advance(); t.advance();
  t.respond('Explain my fees'); assert.equal(t.suggestions[0],'Why was it charged?'); t.respond(t.suggestions[0]);
  assert.match(t.messages[1].answer,/pricing basis/); t.respond('Where is the missing £50?'); assert.equal(t.reference,'pending');
});
test('follow-ups preserve the original task and cannot perform account actions', () => {
  const t=run('complete'); for(let i=0;i<3;i++) t.respond('Which stock should I buy?');
  assert.equal(t.messages.length,3); assert.equal(t.status,'complete'); assert.equal(t.question,'test'); assert.equal(t.writes,0);
});
test('review invitations require consent and respect snoozing', () => {
  const r=new ReviewOffer(); r.advanceDay(); assert.equal(r.state,'off'); r.setEnabled(true); assert.equal(r.state,'armed');
  r.advanceDay(); assert.equal(r.state,'available'); r.snooze(); assert.equal(r.state,'snoozed'); r.advanceDay(); assert.equal(r.state,'available');
});
test('a dismissed review stays dismissed after days and preference toggles', () => {
  const r=new ReviewOffer(); r.setEnabled(true); r.advanceDay(); r.dismiss(); r.advanceDay(); assert.equal(r.state,'dismissed');
  r.setEnabled(false); r.advanceDay(); assert.equal(r.state,'off'); r.setEnabled(true); r.advanceDay(); assert.equal(r.state,'dismissed');
});
test('opened reviews do not repeatedly reappear', () => { const r=new ReviewOffer(); r.setEnabled(true); r.advanceDay(); r.open(); r.advanceDay(); assert.equal(r.state,'opened'); });

test('expressed concern is acknowledged without promising recovery', () => { const t=run('complete'); t.respond('I am worried about my balance'); assert.match(t.messages[0].answer,/can be worrying/); assert.match(t.messages[0].answer,/£40/); assert.doesNotMatch(t.messages[0].answer,/will recover/); });

 test('unsupported demo wording stays outside the customer conversation', () => {
  const t=run('complete');
  t.respond('Tell me a joke');
  assert.equal(t.messages.length,0);
  assert.match(t.error,/demo does not cover/);
  assert.equal(t.status,'complete');
  t.respond('Explain my fees');
  assert.equal(t.error,'');
  assert.equal(t.messages.length,1);
  assert.match(t.messages[0].answer,/£5/);
});
