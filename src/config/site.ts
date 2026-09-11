// Central config for facts that must never be hard-coded in components.
// NOTE: phone below is a static fallback. Production should render this through
// the CTM dynamic-number-insertion snippet once forms-ctm.md / the CTM
// integration SOP is unblocked for this client (see .elev8/system/standards/forms-ctm.md).
export const site = {
  name: "Revive Recovery Center",
  phone: "(866) 694-2372",
  phoneHref: "tel:+18666942372",
  rating: {
    value: "4.9",
    outOf: "5",
    reviewCount: "39+",
    source: "Google",
  },
  address: {
    line1: "127 W. Juanita Ave., Suite 110",
    line2: "Mesa, AZ 85210",
    full: "127 W. Juanita Ave., Suite 110, Mesa, AZ 85210",
    mapsHref:
      "https://www.google.com/maps/search/?api=1&query=Revive+Recovery+Centers+127+W+Juanita+Ave+Suite+110+Mesa+AZ+85210",
  },
  bannerAlert: "Support Available 24/7",
  bannerWarning: "We do not accept Medicare or Medicaid",
  // Real production verification form destination (CallTrackingMetrics
  // FormReactor, BAA-covered per phi-data-handling.md). The key is a
  // per-form public key (CTM's own submission model), not an account
  // secret — safe to ship client-side.
  insuranceForm: {
    endpoint:
      "https://api.calltrackingmetrics.com/api/v1/formreactor/FRT472ABB2C5B9B141A2DBE35A5E3D5774F2FDF8F4847119AE38EEA2D8D110C3841",
    key: "1Sen0CHIXqG-ZLgjqsu7ZkR58jcJZXCdGZpU17n11nGUXyFF",
    // "insurance_carrier" and "membership_policy_id" are CTM's own
    // human-readable slugs; the other two are opaque CTM field IDs mapped
    // per the client's explicit instruction (2026-09-10).
    nameFieldKey: "field_126810542",
    emailFieldKey: "field_113545921",
  },
  insuranceCarriers: [
    "Aetna",
    "Ambetter",
    "Amerigroup",
    "AmeriHealth",
    "Anthem",
    "Blue Cross Blue Shield (BCBS)",
    "Bright Health",
    "CareFirst",
    "Cigna",
    "Community Healthcare Network",
    "First Choice Health",
    "First Health",
    "GEHA",
    "GuideWell",
    "Health Net",
    "HealthPartners",
    "Highmark",
    "Humana",
    "Intermountain Healthcare",
    "Kaiser Permanente",
    "Molina Healthcare",
    "MultiPlan",
    "Oscar",
    "Tufts Health Plan",
    "UnitedHealthcare",
    "Beacon Health Options",
    "Carelon Behavioral Health",
    "ComPsych",
    "Magellan Health",
    "MHN",
    "Optum Behavioral Health",
    "TRICARE",
    "TriWest Healthcare Alliance",
    "UMR",
    "Other",
  ],
} as const;
