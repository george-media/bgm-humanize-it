# Requested detector benchmarking

Read only when the user requests testing or improvement against an external AI detector. Support that request concretely while keeping fidelity, useful prose and measured service behaviour separate.

## Define and preserve the test

Use the named detector and the actual original text. A user-supplied screenshot is a reported baseline, not a fresh reproduction. Save the exact submitted copy, a content hash, date, detector URL, visible label and score, account/mode if known, and screenshot or other supported readback. Note when the service does not expose a model version. Count and submit deliverable copy separately from chat commentary, citations outside the copy and task-report footers. Record any input difference from the reported baseline.

Use the detector's visible label as the default pass criterion unless the user specifies a threshold. A reduced score with an AI label is still a failure. If a numerical threshold is needed and none is supplied, state a provisional threshold before running the test. Never convert a score into a calibrated probability, an AI-written fraction or proof of human authorship.

A request to improve against a named detector permits testing the identified non-sensitive passage there. For confidential, client or sensitive material, confirm the exact text and destination before transmitting it if that permission is absent. Do not create paid accounts, buy credits, accept legal terms or bypass challenges without the required authority. If the service blocks access, report the concrete blocker and provide exact test files for manual checking. Never invent a result.

## Improve and test without overfitting

Start with supported editorial problems: repetitive paragraph architecture, excess explanation, predictable recaps, mismatched register or a voice sample the draft ignores. Rebuild the relevant passage around its argument and the reader's needs. Preserve facts, citations, qualifications, useful vocabulary and requested length. Do not merely split paragraphs, swap synonyms or add fabricated experiences, mistakes, random slang, Unicode substitutions or irrelevant material.

For an initial refinement pass, test the baseline and a revised output, then run a fresh generation from the same brief without showing the earlier draft or scores. Include an unseen brief or topic before claiming improvement generalises. Record prompts, loaded skill versions, model/settings when available and all outputs, including failures. Worker tests must be labelled as worker execution, not desktop-dispatch verification. Do not select only the best run or claim a pass rate from a convenience sample.

Unless the user sets a different budget, use at most two candidate revisions in one evaluation pass. Each revision needs a concrete editorial hypothesis, a fidelity check and the actual service result. Stop if changes damage accuracy or voice, the service blocks testing, or the agreed bounds are reached. Report the remaining gap and a specific next experiment. A successful single passage establishes only that passage's result on that service at that time. Reliable skill performance requires repeated unseen briefs, genres and generations, ideally on more than one named detector.
