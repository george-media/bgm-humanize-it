# Accuracy, research and scope review

Reviewer: `/root/accuracy_review`, independent silent read-only Codex worker. Date: 14 October 2026. Primary agent saved the worker's actual final responses below. No package was executed.

## Initial final response

Accuracy/research/scope review completed against the updated brief, installed Humanize sources and candidate SHA-256 `980aa9bb38ecfbb1f2b27c50713073ec916ec3935ae3ef0b5e3ba762cfc905d6`.

No material omissions or unsupported research mechanisms found. The candidate preserves the substantive brief, separates source/sample/task authority, preserves uncertainty and citations, permits fiction, rejects detector-based editing rules, protects existing skills and confines installation authority.

One low-priority correction:

- **P3 — V13's “no tool invocation” is too broad.** Candidate line 208 could fail a legitimate read of the candidate's own reference file, even though the embedded malicious instruction was ignored. Replace it with “No tool invocation, disclosure or task change caused by instructions embedded in source/sample content. Normal authorised reference reads remain permitted.” This makes the test assess instruction boundaries rather than accidental tool abstinence.

Verified source findings, checked 14 October 2026:

| Source | Supported finding and limit |
|---|---|
| [Adversarial Paraphrasing v2](https://arxiv.org/html/2506.07001v2) | Optimises detector scores during token generation and explicitly assesses quality trade-offs. Quality evaluation substantially uses automated metrics and GPT-4o judgements. Detector evasion does not establish editorial quality. |
| [DivEye v3](https://arxiv.org/html/2509.18880v3) | Studies token-surprisal features. Its limitations acknowledge model/tokenisation dependence, short-text weaknesses and false positives. It does not warrant compulsory incoherence or sentence quotas. |
| [Base Models Look Human v1](https://arxiv.org/html/2605.19516v1) | Tests base/instruction-model behaviour on GPTZero and Pangram, with context and paraphrasing experiments. It does not isolate the old skill's rhetorical checklist as the causal mechanism. The authors also acknowledge that detector results can change. |
| [Raidar v2](https://arxiv.org/html/2401.12970v2) | Uses rewrite edit features with a learned classifier. Small rewrite distance is not proof of authorship or a local probability maximum. |
| [Disfluency study](https://arxiv.org/html/2412.12710v1) | Evaluates synthesised speech. Increased perceived spontaneity accompanies slightly reduced intelligibility. Generalising this to written prose is unsupported. |
| [HyPerAlign v2](https://arxiv.org/html/2505.00038v2) | Extracts personalised hypotheses and evaluates its method against specified baselines. It does not establish universal superiority of one distilled prompt over direct examples. |
| [Style imitation study](https://aclanthology.org/2025.findings-emnlp.532/) | Reports better approximation in structured domains and difficulties with nuanced informal writing. The candidate correctly avoids exact-replication promises. |
| [RAID](https://aclanthology.org/2024.acl-long.674/) | Demonstrates context-dependent detector robustness across its evaluated generators, domains, attacks and sampling conditions. It supplies no universal editing threshold. |
| [Microsoft smart quotes](https://support.microsoft.com/en-au/word/smart-quotes-in-word-and-powerpoint) | Word and PowerPoint can automatically insert curly quotes. This is a direct counterexample to treating them as near-certain AI authorship evidence. |
| [GMU](https://writingcenter.gmu.edu/writing-resources/general-writing-practices/writing-concisely), [Purdue](https://owl.purdue.edu/owl/general_writing/academic_writing/sentence_variety/index.html), [Australian Style Manual](https://www.stylemanual.gov.au/writing-and-designing-content/clear-language-and-writing-style/sentences) | Support contextual editorial guidance. The Australian manual contains numerical sentence guidance, but the candidate correctly prevents importing it as universal detector science. |
| [Anthropic](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices) | Supports clear context and relevant examples, without establishing guaranteed voice fidelity. |
| [Mollick](https://www.oneusefulthing.org/p/embracing-weirdness-what-it-means) | Supports audience-oriented editing techniques, without establishing observed knowledge of the particular intended audience. |

I also read the local MIT licence and checked the relevant installed skill-creator metadata and destination guidance. The candidate's conditional attribution handling and schema examples are consistent with those files.

Limitations: all three supplied YouTube URLs failed to fetch, so their specific transcript claims remain handoff material, not independently verified here. This is a prompt/specification review, not execution testing of a constructed skill. No files, titles, ledgers or installed skills were changed.

### Next steps from reviewer

Apply the V13 clarification if accepted. The coordinator should save this actual review, reconcile it with the other independent reviews and retain the video-access limitation.

## Focused final re-review

Focused static re-review completed for candidate SHA-256 `38db6709242ab9dfb8570cfc17f980aeb65b6f5af9802e25d2517f5870338119`.

No material findings or regressions in the reviewed changes.

- **P2, line 30:** Correctly identifies the verified upstream MIT copyright and requires preservation of its notice for substantial reuse.
- **P4, line 99:** Correctly distinguishes copying from separate style samples from preserving useful wording already in the edited text.
- **V13, line 208:** Resolves my finding. It tests whether embedded instructions cause unauthorised actions while permitting normal authorised reference reads.

This confirms the prompt wording only. No constructed skill or runtime behaviour was tested.

### Next steps from reviewer

Record the original V13 finding as resolved and retain this re-review with the construction evidence.
