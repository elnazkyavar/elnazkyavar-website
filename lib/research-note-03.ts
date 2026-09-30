import type { ResearchUpdate } from "./site-content-v2";

export const researchNote03: ResearchUpdate = {
  title: "Expression is not function: what does it take to establish functional dependency?",
  slug: "expression-is-not-function",
  date: "30 September 2026",
  dateIso: "2026-09-30",
  contentType: "researchNote",
  category: "Research Note",
  author: "Dr. Elnaz Kyavar",
  shortSummary: "Why changes in expression, abundance, or localization can support a mechanistic hypothesis without establishing that a biological component is functionally required for the phenotype.",
  fullBody: [
    "A change in gene or protein expression is often treated as mechanistic evidence. A receptor increases after treatment, a signaling protein decreases with disease, or a pathway-associated transcript shifts alongside a phenotype. These findings can be biologically informative, but expression is a measurement of state—not a demonstration of function.",
    "The distinction matters because abundance and activity are not interchangeable. A receptor can be highly expressed yet functionally inactive; a protein can be present without engaging the downstream pathway attributed to it; and a transcriptional response can accompany a phenotype without being necessary for that phenotype. Localization, phosphorylation, ligand availability, cofactor context, feedback regulation, and pathway crosstalk can all separate what is measured from what is functionally operative.",
    "FXR provides a useful example. Increased FXR expression after an intervention may support the hypothesis that bile-acid signaling has changed, but it does not by itself establish increased FXR activity or show that FXR mediates the observed physiological effect. Stronger evidence would examine receptor-responsive outputs and, when the claim requires it, test whether disrupting FXR signaling attenuates or abolishes the phenotype.",
    "This creates an evidence ladder. Expression or abundance can establish association with a biological state. Activity-linked readouts can support pathway engagement. Perturbation can test functional involvement. Loss-of-function, pharmacological blockade, rescue, or complementary gain-of-function designs can provide increasingly direct evidence of dependency, necessity, or sufficiency—provided that the intervention itself is specific and experimentally interpretable.",
    "The same calibration applies across mechanistic bioscience. Transcript abundance is not protein function. Receptor expression is not receptor activation. Enrichment of a pathway is not proof that the pathway drives the phenotype. A molecular marker can strengthen a mechanistic model, but the language of the conclusion should not outrun the experiment that produced it.",
    "A useful question is therefore not simply whether a proposed mediator changed, but what evidence would make the biological outcome depend on that mediator. That shift—from measuring presence to testing consequence—is often what separates a plausible mechanistic narrative from a demonstrated functional mechanism."
  ],
  tags: ["mechanistic evidence", "functional dependency", "FXR", "causal inference", "evidence calibration"],
  featuredOnHome: true,
  video: {
    src: "/videos/Research_Note_03_Expression_Is_Not_Function_FINAL_v3_compatible.mp4",
    duration: "60 sec",
    title: "Expression is not function — Research Note 03"
  }
};
