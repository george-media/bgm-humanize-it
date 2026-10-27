# Validation, research and limitations

BGM Humanize It and BGM AI Check were constructed and reviewed on 14 October 2026. BGM Client Reply was added on 28 October 2026. Build evidence supports specific checks, not a universal quality claim or an AI-detection accuracy figure.

## BGM Client Reply

The new package passed Skill Creator's frontmatter/name/scaffold validator, UI metadata and local-link checks, source/install hash comparison and an independent static review. A fresh Codex CLI app-server readback discovered it as an enabled user skill in two working directories, without discovery errors. Existing skill file hashes were unchanged.

Six synthetic Vietnamese-to-English cases exercised incomplete testing, staging versus production, contradictory completion claims, literal English-only translation, invocation without input and instructions embedded in client messages. See the [actual responses and assessments](../outputs/client-reply-build-evidence/behavioural-cases.md) and [independent review](../outputs/client-reply-build-evidence/independent-review.md).

An installed CLI invocation also produced the expected Desk HTML and separate Vietnamese explanation. That smoke test used the CLI's default configuration in an isolated working directory. The first attempt using the local user's configuration was rejected before generation because its configured model was unsupported by that CLI/account combination. No user configuration was changed. See the [validation record](../outputs/client-reply-build-evidence/validation.md).

These are bounded model-generated examples, not a measured translation accuracy rate. The forward-test agent generated and assessed its own responses; the separate reviewer inspected instructions. No independent human Vietnamese review, staff-computer installation or guarantee of already-open chat refresh is claimed. A Vietnamese explanation is a review aid, not independent verification.

## What was checked

| Package | Recorded checks | Evidence |
| --- | --- | --- |
| BGM Humanize It | Frontmatter and UI metadata, references, source/install parity, realistic editing cases, independent accuracy/voice reviews and substantive Claude reviews | [Implementation audit](../outputs/skill-build-evidence/Implementation-Audit.md) and [final checks](../outputs/skill-build-evidence/final-checks.json) |
| BGM AI Check | Five-file package structure, source/install parity, 21 actual behavioural cases, independent reviews and substantive initial/focused Claude reviews | [Implementation audit](../outputs/bgm-ai-check-build-evidence/Implementation-Audit.md) and [final checks](../outputs/bgm-ai-check-build-evidence/final-checks.json) |

The cases include technical prose, fictional rhetoric, short reviews, unsupported attribution requests, factual qualifications, voice samples, review-only boundaries and a paired review/edit workflow. Some cases share an evaluator session. The saved outputs and coordinator assessments are finite examples, not independent statistical trials or a measured reliability percentage.

Structural validation cannot establish good editorial judgement. Likewise, model agreement cannot establish a factual claim's truth. Claude reviewed the candidate and saved outputs through a read-only advisor workflow; it did not independently rerun every case, inspect every external source or verify all hashes. The audits distinguish these roles and the actual completed results.

## Discovery and settings

Both packages were verified in local user-scope discovery and in supplied worker catalogues during construction. A later local settings pass enabled both BGM skills and disabled the legacy `humanize` and `ai-check` skills without changing their files. A fresh public app-server readback checked all 40 local project directories and two additional contexts.

Those are checks of one Mac and its installed host, not guarantees for every version, project configuration or existing conversation. The later turn's supplied catalogue still retained legacy entries, so already-open catalogue refresh was not certified. Official documentation recommends restarting Codex after enable/disable configuration changes. See [installation](installation.md) for the current procedure.

The machine-specific activation records remain local rather than being distributed as reusable setup. No cloud installation, rendered picker verification or automatic dispatcher-selection guarantee is claimed.

## Research

Read the packages' conditional research references for the exact sources, access dates and limits:

- [Humanize It research and provenance](../skill/bgm-humanize-it/references/research.md)
- [AI Check evidence and attribution](../skill/bgm-ai-check/references/evidence-and-limits.md)

The inspected [RAID benchmark paper](https://aclanthology.org/2024.acl-long.674.pdf) informs narrow limits on detector performance under its tested settings. It does not validate either skill's editorial judgement or show that every detector always fails. [Microsoft's smart-quote documentation](https://support.microsoft.com/en-au/word/smart-quotes-in-word-and-powerpoint) provides a software counterexample to inferring origin from curly quotes alone.

Uninspected or inaccessible research leads are explicitly identified in the runtime references. Their presence in a bibliography is not evidence for their claims. No commercial detector upload or score-based optimisation was used to validate the packages.

## Rechecking a change

For a documentation change, check links and commands against the current source and official host guidance. For a skill change, check frontmatter, UI metadata, reference paths and realistic tasks affected by the change. A regression case should test meaningful behaviour such as preserving an unconfirmed date or staying review-only, not exact generated wording.

If available in your Codex installation, Skill Creator's `quick_validate.py` can check the package structure. It needs Python and PyYAML as development tooling; neither skill needs them at runtime. There is no bundled automated evaluation suite or CI workflow that proves the recorded historical cases on a new machine.

## Reading historical records

`outputs/` and `sources/` preserve construction history, including local absolute paths, thread/job identifiers and earlier settings. Intermediate status files can show a running job; the completed provider result and audit establish the final review outcome. Local discovery probes have machine-specific defaults and are not portable installers. Earlier “no push” or “legacy skills unchanged” statements describe that build stage, not subsequent commits or settings changes.
