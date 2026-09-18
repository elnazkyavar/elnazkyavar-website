export type ContentSection = {
  number: string;
  title: string;
  body: string;
  points?: string[];
  meta?: string[];
  link?: { label: string; href: string };
};

export type ContentPage = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  sections: ContentSection[];
  closing?: string;
};

export const contentPages: ContentPage[] = [
  {
    slug: "research",
    eyebrow: "Research",
    title: "Biological systems, bioprocessing, and mechanistic interpretation.",
    description: "Research by Dr. Elnaz Kyavar across cyanobacterial biotechnology, phycobiliproteins, redox biology, and mechanistic phytomedicine.",
    intro: "My research is centered on understanding how biological systems respond to interacting environmental, nutritional, and process variables, and how those responses can be translated into more efficient biomanufacturing and more defensible biological interpretation.",
    sections: [
      { number: "01", title: "Cyanobacterial Biotechnology & Bioprocessing", body: "Cyanobacterial physiology, biomanufacturing, and nutrient–stress regulation.", points: ["C-phycocyanin and phycobiliprotein production, extraction, and downstream processing", "Response Surface Methodology (RSM), process optimization, and Design-Expert ANOVA modeling"] },
      { number: "02", title: "Redox, Apoptosis & Cellular Mechanistics", body: "Mechanistic interpretation of cellular responses and phytomedicine bioactivity.", points: ["Mitochondrial pathway modulation and ROS dynamics", "Apoptotic cell-death signaling", "Phytomedicine bioactivity assays"] },
      { number: "03", title: "Methodological & Statistical Appraisal", body: "Rigorous appraisal of experimental design, causal evidence, and computational-to-experimental validation.", points: ["Experimental design evaluation and analytical-unit independence", "Causal inference vs computational / molecular-docking predictions", "Replication, control integrity, and data-to-claim alignment", "Critical appraisal of multi-omics integration, pathway enrichment, network pharmacology, and computational-to-experimental validation"] },
      { number: "04", title: "Translational Phytomedicine", body: "Evidence-calibrated interpretation of natural bioactives in metabolic and cellular therapeutics.", points: ["Gut microbiota–bile acid–FXR/TGR5 axis in cardiometabolic models", "Preclinical evidence calibration and network-pharmacology audit", "Natural bioactives for metabolic and cellular therapeutics"] },
    ],
  },
  {
    slug: "publications",
    eyebrow: "Scholarly record",
    title: "Publications",
    description: "Verified peer-reviewed and accepted scholarly work by Dr. Elnaz Kyavar.",
    intro: "A curated record of peer-reviewed and accepted scholarly work, with verified bibliographic metadata and direct article links where available.",
    sections: [
      { number: "2026", title: "Process-oriented optimization of phycobiliprotein production in Arthrospira platensis through interaction-driven nutrient–stress regulation", body: "This study examined nonlinear interactions among salinity, nitrogen availability, and iron concentration in Arthrospira platensis and used response-surface methodology to identify a high-desirability operational window for phycobiliprotein production.", meta: ["Authors: Elnaz Kyavar, Neda Soltani, Sara Saadatmand, Nariman Mosaffa, Hadi Tabani", "Journal: Process Biochemistry", "Type: Original Research", "Themes: cyanobacterial biotechnology · phycobiliproteins · nutrient–stress regulation · process optimization"], link: { label: "View DOI", href: "https://doi.org/10.1016/j.procbio.2026.06.005" } },
      { number: "2026", title: "Enhanced recovery of phycobiliproteins from Arthrospira platensis by combined glass bead vortexing and ultrasonication", body: "A process-oriented study evaluating combined glass bead vortexing and ultrasonication for improved phycobiliprotein recovery from Arthrospira platensis.", meta: ["Authors: Elnaz Kyavar, Neda Soltani, Sara Saadatmand, Nariman Mosaffa, Hadi Tabani", "Journal: Discover Applied Sciences", "Type: Original Research", "Themes: phycobiliprotein extraction · downstream processing · ultrasonication · process intensification"], link: { label: "View DOI", href: "https://doi.org/10.1007/s42452-026-09574-1" } },
      { number: "ACCEPTED", title: "Effects of salinity, iron, and nitrogen on growth, chlorophyll content, and phycobiliproteins, with emphasis on physiological adaptive responses of Spirulina platensis", body: "Accepted for publication. Final volume, issue, and DOI metadata will be added when available.", meta: ["Authors: Elnaz Kyavar, Neda Soltani, Sara Saadatmand, Nariman Mosaffa, Hadi Tabani", "Journal: Journal of Plant Environmental Physiology", "Year: 2026", "Type: Original Research", "Themes: salinity · iron · nitrogen · chlorophyll · phycobiliproteins · physiological adaptation"] },
    ],
  },
  {
    slug: "evidence-mechanism",
    eyebrow: "Signature framework",
    title: "Evidence & Mechanism",
    description: "Dr. Elnaz Kyavar's framework for aligning scientific claims with the strength and type of supporting evidence.",
    intro: "Evidence & Mechanism is the methodological signature of the site: a framework for aligning the strength of a scientific claim with the strength and type of evidence supporting it.",
    sections: [
      { number: "01", title: "Association is not causation", body: "Observational or correlational relationships should not be described as causal without appropriate perturbation, mediation, transfer, rescue, or dependency evidence." },
      { number: "02", title: "Expression is not function", body: "Changes in expression, abundance, or localization may support a mechanistic hypothesis but do not alone establish functional dependency." },
      { number: "03", title: "Prediction is not validation", body: "Network pharmacology, docking, molecular dynamics, enrichment analysis, computational target prediction, and multi-omics integration are hypothesis-generating or supportive unless experimentally validated." },
      { number: "04", title: "Abundance change is not mediation", body: "A change in a metabolite, microbial taxon, receptor, or pathway marker does not establish that it mediates the observed phenotype." },
      { number: "05", title: "Experimental unit matters", body: "Biological independence, replication structure, donor/animal/sample hierarchy, and pseudoreplication can determine whether an apparent effect is statistically interpretable." },
      { number: "06", title: "Claims should scale with evidence", body: "Language should distinguish association, modulation, involvement, dependency, necessity, sufficiency, rescue, and causation." },
    ],
    closing: "The goal is not to make every conclusion stronger. It is to make every conclusion proportionate to the evidence.",
  },
  {
    slug: "research-notes",
    eyebrow: "Notes & updates",
    title: "Research Notes & Updates",
    description: "Research-focused notes, publication highlights, and scientific updates from Dr. Elnaz Kyavar.",
    intro: "Concise, research-focused updates written in an academic but accessible voice—without turning this space into a general blog.",
    sections: [],
  },
  {
    slug: "peer-review-editorial-service",
    eyebrow: "Scientific service",
    title: "100+ peer reviews completed across international journals.",
    description: "Peer review and scientific service by Dr. Elnaz Kyavar.",
    intro: "My peer-review work focuses on methodological validity, reproducibility, statistical design, causal inference, mechanistic calibration, and data-to-claim alignment. The aim is to provide reviews that are rigorous enough for editorial decision-making and constructive enough to help authors strengthen the scientific record.",
    sections: [
      { number: "01", title: "Phytomedicine — Elsevier", body: "Review focus across mechanistic phytomedicine, multi-omics and systems pharmacology, network pharmacology and experimental validation, and natural products and preclinical mechanistic evidence." },
      { number: "02", title: "Systems Ethnopharmacology and Sustainable Bioresources — Elsevier", body: "Review focus across natural bioresources, ethnopharmacology, experimental evaluation, and extract or formulation characterization and reproducibility." },
      { number: "03", title: "Applied Biochemistry and Biotechnology — Springer Nature", body: "Review focus across bioprocess engineering, biotechnology, process optimization, experimental design, and data interpretation." },
      { number: "04", title: "Toxicology Research — Oxford University Press", body: "Review focus across nanotoxicology, systemic toxicity, oxidative stress, and experimental toxicology." },
      { number: "ROLE", title: "Recognized reviewer roles", body: "Reviewer-pool membership is presented as scientific service, not as an editorial-board appointment.", points: ["Royal Society of Chemistry — Member of the Official Reviewer Pool", "Oxford University Press / Toxicology Research — Member of the Official Reviewer Pool"] },
      { number: "METHOD", title: "Reviewer approach", body: "A consistent framework for assessing study validity and aligning interpretation with the evidence presented.", points: ["Experimental unit and replication audit", "Controls and comparator validity", "Statistical design and multiplicity", "Method–result consistency", "Mechanistic claim calibration", "Computational prediction vs experimental validation", "Multi-omics and pathway interpretation", "Reproducibility and transparent limitations"] },
    ],
  },
  {
    slug: "talks-conferences",
    eyebrow: "Scientific exchange",
    title: "Talks & Conferences",
    description: "Confirmed talks and conference participation by Dr. Elnaz Kyavar.",
    intro: "Confirmed scientific speaking and conference contributions.",
    sections: [
      { number: "2026", title: "Rethinking Microbial Biomanufacturing: Lessons from Biological Interactions", body: "A perspective on interpreting interaction effects in microbial biomanufacturing as biologically informative signals rather than treating them only as components of process-optimization models.", meta: ["Role: Accepted Speaker", "Event: International Conference on Clinical Microbiology, Virology and Infectious Diseases", "Location: Rome, Italy", "Dates: 9–11 November 2026", "Status: Abstract published online; listed in the official conference speaker programme (Day 1)"], link: { label: "Official speaker listing", href: "https://mindspaceconferences.com/clinicalmicrobiology/speakers/" } },
    ],
  },
  {
    slug: "professional-engagement",
    eyebrow: "Leadership & affiliations",
    title: "Professional Engagement",
    description: "Professional leadership, academic affiliation, and memberships of Dr. Elnaz Kyavar.",
    intro: "Professional leadership and community affiliations across biotechnology, bioactive research, clinical operations, and plant and microbial science.",
    sections: [
      { number: "01", title: "Founder & Scientific Director — Green Life ELK, Tehran", body: "Biotechnology, bioactive research, and process development." },
      { number: "02", title: "Founder & Director — E Clinic, Tehran", body: "Clinical operations and professional management." },
      { number: "MEM", title: "Professional memberships", body: "Memberships across physiology, algae research, and microbiology.", points: ["Associate Member — The Physiological Society, UK", "Iranian Algae Society", "Iranian Society of Microbiology"] },
    ],
  },
  {
    slug: "projects",
    eyebrow: "Current scholarly work",
    title: "Projects",
    description: "Current scholarly projects by Dr. Elnaz Kyavar.",
    intro: "Current review and book projects are listed separately from the peer-reviewed publication record.",
    sections: [
      { number: "01", title: "Design-decision architecture for next-generation microbial cell factories in phycobiliprotein biomanufacturing", body: "Venue: World Journal of Microbiology and Biotechnology. Status: invited mini-review; abstract approved." },
      { number: "02", title: "Plant-derived bioactives and the gut microbiota–bile acid–FXR/TGR5 signaling axis in cardiovascular and cardiometabolic health", body: "Status: review manuscript in development." },
    ],
  },
];

export type ResearchUpdate = {
  title: string;
  slug: string;
  date: string;
  contentType: "researchNote" | "newPaper" | "acceptedPaper" | "conferenceUpdate" | "professionalUpdate";
  category: "Research Note" | "New Paper" | "Accepted Paper" | "Conference Update" | "Professional Update";
  author?: string;
  shortSummary: string;
  fullBody?: string[];
  externalLink?: string;
  tags: string[];
  featuredOnHome: boolean;
};

export const researchUpdates: ResearchUpdate[] = [
  {
    title: "From association to mechanism: what evidence actually changes a biological claim?",
    slug: "from-association-to-mechanism",
    date: "18 September 2026",
    contentType: "researchNote",
    category: "Research Note",
    author: "Dr. Elnaz Kyavar",
    shortSummary: "A short framework for distinguishing association, functional involvement, and causal evidence in complex bioscience.",
    fullBody: [
      "Biological research often begins with an association: a microbial taxon changes alongside a phenotype, a signaling protein is upregulated after treatment, or a metabolite correlates with disease severity. These observations can be important, but they do not by themselves establish mechanism.",
      "A mechanistic claim requires more than demonstrating that two events occur together. The critical question is whether the proposed biological component is functionally involved in producing the observed effect. Evidence becomes stronger when experiments move from observation toward perturbation, dependency, rescue, transfer, or mediation.",
      "This distinction is particularly important in complex fields such as phytomedicine, microbiome research, multi-omics, and systems pharmacology. A compound may alter hundreds of transcripts or predicted pathways. Network analysis may identify plausible targets, and molecular docking may suggest structural compatibility. These approaches can help generate hypotheses, but they do not establish that a predicted target is responsible for the biological phenotype.",
      "The same principle applies to biomarkers. Increased receptor expression does not necessarily indicate increased receptor activity. A change in microbial abundance does not demonstrate that the microorganism mediates the phenotype. Likewise, a change in bile-acid concentration does not by itself show that bile-acid signaling caused the downstream physiological response.",
      "Stronger mechanistic evidence asks increasingly demanding questions. What happens when the proposed mediator is removed or inhibited? Can the phenotype be reproduced by introducing it? Can the effect be rescued when the pathway is restored? Does the intervention still work when the proposed mechanism is disrupted?",
      "These questions do not make associative evidence unimportant. Association is often where discovery begins. The problem arises only when the language of the conclusion exceeds the strength of the experiment.",
      "Mechanistic rigor therefore depends not on making every result sound stronger, but on keeping the claim proportional to the evidence.",
      "In evidence-led bioscience, the strongest conclusion is not necessarily the boldest one — it is the one the data can actually support.",
    ],
    tags: ["evidence calibration", "mechanistic reasoning", "causal inference"],
    featuredOnHome: true,
  },
  { title: "Enhanced recovery of phycobiliproteins from Arthrospira platensis", slug: "enhanced-phycobiliprotein-recovery", date: "2026", contentType: "newPaper", category: "New Paper", shortSummary: "Combined glass bead vortexing and ultrasonication were evaluated for improved phycobiliprotein recovery from Arthrospira platensis.", externalLink: "https://doi.org/10.1007/s42452-026-09574-1", tags: ["phycobiliproteins", "downstream processing", "process intensification"], featuredOnHome: true },
  { title: "Process-oriented optimization of phycobiliprotein production", slug: "process-oriented-phycobiliprotein-optimization", date: "2026", contentType: "newPaper", category: "New Paper", shortSummary: "Nonlinear salinity, nitrogen, and iron interactions were evaluated to identify a high-desirability operational window for production.", externalLink: "https://doi.org/10.1016/j.procbio.2026.06.005", tags: ["cyanobacterial biotechnology", "nutrient–stress regulation", "process optimization"], featuredOnHome: true },
  { title: "Effects of salinity, iron, and nitrogen on growth and phycobiliproteins", slug: "salinity-iron-nitrogen-accepted", date: "2026", contentType: "acceptedPaper", category: "Accepted Paper", shortSummary: "Accepted original research on growth, chlorophyll content, phycobiliproteins, and physiological adaptive responses of Spirulina platensis.", tags: ["plant physiology", "phycobiliproteins", "physiological adaptation"], featuredOnHome: true },
];
