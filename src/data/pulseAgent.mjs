// Fictional, deterministic service contract for the portfolio simulation.
// Amounts are stored in pence; the model is never responsible for arithmetic.
export const account = Object.freeze({ opening: 444782, closing: 440782, contribution: 10000, market: -13500, fees: -500, updated: '30 Sep 2026, 18:00', period: 'September 2026' });
export const money = pence => new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(pence / 100);
export const breakdown = [
  { label: 'Money added', amount: account.contribution, source: 'TX-0910 · 10 Sep', detail: 'Completed contribution from Primary Pocket.' },
  { label: 'Market movement', amount: account.market, source: 'VAL-0930 · 30 Sep', detail: 'Change in holding values, excluding contributions and fees. Not a realised sale.' },
  { label: 'Fees', amount: account.fees, source: 'FEE-0930 · 30 Sep', detail: 'Recorded fees for this period.' },
];
export const scenarios = [
  { id: 'adaptive', label: 'Investigate a discrepancy', kind: 'Evidence changes the next step', question: 'I sent £150. Why does the review show only £100 added?', description: 'Follow a £50 mismatch into the transfer record. Try both an available and an unavailable source.', principle: 'New evidence changes the investigation, not the permission boundary.' },
  { id: 'proactive', label: 'A timely monthly review', kind: 'Opt in, snooze or dismiss', question: 'Explain my September account activity.', description: 'Choose whether a monthly review may appear, then simulate its arrival.', principle: 'A useful intervention explains its timing and respects a dismissal.' },
  { id: 'complete', label: 'Understand a change', kind: 'Complete records', question: 'I added money, but my balance went down. What happened?', description: 'Follow an investigation from the account record to a reconciled answer.', principle: 'Accuracy is a traceable calculation, not a confident tone.' },
  { id: 'payment', label: 'Skip one payment', kind: 'Specific approval', question: 'Skip my next £75 investment.', description: 'Start a separate task: review the exact consequence, approve it, then receive a verified receipt.', principle: 'A user-requested change needs specific approval and a verified outcome.' },
  { id: 'missing', label: 'A record is missing', kind: 'Partial result', question: 'Why did my balance go down this month?', description: 'The latest valuation is unavailable. Pulse must stop short of a full explanation.', principle: 'Useful partial information should never look like a complete answer.' },
  { id: 'ambiguous', label: 'Clarify the request', kind: 'Needs your input', question: 'Can you skip it?', description: 'There is no selected payment. Pulse asks which automation you mean.', principle: 'A clarification protects the user from an invisible assumption.' },
  { id: 'connection', label: 'Connection lost', kind: 'Unknown action outcome', question: 'Skip my next £75 investment.', description: 'Approval goes through, but the receipt is interrupted. Check status before retrying.', principle: 'A lost connection is not proof that an action failed.' },
  { id: 'failure', label: 'A service fails', kind: 'Recoverable failure', question: 'Explain my September balance change.', description: 'The account service is unavailable. The question is preserved for a safe retry.', principle: 'Name the failure, preserve the intent, and offer a useful recovery.' },
  { id: 'boundary', label: 'Hold a boundary', kind: 'Out of scope', question: 'Which stock should I buy to recover my losses?', description: 'Repeat or rephrase the request. Pulse continues to decline a trade recommendation.', principle: 'Pressure or repetition does not create permission.' },
  { id: 'empty', label: 'No account activity', kind: 'Empty result', question: 'Explain my September investment activity.', description: 'A newly opened fictional account has no investments or activity to explain.', principle: 'An empty record is a valid outcome, not a reason to invent an insight.' },
];
export class PulseTask {
  constructor() { this.reset('complete'); }
  reset(id) {
    this.scenario = id; this.status = 'idle'; this.step = 0; this.question = ''; this.log = [];
    this.proposal = null; this.receipt = null; this.writes = 0; this.attempt = 0; this.boundaryCount = 0;
    this.pendingAvailable = true; this.pendingVerified = false; this.messages = []; this.reference = null; this.feedback = null; this.error = ''; this.actionStored = false; this.taskId = `PULSE-${id.toUpperCase()}`;
  }
  record(text) { this.log.push({ number: this.log.length + 1, text }); }
  start(question) {
    if (!['idle', 'cancelled', 'failed', 'complete', 'partial', 'blocked', 'empty', 'unsupported', 'success', 'unresolved'].includes(this.status)) return;
    this.question = question; this.step = 0; this.status = 'running'; this.record('Task started. Scope: selected account, September 2026. Read access only.');
  }
  advance() {
    if (this.status !== 'running') return;
    this.step++;
    if (this.step === 1) { this.record('Account and period checked. No account change authorised.'); return; }
    if (this.scenario === 'failure' && this.attempt === 0) {
      this.status = 'failed'; this.record('Account service unavailable. No records retrieved and no account changes made.'); return;
    }
    if (this.scenario !== 'empty' && /skip|pause/i.test(this.question) && !/75/.test(this.question)) { this.status = 'clarify'; this.record('Stopped: the requested automation is ambiguous.'); return; }
    if (['connection','payment'].includes(this.scenario) && /skip|pause/i.test(this.question)) { this.propose(); return; }
    if (this.scenario === 'boundary' && /buy|sell|stock|recommend/i.test(this.question)) { this.block(); return; }
    if (this.scenario === 'empty') { this.status = 'empty'; this.record('No holdings or activity found in the selected account. Investigation stopped.'); return; }
    if (this.scenario === 'adaptive' && this.step === 3) {
      this.status = 'discrepancy'; this.record('Contribution comparison: £150 reported sent, £100 completed. £50 difference detected. Next check: transfer status, not market movement.'); return;
    }
    if (this.scenario === 'adaptive' && this.step === 4) {
      this.record('Read transfer TX-0930-P from the transfer-status service. One targeted lookup; no retry loop.'); return;
    }
    if (this.scenario === 'adaptive' && this.step === 5) {
      if (!this.pendingAvailable) { this.status = 'unresolved'; this.record('Transfer-status service unavailable. £50 difference unresolved. Stop after one lookup; show the missing evidence, do not infer completion.'); return; }
      this.pendingVerified = true; this.reference = 'pending'; this.record('TX-0930-P confirms £50 pending, excluded from the investment balance. Explanation revised using transfer status.');
    }
    if (this.step === 2) { this.record('Retrieved completed contributions and fee records.'); return; }
    if (this.scenario === 'missing') {
      this.status = 'partial'; this.record('Latest valuation unavailable. Full reconciliation withheld; no change inferred.'); return;
    }
    this.status = 'complete'; this.record('Calculation verified: £4,447.82 + £100.00 − £135.00 − £5.00 = £4,407.82. Task complete.');
  }
  investigateTransfer() {
    if (this.status !== 'discrepancy') return;
    this.status = 'running'; this.record('Continue investigation: inspect the transfer that could explain the difference.');
  }
  get suggestions() {
    if (this.reference === 'fees') return this.pendingVerified ? ['Why was it charged?', 'Where is the missing £50?'] : ['Why was it charged?', 'Explain my balance'];
    if (this.pendingVerified) return ['Where is the missing £50?', 'Does it change my return?', 'Explain my fees'];
    if (this.status === 'unresolved') return ['What can I do next?', 'Explain my fees'];
    if (this.status === 'partial') return ['What is missing?', 'Explain my fees'];
    if (this.receipt) return ['When does it resume?', 'Explain my fees'];
    if (this.status === 'failed') return ['What can I do next?'];
    if (this.scenario === 'empty') return ['Is there any activity?'];
    return ['Explain my fees', 'Explain my balance'];
  }
  respond(question) {
    const q = question.trim(); if (!q) return;
    let answer;
    if (/buy|sell|stock|recover.*loss|ignore.*rule|recommend/i.test(q)) {
      answer = 'I can explain your records, but cannot choose investments or promise a recovery. Rephrasing the request does not change that boundary.';
    } else if (/last year|last month|2025|other account|all accounts/i.test(q)) {
      answer = 'This task covers the selected investment account in September 2026. I cannot answer for a different account or period from these records.';
    } else if (/resume|next payment/i.test(q) && this.receipt) {
      answer = 'Your £75 monthly payment resumes on 8 November. Only 8 October was skipped. Source: receipt SKIP-20261008.'; this.reference = 'payment';
    } else if (/missing|pending|where.*50|transfer/i.test(q) && this.scenario === 'adaptive') {
      answer = this.pendingVerified ? 'The £50 transfer is pending in TX-0930-P. It is not yet included in the investment balance. I cannot promise a completion date.' : 'The £50 difference has not been resolved. I need a verified transfer status before saying where the money is.'; this.reference = 'pending';
    } else if (/does it|return|performance/i.test(q) && this.reference === 'pending') {
      answer = this.pendingVerified ? 'The pending £50 is a transfer, not an investment return. September market movement remains −£135; the £50 is excluded until completed. Sources: TX-0930-P and VAL-0930.' : 'Without the transfer status I cannot explain the difference. A transfer must not be counted as investment performance.';
    } else if (/fee|why.*that|why.*it/i.test(q) && (/fee/i.test(q) || this.reference === 'fees')) {
      answer = this.status === 'failed' ? 'The account service is unavailable. Retry the read before I can verify fees.' : this.scenario === 'empty' ? 'There are no recorded fees in this empty account.' : /fee/i.test(q) ? 'September fees total £5. Source: FEE-0930, 30 September. This is a recorded charge, not market movement.' : '“It” refers to the £5 fee. FEE-0930 confirms the charge, but these records do not include its pricing basis. The fee statement would be needed to explain the pricing basis.'; this.reference = 'fees';
    } else if (/what.*missing/i.test(q) && this.status === 'partial') {
      answer = 'The 30 September valuation is missing. Contributions and fees are available, but I cannot verify the total change without that valuation.';
    } else if (/next|unknown/i.test(q)) {
      answer = this.status === 'unresolved' ? '£100 is confirmed completed. The remaining £50 is unresolved because the transfer-status service is unavailable. I cannot confirm whether it is pending or failed, or when it will complete. No account change has been made.' : this.status === 'failed' ? 'Use Retry account check to try the read again. Your original question is preserved; no account action was submitted.' : 'You can inspect the source activity or ask about a specific amount. There is no required account change.';
    } else if (/activity/i.test(q) && this.scenario === 'empty') {
      answer = 'No holdings or transactions are recorded for September in this account. There is no return to calculate.';
    } else if (/balance|portfolio/i.test(q)) {
      answer = ['partial','unresolved','failed'].includes(this.status) ? 'The current investigation is incomplete. I cannot replace the missing evidence with a full explanation.' : this.scenario === 'empty' ? 'This empty account has a £0 balance and no recorded activity.' : 'Your balance fell £40: £100 added, −£135 market movement and −£5 fees. Opening £4,447.82 → closing £4,407.82. These figures describe September only.';
    } else {
      answer = 'This scripted demo does not cover that wording. Choose one of the suggested follow-ups; I will not substitute an unrelated answer.';
    }
    if (/worried|scared|anxious|upset/i.test(q)) answer = 'Seeing an unexpected change can be worrying. ' + answer;
    this.messages.push({ question: q, answer });
    this.record('Follow-up answered within the current account and period. Conversation retained for this task.');
  }
  cancel() {
    if (!['running', 'clarify', 'approval', 'discrepancy'].includes(this.status)) return;
    this.status = 'cancelled'; this.proposal = null; this.record('Cancelled by user before execution. No account change made.');
  }
  propose() {
    if (this.receipt || this.actionStored || this.scenario === 'empty' || !['running','clarify','complete'].includes(this.status)) return;
    this.proposal = { id: 'SKIP-20261008', amount: 7500, date: '8 October 2026', resume: '8 November 2026', source: 'Primary Pocket', destination: 'Global Tech', version: 1 };
    this.status = 'approval'; this.record('Prepared a one-payment skip. Awaiting specific approval; schedule unchanged.');
  }
  approve(id) {
    if (this.status !== 'approval' || this.proposal?.id !== id) return false;
    this.status = 'executing'; this.record('User approved skipping £75 on 8 October only. Submitted with a unique action ID.');
    return true;
  }
  finishAction() {
    if (this.status !== 'executing') return;
    if (!this.actionStored) { this.actionStored = true; this.writes++; }
    if (this.scenario === 'connection') { this.status = 'unknown'; this.record('Connection interrupted before receipt. Outcome unknown to the interface.'); }
    else this.confirmReceipt();
  }
  checkStatus() {
    if (this.status !== 'unknown') return;
    this.status = 'checking'; this.record('Looking up existing action SKIP-20261008. No new action submitted.');
  }
  confirmReceipt() {
    if (!this.actionStored) return;
    this.status = 'success'; this.receipt = { id: 'SKIP-20261008', skipped: '8 October 2026', resumes: '8 November 2026' };
    this.record('Service confirmed: one payment skipped. £75 monthly schedule resumes 8 November.');
  }
  retry() { if (this.status !== 'failed') return; this.attempt++; this.status = 'running'; this.step = 0; this.record('Retrying read request. Original question preserved.'); }
  block() { this.status = 'blocked'; this.boundaryCount++; this.record(`Scope boundary maintained (request ${this.boundaryCount}). No trading tool available.`); }
}

// Local event simulation only. No scheduled work, notification permission or persistence.
export class ReviewOffer {
  constructor() { this.enabled = false; this.dismissed = false; this.day = 0; this.state = 'off'; this.wakeDay = null; }
  setEnabled(value) { this.enabled = value; this.state = value ? (this.dismissed ? 'dismissed' : 'armed') : 'off'; this.wakeDay = null; }
  advanceDay() {
    this.day++;
    if (this.enabled && (this.state === 'armed' || (this.state === 'snoozed' && this.day >= this.wakeDay))) this.state = 'available';
  }
  snooze() { if (this.state !== 'available') return; this.state = 'snoozed'; this.wakeDay = this.day + 1; }
  dismiss() { if (this.state === 'available') { this.state = 'dismissed'; this.dismissed = true; } }
  open() { if (this.state === 'available') this.state = 'opened'; }
}
