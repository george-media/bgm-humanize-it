# Independent adversarial review of BGM AI Check

Reviewed 14 October 2026. **No material finding in the reviewed candidate.** No corrective package edit is required by this review.

## Scope and method

Read all five actual candidate files under `skill/bgm-ai-check`, the installed BGM Humanize It entrypoint for compatibility, and the legacy `ai-check` entrypoint as an audited comparator. Did not read other reviews or expected behavioural rubrics. Candidate and installed files were read-only. This report is the sole authored output.

This is an independent static instruction, packaging and source review. It does not establish successful installation, host discovery, exclusive skill selection or consistent model behaviour in runtime trials. No detector evaluation or calibration was performed.

## Challenges and evidence

| Challenge | Precise candidate evidence | Counterexample considered and judgement |
|---|---|---|
| Unsupported authorship, probability or editing-fraction inference | `SKILL.md:26–28`; `references/evidence-and-limits.md:7–11` prohibit these outputs, separate textual observation from provenance, and reject relabelled style scores. | A polished paragraph with an em dash, a triad and no first-person language cannot establish machine origin. The candidate permits contextual critique but supplies no route from these features to an authorship verdict. No material finding. |
| Cosmetic bans and false positive style penalties | `SKILL.md:18–20`; `references/review-guide.md:7–11,17–29` require a contextual reader problem and expressly preserve technical terms, formal passive voice, justified hedges, comparisons, symmetry and useful punctuation. | “Robust regression was faster than the baseline” and a three-item safety list trigger legacy penalties but can be precise and useful. The candidate names and protects these cases. No material finding. |
| Correctness and source access | `SKILL.md:22`; `references/review-guide.md:19,27`; `references/evidence-and-limits.md:26` distinguish missing evidence, uninspected evidence, unsupported inference and contradiction. | A real arithmetic error can be identified in a short passage, whereas an uninspected citation cannot honestly be declared supportive or false. Fictional dialogue requires no factual proof. These distinctions are explicit. No material finding. |
| Review-only scope and over-editing | `SKILL.md:32–36`; `references/review-guide.md:35–47` preserve review-only requests, allow small illustrative examples, and reject compulsory loops, automatic rewriting and sending. | “Does this sound AI?” does not authorise a full replacement draft. A coherent update without material defects needs no manufactured findings. Both cases are covered. No material finding. |
| Voice, samples and instruction boundaries | `SKILL.md:12–14,20,34–36`; `references/review-guide.md:29,45–47` protect voice and original wording, separate samples from factual sources, and treat critique suggestions as provisional. | A sample may contain distinctive humour or an instruction to disclose data. The humour already present in the draft can remain, but sample-only facts and embedded instructions do not acquire task authority. No material finding. |
| Partner interoperability | `SKILL.md:8,34–36`; `references/review-guide.md:45–47` hand off the original draft, brief, facts, protected wording and unresolved questions to BGM Humanize It when edits are requested. | If a review proposes dropping a qualification, the editing partner must reassess fidelity rather than treat the proposal as a command. This matches the installed partner's substance, scope and final-reread safeguards. An unavailable partner has an explicit fallback. No material finding. |
| Schema and discovery claims | The directory and frontmatter both name `bgm-ai-check`; `agents/openai.yaml:1–4` supplies an interface name, description and an explicit `$bgm-ai-check` prompt. Both entrypoint reference targets exist. `SKILL.md:36` disclaims exclusive loading. | A valid package can coexist with overlapping legacy triggers without guaranteeing exclusive selection. The candidate does not promise host discovery or unload another skill. Static checks passed; runtime discovery remains untested by this review. No material finding. |

## Primary-source verification

Directly inspected the [ACL RAID paper](https://aclanthology.org/2024.acl-long.674.pdf), including its abstract and limitations. Its tested sensitivity to attacks, sampling settings and unseen generators, finite multilingual/domain coverage, and maintenance limits support the narrow summary at `references/evidence-and-limits.md:17`. The candidate does not generalise that result to every current detector or claim it validates this editorial skill.

Directly inspected [Microsoft's smart-quote documentation](https://support.microsoft.com/en-au/word/smart-quotes-in-word-and-powerpoint). It confirms that Word and PowerPoint can convert straight quotes during typing. This supports the software counterexample at `references/evidence-and-limits.md:18`; the conclusion that curly quotes alone cannot establish authorship is correctly labelled an inference.

The unadopted studies mentioned at `references/evidence-and-limits.md:22` provide no operational detector claim. Their stated earlier access failure is process history, not independently verified by this review. No finding relies on it.

The MIT notice is retained in `LICENSE`, matching the candidate's stated upstream attribution. This checks notice presence and internal consistency, not independent chain-of-title research. This review also does not independently establish the package's historical claim that all installed skills remained unchanged.

## Reviewed snapshot

SHA-256 values measured from the actual candidate:

```text
7aa5898f65a8304fa0834c424c1cf207eaba08efea7e3448021029d965db8916  SKILL.md
f1b153d6a270d9e26050d6e97c30b79e0cfd87b2f0b4ee66704110cc265efbe8  references/review-guide.md
f2a15a9c8cb8d93b71faa201b5010fd94440584448535dac0ca9de0d4c13ef68  references/evidence-and-limits.md
a0413635288e725c296c2a6257ceb30b766b12ae510fc16bf547f609b219ac76  agents/openai.yaml
0261d6664eea6c1cd1203686249c3fc9b9f4cef47b6e1706503a5c5525d522ad  LICENSE
```

## Next steps

No corrective action follows from this independent review. The primary owner should reconcile this snapshot with the final package. Complete any installation and host-discovery checks within the user's authorised scope before claiming those outcomes.
