// Public identifiers only (they are visible in any page's network tab by design). No secrets here.
// Everything below is inert while the values are empty (see spec 0008, "Activation").
export const analytics = {
  posthog: {
    /** Project API key, starts with `phc_`. Empty = PostHog disabled. */
    key: '',
    /** `https://us.i.posthog.com` or `https://eu.i.posthog.com` (must match the project's region). */
    host: 'https://us.i.posthog.com',
    /** UI host, needed by the heatmap toolbar: `https://us.posthog.com` or `https://eu.posthog.com`. */
    uiHost: 'https://us.posthog.com',
  },
  goatcounter: {
    /** Site code: `https://<code>.goatcounter.com`. Empty = no counter. */
    code: '',
    /** Show an "Analytics" button to the public stats page (enable "Allow public view" in GoatCounter first). */
    publicStats: false,
  },
};

export const goatcounterUrl = analytics.goatcounter.code
  ? `https://${analytics.goatcounter.code}.goatcounter.com`
  : '';
