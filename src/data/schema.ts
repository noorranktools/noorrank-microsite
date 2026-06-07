// Hand-authored JSON-LD. Persistent @ids + linked entities = the entity
// architecture NoorRank sells, applied to NoorRank itself.

const ORG_ID = "https://noorrank.com/#organization";
const SITE_ID = "https://noorrank.com/#website";
const AAKARSH_ID = "https://noorrank.com/#aakarsh";
const DEVIKA_ID = "https://noorrank.com/#devika";
const LABS_ID = "https://noorranklabs.com/#research";

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "NoorRank",
      legalName: "NoorRank",
      url: "https://noorrank.com",
      email: "inquiries@noorrank.com",
      slogan: "Rank by Design, Not by Chance",
      description:
        "NoorRank makes AI engines understand, trust, and recommend your brand, and builds custom systems clients own. Disciplines: AI Visibility (AEO/GEO), AI-Powered Systems, and AI Strategy.",
      foundingLocation: { "@type": "Place", name: "Dubai, UAE" },
      areaServed: "Worldwide",
      knowsAbout: [
        "Answer Engine Optimization",
        "Generative Engine Optimization",
        "AI Visibility",
        "Entity Architecture",
        "Schema.org structured data",
        "Custom software systems",
      ],
      founder: [{ "@id": AAKARSH_ID }, { "@id": DEVIKA_ID }],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressCountry: "AE",
      },
      makesOffer: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Visibility",
            description:
              "Making AI engines understand, trust, and recommend a brand across ChatGPT, Perplexity, Gemini, and Claude.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI-Powered Systems",
            description:
              "Custom-built, client-owned platforms for billing, licensing, payments, and operations with no lock-in.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Strategy",
            description:
              "Deliberate AI roadmaps: discovery, audit, and roadmap to decide where AI creates real advantage.",
          },
        },
      ],
      subjectOf: { "@id": LABS_ID },
    },
    {
      "@type": "WebSite",
      "@id": SITE_ID,
      url: "https://noorrank.com",
      name: "NoorRank",
      publisher: { "@id": ORG_ID },
      inLanguage: "en",
    },
    {
      "@type": "Person",
      "@id": AAKARSH_ID,
      name: "Aakarsh",
      jobTitle: "CEO & Co-Founder",
      worksFor: { "@id": ORG_ID },
      description:
        "Leads brand strategy and AI visibility at NoorRank; an early practitioner of AI-search optimisation in the MENA region.",
    },
    {
      "@type": "Person",
      "@id": DEVIKA_ID,
      name: "Devika",
      jobTitle: "CTO & Co-Founder",
      worksFor: { "@id": ORG_ID },
      description:
        "Leads engineering at NoorRank and built the in-house platforms the company runs on, including PayCore.",
    },
    {
      "@type": "Dataset",
      "@id": LABS_ID,
      name: "The Miracle Berry Protocol",
      description:
        "A 21-day public experiment engineering AI recognition from zero. Open research documenting all data, code, and findings, including Day 1 Google indexing and Day 9 ChatGPT citation.",
      url: "https://noorranklabs.com",
      creator: { "@id": ORG_ID },
      license: "https://noorranklabs.com",
      isAccessibleForFree: true,
    },
  ],
};
