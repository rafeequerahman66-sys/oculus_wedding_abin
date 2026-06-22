// Services packages. Prices are stored but NOT rendered (per spec).
// The middle card (Both-Side Signature) is the featured dark/lime variant.

export type PackageSection = {
  label: string;
  items: string[];
};

export type Package = {
  kicker: string;
  name: string;
  events: string;
  featured: boolean;
  sections: PackageSection[];
};

const CREW_PHOTO_VIDEO: string[] = [
  "1 Photographer + 1 Videographer (Bride Side)",
  "1 Photographer + 1 Videographer (Groom Side)",
  "Traditional & Candid Photography",
  "Traditional & Candid Videography",
];

const COMPLIMENTARY_STANDARD: string[] = [
  "4 Set Photo Frame",
  "Calendar",
  "Mini Book",
];

export const packages: Package[] = [
  {
    kicker: "Package 01",
    name: "Both-Side Essential",
    events: "Wedding Eve & Wedding Day",
    featured: false,
    sections: [
      { label: "Crew", items: CREW_PHOTO_VIDEO },
      {
        label: "Output",
        items: [
          "Highlight (1080P Full HDQ)",
          "Wedding Reel (1080P Full HDQ)",
          "Full Function Videos (1080P Full HDQ)",
          "2 Set 100-Page Album",
          "Soft Copies",
        ],
      },
      { label: "Complimentary", items: COMPLIMENTARY_STANDARD },
    ],
  },
  {
    kicker: "Package 02",
    name: "Both-Side Signature",
    events: "Wedding Eve / Engagement Eve, Engagement Day & Wedding Day",
    featured: true,
    sections: [
      { label: "Crew", items: CREW_PHOTO_VIDEO },
      {
        label: "Output",
        items: [
          "Engagement + Wedding Combined Highlight (1080P)",
          "Engagement Reel (1080P Full HDQ)",
          "Wedding Reel (1080P Full HDQ)",
          "Full Function Videos (1080P Full HDQ)",
          "2 Set 100-Page Album",
          "Soft Copies",
        ],
      },
      { label: "Complimentary", items: COMPLIMENTARY_STANDARD },
    ],
  },
  {
    kicker: "Package 03 · Premium",
    name: "Both-Side Premium",
    events:
      "Pre-Wedding · Engagement & Wedding — Photography & Cinematography",
    featured: false,
    sections: [
      {
        label: "Crew",
        items: [
          "1 Photographer + 1 Cinematography (Bride Side)",
          "1 Photographer + 1 Cinematography (Groom Side)",
          "1 Drone",
          "Traditional & Candid Photography",
          "Traditional & Candid Cinematography",
        ],
      },
      {
        label: "Output",
        items: [
          "Engagement + Wedding Combined Highlight (1080P)",
          "Engagement Reel (1080P Full HDQ)",
          "Wedding Reel (1080P Full HDQ)",
          "Full Function Videos (1080P Full HDQ)",
          "2 Set 120-Page Premium Album",
          "Soft Copies",
        ],
      },
      {
        label: "Complimentary",
        items: ["4 Set Photo Frame", "Calendar", "2 Mini Book"],
      },
    ],
  },
];

export const steps = [
  {
    n: "01",
    title: "Say Hello",
    text: "Reach out and tell me about your day. We chat over coffee — in person or on a call.",
  },
  {
    n: "02",
    title: "Plan Together",
    text: "I help shape a timeline that lets the day breathe, with light and ease in mind.",
  },
  {
    n: "03",
    title: "The Day",
    text: "I arrive early and stay close, quietly catching the moments as they happen.",
  },
  {
    n: "04",
    title: "Heirlooms",
    text: "Your gallery arrives within weeks, followed by a hand-bound album to treasure.",
  },
];

export const faqs = [
  {
    q: "How far in advance should we book?",
    a: "Most couples reach out 9 to 14 months ahead. I take a limited number of weddings each year to give every one my full attention.",
  },
  {
    q: "Do you travel?",
    a: "Always. I am based in Bengaluru but photograph weddings across India and around the world — travel is quoted simply and transparently.",
  },
  {
    q: "When will we see our photos?",
    a: "A sneak peek lands within a week of the wedding, and your full gallery follows within four to six weeks.",
  },
  {
    q: "What is your shooting style?",
    a: "Documentary at heart, with soft, true-to-life colour. I direct gently when it helps, but mostly I let the day lead.",
  },
];
