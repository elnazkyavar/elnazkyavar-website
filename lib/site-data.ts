export const siteName = "Elnaz Kyavar";

export const navigation = [
  ["Research", "/research"],
  ["Publications", "/publications"],
  ["Evidence & Mechanism", "/evidence-mechanism"],
  ["Research Notes", "/research-notes"],
  ["Service", "/peer-review-editorial-service"],
  ["Talks", "/talks-conferences"],
  ["Engagement", "/professional-engagement"],
  ["Projects", "/projects"],
  ["CV", "/cv"],
  ["Contact", "/contact"],
] as const;

export type PageRecord = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  sections: { number: string; title: string; body: string; points?: string[] }[];
};

export const pages: PageRecord[] = [
  {
    slug: "research",
    eyebrow: "Research",
    title: "Questions shaped by evidence, not assumption.",
    description: "Research themes and approach from Elnaz Kyavar.",
    intro: "My work is grounded in careful interpretation: defining what the evidence can support, tracing plausible biological mechanisms, and making uncertainty visible rather than incidental.",
    sections: [
      { number: "01", title: "Evidence architecture", body: "How different forms of evidence fit together—and where they do not—is central to forming defensible scientific conclusions.", points: ["Study design and inferential strength", "Convergent and conflicting evidence", "Transparent limits and uncertainty"] },
      { number: "02", title: "Mechanistic inquiry", body: "Mechanisms are treated as testable explanatory structures, not decorative narratives added after an observation.", points: ["Causal pathway mapping", "Alternative explanations", "Cross-scale biological reasoning"] },
      { number: "03", title: "Scientific synthesis", body: "Synthesis should preserve the texture of the underlying literature while producing a clear account that others can scrutinize and use." },
    ],
  },
  {
    slug: "publications",
    eyebrow: "Scholarly record",
    title: "Publications",
    description: "Verified publications by Elnaz Kyavar.",
    intro: "This page is structured for a verified publication record. Citations will be added only from confirmed bibliographic sources; no placeholder titles, journals, identifiers, or authorship claims are shown.",
    sections: [
      { number: "—", title: "Publication record in preparation", body: "The publication index will support filtering by year, type, topic, and contribution, with persistent links and citation exports when verified metadata is available." },
      { number: "CMS", title: "Built for structured publishing", body: "Each future record has a defined place for abstract, authors, venue, date, identifiers, open-access status, and related research themes.", points: ["DOI and external identifiers", "Citation and abstract fields", "Project and topic relationships"] },
    ],
  },
  {
    slug: "evidence-mechanism",
    eyebrow: "Signature framework",
    title: "Evidence & Mechanism",
    description: "Elnaz Kyavar's framework for evidence calibration and mechanistic reasoning in bioscience.",
    intro: "A disciplined scientific account needs two things at once: an honest calibration of evidential strength and a mechanistic explanation that can survive contact with alternatives.",
    sections: [
      { number: "01", title: "Calibrate the claim", body: "Begin with the observation and ask what kind of claim the study design can legitimately sustain.", points: ["Separate association from intervention", "Distinguish precision from certainty", "State the relevant comparison"] },
      { number: "02", title: "Map the mechanism", body: "Specify the components, transitions, and boundary conditions needed for an explanation to work.", points: ["Identify the causal sequence", "Locate missing links", "Define competing pathways"] },
      { number: "03", title: "Stress-test coherence", body: "Test whether the proposed mechanism explains the full pattern of results, including inconvenient or discordant findings.", points: ["Seek disconfirming evidence", "Compare scales and contexts", "Track residual uncertainty"] },
      { number: "04", title: "Communicate proportionately", body: "The strength and specificity of the language should match the strength and specificity of the evidence." },
    ],
  },
  {
    slug: "research-notes",
    eyebrow: "Working ideas",
    title: "Research Notes",
    description: "Research notes and scientific perspectives from Elnaz Kyavar.",
    intro: "Short-form thinking on evidence, inference, scientific communication, and the practical work of building reliable explanations.",
    sections: [
      { number: "NOTE 01", title: "What would change the conclusion?", body: "A useful reading practice is to identify the observation, assumption, or comparison that carries the most inferential weight—and ask what would happen if it moved." },
      { number: "NOTE 02", title: "Mechanism is a constraint", body: "A good mechanism narrows the space of plausible outcomes. If an explanation can accommodate every possible result, it is not yet doing explanatory work." },
      { number: "NOTE 03", title: "Make uncertainty legible", body: "Uncertainty becomes useful when its source is named: measurement, sampling, model specification, transportability, or the mechanism itself." },
    ],
  },
  {
    slug: "peer-review-editorial-service",
    eyebrow: "Scientific service",
    title: "Peer Review & Editorial Service",
    description: "Peer review and editorial service by Elnaz Kyavar.",
    intro: "A transparent home for verified reviewing and editorial contributions, designed to recognize service without disclosing confidential manuscript information.",
    sections: [
      { number: "01", title: "Review principles", body: "Constructive review should be exacting about evidence while helping authors see the clearest path to a stronger scientific argument.", points: ["Methodological clarity", "Proportionate interpretation", "Actionable, respectful feedback"] },
      { number: "—", title: "Service record", body: "Verified journal, conference, and editorial service details will be listed here when supplied." },
    ],
  },
  {
    slug: "talks-conferences",
    eyebrow: "Scientific exchange",
    title: "Talks & Conferences",
    description: "Talks, presentations, and conference participation by Elnaz Kyavar.",
    intro: "A chronological record prepared for invited talks, conference contributions, posters, panels, and other forms of scientific exchange.",
    sections: [
      { number: "—", title: "Programme in preparation", body: "Confirmed event names, locations, presentation titles, formats, and dates will appear here once verified." },
      { number: "FORMAT", title: "Designed for discovery", body: "Future entries can be filtered by presentation type and connected directly to publications, projects, or research notes." },
    ],
  },
  {
    slug: "professional-engagement",
    eyebrow: "Beyond the publication",
    title: "Professional Engagement",
    description: "Professional engagement and scientific collaboration by Elnaz Kyavar.",
    intro: "Science advances through exchange: collaborative work, research communities, professional development, and careful communication across disciplinary boundaries.",
    sections: [
      { number: "01", title: "Collaboration", body: "Engagements can connect methods, domains, and perspectives around a well-defined scientific question." },
      { number: "02", title: "Scientific community", body: "This section is prepared for verified memberships, working groups, training, outreach, and other professional contributions." },
    ],
  },
  {
    slug: "projects",
    eyebrow: "Current and selected work",
    title: "Projects",
    description: "Research projects by Elnaz Kyavar.",
    intro: "Project pages will connect the motivating question, evidence base, analytical choices, outputs, and open questions in one coherent research record.",
    sections: [
      { number: "—", title: "Project record in preparation", body: "Verified project titles and descriptions will be published here when available; no provisional claims or affiliations have been added." },
      { number: "MODEL", title: "A connected research record", body: "The architecture is ready to relate projects to publications, talks, notes, collaborators, and thematic research areas." },
    ],
  },
];

export const latest = [
  { type: "Framework", title: "Evidence & Mechanism", excerpt: "A practical structure for moving from observation to calibrated claim and testable explanation.", href: "/evidence-mechanism" },
  { type: "Research note", title: "What would change the conclusion?", excerpt: "A compact prompt for finding the assumptions that carry an argument's inferential weight.", href: "/research-notes" },
  { type: "Website", title: "Research record in development", excerpt: "Verified publications, projects, talks, and service records will be added through a structured editorial workflow.", href: "/publications" },
];
