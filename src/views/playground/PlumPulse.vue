<template>
  <app-navbar />

  <main class="pulse-case">
    <section class="pulse-hero">
      <div class="hero-copy">
        <router-link class="back-link" to="/playground">
          <ArrowLeft :size="16" /> Playground
        </router-link>
        <p class="project-label">Independent speculative prototype</p>
        <h1>Plum Pulse</h1>
        <p class="hero-lead">
          A monthly investment review and conversational agent that turn balances,
          activity, returns and fees into understandable answers.
        </p>
        <p class="disclaimer">
          Inspired by the existing Plum mobile experience. Not affiliated with
          Plum. All figures are fictional and this prototype is not financial advice.
        </p>
      </div>

      <div class="prototype-wrap">
        <div class="phone" aria-label="Interactive Plum Pulse mobile prototype">
          <div class="phone-status"><span>9:41</span><span>● ●● ▰</span></div>

          <div class="phone-header">
            <span class="plan-badge">Pro</span>
            <strong>Pulse</strong>
            <button type="button" aria-label="Notifications"><Bell :size="19" /></button>
          </div>

          <nav class="pulse-tabs" aria-label="Pulse sections">
            <button v-for="item in pulseSections" :key="item.id" type="button"
              :class="{ active: screen === item.id }" @click="selectPulseSection(item.id)">
              {{ item.label }}
            </button>
          </nav>

          <section v-if="screen === 'overview'" ref="overviewScreen" class="phone-screen">
            <div class="month-navigation">
              <button type="button" aria-label="Previous month" :disabled="!canGoPrevious" @click="moveMonth(-1)"><ChevronLeft :size="17" /></button>
              <div><p>Monthly review</p><h2>{{ activeMonth.label }}</h2></div>
              <button type="button" aria-label="Next month" :disabled="!canGoNext" @click="moveMonth(1)"><ChevronRight :size="17" /></button>
            </div>

            <article class="value-card">
              <div class="value-topline">
                <span>Portfolio value</span>
                <span class="positive">{{ signedMoney(activeMonth.return) }} total return</span>
              </div>
              <strong>{{ money(activeMonth.value) }}</strong>
              <div class="investment-range-tabs" role="tablist" aria-label="Investment chart range">
                <button v-for="range in investmentChartRanges" :key="range.id" type="button" role="tab"
                  :aria-selected="investmentGraphRange === range.id" :class="{ active: investmentGraphRange === range.id }"
                  @click="selectInvestmentGraphRange(range.id)">{{ range.label }}</button>
              </div>
              <div class="interactive-investment-chart" :class="{ 'without-markers': !showsInvestmentMarkers }">
                <svg viewBox="0 0 300 118" role="img" :aria-label="`${investmentChart.label} portfolio value and activity chart`">
                  <line v-for="y in [20,54,88]" :key="y" x1="10" :y1="y" x2="290" :y2="y" stroke="#e7e3e8" stroke-width="1" />
                  <polyline :points="investmentChartValuePoints" fill="none" stroke="#008d78" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
                  <polyline :points="investmentChartInvestedPoints" fill="none" stroke="#8e21e6" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                  <g v-for="event in investmentGraphEvents" :key="event.id" class="investment-marker" :class="{ active: hoveredInvestmentEvent === event.id }" role="button" tabindex="0"
                    :transform="`translate(${event.x}, ${event.y})`" :aria-label="`${event.type === 'withdrawal' ? 'Withdrawal' : 'Investment'} ${signedMoney(event.amount)} on ${event.date}: ${event.label}`"
                    @pointerenter="setHoveredInvestmentEvent(event.id)" @pointermove="setHoveredInvestmentEvent(event.id)"
                    @mouseenter="setHoveredInvestmentEvent(event.id)" @mouseover="setHoveredInvestmentEvent(event.id)"
                    @focus="setHoveredInvestmentEvent(event.id)" @click="setHoveredInvestmentEvent(event.id)"
                    @keydown.enter.prevent="setHoveredInvestmentEvent(event.id)" @keydown.space.prevent="setHoveredInvestmentEvent(event.id)">
                    <title>{{ event.label }}: {{ signedMoney(event.amount) }} on {{ event.date }}</title>
                    <circle class="marker-hit" r="18"></circle>
                    <circle class="marker-dot" :class="event.type" :r="hoveredInvestmentEvent === event.id ? 12 : 10"></circle>
                    <text text-anchor="middle" dy="3">{{ event.type === 'withdrawal' ? '−' : '+' }}</text>
                    <g v-if="hoveredInvestmentEvent === event.id" class="marker-tooltip" transform="translate(0 -25)" pointer-events="none">
                      <rect x="-46" y="-9" width="92" height="18" rx="4"></rect>
                      <text text-anchor="middle" dy="2">{{ signedMoney(event.amount) }} · {{ event.date }}</text>
                    </g>
                  </g>
                </svg>
                <div class="chart-timeline"><span>{{ investmentChart.start }}</span><span>{{ investmentChart.middle }}</span><span>{{ investmentChart.end }}</span></div>
              </div>
              <div class="chart-key"><span><i class="value-dot"></i> Value</span><span><i class="invested-dot"></i> Invested</span><span v-if="showsInvestmentMarkers"><i class="activity-dot"></i> Money in / out</span></div>
              <div v-if="showsInvestmentMarkers" class="investment-event-detail" aria-live="polite">
                <template v-if="hoveredInvestmentGraphEvent">
                  <span :class="hoveredInvestmentGraphEvent.type"><b>{{ hoveredInvestmentGraphEvent.type === 'withdrawal' ? 'Withdrawal' : 'Investment' }}</b> {{ signedMoney(hoveredInvestmentGraphEvent.amount) }}</span>
                  <small>{{ hoveredInvestmentGraphEvent.date }} · {{ hoveredInvestmentGraphEvent.label }}</small>
                </template>
                <template v-else><span><b>Explore activity</b> Hover or tap a + / − marker.</span></template>
              </div>
              <p v-else class="chart-density-note">Money-in and money-out markers are available on 1W, 1M and 3M views.</p>
            </article>

            <div class="metric-strip">
              <article><span>Invested</span><strong>{{ money(activeMonth.invested) }}</strong></article>
              <article><span>This month</span><strong>{{ signedMoney(activeMonth.change) }}</strong></article>
              <article><span>Pending</span><strong>£0.00</strong></article>
            </div>

            <section class="month-story">
              <div class="story-heading">
                <div><p>What changed your balance</p><strong>{{ signedMoney(activeMonth.change) }}</strong></div>
                <button type="button" @click="scrollToComparison">Compare progress <ChevronRight :size="13" /></button>
              </div>
              <div class="breakdown" aria-label="Monthly portfolio change breakdown">
                <div v-for="item in activeBreakdown" :key="item.label" class="breakdown-row">
                  <span class="breakdown-label"><i :style="{ background: item.color }"></i>{{ item.label }}</span>
                  <span class="bar-track"><i :style="{ width: `${item.width}%`, background: item.color }"></i></span>
                  <strong :class="{ negative: item.value < 0 }">{{ signedMoney(item.value) }}</strong>
                </div>
              </div>
            </section>

            <article class="automation-card">
              <div class="automation-top">
                <span><RefreshCw :size="16" /></span>
                <div><strong>{{ activeMonth.completed }}/{{ activeMonth.scheduled }} completed</strong><p>Automatic investments this month</p></div>
                <button type="button" @click="openActivity('investment')"><ChevronRight :size="16" /></button>
              </div>
              <div class="completion-track"><i :style="{ width: `${automationProgress}%` }"></i></div>
              <div class="next-investment"><span>Next investment</span><strong>{{ money(automationAmount) }} · 8 Oct</strong><small><CheckCircle2 :size="12" /> Primary Pocket ready</small></div>
            </article>

            <article class="insight-card">
              <span class="insight-icon"><Sparkles :size="17" /></span>
              <div><strong>{{ activeInsight.title }}</strong><p>{{ activeInsight.copy }}</p><button type="button" @click="askPulse('Why did my portfolio change this month?')">Ask Pulse about this</button></div>
            </article>

            <section ref="comparisonSection" class="pulse-comparison" aria-label="Compare portfolio progress">
              <div class="pulse-comparison-heading">
                <div>
                  <p>Performance over time</p>
                  <h3>Compare progress</h3>
                </div>
                <button class="detail-action" type="button" @click="comparisonMetric = comparisonMetric === 'value' ? 'return' : 'value'">
                  {{ comparisonMetric === 'value' ? 'Value' : 'Return' }}
                </button>
              </div>

              <div class="range-tabs" role="tablist" aria-label="Comparison range">
                <button v-for="option in rangeOptions" :key="option.id" type="button" role="tab"
                  :aria-selected="comparisonRange === option.id" :class="{ active: comparisonRange === option.id }"
                  @click="comparisonRange = option.id">{{ option.label }}</button>
              </div>

              <article class="trend-card">
                <div class="trend-summary">
                  <div><span>{{ rangeLabel }}</span><strong>{{ money(latestRangeValue) }}</strong></div>
                  <b :class="{ negative: rangeChange < 0 }">{{ signedMoney(rangeChange) }}</b>
                </div>
                <svg class="range-chart" viewBox="0 0 320 145" role="img" :aria-label="`${rangeLabel} investment comparison chart`">
                  <line v-for="y in [26,65,104]" :key="y" x1="10" :y1="y" x2="310" :y2="y" stroke="#e7e2e9" stroke-width="1" />
                  <polyline :points="rangeChartPrimary" fill="none" :stroke="comparisonMetric === 'value' ? '#008d78' : '#8e21e6'" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                  <polyline v-if="comparisonMetric === 'value'" :points="rangeChartInvested" fill="none" stroke="#8e21e6" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                  <circle :cx="rangeLastPoint.x" :cy="rangeLastPoint.y" r="5" :fill="comparisonMetric === 'value' ? '#008d78' : '#8e21e6'" stroke="#fff" stroke-width="3" />
                </svg>
                <div class="range-labels"><span>{{ rangeMonths[0]?.short }}</span><span>{{ rangeMonths[Math.floor(rangeMonths.length/2)]?.short }}</span><span>{{ rangeMonths[rangeMonths.length-1]?.short }}</span></div>
                <div class="chart-key"><span><i :class="comparisonMetric === 'value' ? 'value-dot' : 'return-dot'"></i>{{ comparisonMetric === 'value' ? 'Value' : 'Return' }}</span><span v-if="comparisonMetric === 'value'"><i class="invested-dot"></i>Invested</span></div>
              </article>

              <section class="period-summary">
                <h3>{{ rangeLabel }} summary</h3>
                <div>
                  <article><span>Added</span><strong>{{ money(rangeTotals.contributions) }}</strong></article>
                  <article><span>Market movement</span><strong>{{ signedMoney(rangeTotals.market) }}</strong></article>
                  <article><span>Fees</span><strong>−{{ money(rangeTotals.fees) }}</strong></article>
                </div>
              </section>

              <article class="month-comparison">
                <div><span>{{ activeMonth.short }}</span><strong>{{ signedMoney(activeMonth.change) }}</strong><small>{{ money(activeMonth.contributions) }} added</small></div>
                <span class="versus">vs</span>
                <div><span>{{ previousMonth.short }}</span><strong>{{ signedMoney(previousMonth.change) }}</strong><small>{{ money(previousMonth.contributions) }} added</small></div>
              </article>

              <p class="risk-note"><Info :size="14" /> Past performance is not a reliable indicator of future results. Capital is at risk.</p>
              <button class="ask-context-link" type="button" @click="askPulse('What drove my portfolio performance over this period?')"><Sparkles :size="13" /> Ask Pulse about this period</button>
            </section>
          </section>

          <section v-else-if="screen === 'activity'" class="phone-screen activity-screen">
            <div class="screen-heading"><div><p>{{ activeMonth.label }}</p><h2>Activity</h2></div><span class="activity-total">{{ filteredActivity.length }} items</span></div>
            <div class="activity-filters" role="tablist" aria-label="Filter activity">
              <button v-for="filter in activityFilters" :key="filter.id" type="button"
                :class="{ active: activityFilter === filter.id }" @click="activityFilter = filter.id">{{ filter.label }}</button>
            </div>
            <ol class="activity-list">
              <li v-for="event in filteredActivity" :key="event.id" :class="{ expanded: selectedEvent === event.id }">
                <button class="event-main" type="button" @click="selectedEvent = selectedEvent === event.id ? null : event.id">
                  <span class="event-icon" :class="event.type"><component :is="event.icon" :size="16" /></span>
                  <span class="event-copy"><strong>{{ event.title }}</strong><span>{{ event.detail }}</span><small>{{ event.date }}</small></span>
                  <b>{{ event.amount }}</b>
                  <ChevronDown :size="14" />
                </button>
                <div v-if="selectedEvent === event.id" class="event-detail">
                  <span>Status <strong>{{ event.status }}</strong></span>
                  <span>Source <strong>{{ event.source }}</strong></span>
                  <p>{{ event.explanation }}</p>
                </div>
              </li>
            </ol>
            <article class="next-card">
              <div><span>Next automatic investment</span><strong>{{ money(automationAmount) }} on 8 October</strong></div>
              <span class="ready"><CheckCircle2 :size="14" /> Ready</span>
            </article>
            <button class="manage-button" type="button" @click="toggleAutomationManagement">
              {{ automationManaged ? 'Close automation settings' : 'Manage automations' }}
            </button>
            <div v-if="automationManaged" class="manage-panel">
              <div><span>Automatic investment</span><strong>{{ money(automationAmount) }} {{ automationFrequency }}</strong><small>From Primary Pocket · Next on 8 Oct</small></div>
              <button type="button" @click="automationEditing = !automationEditing">{{ automationEditing ? 'Cancel' : 'Edit' }}</button>
              <form v-if="automationEditing" class="automation-editor" @submit.prevent="saveAutomation">
                <label>Amount <input v-model.number="automationAmount" min="5" step="5" type="number" inputmode="decimal" /></label>
                <div class="automation-frequency" role="group" aria-label="Investment frequency">
                  <button v-for="frequency in automationFrequencies" :key="frequency" type="button" :class="{ active: automationFrequency === frequency }" @click="automationFrequency = frequency">{{ frequency }}</button>
                </div>
                <button class="save-automation" type="submit">Save changes</button>
              </form>
              <p v-if="automationSaved" class="automation-saved"><CheckCircle2 :size="12" /> Automation updated for the next investment.</p>
            </div>
          </section>

          <section v-else class="phone-screen ask-screen">
            <header class="chat-header">
              <span class="pulse-avatar"><Sparkles :size="16" /></span>
              <div><h2>Ask Pulse</h2><p><i></i> Answers from your Plum data</p></div>
            </header>

            <div ref="chatThread" class="chat-thread" aria-live="polite">
              <div class="chat-message pulse-message intro-message">
                <span class="message-avatar"><Sparkles :size="12" /></span>
                <div class="message-content">
                  <div class="message-meta"><strong>Pulse</strong><span>Now</span></div>
                  <div class="message-bubble">
                    <p>Hi Eleni. Ask me to explain your returns, fees, holdings or investment activity.</p>
                    <div class="prompt-list" aria-label="Suggested questions">
                      <button v-for="suggestion in agentSuggestions" :key="suggestion" type="button" @click="askPulse(suggestion)">{{ suggestion }}</button>
                    </div>
                  </div>
                </div>
              </div>

              <div v-if="agentQuestion" class="chat-divider"><span>Conversation</span></div>

              <div v-if="agentQuestion" class="chat-message user-chat-message">
                <div class="message-content">
                  <div class="message-meta"><span>You · Now</span></div>
                  <div class="message-bubble"><p>{{ agentQuestion }}</p></div>
                </div>
              </div>

              <div v-if="agentQuestion" class="chat-message pulse-message answer-message">
                <span class="message-avatar"><Sparkles :size="12" /></span>
                <article class="message-content">
                  <div class="message-meta"><strong>Pulse</strong><span>Analysed holdings + activity</span></div>
                  <div class="message-bubble pulse-answer-bubble">
                    <template v-if="agentTopic === 'apple'">
                      <p>You made <strong>{{ signedMoney(agentAnswer.profit) }}</strong> profit from Apple over {{ agentAnswer.rangeText.toLowerCase() }}, a <strong>{{ agentAnswer.percent }}% return</strong>.</p>
                      <div class="agent-range" role="tablist" aria-label="Apple performance range">
                        <button v-for="range in agentRanges" :key="range.id" type="button" role="tab" :aria-selected="agentRange === range.id" :class="{ active: agentRange === range.id }" @click="setAgentRange(range)">{{ range.label }}</button>
                      </div>
                      <section class="supporting-data" aria-label="Supporting Apple performance data">
                        <div class="data-heading"><span>Supporting data · {{ agentAnswer.rangeText }}</span><strong>{{ money(agentAnswer.current) }}</strong></div>
                        <svg viewBox="0 0 300 100" role="img" :aria-label="`Apple holding value over ${agentAnswer.rangeText.toLowerCase()}`">
                          <line v-for="y in [22,50,78]" :key="y" x1="8" :y1="y" x2="292" :y2="y" stroke="#e4dce8" />
                          <polyline :points="agentChartPoints" fill="none" stroke="#8e21e6" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                          <circle :cx="agentLastPoint.x" :cy="agentLastPoint.y" r="5" fill="#8e21e6" stroke="#fff" stroke-width="3" />
                        </svg>
                        <div class="chart-axis"><span>{{ agentAnswer.start }}</span><span>Today</span></div>
                        <dl class="answer-breakdown">
                          <div><dt>Price movement</dt><dd>{{ signedMoney(agentAnswer.movement) }}</dd></div>
                          <div><dt>Dividends</dt><dd>{{ signedMoney(agentAnswer.dividends) }}</dd></div>
                          <div><dt>Amount invested</dt><dd>{{ money(agentAnswer.basis) }}</dd></div>
                        </dl>
                      </section>
                    </template>
                    <template v-else>
                      <p><strong>{{ agentAnswer.title }}</strong> {{ agentAnswer.copy }}</p>
                      <section class="supporting-data compact" aria-label="Supporting answer data">
                        <div class="data-heading"><span>Supporting data</span><strong>{{ agentTopic === 'fees' ? '12 months' : 'Portfolio value' }}</strong></div>
                        <svg viewBox="0 0 300 100" role="img" :aria-label="agentAnswer.title">
                          <line v-for="y in [22,50,78]" :key="y" x1="8" :y1="y" x2="292" :y2="y" stroke="#e4dce8" />
                          <polyline :points="agentChartPoints" fill="none" stroke="#008d78" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </section>
                    </template>
                    <p class="answer-note"><Info :size="12" /> Based on recorded activity. Not financial advice.</p>
                    <div class="answer-actions">
                      <button type="button" @click="openPulseComparison">Open comparison</button>
                      <button type="button" @click="openActivity(agentTopic === 'fees' ? 'fee' : 'all')">View activity</button>
                    </div>
                    <div class="follow-up-prompts" aria-label="Suggested follow-up questions">
                      <span>Continue exploring</span>
                      <button v-for="question in followUpSuggestions" :key="question" type="button" @click="askPulse(question)">{{ question }}</button>
                    </div>
                  </div>
                </article>
              </div>
            </div>

            <form class="chat-composer" @submit.prevent="askPulse(agentInput)">
              <input v-model="agentInput" aria-label="Ask Pulse a question" placeholder="Ask Pulse a question" />
              <button type="submit" aria-label="Send question" :disabled="!agentInput.trim()"><Send :size="15" /></button>
            </form>
          </section>

          <nav class="phone-nav" aria-label="Prototype navigation">
            <button type="button"><Home :size="19" /><span>Home</span></button>
            <button type="button"><Sprout :size="19" /><span>Pockets</span></button>
            <button type="button"><ChartNoAxesCombined :size="19" /><span>Invest</span></button>
            <button type="button"><CreditCard :size="19" /><span>Spend</span></button>
            <button :class="{ active: ['overview', 'activity', 'ask'].includes(screen) }" type="button" @click="selectPulseSection('overview')"><MessageCircle :size="19" /><span>Pulse</span></button>
          </nav>
        </div>

        <aside class="prototype-notes">
          <p class="project-label">Try the prototype</p>
          <h2>Browse the story. Or ask for the answer.</h2>
          <p>Browse a structured monthly review or ask Pulse a question and follow the answer back to its supporting comparison and activity. The prototype uses fictional data while preserving Plum’s existing information architecture.</p>
          <div class="prototype-actions">
            <button type="button" :class="{ active: screen === 'overview' }" @click="selectPulseSection('overview')">Pulse</button>
            <button type="button" :class="{ active: screen === 'activity' }" @click="screen = 'activity'">Activity</button>
            <button type="button" :class="{ active: screen === 'ask' }" @click="selectPulseSection('ask')">Ask Pulse</button>
          </div>
        </aside>
      </div>

      <section class="feature-brief" aria-label="Feature scope">
        <article><span>Review</span><strong>Monthly narrative</strong><p>Separate contributions, market movement and fees so the balance change is understandable.</p></article>
        <article><span>Compare</span><strong>Meaningful comparison</strong><p>Compare months without turning long-term investing into a short-term competition.</p></article>
        <article><span>Ask</span><strong>Questions with evidence</strong><p>Answer natural-language questions with a relevant graph, a clear calculation and links to the supporting activity.</p></article>
      </section>
    </section>

    <section class="story-section">
      <div><p class="project-label">Problem</p><h2>The data exists. The explanation does not.</h2></div>
      <p>Plum already surfaces portfolio value, invested money, pending transactions, returns, holdings and automation notifications. Understanding what happened across a month still requires the user to assemble those signals from several areas. Pulse supports both people who want to browse a review and people who arrive with a specific question.</p>
    </section>

    <section class="story-section reflection">
      <div><p class="project-label">Design position</p><h2>Review without encouraging reaction.</h2></div>
      <p>Pulse combines guided review with direct questions, while every answer remains traceable to a comparison or activity record. It explains historical activity and upcoming automations without recommending trades or predicting returns.</p>
    </section>
  </main>

  <app-footer />
</template>

<script>
import {
  ArrowLeft, Bell, ChartNoAxesCombined, CheckCircle2, ChevronDown, ChevronLeft, ChevronRight, Clock3,
  CreditCard, Home, Info, Landmark, MessageCircle, RefreshCw, Send, Sparkles, Sprout, TrendingUp,
} from "lucide-vue-next";
import { useHead } from "@vueuse/head";
import AppNavbar from "@/components/navbar.vue";
import AppFooter from "@/components/footer.vue";

export default {
  name: "PlumPulse",
  components: {
    AppFooter, AppNavbar, ArrowLeft, Bell, ChartNoAxesCombined, CheckCircle2,
    ChevronDown, ChevronLeft, ChevronRight, Clock3, CreditCard, Home, Info, Landmark, MessageCircle, RefreshCw, Send,
    Sparkles, Sprout, TrendingUp,
  },
  setup() {
    useHead({
      title: "Plum Pulse - Monthly Investment Review",
      meta: [{ name: "description", content: "A speculative mobile-first Plum feature that explains monthly investment activity, performance, fees and automations." }],
    });
  },
  data() {
    return {
      screen: "overview",
      selectedMonth: "sep26",
      comparisonRange: "six",
      comparisonMetric: "value",
      activityFilter: "all",
      selectedEvent: null,
      automationManaged: false,
      automationEditing: false,
      automationSaved: false,
      automationAmount: 75,
      automationFrequency: "Monthly",
      automationFrequencies: ["Weekly", "Monthly"],
      investmentGraphRange: "month",
      hoveredInvestmentEvent: null,
      investmentChartRanges: [
        { id: "week", label: "1W" },
        { id: "month", label: "1M" },
        { id: "three", label: "3M" },
        { id: "year", label: "1Y" },
        { id: "all", label: "All" },
      ],
      investmentCharts: {
        week: {
          label: "Last 7 days", start: "22 Sep", middle: "25 Sep", end: "Today",
          value: [4312, 4324, 4318, 4366, 4380, 4391, 4407.82],
          invested: [4075, 4075, 4075, 4105, 4105, 4105, 4125],
          events: [
            { id: "week-23", index: 1, type: "investment", amount: 30, date: "23 Sep", label: "Automatic investment · Global Tech" },
            { id: "week-28", index: 6, type: "investment", amount: 20, date: "28 Sep", label: "Round-up investment · Varied Fund" },
          ],
        },
        month: {
          label: "September 2026", start: "1 Sep", middle: "16 Sep", end: "30 Sep",
          value: [4214.2, 4239, 4227, 4261, 4298, 4279, 4330, 4352, 4389, 4407.82],
          invested: [3975, 4005, 4005, 4035, 4065, 4065, 4095, 4095, 4125, 4125],
          events: [
            { id: "month-03", index: 1, type: "investment", amount: 30, date: "3 Sep", label: "Automatic investment · Global Tech" },
            { id: "month-09", index: 3, type: "investment", amount: 30, date: "9 Sep", label: "Automatic investment · Varied Fund" },
            { id: "month-16", index: 4, type: "investment", amount: 30, date: "16 Sep", label: "Automatic investment · Global Tech" },
            { id: "month-23", index: 6, type: "investment", amount: 30, date: "23 Sep", label: "Automatic investment · Varied Fund" },
            { id: "month-30", index: 8, type: "investment", amount: 30, date: "30 Sep", label: "Automatic investment · Global Tech" },
          ],
        },
        three: {
          label: "Last 3 months", start: "1 Jul", middle: "15 Aug", end: "30 Sep",
          value: [4070.5, 4102, 4067, 4144, 4214.2, 4178, 4250, 4227, 4298, 4352, 4407.82],
          invested: [3855, 3885, 3915, 3945, 3975, 3930, 3960, 3990, 4050, 4095, 4125],
          events: [
            { id: "three-09jul", index: 1, type: "investment", amount: 30, date: "9 Jul", label: "Automatic investment · Global Tech" },
            { id: "three-23jul", index: 2, type: "investment", amount: 30, date: "23 Jul", label: "Automatic investment · Varied Fund" },
            { id: "three-12aug", index: 5, type: "withdrawal", amount: -45, date: "12 Aug", label: "Withdrawal to Primary Pocket" },
            { id: "three-27aug", index: 6, type: "investment", amount: 30, date: "27 Aug", label: "Automatic investment · Global Tech" },
            { id: "three-16sep", index: 8, type: "investment", amount: 30, date: "16 Sep", label: "Automatic investment · Global Tech" },
            { id: "three-30sep", index: 10, type: "investment", amount: 30, date: "30 Sep", label: "Automatic investment · Varied Fund" },
          ],
        },
        year: {
          label: "Last 12 months", start: "Oct 25", middle: "Apr 26", end: "Sep 26",
          value: [3370, 3461, 3604, 3718, 3838, 3887, 3989, 4076, 4168, 4070.5, 4214.2, 4407.82],
          invested: [2785, 2895, 3015, 3135, 3255, 3375, 3495, 3615, 3735, 3855, 3975, 4125], events: [],
        },
        all: {
          label: "Since April 2025", start: "Apr 25", middle: "Jan 26", end: "Sep 26",
          value: [2670, 2796, 2872, 3011, 3104, 3258, 3370, 3461, 3604, 3718, 3838, 3887, 3989, 4076, 4168, 4070.5, 4214.2, 4407.82],
          invested: [2180, 2275, 2365, 2465, 2565, 2675, 2785, 2895, 3015, 3135, 3255, 3375, 3495, 3615, 3735, 3855, 3975, 4125], events: [],
        },
      },
      agentInput: "",
      agentTopic: null,
      agentRange: "three",
      agentQuestion: "",
      pulseSections: [
        { id: "overview", label: "Pulse" },
        { id: "activity", label: "Activity" },
        { id: "ask", label: "Ask Pulse" },
      ],
      agentSuggestions: [
        "How much profit did I make from Apple in the last 3 months?",
        "Why did my portfolio dip in July?",
        "How much have I paid in fees this year?",
      ],
      agentRanges: [
        { id: "one", label: "1M" },
        { id: "three", label: "3M" },
        { id: "six", label: "6M" },
        { id: "year", label: "1Y" },
      ],
      applePerformance: {
        one: { rangeText:"Last month", start:"19 Aug", profit:21.4, percent:2.3, basis:930.1, current:951.5, movement:17.3, dividends:4.1, series:[930.1,934.8,928.4,940.2,944.1,951.5] },
        three: { rangeText:"Last 3 months", start:"19 Jun", profit:84.3, percent:9.8, basis:860.2, current:944.5, movement:71.9, dividends:12.4, series:[860.2,875.4,868.6,901.2,896.5,922.8,944.5] },
        six: { rangeText:"Last 6 months", start:"19 Mar", profit:126.7, percent:15.5, basis:817.8, current:944.5, movement:102.1, dividends:24.6, series:[817.8,839.2,828.1,864.8,853.6,892.4,881.7,910.3,944.5] },
        year: { rangeText:"Last 12 months", start:"19 Sep 25", profit:188.4, percent:24.9, basis:756.1, current:944.5, movement:142.2, dividends:46.2, series:[756.1,778.4,803.2,786.9,821.4,842.8,817.7,856.3,879.6,866.1,907.2,921.5,944.5] },
      },
      rangeOptions: [
        { id: "quarter", label: "Quarter", count: 3 },
        { id: "six", label: "6M", count: 6 },
        { id: "year", label: "1Y", count: 12 },
        { id: "all", label: "All", count: 18 },
      ],
      activityFilters: [
        { id: "all", label: "All" },
        { id: "investment", label: "Investments" },
        { id: "market", label: "Market" },
        { id: "fee", label: "Fees" },
      ],
      months: [
        { id:"apr25", short:"Apr", label:"April 2025", value:2670, invested:2180, contributions:90, market:18, fees:3.1, completed:3, scheduled:3 },
        { id:"may25", short:"May", label:"May 2025", value:2796, invested:2275, contributions:95, market:34.1, fees:3.1, completed:3, scheduled:3 },
        { id:"jun25", short:"Jun", label:"June 2025", value:2872, invested:2365, contributions:90, market:-10.8, fees:3.2, completed:3, scheduled:3 },
        { id:"jul25", short:"Jul", label:"July 2025", value:3011, invested:2465, contributions:100, market:42.2, fees:3.2, completed:4, scheduled:4 },
        { id:"aug25", short:"Aug", label:"August 2025", value:3104, invested:2565, contributions:100, market:-3.7, fees:3.3, completed:4, scheduled:4 },
        { id:"sep25", short:"Sep", label:"September 2025", value:3258, invested:2675, contributions:110, market:47.4, fees:3.4, completed:4, scheduled:4 },
        { id:"oct25", short:"Oct", label:"October 2025", value:3370, invested:2785, contributions:110, market:5.5, fees:3.5, completed:4, scheduled:4 },
        { id:"nov25", short:"Nov", label:"November 2025", value:3461, invested:2895, contributions:110, market:-15.4, fees:3.6, completed:4, scheduled:4 },
        { id:"dec25", short:"Dec", label:"December 2025", value:3604, invested:3015, contributions:120, market:26.7, fees:3.7, completed:4, scheduled:4 },
        { id:"jan26", short:"Jan", label:"January 2026", value:3718, invested:3135, contributions:120, market:-2.2, fees:3.8, completed:4, scheduled:4 },
        { id:"feb26", short:"Feb", label:"February 2026", value:3838, invested:3255, contributions:120, market:3.9, fees:3.9, completed:4, scheduled:4 },
        { id:"mar26", short:"Mar", label:"March 2026", value:3887, invested:3375, contributions:120, market:-67, fees:4, completed:4, scheduled:4 },
        { id:"apr26", short:"Apr", label:"April 2026", value:3989, invested:3495, contributions:120, market:-13.9, fees:4.1, completed:4, scheduled:4 },
        { id:"may26", short:"May", label:"May 2026", value:4076, invested:3615, contributions:120, market:-28.8, fees:4.2, completed:4, scheduled:4 },
        { id:"jun26", short:"Jun", label:"June 2026", value:4168, invested:3735, contributions:120, market:-23.7, fees:4.3, completed:4, scheduled:4 },
        { id:"jul26", short:"Jul", label:"July 2026", value:4070.5, invested:3855, contributions:120, market:-213.1, fees:4.4, completed:4, scheduled:4 },
        { id:"aug26", short:"Aug", label:"August 2026", value:4214.2, invested:3975, contributions:120, market:27.9, fees:4.2, completed:4, scheduled:4 },
        { id:"sep26", short:"Sep", label:"September 2026", value:4407.82, invested:4125, contributions:150, market:48.12, fees:4.5, completed:5, scheduled:5 },
      ],
    };
  },
  computed: {
    activeIndex() { return this.months.findIndex((month) => month.id === this.selectedMonth); },
    activeMonth() {
      const month = this.months[this.activeIndex] || this.months[this.months.length - 1];
      return {
        ...month,
        change: month.contributions + month.market - month.fees,
        return: month.value - month.invested,
      };
    },
    previousMonth() {
      const month = this.months[Math.max(0, this.activeIndex - 1)];
      return { ...month, change: month.contributions + month.market - month.fees };
    },
    canGoPrevious() { return this.activeIndex > 0; },
    canGoNext() { return this.activeIndex < this.months.length - 1; },
    automationProgress() { return Math.min(100, (this.activeMonth.completed / this.activeMonth.scheduled) * 100); },
    activeBreakdown() {
      const rows = [
        { label: "Contributions", value: this.activeMonth.contributions, color: "#8e21e6" },
        { label: "Market movement", value: this.activeMonth.market, color: "#008d78" },
        { label: "Fees", value: -this.activeMonth.fees, color: "#727272" },
      ];
      const max = Math.max(...rows.map((row) => Math.abs(row.value)), 1);
      return rows.map((row) => ({ ...row, width: Math.max(10, Math.abs(row.value) / max * 100) }));
    },
    activeInsight() {
      const contributionDifference = this.activeMonth.contributions - this.previousMonth.contributions;
      if (this.activeMonth.market < 0) {
        return { title: "Contributions softened a market dip", copy: `You added ${this.money(this.activeMonth.contributions)} while market movement reduced value by ${this.money(Math.abs(this.activeMonth.market))}.` };
      }
      return {
        title: contributionDifference > 0 ? "You invested more than last month" : "Your automation stayed consistent",
        copy: contributionDifference > 0
          ? `Contributions were ${this.money(contributionDifference)} higher than ${this.previousMonth.short}. Market movement added ${this.money(this.activeMonth.market)}.`
          : `${this.activeMonth.completed} scheduled investments completed. Market movement added ${this.money(this.activeMonth.market)}.`,
      };
    },
    investmentChart() { return this.investmentCharts[this.investmentGraphRange]; },
    investmentChartDomain() {
      const values = [...this.investmentChart.value, ...this.investmentChart.invested];
      return { min: Math.min(...values), max: Math.max(...values) };
    },
    investmentChartCoordinates() {
      return this.chartCoordinates(this.investmentChart.value, 300, 118, this.investmentChartDomain.min, this.investmentChartDomain.max);
    },
    investmentChartValuePoints() {
      return this.investmentChartCoordinates.map((point) => `${point.x},${point.y}`).join(" ");
    },
    investmentChartInvestedPoints() {
      return this.chartPoints(this.investmentChart.invested, 300, 118, this.investmentChartDomain.min, this.investmentChartDomain.max);
    },
    investmentGraphEvents() {
      return this.investmentChart.events.map((event) => ({ ...event, ...this.investmentChartCoordinates[event.index] }));
    },
    hoveredInvestmentGraphEvent() {
      return this.investmentGraphEvents.find((event) => event.id === this.hoveredInvestmentEvent) || null;
    },
    showsInvestmentMarkers() { return this.investmentGraphEvents.length > 0; },
    miniMonths() { return this.months.slice(Math.max(0, this.activeIndex - 5), this.activeIndex + 1); },
    miniChartDomain() {
      const values = this.miniMonths.flatMap((month) => [month.value, month.invested]);
      return { min: Math.min(...values), max: Math.max(...values) };
    },
    miniChartValue() { return this.chartPoints(this.miniMonths.map((month) => month.value), 300, 76, this.miniChartDomain.min, this.miniChartDomain.max); },
    miniChartInvested() { return this.chartPoints(this.miniMonths.map((month) => month.invested), 300, 76, this.miniChartDomain.min, this.miniChartDomain.max); },
    selectedRangeOption() { return this.rangeOptions.find((option) => option.id === this.comparisonRange) || this.rangeOptions[1]; },
    rangeMonths() {
      return this.months.slice(Math.max(0, this.activeIndex - this.selectedRangeOption.count + 1), this.activeIndex + 1);
    },
    rangeLabel() {
      const atLatestMonth = this.activeIndex === this.months.length - 1;
      const labels = atLatestMonth
        ? { quarter: "Current quarter", six: "Last 6 months", year: "Last 12 months", all: "Since April 2025" }
        : { quarter: `3 months to ${this.activeMonth.short}`, six: `6 months to ${this.activeMonth.short}`, year: `12 months to ${this.activeMonth.short}`, all: "Since April 2025" };
      return labels[this.comparisonRange];
    },
    rangeValues() {
      return this.rangeMonths.map((month) => this.comparisonMetric === "value" ? month.value : month.value - month.invested);
    },
    rangeChartDomain() {
      const values = this.comparisonMetric === "value"
        ? [...this.rangeValues, ...this.rangeMonths.map((month) => month.invested)]
        : this.rangeValues;
      return { min: Math.min(...values), max: Math.max(...values) };
    },
    rangeChartPrimary() { return this.chartPoints(this.rangeValues, 320, 132, this.rangeChartDomain.min, this.rangeChartDomain.max); },
    rangeChartInvested() { return this.chartPoints(this.rangeMonths.map((month) => month.invested), 320, 132, this.rangeChartDomain.min, this.rangeChartDomain.max); },
    rangeLastPoint() {
      const pairs = this.rangeChartPrimary.split(" ");
      const [x, y] = pairs[pairs.length - 1].split(",").map(Number);
      return { x, y };
    },
    latestRangeValue() { return this.rangeValues[this.rangeValues.length - 1] || 0; },
    rangeChange() { return this.latestRangeValue - (this.rangeValues[0] || 0); },
    rangeTotals() {
      return this.rangeMonths.reduce((totals, month) => ({
        contributions: totals.contributions + month.contributions,
        market: totals.market + month.market,
        fees: totals.fees + month.fees,
      }), { contributions: 0, market: 0, fees: 0 });
    },
    activeActivity() {
      const month = this.activeMonth;
      const investmentAmount = month.contributions / month.completed;
      const investmentDates = [30, 23, 16, 9, 2];
      const investments = Array.from({ length: month.completed }, (_, index) => ({
        id:`investment-${index + 1}`,
        type:"investment",
        title:"Automatic investment",
        detail:index % 2 === 0 ? "Global Tech" : "Varied Fund",
        date:`${investmentDates[index]} ${month.short}`,
        amount:`+${this.money(investmentAmount)}`,
        status:"Completed",
        source:"Primary Pocket",
        explanation:index === 0
          ? "Money was moved from your Primary Pocket and units were purchased at the next available valuation point."
          : "This completed successfully as part of your recurring monthly investment plan.",
        icon:CheckCircle2,
      }));
      return [
        ...investments,
        { id:"market", type:"market", title:"Market movement", detail:"Across all holdings", date:"Monthly total", amount:this.signedMoney(month.market), status:"Updated", source:"Portfolio value", explanation:"This is the change in market value after separating money you added and fees paid.", icon:TrendingUp },
        { id:"fee", type:"fee", title:"Investment fees", detail:"Provider and fund fees", date:`30 ${month.short}`, amount:`−${this.money(month.fees)}`, status:"Deducted", source:"Investment account", explanation:"Fees are already reflected in your portfolio value. This combines the provider and underlying fund costs recorded this month.", icon:Landmark },
      ];
    },
    filteredActivity() {
      return this.activityFilter === "all" ? this.activeActivity : this.activeActivity.filter((event) => event.type === this.activityFilter);
    },
    agentAnswer() {
      if (this.agentTopic === "fees") {
        return { title:"You paid £48.20 in investment fees over the last 12 months.", copy:"That is about 3.3% of the £1,450 you added during the same period.", series:[3.5,7.1,10.8,14.6,18.5,22.5,26.6,30.8,35.1,39.5,43.7,48.2] };
      }
      if (this.agentTopic === "dip") {
        return { title:"Your portfolio fell £97.50 in July.", copy:"Market movement reduced the value by £213.10, while £120 of automatic investments softened the decline. Fees accounted for £4.40.", series:[3989,4076,4168,4070.5,4214.2,4407.82] };
      }
      if (this.agentTopic === "period") {
        return { title:`Your portfolio is worth ${this.money(this.activeMonth.value)} in ${this.activeMonth.label}.`, copy:`You added ${this.money(this.activeMonth.contributions)}, market movement contributed ${this.signedMoney(this.activeMonth.market)}, and fees were ${this.money(this.activeMonth.fees)}.`, series:this.miniMonths.map((month) => month.value) };
      }
      return this.applePerformance[this.agentRange];
    },
    agentChartPoints() { return this.chartPoints(this.agentAnswer.series, 300, 100); },
    agentLastPoint() {
      const pairs = this.agentChartPoints.split(" ");
      const [x, y] = pairs[pairs.length - 1].split(",").map(Number);
      return { x, y };
    },
    followUpSuggestions() {
      const suggestions = {
        apple: ["Why did my portfolio dip in July?", "How much have I paid in fees this year?"],
        dip: ["What drove my portfolio performance over this period?", "How much have I paid in fees this year?"],
        fees: ["How much profit did I make from Apple in the last 3 months?", "Why did my portfolio dip in July?"],
        period: ["How much profit did I make from Apple in the last 3 months?", "How much have I paid in fees this year?"],
      };
      return (suggestions[this.agentTopic] || suggestions.period).filter((question) => question !== this.agentQuestion);
    },
  },
  methods: {
    money(value) { return new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", minimumFractionDigits: 2 }).format(value); },
    signedMoney(value) { return `${value >= 0 ? "+" : "−"}${this.money(Math.abs(value))}`; },
    selectInvestmentGraphRange(range) {
      this.investmentGraphRange = range;
      this.hoveredInvestmentEvent = null;
    },
    setHoveredInvestmentEvent(eventId) {
      this.hoveredInvestmentEvent = eventId;
    },
    moveMonth(direction) {
      const nextIndex = Math.max(0, Math.min(this.months.length - 1, this.activeIndex + direction));
      this.selectedMonth = this.months[nextIndex].id;
      this.selectedEvent = null;
    },
    openActivity(filter = "all") {
      this.activityFilter = filter;
      this.selectedEvent = null;
      this.screen = "activity";
    },
    toggleAutomationManagement() {
      this.automationManaged = !this.automationManaged;
      if (!this.automationManaged) this.automationEditing = false;
    },
    saveAutomation() {
      const amount = Number(this.automationAmount);
      this.automationAmount = Number.isFinite(amount) && amount > 0 ? amount : 75;
      this.automationEditing = false;
      this.automationSaved = true;
    },
    askPulse(question) {
      const cleanQuestion = (question || "").trim();
      if (!cleanQuestion) return;
      const normalized = cleanQuestion.toLowerCase();
      this.agentQuestion = cleanQuestion;
      if (normalized.includes("fee")) this.agentTopic = "fees";
      else if (normalized.includes("july") || normalized.includes("dip")) this.agentTopic = "dip";
      else if (normalized.includes("apple") || normalized.includes("profit") || normalized.includes("stock")) this.agentTopic = "apple";
      else if (normalized.includes("portfolio") || normalized.includes("period") || normalized.includes("month")) this.agentTopic = "period";
      else this.agentTopic = "period";
      this.agentInput = "";
      this.screen = "ask";
      this.focusChatEvidence();
    },
    selectPulseSection(section) {
      this.screen = section;
      if (section === "overview") {
        this.$nextTick(() => {
          if (this.$refs.overviewScreen) this.$refs.overviewScreen.scrollTop = 0;
        });
      }
      if (section === "ask") this.focusChatEvidence();
    },
    scrollToComparison() {
      this.$nextTick(() => {
        const screen = this.$refs.overviewScreen;
        const comparison = this.$refs.comparisonSection;
        if (screen && comparison) screen.scrollTop = Math.max(0, comparison.offsetTop - 12);
      });
    },
    openPulseComparison() {
      this.screen = "overview";
      this.scrollToComparison();
    },
    focusChatEvidence() {
      this.$nextTick(() => {
        if (this.$refs.chatThread) this.$refs.chatThread.scrollTop = this.agentQuestion ? this.$refs.chatThread.scrollHeight : 0;
      });
    },
    setAgentRange(range) {
      this.agentRange = range.id;
      this.agentTopic = "apple";
      const rangeWords = { one:"month", three:"3 months", six:"6 months", year:"year" };
      this.agentQuestion = `How much profit did I make from Apple in the last ${rangeWords[range.id]}?`;
    },
    chartPoints(values, width, height, domainMin = null, domainMax = null) {
      return this.chartCoordinates(values, width, height, domainMin, domainMax).map((point) => `${point.x},${point.y}`).join(" ");
    },
    chartCoordinates(values, width, height, domainMin = null, domainMax = null) {
      if (!values.length) return "";
      const min = domainMin ?? Math.min(...values);
      const max = domainMax ?? Math.max(...values);
      const range = Math.max(1, max - min);
      const xStep = values.length === 1 ? 0 : (width - 20) / (values.length - 1);
      return values.map((value, index) => {
        const x = 10 + index * xStep;
        const y = 10 + (1 - (value - min) / range) * (height - 20);
        return { x: Number(x.toFixed(1)), y: Number(y.toFixed(1)) };
      });
    },
  },
};
</script>

<style scoped>
.pulse-case { --plum:#8e21e6; --plum-dark:#2b103c; --mint:#008d78; background:var(--color-bg); color:#191919; min-height:100vh; }
.pulse-hero { max-width:1280px; margin:0 auto; padding:clamp(32px,5vw,68px) clamp(16px,5vw,64px) clamp(48px,6vw,80px); }
.hero-copy { display:flex; flex-direction:column; align-items:center; margin:0 auto clamp(32px,4vw,52px); max-width:54rem; text-align:center; }
.back-link { align-self:flex-start; display:inline-flex; width:max-content; align-items:center; gap:7px; margin-bottom:20px; color:var(--color-text-secondary); font-size:13px; }
.project-label { margin:0 0 10px; color:#6e397f; font-size:11px; font-weight:700; }
.hero-copy h1 { color:var(--plum-dark); font-size:clamp(52px,7vw,88px); line-height:.94; letter-spacing:-.04em; text-wrap:balance; }
.hero-lead { max-width:42ch; margin-top:16px; color:#382b3d; font-size:clamp(17px,1.8vw,22px); line-height:1.45; }
.disclaimer { max-width:34rem; margin-top:16px; padding:10px 12px; border:1px solid #d7ccd9; border-radius:8px; background:#fff; color:#624f68; font-size:12px; line-height:1.55; }
.prototype-wrap { display:grid; grid-template-columns:minmax(330px,430px) minmax(280px,1fr); align-items:center; gap:clamp(42px,8vw,100px); padding:clamp(24px,4vw,52px); border:1px solid #ded4e1; border-radius:16px; background:#f1eaf4; }
.phone { position:relative; overflow:hidden; width:min(100%,390px); min-height:760px; margin:auto; border:8px solid #191919; border-radius:38px; background:#f7f7f7; box-shadow:0 20px 50px #32124626; }
.phone-status { display:flex; justify-content:space-between; padding:17px 22px 9px; color:#202020; font-size:11px; font-weight:700; }
.phone-header { display:grid; grid-template-columns:1fr auto 1fr; align-items:center; min-height:46px; padding:0 18px 6px; background:#fff; }
.phone-header strong { color:#242124; font-size:15px; }.phone-header button { justify-self:end; border:0; background:transparent; color:var(--plum); cursor:pointer; }
.plan-badge { width:max-content; padding:4px 11px; border-radius:13px 13px 13px 2px; background:linear-gradient(135deg,#7e16d6,#a878ee); color:#fff; font-size:10px; font-weight:700; }
.pulse-tabs { display:grid; grid-template-columns:repeat(3,1fr); padding:0 14px; border-bottom:1px solid #e7e4e8; background:#fff; }
.pulse-tabs button { padding:10px 2px 9px; border:0; border-bottom:2px solid transparent; background:transparent; color:#787378; font:650 9px/1 inherit; cursor:pointer; }
.pulse-tabs button.active { border-bottom-color:var(--plum); color:var(--plum); }
.phone-screen { height:615px; overflow-y:auto; padding:14px 16px 94px; scrollbar-width:none; }.phone-screen::-webkit-scrollbar{display:none}
.month-navigation { display:grid; grid-template-columns:30px 1fr 30px; align-items:center; margin-bottom:13px; text-align:center; }
.month-navigation button { display:grid; width:29px; height:29px; place-items:center; border:1px solid #dedade; border-radius:50%; background:#fff; color:#4b454b; cursor:pointer; }.month-navigation button:disabled{opacity:.28;cursor:not-allowed}.month-navigation div p{margin:0 0 2px;color:#858085;font-size:8px}.month-navigation h2{font-size:19px;line-height:1.1}
.screen-heading { display:flex; align-items:flex-start; justify-content:space-between; gap:12px; margin-bottom:14px; }
.screen-heading p { margin:0 0 3px; color:#777; font-size:9px; }.screen-heading h2 { font-size:22px; line-height:1.1; }
.detail-action { padding:7px 11px; border:1px solid #c9b9d0; border-radius:999px; background:#fff; color:var(--plum); font:650 8px/1 inherit; cursor:pointer; }
.value-card,.month-story,.insight-card,.automation-card,.trend-card,.period-summary,.month-comparison,.next-card,.manage-panel { border-radius:12px; background:#fff; box-shadow:0 2px 8px #2b103c0c; }
.value-card { padding:14px; }.value-topline,.chart-key { display:flex; justify-content:space-between; align-items:center; color:#707070; font-size:8px; }.value-card>strong { display:block; margin-top:5px; font-size:28px; letter-spacing:-.03em; }.positive { color:var(--mint); font-weight:700; }
.sparkline { display:block; width:100%; height:75px; margin:7px 0 2px; }.chart-key { justify-content:flex-start; gap:14px; }.chart-key span { display:flex; align-items:center; gap:4px; }.chart-key i { width:6px; height:6px; border-radius:50%; }.value-dot{background:var(--mint)}.invested-dot{background:var(--plum)}.return-dot{background:var(--plum)}
.investment-range-tabs{display:grid;grid-template-columns:repeat(5,1fr);gap:3px;margin:10px 0 5px;padding:3px;border-radius:8px;background:#efebf0}.investment-range-tabs button{padding:6px 1px;border:0;border-radius:6px;background:transparent;color:#716a71;font:700 7px/1 inherit;cursor:pointer}.investment-range-tabs button.active{background:#fff;color:var(--plum);box-shadow:0 1px 4px #2b103c14}.interactive-investment-chart{position:relative}.interactive-investment-chart svg{display:block;width:100%;height:105px;overflow:visible}.investment-marker{cursor:pointer;outline:none}.investment-marker .marker-hit{fill:transparent;pointer-events:all}.investment-marker .marker-dot{stroke:#fff;stroke-width:2.5;transition:r .14s ease}.investment-marker .marker-dot.investment{fill:#8e21e6}.investment-marker .marker-dot.withdrawal{fill:#d97724}.investment-marker text{fill:#fff;font:700 11px/1 sans-serif;pointer-events:none}.investment-marker:focus .marker-dot{stroke:#2b103c;stroke-width:3}.marker-tooltip rect{fill:#2b103c}.marker-tooltip text{fill:#fff;font:700 6px/1 sans-serif;pointer-events:none}.chart-timeline{display:flex;justify-content:space-between;margin:-2px 1px 0;color:#817b82;font-size:7px}.chart-key{flex-wrap:wrap}.chart-key .activity-dot{background:linear-gradient(90deg,#8e21e6 0 50%,#d97724 50%)}.investment-event-detail{display:flex;justify-content:space-between;gap:8px;min-height:29px;margin-top:8px;padding:8px 9px;border-radius:8px;background:#f2eafb;color:#4e2a60;font-size:7px;line-height:1.3}.investment-event-detail span{display:flex;flex-direction:column;gap:2px}.investment-event-detail span.withdrawal{color:#92521c}.investment-event-detail small{align-self:center;color:#6a576f;font-size:7px;text-align:right}.chart-density-note{margin:7px 0 0;color:#777177;font-size:7px;line-height:1.35}
.metric-strip { display:grid; grid-template-columns:repeat(3,1fr); gap:7px; margin-top:8px; }.metric-strip article{padding:10px 9px;border:1px solid #ece8ed;border-radius:10px;background:#fff}.metric-strip span{display:block;color:#807a80;font-size:7px}.metric-strip strong{display:block;margin-top:3px;font-size:9px}
.month-story { margin-top:9px; padding:14px; }.story-heading { display:flex; justify-content:space-between; align-items:flex-end; gap:10px; padding-bottom:12px; border-bottom:1px solid #eee; }.story-heading p { margin:0 0 3px; color:#777; font-size:8px; }.story-heading strong { color:var(--mint); font-size:22px; }.story-heading button{display:flex;align-items:center;gap:2px;padding:0;border:0;background:transparent;color:var(--plum);font:650 8px/1 inherit;cursor:pointer}
.breakdown { display:grid; gap:10px; padding-top:12px; }.breakdown-row { display:grid; grid-template-columns:100px 1fr 49px; align-items:center; gap:7px; }.breakdown-label { display:flex; align-items:center; gap:6px; font-size:8px; }.breakdown-label i { width:7px; height:7px; border-radius:50%; }.bar-track { overflow:hidden; height:6px; border-radius:999px; background:#eee; }.bar-track i { display:block; height:100%; border-radius:inherit; }.breakdown-row strong { font-size:8px; text-align:right; }.negative { color:#6f6f6f!important; }
.automation-card{margin-top:9px;padding:13px}.automation-top{display:grid;grid-template-columns:30px 1fr 24px;align-items:center;gap:8px}.automation-top>span{display:grid;width:30px;height:30px;place-items:center;border-radius:9px;background:#efe1fa;color:var(--plum)}.automation-top strong{font-size:9px}.automation-top p{margin:2px 0 0;color:#787278;font-size:7px}.automation-top button{display:grid;width:24px;height:24px;place-items:center;border:0;border-radius:50%;background:#f5f2f6;color:var(--plum);cursor:pointer}.completion-track{overflow:hidden;height:5px;margin:10px 0;border-radius:999px;background:#e7e2e8}.completion-track i{display:block;height:100%;border-radius:inherit;background:var(--plum)}.next-investment{display:grid;grid-template-columns:1fr auto;gap:3px;color:#6e686e;font-size:7px}.next-investment strong{color:#282428;font-size:8px}.next-investment small{display:flex;grid-column:1/-1;align-items:center;gap:4px;color:var(--mint);font-size:7px}
.insight-card { display:flex; gap:10px; margin-top:9px; padding:13px; }.insight-icon { display:grid; flex:0 0 30px; height:30px; place-items:center; border-radius:50%; background:#f0ddff; color:var(--plum); }.insight-card strong { font-size:9px; }.insight-card p { margin:4px 0 0; color:#606060; font-size:8px; line-height:1.45; }.insight-card button{margin-top:7px;padding:0;border:0;background:transparent;color:var(--plum);font:700 7px/1 inherit;cursor:pointer}
.pulse-comparison{margin-top:18px;padding-top:16px;border-top:1px solid #e4dfe5}.pulse-comparison-heading{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;margin-bottom:11px}.pulse-comparison-heading p{margin:0 0 3px;color:#777;font-size:8px}.pulse-comparison-heading h3{font-size:17px;line-height:1.1}
.range-tabs{display:grid;grid-template-columns:repeat(4,1fr);gap:3px;margin-bottom:10px;padding:3px;border-radius:9px;background:#eae7eb}.range-tabs button{padding:7px 2px;border:0;border-radius:7px;background:transparent;color:#6e696e;font:650 8px/1 inherit;cursor:pointer}.range-tabs button.active{background:#fff;color:var(--plum);box-shadow:0 1px 4px #2b103c14}
.trend-card{padding:14px}.trend-summary{display:flex;align-items:flex-end;justify-content:space-between}.trend-summary span{display:block;color:#777;font-size:8px}.trend-summary strong{display:block;margin-top:3px;font-size:21px}.trend-summary b{color:var(--mint);font-size:10px}.range-chart{display:block;width:100%;height:132px;margin-top:5px}.range-labels{display:flex;justify-content:space-between;margin:0 8px 7px;color:#8a858a;font-size:7px}
.period-summary{margin-top:9px;padding:13px}.period-summary h3{margin:0 0 10px;font-size:10px}.period-summary>div{display:grid;grid-template-columns:repeat(3,1fr);gap:7px}.period-summary article+article{border-left:1px solid #ebe7ec;padding-left:7px}.period-summary span{display:block;color:#7c767c;font-size:7px;line-height:1.25}.period-summary strong{display:block;margin-top:4px;font-size:9px}
.month-comparison{display:grid;grid-template-columns:1fr 26px 1fr;align-items:center;margin-top:9px;padding:13px;text-align:center}.month-comparison div>span,.month-comparison small{display:block;color:#7c767c;font-size:7px}.month-comparison strong{display:block;margin:3px 0;font-size:13px}.versus{display:grid;width:26px;height:26px;place-items:center;border-radius:50%;background:#f0e4f7;color:var(--plum);font-size:7px;font-weight:700}.risk-note { display:flex; gap:7px; margin:12px 3px 0; color:#777; font-size:7px; line-height:1.45; }.ask-context-link{display:flex;align-items:center;gap:5px;margin:10px auto 0;padding:0;border:0;background:transparent;color:var(--plum);font:700 8px/1 inherit;cursor:pointer}
.activity-total{padding:5px 8px;border-radius:999px;background:#ece6ef;color:#684179;font-size:7px;font-weight:700}.activity-filters{display:flex;gap:5px;margin-bottom:8px;overflow-x:auto;scrollbar-width:none}.activity-filters button{white-space:nowrap;padding:7px 10px;border:1px solid #ddd6e0;border-radius:999px;background:#fff;color:#605b60;font:650 7px/1 inherit;cursor:pointer}.activity-filters button.active{border-color:var(--plum);background:#eee0f8;color:#7014b5}
.activity-list { display:grid; gap:0; margin:0; padding:0; list-style:none; }.activity-list li { border-bottom:1px solid #e7e7e7; }.event-main{display:grid;width:100%;grid-template-columns:34px 1fr auto 14px;gap:9px;align-items:center;padding:12px 0;border:0;background:transparent;color:#202020;text-align:left;cursor:pointer}.event-icon { display:grid; width:32px; height:32px; place-items:center; border-radius:50%; background:#daf3ec; color:var(--mint); }.event-icon.market{background:#e9daf6;color:var(--plum)}.event-icon.fee{background:#eee;color:#555}.event-copy strong{display:block;font-size:9px}.event-copy>span{display:block;margin-top:2px;color:#666;font-size:7px}.event-copy small{display:block;margin-top:3px;color:#8a8a8a;font-size:7px}.event-main b{font-size:8px}.event-main>svg{color:#8d878d;transition:transform .2s ease}.activity-list li.expanded .event-main>svg{transform:rotate(180deg)}.event-detail{display:grid;gap:5px;margin:0 0 10px 41px;padding:9px 10px;border-radius:8px;background:#efebf0;color:#716b71;font-size:7px}.event-detail span{display:flex;justify-content:space-between}.event-detail strong{font-size:7px}.event-detail p{margin:2px 0 0;line-height:1.4}
.next-card { display:flex; justify-content:space-between; align-items:center; margin-top:11px; padding:13px; }.next-card span { color:#666; font-size:7px; }.next-card strong { display:block; margin-top:3px; font-size:10px; }.next-card .ready { display:flex; align-items:center; gap:4px; color:var(--mint); font-weight:700; }
.manage-button{width:100%;margin-top:9px;padding:10px;border:1px solid var(--plum);border-radius:9px;background:transparent;color:var(--plum);font:700 8px/1 inherit;cursor:pointer}.manage-panel{display:grid;grid-template-columns:1fr auto;align-items:center;gap:8px;margin-top:7px;padding:12px}.manage-panel span,.manage-panel small{display:block;color:#777;font-size:7px}.manage-panel strong{display:block;margin:3px 0;font-size:9px}.manage-panel button{padding:6px 10px;border:0;border-radius:999px;background:#eee0f8;color:#7014b5;font:700 7px/1 inherit;cursor:pointer}.automation-editor{display:grid;grid-column:1/-1;gap:8px;padding-top:4px;border-top:1px solid #ebe6ed}.automation-editor label{display:flex;align-items:center;justify-content:space-between;color:#655f65;font-size:8px;font-weight:700}.automation-editor input{width:68px;padding:7px 8px;border:1px solid #cfc3d5;border-radius:7px;background:#fff;color:#282228;font:700 8px/1 inherit;text-align:right}.automation-frequency{display:grid;grid-template-columns:repeat(2,1fr);gap:4px}.automation-frequency button{border:1px solid #ddd1e3;background:#fff;color:#655f65}.automation-frequency button.active{border-color:var(--plum);background:#eee0f8;color:#7014b5}.automation-editor .save-automation{padding:8px;border-radius:7px;background:var(--plum);color:#fff}.automation-saved{display:flex;grid-column:1/-1;align-items:center;gap:4px;margin:0;color:var(--mint)!important;font-size:7px!important;font-weight:700}
.ask-heading{display:flex;align-items:center;gap:9px;margin-bottom:11px}.ask-heading>span{display:grid;width:32px;height:32px;place-items:center;border-radius:10px;background:var(--plum);color:#fff}.ask-heading p{margin:0 0 2px;color:#766f76;font-size:8px}.ask-heading h2{font-size:20px;line-height:1.1}.question-suggestions{display:flex;gap:6px;margin:0 -16px 12px;padding:0 16px 3px;overflow-x:auto;scrollbar-width:none}.question-suggestions button{flex:0 0 160px;padding:8px 9px;border:1px solid #ded7e1;border-radius:9px;background:#fff;color:#4f494f;font:600 7px/1.35 inherit;text-align:left;cursor:pointer}.conversation{display:grid;gap:8px}.user-message{max-width:78%;margin:0 0 0 auto;padding:9px 11px;border-radius:12px 12px 3px 12px;background:#e9d6f6;color:#351742;font-size:8px;line-height:1.4}.agent-answer{padding:13px;border-radius:3px 12px 12px;background:#fff;box-shadow:0 2px 8px #2b103c0c}.answer-source{display:grid;grid-template-columns:25px auto 1fr;align-items:center;gap:6px;margin-bottom:10px}.answer-source>span{display:grid;width:25px;height:25px;place-items:center;border-radius:8px;background:var(--plum);color:#fff}.answer-source strong{font-size:9px}.answer-source small{color:#817b81;font-size:7px;text-align:right}.agent-answer>p{margin:0;color:#4e494e;font-size:8px;line-height:1.5}.agent-answer>p strong{color:#201c20}.agent-range{display:grid;grid-template-columns:repeat(4,1fr);gap:3px;margin:11px 0 8px;padding:3px;border-radius:8px;background:#eeeaef}.agent-range button{padding:6px 2px;border:0;border-radius:6px;background:transparent;color:#686168;font:700 7px/1 inherit;cursor:pointer}.agent-range button.active{background:#fff;color:var(--plum);box-shadow:0 1px 4px #2b103c14}.answer-chart{padding-top:3px}.answer-chart>div:first-child{display:flex;align-items:flex-end;justify-content:space-between}.answer-chart span{color:#7a747a;font-size:7px}.answer-chart strong{font-size:12px}.answer-chart svg{display:block;width:100%;height:92px}.answer-chart.compact svg{height:105px}.chart-axis{display:flex;justify-content:space-between;margin-top:-5px}.answer-breakdown{display:grid;gap:6px;margin:11px 0 0;padding-top:10px;border-top:1px solid #ece8ed}.answer-breakdown div{display:flex;justify-content:space-between}.answer-breakdown dt{color:#706a70;font-size:7px}.answer-breakdown dd{margin:0;font-size:8px;font-weight:700}.answer-note{display:flex;gap:5px;margin-top:11px!important;padding-top:9px;border-top:1px solid #ece8ed;color:#777!important;font-size:7px!important}.answer-actions{display:flex;gap:6px;margin-top:10px}.answer-actions button{flex:1;padding:8px 5px;border:1px solid #ccbcd4;border-radius:7px;background:#fff;color:#6e187f;font:700 7px/1 inherit;cursor:pointer}.answer-actions button:first-child{border-color:var(--plum);background:var(--plum);color:#fff}.ask-form{position:sticky;bottom:-80px;display:grid;grid-template-columns:1fr 32px;align-items:center;gap:7px;margin-top:10px;padding:7px;border:1px solid #c9bdce;border-radius:12px;background:#fff;box-shadow:0 4px 12px #2b103c12}.ask-form input{min-width:0;padding:4px;border:0;outline:0;color:#242024;font:500 8px/1.2 inherit}.ask-form input::placeholder{color:#655f65}.ask-form button{display:grid;width:32px;height:32px;place-items:center;border:0;border-radius:9px;background:var(--plum);color:#fff;cursor:pointer}.ask-form button:disabled{background:#d8cddd;color:#817881;cursor:not-allowed}
.follow-up-prompts{display:flex;flex-wrap:wrap;gap:5px;margin-top:11px;padding-top:9px;border-top:1px solid #ece8ed}.follow-up-prompts>span{width:100%;color:#706970;font-size:7px;font-weight:700}.follow-up-prompts button{padding:6px 7px;border:1px solid #ddd2e2;border-radius:7px;background:#fff;color:#57116d;font:650 7px/1.35 inherit;text-align:left;cursor:pointer}.ask-form{position:static;bottom:auto}
.ask-screen{box-sizing:border-box;display:flex;min-height:0;flex-direction:column;overflow:hidden;padding:0 0 68px;background:#f4f1f5}
.chat-header{display:flex;flex:0 0 auto;align-items:center;gap:9px;padding:12px 15px;border-bottom:1px solid #e1dce3;background:#fff}.pulse-avatar{display:grid;width:32px;height:32px;place-items:center;border-radius:10px;background:var(--plum);color:#fff}.chat-header h2{font-size:15px;line-height:1.1}.chat-header p{display:flex;align-items:center;gap:4px;margin:3px 0 0;color:#5f585f;font-size:7px}.chat-header p i{width:5px;height:5px;border-radius:50%;background:#00a487}
.chat-thread{flex:1;min-height:0;overflow-y:auto;padding:13px 12px 20px;scrollbar-width:none}.chat-thread::-webkit-scrollbar{display:none}.chat-message{display:flex;align-items:flex-start;gap:7px;margin-bottom:13px}.message-avatar{display:grid;flex:0 0 24px;height:24px;place-items:center;border-radius:8px;background:var(--plum);color:#fff}.message-content{max-width:calc(100% - 31px)}.message-meta{display:flex;align-items:center;justify-content:space-between;gap:8px;margin:0 2px 4px;color:#6b646b;font-size:7px}.message-meta strong{color:#2c272c;font-size:7px}.message-bubble{padding:10px 11px;border-radius:4px 12px 12px;background:#fff;box-shadow:0 2px 8px #2b103c0c}.message-bubble>p{margin:0;color:#353035;font-size:8px;line-height:1.5}.message-bubble>p strong{color:#201c20}.intro-message .message-bubble{max-width:270px}.prompt-list{display:grid;gap:5px;margin-top:9px}.prompt-list button{width:100%;padding:7px 8px;border:1px solid #ddd4e1;border-radius:7px;background:#fff;color:#57116d;font:650 7px/1.35 inherit;text-align:left;cursor:pointer}.prompt-list button::after{content:'›';float:right;font-size:11px;line-height:.7}.chat-divider{display:flex;align-items:center;gap:8px;margin:4px 0 13px;color:#827b82;font-size:7px}.chat-divider::before,.chat-divider::after{content:'';height:1px;flex:1;background:#ded8e0}.user-chat-message{justify-content:flex-end}.user-chat-message .message-content{max-width:78%}.user-chat-message .message-meta{justify-content:flex-end}.user-chat-message .message-bubble{border-radius:12px 4px 12px 12px;background:var(--plum);box-shadow:none}.user-chat-message .message-bubble p{color:#fff}.answer-message{margin-bottom:0}.answer-message .message-content{width:calc(100% - 31px);max-width:none}.pulse-answer-bubble{padding:11px}.supporting-data{margin-top:10px;padding-top:10px;border-top:1px solid #e4dce8}.data-heading{display:flex;align-items:flex-end;justify-content:space-between}.data-heading span{color:#675f67;font-size:7px}.data-heading strong{font-size:10px}.supporting-data svg{display:block;width:100%;height:82px;margin-top:3px}.supporting-data.compact svg{height:96px}.supporting-data .answer-breakdown{margin-top:8px}.chat-composer{display:grid;flex:0 0 auto;grid-template-columns:1fr 34px;align-items:center;gap:7px;margin:8px 12px 10px;padding:6px 6px 6px 10px;border:1px solid #b9aebe;border-radius:11px;background:#fff;box-shadow:0 2px 8px #2b103c0c}.chat-composer input{min-width:0;padding:5px 0;border:0;outline:0;color:#242024;font:500 8px/1.2 inherit}.chat-composer input::placeholder{color:#5f585f}.chat-composer button{display:grid;width:34px;height:34px;place-items:center;border:0;border-radius:8px;background:var(--plum);color:#fff;cursor:pointer}.chat-composer button:disabled{background:#ded6e2;color:#756d78;cursor:not-allowed}
.intro-message .message-content{width:calc(100% - 31px);max-width:none}.intro-message .message-bubble{max-width:none}.prompt-list{display:flex;gap:5px;margin:8px -11px -2px 0;padding:0 11px 2px 0;overflow-x:auto;scrollbar-width:none}.prompt-list::-webkit-scrollbar{display:none}.prompt-list button{flex:0 0 152px;width:auto;min-height:42px}
.phone-nav { position:absolute; z-index:3; right:0; bottom:0; left:0; display:grid; grid-template-columns:repeat(5,1fr); padding:10px 8px 16px; border-top:1px solid #ddd; background:#fff; }.phone-nav button { display:grid; justify-items:center; gap:3px; border:0; background:transparent; color:#555; font:500 7px/1 inherit;cursor:pointer }.phone-nav button.active { color:var(--plum); }
.prototype-notes { max-width:480px; }.prototype-notes h2 { color:var(--plum-dark); font-size:clamp(34px,4vw,58px); line-height:1.02; letter-spacing:-.035em; text-wrap:balance; }.prototype-notes>p:not(.project-label) { max-width:55ch; margin-top:18px; color:#5b4d60; font-size:14px; line-height:1.7; }.prototype-actions { display:flex; gap:8px; margin-top:24px; }.prototype-actions button { padding:10px 14px; border:1px solid #b8a6c0; border-radius:6px; background:transparent; color:#3b2446; font:600 11px/1 inherit; cursor:pointer; }.prototype-actions button.active { border-color:var(--plum-dark); background:var(--plum-dark); color:#fff; }
.feature-brief { display:grid; grid-template-columns:repeat(3,1fr); gap:10px; margin:22px auto 0; max-width:760px; }.feature-brief article { padding:14px; border:1px solid #ded4e1; border-radius:8px; background:#fff; }.feature-brief span { color:var(--plum); font-size:10px; font-weight:700; }.feature-brief strong { display:block; margin-top:8px; font-size:14px; }.feature-brief p { margin-top:5px; color:#5d5d5d; font-size:11px; line-height:1.5; }
.story-section { display:grid; grid-template-columns:minmax(280px,.8fr) 1fr; gap:clamp(40px,8vw,130px); padding:clamp(60px,8vw,110px) max(22px,calc((100vw - 1180px)/2)); background:#fff; }.story-section h2 { max-width:13ch; font-size:clamp(36px,5vw,68px); line-height:1.02; letter-spacing:-.035em; text-wrap:balance; }.story-section>p { max-width:55ch; color:#505050; font-size:16px; line-height:1.8; }.reflection { background:var(--plum-dark); color:#fff; }.reflection .project-label { color:#d5aae9; }.reflection h2 { color:#fff; }.reflection>p { color:#dfd5e3; }
@media(max-width:820px){.back-link{margin-bottom:22px}.prototype-wrap{grid-template-columns:1fr}.prototype-notes{order:-1}.feature-brief{grid-template-columns:1fr}.story-section{grid-template-columns:1fr;gap:28px}}
@media(max-width:480px){.pulse-hero{padding-inline:12px}.hero-copy{padding-inline:8px}.phone{min-height:740px;border-width:5px;border-radius:30px}.prototype-notes{padding-inline:8px}.prototype-actions{flex-wrap:wrap}.feature-brief article{padding:30px 22px}}
@media(prefers-reduced-motion:reduce){*{scroll-behavior:auto!important}.phone *{transition:none!important}}
</style>
