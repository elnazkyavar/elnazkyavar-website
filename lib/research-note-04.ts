import type { ResearchUpdate } from "./site-content-v2";

export const researchNote04: ResearchUpdate = {
  title: "A changed mediator is not evidence of mediation",
  slug: "changed-mediator-is-not-mediation",
  date: "9 October 2026",
  dateIso: "2026-10-09",
  contentType: "researchNote",
  category: "Research Note",
  author: "Dr. Elnaz Kyavar",
  shortSummary: "When multiple biological components change together, the critical question is not simply whether a proposed mediator changed—but whether the effect actually passed through it.",
  fullBody: [
    "Biological studies often identify several changes along a plausible mechanistic pathway. An intervention alters the gut microbiome, the bile-acid profile shifts, receptor-associated signaling changes, and the physiological phenotype improves. When these observations align with an existing biological model, it is tempting to connect them into a causal sequence.",
    "But a sequence of associated changes is not the same as evidence of mediation.",
    "A proposed mediator occupies a specific causal position. To say that M mediates the effect of an intervention X on an outcome Y is stronger than showing that X changes M and that M is associated with Y. The claim implies that at least part of the effect of X on Y is transmitted through M. That proposition requires evidence about the pathway linking the variables, not simply evidence that each variable changed.",
    "This distinction becomes especially important in complex biological systems, where an intervention can perturb many processes simultaneously. A treatment may alter microbial composition, host metabolism, inflammatory signaling, nutrient availability, and receptor activity in parallel. A bile acid that changes alongside an improved metabolic phenotype may therefore be a mediator, a downstream consequence, a correlated marker, or one component of a broader response. Temporal or biological plausibility can strengthen the hypothesis, but neither resolves these alternatives by itself.",
    "The same problem applies to multi-omics studies. Correlated changes across microbiome, metabolome, transcriptome, and phenotype can reveal coordinated biological structure and generate compelling mechanistic hypotheses. Statistical mediation models can further evaluate whether the observed data are compatible with a proposed indirect pathway. But neither cross-omic correlation nor a statistically estimated indirect effect automatically establishes biological mediation when causal assumptions remain untested.",
    "Evidence becomes more informative when the proposed chain is experimentally challenged. Does manipulating the candidate mediator alter the downstream outcome? Does disrupting the mediator weaken the intervention's effect? Can transfer reproduce relevant components of the phenotype in an appropriate recipient system? Does restoration rescue an effect that was lost after pathway disruption? These designs address different causal questions, and none should be treated as universally decisive in isolation, but together they can distinguish a mediator from a molecular event that merely accompanies the response.",
    "Consider a microbiota–bile acid–receptor pathway. Demonstrating that an intervention remodels the microbiota, changes bile-acid abundance, increases FXR-related readouts, and improves a metabolic phenotype provides evidence consistent with that pathway. It does not, by itself, establish that microbiome remodeling produced the bile-acid change, that the altered bile acids drove functionally relevant FXR signaling, or that this signaling was required for the physiological outcome. Each arrow in the proposed chain is an inference that may require its own evidence.",
    "This is why mechanistic confidence should not be determined by how many components of a pathway change in the expected direction. A longer chain of correlated observations can make a model more coherent without making the causal links between those observations more secure.",
    "The more useful question is therefore not simply did the proposed mediator change? It is: what evidence shows that the effect traveled through it?",
    "That distinction separates a biological pathway that is compatible with the data from one that the evidence can reasonably support as mediating the phenotype."
  ],
  tags: ["mediation", "causal inference", "mechanistic evidence", "microbiota–bile acid signaling", "evidence calibration"],
  featuredOnHome: true,
  video: {
    src: "/videos/RN04_FINAL_COMPLETE_WITH_LOGO_MUSIC.mp4",
    duration: "78 sec",
    title: "A changed mediator is not evidence of mediation — Research Note 04"
  }
};
