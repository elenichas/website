<template>
  <div class="pulse-lab">
    <div class="scenario-panel">
      <p class="lab-label">Interactive prototype</p>
      <h3>One agent.{{ ' ' }}<span>Different realities.</span></h3>
      <p>Choose a situation, then follow Pulse through it. Every scenario uses fictional data and simulated services.</p>
      <div class="scenario-list" aria-label="Prototype scenarios">
        <template v-for="(item, index) in scenarios" :key="item.id">
          <button :aria-pressed="selected === item.id" @click="select(item.id)">
            <span class="scenario-num">{{ String(index + 1).padStart(2, '0') }}</span><span>{{ item.label }}<small>{{ item.kind }}</small></span><ArrowUpRight :size="16" />
          </button>
          <template v-if="item.id === 'adaptive'"><fieldset v-if="selected === 'adaptive'" class="fixture-controls fixture-desktop" :disabled="task.status !== 'idle'"><legend>Scenario 01 · Choose an outcome</legend><small>For “Investigate a discrepancy” only. Choose what Pulse finds before starting.</small><label><input type="radio" :value="true" v-model="task.pendingAvailable" /> Transfer found</label><label><input type="radio" :value="false" v-model="task.pendingAvailable" /> Transfer cannot be checked</label><small>{{ task.status === 'idle' ? 'Then start the investigation in the phone.' : 'Use Reset above the phone to try the other outcome.' }}</small></fieldset></template>
          <template v-if="item.id === 'proactive'"><div v-if="selected === 'proactive'" class="fixture-controls fixture-desktop"><strong>Scenario 02 · Advance the demo</strong><p>Enable monthly reviews in the phone, then move forward a day to see what happens.</p><button class="demo-day-button" @click="offer.advanceDay()">Simulate next day · Day {{ offer.day }}</button></div></template>
        </template>
      </div>
      <fieldset v-if="selected === 'adaptive'" class="fixture-controls fixture-mobile" :disabled="task.status !== 'idle'"><legend>Scenario 01 · Choose an outcome</legend><small>For “Investigate a discrepancy” only. Choose what Pulse finds before starting.</small><label><input type="radio" :value="true" v-model="task.pendingAvailable" /> Transfer found</label><label><input type="radio" :value="false" v-model="task.pendingAvailable" /> Transfer cannot be checked</label><small>{{ task.status === 'idle' ? 'Then start the investigation in the phone.' : 'Use Reset above the phone to try the other outcome.' }}</small></fieldset>
      <div v-if="selected === 'proactive'" class="fixture-controls fixture-mobile"><strong>Scenario 02 · Advance the demo</strong><p>Enable monthly reviews in the phone, then move forward a day to see what happens.</p><button class="demo-day-button" @click="offer.advanceDay()">Simulate next day · Day {{ offer.day }}</button></div>
      <p class="scenario-principle"><ShieldCheck :size="20" />{{ scenario.principle }}</p>
    </div>

    <div class="app-stage">
      <div class="prototype-topline"><span class="active-scenario-label">Scenario {{ String(scenarios.findIndex(item => item.id === selected) + 1).padStart(2, '0') }} · {{ scenario.label }}</span><button @click="select(selected)"><RotateCcw :size="14" /> Reset</button></div>
      <div class="pulse-app" aria-label="Plum Pulse phone prototype">
        <div class="phone-display">
          <div class="phone-status-bar" aria-hidden="true"><span>9:41</span><span class="phone-camera"></span><span class="phone-status-icons"><Signal :size="14" /><Wifi :size="14" /><BatteryFull :size="18" /></span></div>
        <header class="app-header"><span class="pulse-mark"><Activity :size="23" /></span><div><strong>Pulse</strong><span>Your account, explained.</span></div><span class="demo-badge">Demo</span></header>
        <nav class="app-tabs" aria-label="Prototype views"><button v-for="item in ['Review','Agent','Activity']" :key="item" :aria-pressed="view === item" @click="view = item">{{ item }}</button></nav>
        <div ref="appViewport" class="app-content" tabindex="0" :aria-label="`${view} screen, scroll for more`">
          <template v-if="view === 'Review'">
            <section v-if="selected === 'proactive'" class="proactive-panel" aria-label="Monthly review invitation">
              <span class="mini-label">Monthly review · Simulated day {{ offer.day }}</span>
              <template v-if="!offer.enabled"><h4>Would a monthly check-in help?</h4><p>Offer a review after month-end records arrive. No market alerts or investment recommendations.</p><button class="primary" @click="offer.setEnabled(true)">Enable monthly reviews</button></template>
              <template v-else-if="offer.state === 'available'"><h4>Your September review is ready.</h4><p>See what changed, without deciding anything today.</p><details><summary>Why am I seeing this?</summary><p>You opted in. September records are now available, and this review has not been opened or dismissed. A balance drop did not trigger it.</p></details><button class="primary" @click="openReviewOffer">Open my review</button><div class="offer-actions"><button class="secondary" @click="offer.snooze()">Tomorrow</button><button class="secondary" @click="offer.dismiss()">Dismiss this review</button></div></template>
              <template v-else><h4>{{ offer.state === 'armed' ? 'Monthly reviews are enabled.' : offer.state === 'snoozed' ? 'We’ll offer it tomorrow.' : offer.state === 'dismissed' ? 'September review dismissed.' : 'September review opened.' }}</h4><p>{{ offer.state === 'dismissed' ? 'This month’s invitation will not appear again, even if you advance the day.' : offer.state === 'snoozed' ? 'The invitation stays hidden until the next simulated day.' : 'You can still open a review manually whenever you choose.' }}</p></template>
              <button v-if="offer.enabled" class="pulse-text-button" @click="offer.setEnabled(false)">Turn off monthly reviews</button><small>No real notifications, scheduling or stored preferences.</small>
            </section>
            <div class="account-heading"><span>Investment account</span><span>September 2026</span></div>
            <h4 class="balance">{{ selected === 'empty' ? '£0.00' : selected === 'missing' ? 'Unavailable' : money(account.closing) }}</h4>
            <p v-if="selected === 'failure'" class="muted">Saved account snapshot · Live records unavailable</p><p class="balance-sub">{{ selected === 'empty' ? 'No activity yet' : selected === 'missing' ? 'Latest valuation missing · Change not verified' : '−£40.00 change this month' }}</p>
            <div v-if="selected !== 'empty'" class="waterfall" :aria-label="selected === 'missing' ? 'Available records: £100 added, £5 fees; market movement unavailable' : '£100 added, £135 market decrease, £5 fees: net decrease £40'">
              <div v-for="row in visibleBreakdown" :key="row.label"><span>{{ row.label }}</span><div class="bar-space"><i :class="{ positive: row.amount > 0 }" :style="{ width: `${Math.abs(row.amount)/135}%` }"></i></div><b>{{ row.amount > 0 ? '+' : '−' }}{{ money(Math.abs(row.amount)) }}</b></div>
            </div>
            <div class="review-invitation"><span class="mini-label">Your monthly review</span><h4>{{ selected === 'empty' ? 'Your story starts here.' : 'A little context for the numbers.' }}</h4><p>{{ selected === 'empty' ? 'There are no holdings or transactions in this account yet.' : selected === 'missing' ? 'Review the available contributions and fees. The full change cannot be verified without the latest valuation.' : 'See how money added, market movement and fees shaped your September balance.' }}</p><button class="primary" @click="reviewMonth">Explain this month <ArrowRight :size="16" /></button></div>
            <div v-if="selected !== 'empty'" class="schedule-line"><CalendarDays :size="20" /><div><strong>{{ task.receipt ? 'Next payment · 8 Nov' : 'Next payment · 8 Oct' }}</strong><span>£75 from Primary Pocket</span></div></div>
          </template>

          <template v-else-if="view === 'Agent'">
            <div class="context-line"><span>Investment account</span><span>Sep 2026</span><LockKeyhole :size="13" /></div>
            <p v-if="task.question" class="user-request">{{ task.question }}</p>
            <div class="agent-status" role="status" aria-live="polite"><span :class="['status-dot', { busy: busy }]" ></span>{{ statusLabel }}</div>
            <div v-if="task.status === 'idle'" class="agent-start"><h4>{{ scenario.question }}</h4><p>{{ scenario.description }}</p><button class="primary" @click="begin">{{ ['connection','payment'].includes(selected) ? 'Review this request' : 'Start scenario' }} <ArrowRight :size="16" /></button><small>Uses the selected account and period. Nothing changes without your approval.</small></div>
            <div v-else-if="task.status === 'running'" class="working"><h4>{{ selected === 'adaptive' && task.step >= 3 ? 'Checking the transfer status' : task.step < 2 ? 'Checking the account record' : 'Reconciling the change' }}</h4><p>{{ task.step < 2 ? 'Looking for the records needed to answer your question.' : 'Separating money added, market movement and fees.' }}</p><div class="work-track"><i :style="{width: `${Math.min(90, 25 + task.step * 18)}%`}"></i></div><button class="pulse-text-button" @click="cancel">Cancel investigation</button></div>
            <div v-else-if="task.status === 'discrepancy'" class="result"><h4>There’s a £50 difference to investigate.</h4><p>You reported sending £150. The activity record shows £100 completed. That does not establish where the remaining £50 is.</p><div class="notice"><Info :size="18" /><span>Next check: the transfer status. Market movement cannot explain whether a transfer completed.</span></div><button class="primary" @click="investigateTransfer">Inspect the transfer record</button><button class="pulse-text-button" @click="cancel">Stop investigation</button></div>
            <div v-else-if="task.status === 'unresolved'" class="result"><h4>The £50 difference is still unresolved.</h4><p>The transfer-status service is unavailable. I can verify £100 completed, but cannot say whether the other £50 is pending or failed.</p><p class="notice">Stopped after one targeted lookup. No repeated calls and no invented completion date.</p><button class="secondary" @click="sendSuggestion('What can I do next?')">What is still unknown?</button></div>
            <div v-else-if="task.status === 'complete'" class="result"><h4>{{ task.pendingVerified ? '£50 is still pending.' : 'Your balance fell by £40.' }}</h4><p v-if="task.pendingVerified">Transfer <strong>TX-0930-P</strong> confirms £50 pending. Of the £150 you reported sending, only £100 is included in September’s investment balance. No completion date is confirmed.</p><p v-if="/worried|worry|scared|upset|anxious/i.test(task.question)" class="muted">Seeing a lower balance can be worrying. Here is what the records show.</p><p>You added <strong>£100</strong>. Market movement reduced the value by <strong>£135</strong>, and recorded fees were <strong>£5</strong>.</p><p class="muted">{{ task.pendingVerified ? 'Your balance still fell by £40. A pending transfer is not an investment return.' : 'Adding money and investment performance affect your balance separately.' }}</p><EvidenceBlock /><button class="secondary" @click="view = 'Activity'">Open source activity <ArrowUpRight :size="15" /></button><p class="task-complete-note">Review complete. No account change is needed to finish this task.</p></div>
            <div v-else-if="task.status === 'partial'" class="result"><h4>I can explain part of the activity.</h4><p>You added <strong>£100</strong> and paid <strong>£5</strong> in recorded fees. The latest valuation is unavailable, so I can’t verify the full balance change.</p><div class="notice"><Info :size="18" /><span>Valuation last available: 29 Sep, 18:00. A missing record is not a zero return.</span></div><button class="secondary" @click="view = 'Activity'">Inspect available records</button><p class="muted">No account changes made. Try a fresh review when the valuation is available.</p></div>
            <div v-else-if="task.status === 'clarify'" class="result"><h4>Which payment do you mean?</h4><p>I won’t choose an automation for you.</p><button class="choice" @click="task.propose()"><CalendarDays :size="20" /><span><strong>£75 investment · 8 October</strong><small>Primary Pocket → Global Tech</small></span><ArrowRight :size="16" /></button><button class="pulse-text-button" @click="cancel">Cancel request</button></div>
            <div v-else-if="task.status === 'approval'" class="result approval"><span class="mini-label">Your approval is needed</span><h4>Skip one payment?</h4><dl><div><dt>Amount</dt><dd>£75.00</dd></div><div><dt>Payment date</dt><dd>8 October 2026</dd></div><div><dt>From / to</dt><dd>Primary Pocket / Global Tech</dd></div><div><dt>Resumes</dt><dd>£75 on 8 November</dd></div></dl><p>Only this payment will be skipped. Your existing investments stay in place. Future monthly payments continue.</p><button class="primary" @click="approve">Confirm skip of £75 on 8 Oct</button><button class="secondary" @click="cancel">Keep payment unchanged</button></div>
            <div v-else-if="task.status === 'executing' || task.status === 'checking'" class="working"><h4>{{ task.status === 'checking' ? 'Checking the existing action' : 'Applying your approved change' }}</h4><p>{{ task.status === 'checking' ? 'Looking up the original action ID. No duplicate request is being sent.' : 'Waiting for confirmation from the automation service. Leaving this view does not cancel a submitted action.' }}</p></div>
            <div v-else-if="task.status === 'unknown'" class="result"><h4>The connection was interrupted.</h4><p>Your request was sent, but I haven’t received a receipt. The payment may already have been skipped.</p><div class="notice"><Info :size="18" /><span>Don’t submit it again. Check the existing request first.</span></div><button class="primary" @click="checkStatus">Check payment status <RefreshCw :size="16" /></button><small>Request SKIP-20261008 · Awaiting verification</small></div>
            <div v-else-if="task.status === 'success'" class="result"><span class="success-icon"><Check :size="25" /></span><h4>Your 8 October payment is skipped.</h4><p>The automation service confirmed the change. Your <strong>£75 monthly payment resumes on 8 November</strong>.</p><div class="receipt"><span>Confirmed receipt</span><strong>{{ task.receipt.id }}</strong><small>One payment changed · No money moved</small></div><button class="secondary" @click="view = 'Activity'">View change in activity <ArrowRight :size="15" /></button></div>
            <div v-else-if="task.status === 'failed'" class="result"><h4>I couldn’t reach your account records.</h4><p>The account service is unavailable. I haven’t retrieved enough information to answer, and nothing has changed.</p><button class="primary" @click="retry">Retry account check <RefreshCw :size="16" /></button><p class="muted">Your original question is saved for this task. In this scenario, the service recovers on retry.</p></div>
            <div v-else-if="task.status === 'blocked'" class="result"><h4>I can explain your account, but can’t choose investments for you.</h4><p>{{ task.boundaryCount > 1 ? 'That boundary still applies. I can help you understand your recorded activity instead.' : 'It can be unsettling to see a loss. I can break down the recorded change without recommending a trade or promising recovery.' }}</p><button class="secondary" @click="task.block()">“Just tell me which stock to buy.”</button><button class="pulse-text-button" @click="select('complete'); begin()">Explain the balance change instead <ArrowRight :size="14" /></button><small>No trading action is available to Pulse.</small></div>
            <div v-else-if="task.status === 'empty'" class="result"><h4>There’s no investment activity to explain yet.</h4><p>This account has no holdings or recorded transactions for September. There is no performance calculation to show.</p><button class="secondary" @click="view = 'Activity'">View the empty activity record</button></div>
            <div v-else-if="task.status === 'cancelled'" class="result"><h4>Cancelled. Nothing changed.</h4><p>{{ task.question.includes('skip') ? 'Your payment remains scheduled. You can review a new proposal whenever you choose.' : 'The investigation stopped. Your account is unchanged.' }}</p><button class="secondary" @click="begin">Start again</button></div>
            <div v-else-if="task.status === 'unsupported'" class="result"><h4>This simulation doesn’t cover that request.</h4><p>Try an account explanation, a fee question, or a request to skip the next payment. I won’t substitute an unrelated answer.</p></div>
            <section v-if="task.messages.length" class="conversation" aria-label="Follow-up conversation" aria-live="polite"><article v-for="(message,index) in task.messages" :key="index"><p class="user-request">{{ message.question }}</p><span class="mini-label">Pulse · Same account and period</span><p>{{ message.answer }}</p></article></section>
            <section v-if="['complete','partial','unresolved','success'].includes(task.status)" class="resolution-feedback"><span class="mini-label">Did this resolve your question?</span><template v-if="!task.feedback"><button class="secondary" @click="task.feedback='resolved'">Yes, I understand</button><button class="pulse-text-button" @click="task.feedback='record'">A record looks wrong</button></template><p v-else role="status">{{ task.feedback === 'resolved' ? 'Marked as resolved in this demo session. This feedback does not train a model or change your account.' : 'Marked as unresolved in this demo session. You can inspect the source in Activity. No account record has been changed.' }}</p></section>
            <form v-if="!busy && !['approval','clarify','unknown','discrepancy'].includes(task.status)" class="question-form" @submit.prevent="submitQuestion"><label for="pulse-question">Ask a follow-up <span>Scripted demo</span></label><div class="suggested-questions" aria-label="Supported follow-ups"><button v-for="suggestion in task.suggestions" :key="suggestion" type="button" @click="sendSuggestion(suggestion)">{{ suggestion }}</button></div><div><input id="pulse-question" v-model="input" @focus="prefillFollowup" maxlength="300" :placeholder="task.suggestions[0]" /><button aria-label="Send follow-up" :disabled="!input.trim()"><ArrowUp :size="19" /></button></div></form>
          </template>

          <template v-else>
            <h4 class="activity-title">Account activity</h4><p class="muted">{{ selected === 'empty' ? 'New account · September 2026' : 'September 2026 · Fictional source records' }}</p>
            <p v-if="selected === 'empty'" class="empty-record">No transactions or holdings recorded.</p>
            <div v-else>
              <div v-if="task.pendingVerified" class="activity-row"><Info :size="19" /><div><strong>£50 transfer · Pending</strong><p>TX-0930-P · 30 Sep</p><small>Excluded from investment balance. Completion date not confirmed.</small></div></div><div v-if="task.receipt" class="activity-row"><Check :size="19" /><div><strong>Payment skipped</strong><p>8 Oct · £75 · {{ task.receipt.id }}</p><small>Next payment: 8 Nov · User approved</small></div></div>
              <details v-for="row in visibleBreakdown" :key="row.label" class="activity-record"><summary><span>{{ row.label }}<small>{{ row.source }}</small></span><strong>{{ row.amount > 0 ? '+' : '−' }}{{ money(Math.abs(row.amount)) }}</strong></summary><p>{{ row.detail }}</p></details>
              <p v-if="selected === 'missing'" class="notice">Latest valuation unavailable. Market movement omitted.</p>
            </div>
            <button class="secondary" @click="view = 'Agent'">Return to the task</button>
          </template>
        </div>
        <footer class="app-footer"><ShieldCheck :size="13" /> Fictional data. No real account is connected.</footer>
          <div class="phone-home-area" aria-hidden="true"><span></span></div>
        </div>
      </div>
    </div>


  </div>
</template>

<script setup>
import { computed, defineComponent, h, onBeforeUnmount, reactive, ref, watch, nextTick } from 'vue';
import { Activity, ArrowUpRight, ArrowRight, ArrowUp, RotateCcw, ShieldCheck, LockKeyhole, Info, CalendarDays, Check, RefreshCw, Signal, Wifi, BatteryFull } from 'lucide-vue-next';
import { PulseTask, ReviewOffer, account, breakdown, money, scenarios } from '@/data/pulseAgent.mjs';
const selected = ref('adaptive');
const view = ref('Agent');
const appViewport = ref(null);
const task = reactive(new PulseTask());
task.reset(selected.value);
const input = ref(''); const offer = reactive(new ReviewOffer());
const scenario = computed(() => scenarios.find(s => s.id === selected.value));
const busy = computed(() => ['running','executing','checking'].includes(task.status));
const visibleBreakdown = computed(() => selected.value === 'missing' ? breakdown.filter(r => r.label !== 'Market movement') : breakdown);
const statusLabel = computed(() => ({ idle:'Ready when you are',running:'Investigation in progress',complete:'Explanation verified',partial:'Partial answer · Missing valuation',clarify:'Waiting for clarification',approval:'Waiting for your approval',executing:'Change submitted',unknown:'Outcome not yet verified',checking:'Checking existing request',success:'Change confirmed',failed:'Account service unavailable',blocked:'Outside Pulse’s scope',empty:'No activity found',cancelled:'Task cancelled',discrepancy:'New evidence needed',unresolved:'Stopped · Transfer status unavailable',unsupported:'Unsupported demo request' }[task.status]));
let timer;
function stopTimer() { clearTimeout(timer); }
function select(id) { stopTimer(); selected.value=id; task.reset(id); view.value=id === 'proactive' ? 'Review' : 'Agent'; input.value=''; }
function tick() { stopTimer(); timer=setTimeout(() => { task.advance(); if(task.status==='running')tick(); }, 650); }
function reviewMonth() { task.start('Explain my September account activity.'); view.value='Agent'; if(task.status==='running')tick(); }
function begin() { task.start(scenario.value.question); view.value='Agent'; if(task.status==='running')tick(); }
function cancel() { stopTimer(); task.cancel(); }
function approve() { if(!task.approve(task.proposal.id))return; timer=setTimeout(() => task.finishAction(),900); }
function checkStatus() { task.checkStatus(); timer=setTimeout(() => task.confirmReceipt(),800); }
function retry() { task.retry(); tick(); }
function openReviewOffer() { offer.open(); reviewMonth(); }
function investigateTransfer() { task.investigateTransfer(); tick(); }
function prefillFollowup() {
  if (!input.value.trim()) input.value = task.suggestions[0];
}
async function sendSuggestion(question) {
  input.value = question;
  await submitQuestion();
}
async function submitQuestion() {
  const q = input.value.trim(); if (!q) return; input.value = '';
  if (/skip|pause/i.test(q) && !/buy|sell|stock|ignore/i.test(q)) {
    const answer = selected.value === 'empty' ? 'This account has no scheduled investment to skip.' : task.receipt ? 'The 8 October payment is already skipped. No duplicate change was created.' : 'Which payment do you mean? Select the exact payment below before reviewing its consequences.';
    task.messages.push({ question:q, answer });
    if (selected.value !== 'empty' && !task.receipt) { task.status='clarify'; task.record('User requested a separate action. Clarification required before approval.'); }
  } else { task.respond(q); }
  await nextTick();
  const conversation = appViewport.value?.querySelector('.conversation');
  if (conversation) appViewport.value.scrollTop = conversation.offsetTop - appViewport.value.offsetTop;
}
const EvidenceBlock=defineComponent({ setup:()=>()=>h('details',{class:'evidence'},[
  h('summary','View evidence & calculation'),h('p',{class:'evidence-meta'},`Investment account · ${account.period}\nUpdated ${account.updated}`),
  h('dl',breakdown.map(row=>h('div',[h('dt',row.label),h('dd',`${row.amount>0?'+':'−'}${money(Math.abs(row.amount))}`)]))),
  h('p',{class:'equation'},'£4,447.82 + £100 − £135 − £5 = £4,407.82'),h('small','Opening and closing valuations: VAL-0831 / VAL-0930. Deposits are not investment returns. Figures describe past activity, not future performance.')
]) });
watch([view, selected, () => task.status], async () => {
  await nextTick();
  if (appViewport.value) appViewport.value.scrollTop = 0;
});
onBeforeUnmount(stopTimer);
</script>

<style scoped>
.pulse-lab :is(h3,h4){color:inherit}.pulse-lab button{text-transform:none;letter-spacing:normal}.pulse-lab>*{min-width:0}.pulse-lab{display:grid;grid-template-columns:minmax(250px, .85fr) minmax(360px,1.15fr);gap:48px;color:var(--color-text);align-items:start}.scenario-panel{padding-top:28px}.lab-label{font-size:.75rem;font-weight:650;letter-spacing:.06em;text-transform:uppercase}.scenario-panel h3>span{display:block}.scenario-panel h3{font-size:2.6rem;line-height:1.12;letter-spacing:-.035em;margin:20px 0}.scenario-panel>p:not(.lab-label){font-size:1rem;line-height:1.65;max-width:40ch;color:var(--color-text-secondary)}.scenario-list{margin-top:30px}.scenario-list button{display:flex;gap:15px;align-items:center;width:100%;padding:15px 12px;text-align:left;border:0;border-bottom:1px solid var(--color-border);background:transparent;color:inherit;cursor:pointer;border-radius:6px;font:600 .9rem/1.4 var(--font-sans)}.scenario-list button[aria-pressed=true]{background:var(--pulse-wash, #f5f5f5);color:var(--color-text-secondary)}.scenario-list button:hover{background:var(--pulse-wash, #f5f5f5)}.scenario-list button>span:nth-child(2){flex:1}.scenario-num{font-size:.75rem;color:var(--color-text-secondary);font-variant-numeric:tabular-nums}.scenario-list small{display:block;font-size:.75rem;color:var(--color-text-secondary);font-weight:400;margin-top:3px}.scenario-principle{display:flex;gap:12px;margin-top:25px!important;font-size:.875rem!important}.scenario-principle svg{flex-shrink:0;margin-top:3px;color:var(--color-text-secondary)}.prototype-topline{display:flex;align-items:center;justify-content:space-between;margin:0 5px 13px;font-size:.75rem;color:var(--color-text-secondary)}.prototype-topline>span{display:flex;align-items:center;gap:7px}.prototype-topline i{width:6px;height:6px;background:var(--pulse-wash, #f5f5f5);border-radius:50%}.prototype-topline button{display:flex;align-items:center;gap:6px;border:0;background:none;min-height:44px;color:inherit;cursor:pointer}.pulse-app{background:#fff;border:1px solid #cfbedc;border-radius:16px;overflow:hidden;min-width:0}.app-header{display:flex;gap:12px;align-items:center;padding:24px 24px 20px}.pulse-mark{display:grid;place-items:center;width:42px;height:42px;border-radius:12px;background:#7c26c9;color:white}.app-header strong{font-size:1.3rem;letter-spacing:-.02em}.app-header div>span{display:block;font-size:.75rem;color:#6c5a79;margin-top:2px}.demo-badge{margin-left:auto;font-size:.7rem;color:#65427f;background:#f2eaf9;padding:5px 8px;border-radius:4px}.app-tabs{display:flex;border-bottom:1px solid #e7dfec;padding:0 24px;gap:22px}.app-tabs button{border:0;border-bottom:2px solid transparent;background:none;min-height:44px;font:600 .8rem var(--font-sans);color:#716079;cursor:pointer}.app-tabs button[aria-pressed=true]{border-color:#7927b5;color:#692099}.app-content{padding:24px;min-height:470px}.context-line{display:flex;align-items:center;gap:8px;font-size:.65rem;color:#665570;margin-bottom:24px}.context-line span+span{border-left:1px solid #cbbfd2;padding-left:8px}.context-line svg{margin-left:auto}.user-request{padding:14px 16px;background:#f2ebf8;border-radius:12px 12px 3px 12px;font-size:.875rem;line-height:1.55;margin:0 0 24px 22px;color:#542477}.agent-status{display:flex;gap:7px;align-items:center;font-size:.7rem;font-weight:600;color:#665271;margin-bottom:14px}.status-dot{width:6px;height:6px;border-radius:50%;background:#805698}.status-dot.busy{animation:pulse-status 1s ease-in-out infinite}.agent-start h4,.result h4,.working h4{font-size:1.4rem;line-height:1.3;letter-spacing:-.025em;margin:0 0 12px;font-weight:600}.app-content p{font-size:.875rem;line-height:1.65;margin-bottom:16px}.app-content small{display:block;font-size:.7rem;line-height:1.6;color:#6c5c76}.agent-start>small{margin-top:15px}.primary,.secondary{display:flex;align-items:center;justify-content:center;gap:8px;min-height:44px;padding:11px 15px;border-radius:7px;font:600 .8rem/1.4 var(--font-sans);cursor:pointer;width:100%;margin-top:12px}.primary{background:#7521b8;border:1px solid #7521b8;color:#fff}.primary:hover{background:#5e158f}.secondary{background:#fff;border:1px solid #cdbdd8;color:#5e2b80}.secondary:hover{background:#f7f1fb}.pulse-text-button{display:flex;gap:6px;align-items:center;min-height:44px;border:0;background:none;padding:8px 0;color:#692494;font:600 .78rem/1.5 var(--font-sans);text-align:left;cursor:pointer}.muted{color:#75647f}.work-track{height:3px;background:#eee4f6;margin:28px 0 15px}.work-track i{display:block;height:100%;background:#8b36c9;transition:width .3s}.task-complete-note{margin-top:20px;font-size:.75rem!important;color:#72627d}.notice{display:flex;align-items:flex-start;gap:10px;background:#f8f1e2;color:#715622;padding:14px;font-size:.8rem;line-height:1.6;margin:18px 0;border-radius:7px}.notice svg{flex-shrink:0;margin-top:3px}.choice{display:flex;align-items:center;gap:12px;width:100%;border:1px solid #cab5d9;background:#fff;border-radius:8px;padding:16px;text-align:left;cursor:pointer;color:#542276}.choice span{flex:1}.choice strong{font-size:.8rem}.mini-label{display:block;font-size:.7rem;color:#73349c;margin-bottom:12px;font-weight:600}.approval dl,.session-settings dl{margin:22px 0}.approval dl>div,.session-settings dl>div{display:flex;justify-content:space-between;gap:15px;margin:10px 0;font-size:.8rem}.approval dt,.session-settings dt{color:var(--color-text-secondary)}.approval dd,.session-settings dd{text-align:right;font-weight:550}.success-icon{display:grid;place-items:center;width:42px;height:42px;background:#e1f3ed;color:#167257;border-radius:50%;margin:10px 0 18px}.receipt{padding:18px 0;border-block:1px solid #dfebe6;margin:20px 0}.receipt>span{display:block;color:#41715f;font-size:.7rem;margin-bottom:7px}.receipt strong{font-size:.9rem}.question-form{margin-top:28px;padding-top:18px;border-top:1px solid #ece3f0}.question-form label{display:flex;justify-content:space-between;font-size:.7rem;margin-bottom:8px;font-weight:600}.question-form label span{color:#796384;font-weight:400}.question-form>div{display:flex;border:1px solid #c5b4d0;border-radius:8px;padding:4px}.question-form input{font:400 .8rem var(--font-sans);min-width:0;flex:1;padding:8px;background:transparent;color:#31213c;border:0}.question-form button{display:grid;place-items:center;min-width:40px;min-height:40px;background:#7521b8;color:white;border:0;border-radius:5px;cursor:pointer}.question-form button:disabled{background:#e4d9eb;color:#826d90;cursor:default}.question-form>p{margin-top:15px}.app-footer{display:flex;align-items:center;justify-content:center;gap:6px;padding:14px 12px;background:#f9f6fb;border-top:1px solid #eee5f2;color:#6b5976;font-size:.65rem}.account-heading{display:flex;justify-content:space-between;font-size:.7rem;color:#74627e}.balance{font-size:2.6rem;letter-spacing:-.04em;margin-top:15px}.balance-sub{color:#695778}.waterfall{margin:30px 0}.waterfall>div{display:grid;grid-template-columns:110px 1fr 68px;gap:12px;align-items:center;margin:13px 0;font-size:.7rem}.waterfall b{text-align:right;font-variant-numeric:tabular-nums}.bar-space{height:9px}.bar-space i{display:block;height:100%;background:#9870b6;border-radius:2px}.bar-space .positive{background:#2a8975}.review-invitation{background:#f4edf9;padding:20px;border-radius:8px}.review-invitation h4{font-size:1.1rem;margin-bottom:10px}.schedule-line{display:flex;gap:12px;align-items:center;padding-top:22px}.schedule-line strong,.schedule-line span{display:block;font-size:.75rem}.schedule-line span{color:#796681;margin-top:5px}.activity-title{font-size:1.3rem;margin-bottom:8px}.activity-record{border-bottom:1px solid #ece3f1}.activity-record summary{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:20px 0;font-size:.8rem;cursor:pointer}.activity-record summary small{margin-top:4px}.activity-record p{padding:0 0 15px;color:#6b5779}.activity-row{display:flex;gap:12px;padding:18px 0;color:#22715b;border-bottom:1px solid #dfebe5}.activity-row strong{font-size:.85rem}.activity-row p{margin:5px 0;font-size:.7rem}.empty-record{padding:40px 0;color:#6b5779}.task-inspector{grid-column:1/-1;border-top:1px solid var(--color-border);padding-top:24px}.inspector-heading{display:flex;align-items:center;justify-content:space-between;gap:12px}.read-badge{font-size:.7rem;padding:5px 8px;border:1px solid var(--color-border);border-radius:4px;color:var(--color-text-secondary)}.inspector-grid{display:grid;grid-template-columns:1.25fr 1fr;gap:55px;margin-top:28px}.inspector-grid h4{font-size:.95rem;margin-bottom:16px}.inspector-empty{font-size:.875rem;color:var(--color-text-secondary);max-width:40ch;line-height:1.6}.task-log{list-style:none;padding:0;display:grid;gap:13px}.task-log li{display:flex;gap:12px;font-size:.8rem;line-height:1.6;color:var(--color-text-secondary)}.task-log li>span{flex:0 0 20px;color:var(--color-text-secondary);font-variant-numeric:tabular-nums}.session-settings label{display:flex;align-items:center;gap:9px;font-size:.8rem;min-height:44px;cursor:pointer}.session-settings input{width:17px;height:17px;accent-color:#7521b8}.session-settings p{font-size:.75rem;line-height:1.65;color:var(--color-text-secondary)}.session-settings dl{margin-top:0}.inspector-note{margin-top:16px;border-top:1px solid var(--color-border);padding-top:16px}:deep(.evidence){border-block:1px solid #e4d9eb;margin:20px 0}:deep(.evidence summary){padding:16px 0;color:#692494;font-size:.8rem;font-weight:600;cursor:pointer}:deep(.evidence dl>div){display:flex;justify-content:space-between;font-size:.8rem;margin-bottom:9px}:deep(.evidence-meta){white-space:pre-line;color:#735d82;font-size:.7rem!important}:deep(.equation){font-size:.75rem!important;font-weight:600}:deep(.evidence small){padding-bottom:15px}.pulse-lab button:focus-visible,.pulse-lab input:focus-visible,.pulse-lab summary:focus-visible{outline:3px solid #9144ca;outline-offset:3px}@keyframes pulse-status{50%{opacity:.3}}@media(prefers-reduced-motion:reduce){.status-dot.busy{animation:none}.work-track i{transition:none}}@media(max-width:800px){.pulse-lab{grid-template-columns:minmax(0,1fr);gap:28px}.scenario-panel{padding:0}.scenario-panel h3>span{display:inline}.scenario-panel h3{font-size:2rem}.scenario-panel>p:not(.lab-label){max-width:60ch}.scenario-list{display:flex;overflow-x:auto;gap:8px;padding-bottom:10px;scroll-snap-type:x mandatory}.scenario-list button{flex:0 0 210px;border:1px solid var(--color-border);scroll-snap-align:start;min-height:76px}.scenario-num{display:none}.scenario-principle{margin-top:12px!important}.app-stage{max-width:520px;width:100%;justify-self:center}.inspector-grid{grid-template-columns:1fr;gap:30px}.app-content{min-height:400px}}@media(max-width:400px){.app-content{padding:20px 16px}.question-form input{font-size:1rem}.app-header{padding:20px 16px}.waterfall>div{grid-template-columns:93px 1fr 63px;gap:8px}.approval dl>div{font-size:.75rem}}

/* A fixed portrait app viewport inside a responsive physical phone frame. */
.app-stage {
  width: 100%;
  max-width: 414px;
  justify-self: center;
}
.pulse-app {
  display: flex;
  width: 100%;
  aspect-ratio: 414 / 874;
  min-width: 0;
  padding: 4px;
  border: 7px solid #25202b;
  border-radius: 46px;
  background: #25202b;
  overflow: hidden;
}
.phone-display {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 0;
  min-height: 0;
  overflow: hidden;
  border-radius: 34px;
  background: #fff;
}
.phone-status-bar {
  position: relative;
  display: flex;
  flex: 0 0 42px;
  align-items: center;
  justify-content: space-between;
  padding: 4px 21px 0;
  color: #251b30;
  font-size: .75rem;
  font-weight: 650;
}
.phone-camera {
  position: absolute;
  left: 50%;
  top: 10px;
  width: 88px;
  height: 24px;
  transform: translateX(-50%);
  border-radius: 20px;
  background: #25202b;
}
.phone-status-icons { display: flex; align-items: center; gap: 4px; }
.app-header { flex: 0 0 auto; padding: 18px 20px 16px; }
.app-tabs { flex: 0 0 auto; padding: 0 20px; }
.app-content {
  flex: 1 1 0;
  min-height: 0;
  padding: 22px 20px;
  overflow-y: auto;
  overflow-x: hidden;
  overscroll-behavior-y: contain;
  scrollbar-width: thin;
  scrollbar-color: #c7b4d4 transparent;
  scroll-padding-block: 14px;
  -webkit-overflow-scrolling: touch;
}
.app-content:focus-visible { outline: 2px solid #9144ca; outline-offset: -3px; }
.app-footer { flex: 0 0 auto; padding: 11px 8px; font-size: .6rem; }
.phone-home-area { display: grid; flex: 0 0 23px; place-items: center; background: #f9f6fb; }
.phone-home-area span { width: 112px; height: 4px; border-radius: 4px; background: #251b30; }
.question-form input { font-size: 1rem; }
@media (max-width: 450px) {
  .pulse-app { border-width: 5px; padding: 3px; border-radius: 38px; }
  .phone-display { border-radius: 30px; }
  .phone-status-bar { padding-inline: 17px; }
  .phone-camera { width: 76px; }
  .app-content { padding: 20px 16px; }
  .app-header { padding: 14px 16px; }
  .app-tabs { padding-inline: 16px; }
}

/* Scenario controls and the task inspector belong to the portfolio, not the app. */
.scenario-list button[aria-pressed=true] { background: #e9e9e9; color: var(--color-text); }
.scenario-list button:hover { background: #efefef; }
.scenario-panel h3, .task-inspector h4 { color: var(--color-text); }
.session-settings .pulse-text-button { color: var(--color-text); }
.session-settings input { accent-color: var(--color-text); }

.fixture-controls { border:1px solid var(--color-border); border-radius:8px; padding:16px; margin-top:20px; }
.fixture-controls legend { font-size:.8rem; padding:0 5px; }
.fixture-controls label { display:flex; gap:9px; align-items:center; min-height:38px; font-size:.8rem; }
.fixture-controls small { display:block; color:var(--color-text-secondary); font-size:.7rem; margin-top:8px; }
.fixture-controls:disabled { opacity:.65; }
.proactive-panel { border-bottom:1px solid #e4d9eb; padding-bottom:24px; margin-bottom:24px; }
.proactive-panel h4 { font-size:1.3rem; line-height:1.3; margin-bottom:12px; }
.proactive-panel details { padding:12px 0; font-size:.8rem; }
.proactive-panel summary { cursor:pointer; color:#692494; min-height:30px; }
.proactive-panel details p { margin-top:12px; }
.offer-actions { display:flex; gap:8px; }
.conversation { padding-top:20px; border-top:1px solid #e4d9eb; margin-top:24px; }
.conversation article { margin-bottom:24px; }
.conversation .user-request { margin-bottom:16px; }
.resolution-feedback { padding-top:20px; border-top:1px solid #e4d9eb; margin-top:24px; }
.resolution-feedback p { color:#6d5a79; font-size:.75rem; }
.question-form .suggested-questions { display:flex; flex-direction:column; gap:7px; border:0; padding:0 0 12px; }
.question-form .suggested-questions button { display:block; background:#f5eff9; color:#652c8c; text-align:left; font:500 .75rem/1.4 var(--font-sans); padding:10px 12px; min-height:44px; }
.interface-state{margin-bottom:24px;font-size:.8rem}.interface-state summary{cursor:pointer;min-height:44px}.interface-state pre{white-space:pre-wrap;overflow-wrap:anywhere;background:#fff;padding:16px;font-size:.7rem;line-height:1.6;border:1px solid var(--color-border);border-radius:8px}.fixture-desktop { margin:8px 0 16px 0; background:var(--color-surface); }
.fixture-controls small { line-height:1.6; }
.fixture-controls small:first-of-type { margin:0 0 10px; }
.fixture-controls input { accent-color:var(--color-text); flex-shrink:0; }
.fixture-mobile { display:none; }
@media(max-width:800px) { .fixture-desktop { display:none; }.fixture-mobile { display:block; margin:12px 0 0; background:var(--color-surface); } }
.fixture-controls>strong { font-size:.8rem; font-weight:600; }
.fixture-controls>p { font-size:.75rem; line-height:1.6; color:var(--color-text-secondary); margin:8px 0; }
.pulse-lab .fixture-controls .demo-day-button { display:flex; justify-content:center; width:100%; min-height:44px; padding:10px; border:1px solid var(--color-border); border-radius:6px; background:var(--color-surface); font:600 .8rem var(--font-sans); color:var(--color-text); cursor:pointer; }
.prototype-topline .active-scenario-label { line-height:1.5; display:block; max-width:75%; }
@media(max-width:800px) { .scenario-num { display:block; }.scenario-list button { flex-basis:240px; } }
</style>
