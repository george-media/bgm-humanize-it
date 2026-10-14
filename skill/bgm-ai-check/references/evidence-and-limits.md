# Evidence, attribution and provenance

Read for detection claims, requested research, provenance disputes or maintenance. Ordinary editorial reviews do not need this file.

## What this skill establishes

A review can document exact wording, arithmetic, citation placement, contradictions and context-sensitive editorial judgements. It does not measure a probability of AI authorship or the fraction of AI editing. It has no trained classifier, calibrated threshold, external detector integration or perplexity calculation. An editorial rating, if explicitly requested, needs a stated rubric and remains a judgement about writing quality.

Keep observations, interpretations and provenance distinct. “Three sentences repeat the opening” is an observation. “The repetition weakens this short update” is an editorial interpretation requiring context. “The writer used AI” is a provenance assertion, not established by either. Do not relabel a style score as an authorship probability, even with a low-confidence disclaimer.

User-reported AI use can be acknowledged as reported origin. If the task calls for investigating process and relevant material is supplied or accessible with permission, assess drafts, revision history and creation records for what they actually show. Metadata may be incomplete or inconsistent; do not treat a missing record as proof of misconduct, or a supplied screenshot as independently authenticated history. Quote or summarise evidence without exposing private data. State unresolved attribution honestly. Model agreement is not independent source verification.

## Inspected research and software counterexample

Accessed 14 October 2026. No numerical performance result is adopted. These sources inform limits, not a claimed validation of BGM AI Check.

- Dugan and colleagues, [RAID: A Shared Benchmark for Robust Evaluation of Machine-Generated Text Detectors](https://aclanthology.org/2024.acl-long.674.pdf), ACL proceedings, August 2024. The inspected abstract and limitations describe tested detector sensitivity to attacks, sampling settings and unseen generators, with finite domain/language coverage and ongoing maintenance needs. This is a specific benchmark result, not a claim that every current detector always fails or that any prose feature proves origin. It does not validate this skill's editorial judgement.
- Microsoft Support, [Smart quotes in Word and PowerPoint](https://support.microsoft.com/en-au/word/smart-quotes-in-word-and-powerpoint), live support page, no update date shown in the inspected content. It documents automatic straight-to-curly quote conversion during typing. Our inference is limited: curly quotes alone cannot establish AI authorship. This is a software counterexample, not a detector performance study.

Inherited `ai-check` assertions about universal punctuation signals, sentence thresholds, RLHF as the explanation for all detection, model-specific ceilings and estimated editing fractions are not adopted. Their mere presence in another skill or bibliography does not verify them. No score-evasion recipes or commercial detector predictions are included.

The 2023 non-native-English detector-bias paper and a 2026 revisiting study appeared during source discovery. Their conclusions are not incorporated here as a general claim about every detector or language; a dedicated assessment would need their actual methods, versions and tested populations. The direct Cell page fetch failed. Avoid a one-sided literature claim based on a search snippet. No inference about an individual writer's language background is required for the editorial workflow.

## Maintaining claim discipline

Before adding numerical, empirical, causal or comparative assertions, inspect the primary source directly and record title/established authors, version/date, access date, direct URL, method/population, supported claim and limits. Distinguish empirical results, editorial convention, user house preferences and hypotheses. Omit unsupported assertions rather than soften them into unchecked qualitative claims. Relevant sources may disagree or concern different domains; do not treat a model's agreement, abstract-only inference or vendor claim as independent validation.

## Relationship and provenance

BGM AI Check is a separate package. BGM Humanize It handles authorised drafting and editing; neither package needs the legacy `ai-check` rubric to judge quality. Original instructions retain the useful idea of evidence-backed textual critique while rejecting the legacy classifier-like score and universal style penalties. The upstream AI-Check package is Copyright (c) 2026 Harshaneel Gokhale under MIT; its notice is retained in [LICENSE](../LICENSE) for adapted review concepts. Installed `ai-check`, Humanize and BGM Humanize It remain unchanged.
