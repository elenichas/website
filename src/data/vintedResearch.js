// Public secondary research, reviewed 10 November 2026. Dates refer to the
// indexed thread dates; some Reddit pages were readable only via search text.
export const sources = [
  {
    id: "R1",
    type: "Reddit",
    date: "14 May 2026",
    title: "Customer services not responding for over 2 weeks",
    url: "https://www.reddit.com/r/vinted/comments/1td5hms/customer_services_not_responding_for_over_2_weeks/",
    note: "Reported delays and repeated automated replies. User account, not independently verified.",
  },
  {
    id: "R2",
    type: "Reddit",
    date: "17 September 2026",
    title: "The search on Vinted is abysmal",
    url: "https://www.reddit.com/r/vinted/comments/1wiyvwr/the_search_on_vinted_is_abysmal/",
    note: "Irrelevant results; a commenter asks for literal keyword matching.",
  },
  {
    id: "R3",
    type: "Reddit",
    date: "28 September 2026",
    title: "A plea to sellers: Please be more detailed with sizing",
    url: "https://www.reddit.com/r/vinted/comments/1wspvjl/a_plea_to_sellers_please_be_more_detailed_with/",
    note: "Size filters, brand labels and perceived fit do not align for this buyer.",
  },
  {
    id: "R4",
    type: "Reddit",
    date: "4 May 2026",
    title:
      "The fact that Vinted has a £0.75 platform fee on £1 items is disgusting",
    url: "https://www.reddit.com/r/vintedUK/comments/1t3e9jr/the_fact_that_vinted_has_a_075_platform_fee_on_1/",
    note: "Low-value purchases become less appealing after delivery and fees. The title is a user claim, not a current fee specification.",
  },
  {
    id: "R5",
    type: "Reddit",
    date: "18 October 2025",
    title: "Other than resellers, does anyone actually buy bundles?",
    url: "https://www.reddit.com/r/vintedUK/comments/1oa4ouf/other_than_resellers_does_anyone_actually_buy/",
    note: "Multiple buyers describe bundling to justify postage. Others only want matching sizes or specific useful items.",
  },
  {
    id: "R6",
    type: "Reddit",
    date: "9 June 2026",
    title: "Wardrobes and bundles",
    url: "https://www.reddit.com/r/vinted/comments/1u1huu1/wardrobes_and_bundles/",
    note: "A buyer describes searching through baby clothing to find women’s items. Indexed text; direct retrieval unavailable.",
  },
  {
    id: "R7",
    type: "Reddit",
    date: "15 May 2026",
    title: "Postage cost doubled for 2 items!",
    url: "https://www.reddit.com/r/vintedUK/comments/1tdpchs/postage_cost_doubled_for_2_items/",
    note: "A buyer reports a delivery increase outweighing a small discount. Evidence against guaranteed bundle savings.",
  },
  {
    id: "R8",
    type: "Reddit",
    date: "19 April 2025",
    title: "£1.50 for a brand new book, but extra fees/shipping bring it to £5",
    url: "https://www.reddit.com/r/vinted/comments/1k2ss67/150_for_a_brand_new_book_but_extra_feesshipping/",
    note: "Buyers discuss whether low-priced books remain worthwhile after fees; bundles are a suggested workaround.",
  },
  {
    id: "P1",
    type: "Vinted Help",
    date: "Reviewed 10 November 2026",
    title: "Buying a bundle",
    url: "https://www.vinted.co.uk/help/5/260-how-do-i-shop-bundles",
    note: "Existing same-seller bundles, favourites first, running bundle price, then shipping and fee at Buy now.",
  },
  {
    id: "P2",
    type: "Vinted Help",
    date: "Reviewed 10 November 2026",
    title: "Vinted fee",
    url: "https://www.vinted.co.uk/help/5/342-la-protection-acheteurs-vinted",
    note: "Fee varies by order; browsing already includes fee information. A fee display alone is not a new feature.",
  },
  {
    id: "P3",
    type: "Vinted Help",
    date: "Reviewed 10 November 2026",
    title: "How shipping works",
    url: "https://www.vinted.co.uk/help/753-how-shipping-works?access_channel=hc_search",
    note: "Shipping depends on parcel size and origin/destination. Buyers choose a carrier at checkout.",
  },
  {
    id: "P4",
    type: "Official app listing",
    date: "Observed 10 November 2026",
    title: "Vinted on Google Play",
    url: "https://play.google.com/store/apps/details?id=fr.vinted&hl=en_GB",
    note: "Publisher-supplied promotional screenshots used for visual reference, not an authenticated audit of the live UK bundle flow.",
  },
  {
    id: "P5",
    type: "Vinted Help",
    date: "Reviewed 10 November 2026",
    title: "Selling multiple items as a set",
    url: "https://www.vinted.co.uk/help/257-vendre-plusieurs-articles-dans-un-ensemble",
    note: "Bundle parcel size is calculated from item type and quantity; some changes need seller approval.",
  },
];

export const evidence = [
  {
    source: "R4",
    quote:
      "The reality of it is a £1 bargain is nearly £5 in the end unless you score good and can bundle lots of cheap stuff from the same member to offset the various costs incurred",
    finding: "The budget is the whole order.",
    implication: "Compare items, delivery and fees together.",
  },
  {
    source: "R5",
    quote: "I almost exclusively buy bundles to make postage worth it.",
    finding: "The behaviour already exists.",
    implication:
      "Improve bundle decisions instead of inventing a new buying habit.",
  },
  {
    source: "R6",
    quote:
      "I always look at what else a seller has, but I'm sick of looking through 150 items of baby clothing to see if there's any more ladies clothing.",
    finding: "Relevance is the effort.",
    implication: "Let buyers filter a seller’s wardrobe by category and size.",
  },
  {
    source: "R7",
    quote:
      "I wanted a blouse and saw a pair of cropped jeans as well, so added that to 'bundle', (saved 40p) only to see that Vinted has hiked postage to home, up to £5.89!",
    finding: "A discount is not the full story.",
    implication: "Expose delivery changes before the buyer commits.",
  },
];
