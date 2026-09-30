<template>
  <section class="scenario-controls" :aria-label="`Demo controls for scenario ${number}`">
    <strong>Scenario {{ number }} · Demo controls</strong>
    <p>{{ scenario.description }}</p>
    <fieldset v-if="scenario.id === 'adaptive'" :disabled="task.status !== 'idle'"><legend>Choose the service response</legend><label><input type="radio" :checked="task.pendingAvailable" @change="$emit('evidence', true)" /> Transfer found</label><label><input type="radio" :checked="!task.pendingAvailable" @change="$emit('evidence', false)" /> Transfer cannot be checked</label></fieldset>
    <template v-if="scenario.id === 'proactive'">
      <p role="status">{{ reviewHint }}</p>
      <button v-if="offer.enabled && ['armed','snoozed'].includes(offer.state)" @click="$emit('advance')">{{ offer.state === 'snoozed' ? 'Return tomorrow' : 'Make monthly review available' }}</button>
    </template>
    <template v-else>
      <p v-if="task.status === 'idle'" class="prepared-request"><span>Prepared customer request</span>“{{ scenario.question }}”</p>
      <button v-if="task.status === 'idle'" class="play-scenario" @click="$emit('start')"><span class="play-icon"><Play :size="18" fill="currentColor" aria-hidden="true" /></span><span>Play scenario {{ number }}<small>Send the prepared request</small></span></button>
      <p v-if="scenario.id === 'failure' && task.status === 'failed'">Try “Retry account check” in the phone. The simulated service will recover.</p>
      <p v-if="scenario.id === 'connection' && task.status === 'approval'">After approval, the demo interrupts the receipt so you can try the recovery flow.</p>
    </template>
    <p v-if="task.error" class="demo-error" role="status">{{ task.error }}</p>
    <button class="reset-demo" @click="$emit('reset')">Reset scenario {{ number }}</button>
  </section>
</template>
<script setup>
import { computed } from 'vue';
import { Play } from 'lucide-vue-next';
const props = defineProps({ scenario:Object, number:String, task:Object, offer:Object });
defineEmits(['evidence','advance','start','reset']);
const reviewHint = computed(() => !props.offer.enabled ? 'First, enable monthly reviews in the phone. No review appears without consent.' : ({armed:'Consent is on. Simulate the arrival of month-end records.',available:'The invitation is visible in Review. Open it, snooze it, or dismiss it in the phone.',snoozed:'The customer chose Tomorrow. Advance the demo to bring the invitation back.',dismissed:'The customer dismissed this review. It will not reappear. Reset to try another path.',opened:'The customer opened this review. It will not be offered again. Reset to try snoozing or dismissal.'}[props.offer.state]));
</script>
<style scoped>
.scenario-controls{padding:18px;margin:8px 0 16px;border:1px dashed #999;border-radius:8px;background:var(--color-surface);color:var(--color-text)}
.scenario-controls>strong{display:block;font-size:.8rem}.scenario-controls>small{display:block;font-size:.7rem;color:var(--color-text-secondary);margin-top:4px}
.scenario-controls p{font-size:.8rem;line-height:1.65;margin:12px 0;color:var(--color-text-secondary)}
.scenario-controls fieldset{border:0;padding:0;margin:16px 0}.scenario-controls legend{font-size:.75rem;font-weight:600;margin-bottom:6px}.scenario-controls label{display:flex;align-items:center;gap:8px;min-height:40px;font-size:.8rem}.scenario-controls input{accent-color:var(--color-text)}
.scenario-controls .prepared-request{color:var(--color-text)}.prepared-request span{display:block;font-size:.7rem;color:var(--color-text-secondary);margin-bottom:4px}
.scenario-controls button{display:block;width:100%;min-height:44px;padding:10px 12px;border:1px solid var(--color-text);border-radius:6px;background:var(--color-text);color:var(--color-surface);font:600 .8rem/1.5 var(--font-sans);cursor:pointer}
.scenario-controls .reset-demo{background:transparent;color:var(--color-text-secondary);border:0;margin-top:6px;font-weight:400}.scenario-controls button:focus-visible{outline:3px solid #7521b8;outline-offset:3px}
.scenario-controls .play-scenario{display:flex;align-items:center;gap:12px;text-align:left;background:transparent;color:var(--color-text);border:0;padding:8px 0}.play-icon{display:grid;place-items:center;width:44px;height:44px;border-radius:50%;background:var(--color-text);color:var(--color-surface);flex-shrink:0}.play-icon svg{margin-left:2px}.play-scenario small{display:block;font-size:.7rem;font-weight:400;color:var(--color-text-secondary);margin-top:3px}
</style>
