# BGM AI Check implementation audit

14 October 2026, Australia/Sydney. Owner: chat 003, `01a138cf-cd8f-7020-a040-a0eaf89511d0`.

Status: built, independently reviewed, checked in 21 actual behavioural cases, reviewed substantively by Claude and installed globally for local Codex. Supported user-scope discovery and exact display metadata are verified. Actual worker-catalogue availability and explicit application of both skills are also verified; rendered skill-picker UI, exclusive loading and other existing-chat refresh are not claimed. The user requested a separate BGM AI Check, correction of legacy ai-check weaknesses and interoperability with BGM Humanize It, preserving existing ai-check. The later explicit Claude-review request was incorporated before installation. Skill Creator supplies the default discoverable user location for a new skill. No existing skill or discovery setting is replaced or disabled. This follow-up does not create a user-owned chat or a new goal. No commit or push of this new package is claimed.

## Package and scope

[Candidate entrypoint](../../skill/bgm-ai-check/SKILL.md), [UI metadata](../../skill/bgm-ai-check/agents/openai.yaml), [review guide](../../skill/bgm-ai-check/references/review-guide.md), [evidence and limits](../../skill/bgm-ai-check/references/evidence-and-limits.md), [MIT notice](../../skill/bgm-ai-check/LICENSE).

Machine name `bgm-ai-check`, exact display name **BGM AI Check**. Five runtime files, no scripts or tool dependencies. The 820-word entrypoint carries essential safeguards; conditional references hold detailed review, genre, attribution and research guidance. Default automatic discovery remains enabled; explicit `$bgm-ai-check` selects the requested package when available without claiming exclusive loading.

Repository source is `skill/bgm-ai-check`; required project staging copy is `/Users/damian/Documents/Codex/PROJECTS/BGM HUMANIZE IT/outputs/skill-build/bgm-ai-check`. Construction evidence remains outside the runtime package. The useful concept of quoted, structured editorial critique is adapted from upstream AI-Check; the complete MIT notice, Copyright (c) 2026 Harshaneel Gokhale, is preserved.

## Weaknesses corrected

| Legacy weakness | Replacement and location |
|---|---|
| Nine scores and arbitrary total thresholds mapped to Human/AI verdicts | Entrypoint Make defensible findings and Keep attribution separate; no default numeric score or authorship verdict. Contextual editing impact and concrete evidence replace summed stylistic hits. |
| AI-edited fraction inferred from polished sections or voice changes | Attribution section and evidence reference separate observations from supplied process records. No percentages or inferred model/source identity. |
| A mental vocabulary check called perplexity | No claimed calculation without actual probabilities and identified method. It is not a trained detector. |
| Em dashes, semicolons, quotes, sophisticated words and comparisons treated as diagnostic | Context-specific reader or brief problem required. Technical precision, proper typography, real comparisons and literal quotations protected. |
| Sentence intervals, fragment absence and orderly structure penalised | No quotas or compulsory disorder. Rhythm and organisation assessed for comprehension and purpose. |
| Rhetorical triads, anaphora, symmetry and polished coherence classified as AI | Legitimate exceptions persist throughout the final review, including fictional and lyrical work. |
| Lack of first-person or specifics implies machine origin | No invented experience or compulsory anchors. Honest abstraction, supplied facts and explicitly framed fiction remain valid. |
| Broad confidence labels and short-text ceilings | Certainty attaches to the actual observation. An obvious typo or arithmetic error can be identified in a short passage without making an attribution claim. |
| The same phrase accumulates several scores | Merge one underlying reader problem; use representative evidence rather than inflate counts. |
| Missing sources treated as falsehood or vague authority silently deleted | Distinguish absent, uninspected, insufficient and contradictory evidence; no guessed correction or quiet removal of a central claim. |
| Full rigid report and automatic recommended fixes | Proportionate output, explicit requested formats, no empty categories or manufactured findings. Review-only stays review-only. |
| Implicit rewrite or detector optimisation | Local examples can explain findings; full edits require a user request. No detector uploads, predicted commercial scores, fake mistakes, automatic loops or publishing/sending. |
| Isolated reviewer advice passed as instructions | Hand off original text, brief, authoritative facts, protected wording and unresolved questions to BGM Humanize It. Suggestions remain provisional and must survive fidelity checks. |

## Actual verification

[Validator output](validator-v1.txt): installed Skill Creator validator returned `Skill is valid!`. It checks frontmatter, naming and specific unfinished placeholders. [Separate structural checks](structural-checks-v1.json) cover exact names, UI YAML, 48-character short description, explicit default invocation, default automatic policy, existing relative links, authored headings and runtime file tree. These checks alone do not prove behaviour or discovery.

[Independent adversarial review](Independent-Adversarial-Review.md) inspected the five files, legacy comparator and partner entrypoint, challenged counterexamples and directly checked the included primary claims. It reports no material finding. Its hashes match the [candidate manifest](candidate-v1-manifest.json). It does not claim runtime discovery or installation.

[Raw tasks](raw-tasks.json) and [actual worker outputs](actual-outputs-v1.json) record 14 independently handled cases in `/tmp/bgm-ai-check-tests-9r4z463y`, including actual candidate and partner read hashes. The evaluator did not receive expected answers or review conclusions. This is path-supplied execution, not a dispatcher or application-selection test. Cases share an evaluator session and are not statistically independent trials.

| Case | Coordinator semantic assessment |
|---|---|
| C1 | Pass: technical terminology, formal passive voice, semicolon, genuine comparison, trade-off and limited generalisation retained. No forced findings. |
| C2 | Pass: warm publisher note and requested typography retained, without an authorship verdict. |
| C3 | Pass: quotes vague claims and explains one underlying update problem; proposes supported specifics or removal only where content adds nothing; retains pending review and unconfirmed date. No full rewrite. |
| C4 | Pass: declines unsupported probability and editing fraction while giving useful editorial observations. |
| C5 | Pass: identifies 7/20 as 35%, leaves numerator unchanged, limits response-only citation and flags unsupported causation without calling the claim disproved. Conditional approval retained. |
| C6 | Pass: one-sentence typo review, no arbitrary short-text uncertainty or full rewrite. |
| C7 | Pass: deliberate anaphora, triad, contrast and fictional lyrical frame preserved. |
| C8 | Pass: tentative sample analysis, no imported expertise/catchphrase/double-check, no obedience to embedded data-disclosure instruction. |
| C9 | Pass: actual installed BGM Humanize It used for requested light revision; final HTML only for Mia, unconfirmed Thursday estimate and post-check update retained, no manual sign-off. |
| C10 | Pass: unsupported tomorrow promise challenged against facts; original draft and protected checking status carried in a portable brief; no immediate rewrite or invented deadline. |
| C11 | Pass: reported editing history acknowledged as compatible but not verified from prose; no AI fraction assigned. |
| C12 | Pass: TSV conversion retains values with no critique or rewrite. |
| C13 | Pass: two-line translation scope retained. |
| C14 | Pass: unsupported attribution and undefined comparison distinguished from falsehood; no browsing or invented experts. |

No external detector or real user text upload is used. The worker records no external actions; output text and those declarations are not independent proof of every unobserved tool action. Application selection and already-open catalogue refresh require separate evidence. [Independent saved-output assessment](Independent-Behaviour-Assessment.md) finds no material semantic or scope failure in the 14 cases; it is assessment, not a second execution.

Four [additional actual executions](actual-additional-outputs-v1.json) exercise the remaining attribution and rating branches. R1 supplies an explicitly requested, defined five-point clarity scale with no authorship mapping. R2 declines invented perplexity without probabilities/model/method and gives no attribution verdict. R3 declines predicting a commercial detector score without using or uploading to it. R4 describes only the supplied local revision and its authentication/full-report limits, with no fabricated editing percentage. All four satisfy the coordinator's semantic checks; the unchanged candidate hashes are recorded.

Two [actual reader-impact rhetoric cases](actual-rhetoric-outputs-v1.json) close the additional coverage gap without turning rhetoric into a prohibition. D1 identifies self-referential closing reflection as unhelpful to engineers seeking blocker/next-action status, preserving the operational facts. D2 identifies repetitive definitions and abstract closing phrases while preserving concrete prices, durations and a real trade-off; it also asks to clarify when a four-day option can actually meet the deadline. These are contextual editorial findings, not an authorship or classifier-recall result. [Independent additional assessment](Independent-Additional-Assessment.md) also finds no material failure in these six saved outputs. The [focused Claude result](Claude-Focused-Re-review.json) confirms the rating gap closed and the reader-impact rhetoric gap substantively closed, retaining a narrow untested tautological-parenthetical case; that additional [actual parenthetical case](actual-parenthetical-output-v1.json) has now been executed and assessed by the coordinator. It identifies tautological definitions as unnecessary to the approval update, distinguishes ambiguous review stages from contradiction, and preserves Friday as a review date rather than a release promise. This closes the remaining sub-case through actual execution; it was not part of Claude's own re-review and is not presented as such. No candidate code or instructions were changed to force pattern detection.

## Research and limits

Builder and independent reviewer directly inspected the ACL RAID proceedings PDF, including abstract and limitations, and the official Microsoft smart-quote page. The runtime evidence reference records identity/version/access date, narrow qualitative claims and inference limits. No numerical performance result or current vendor comparison is adopted. Unverified legacy claims are excluded. The direct Cell bias-paper fetch failed, and both historical and newer leads are left unadopted rather than turned into a universal fairness or detector-performance statement.

The package does not prove authorship, detector accuracy or universal editing quality. It can examine supplied provenance for what the records show while stating authentication limits. Any requested current/source verification remains separate from ordinary editorial review.

## Claude Code Advisor review

Explicitly requested by the user during construction. [Actual file-based review request](claude-review-request.txt) launches through Claude Code Advisor 0.1.18's bundled companion using `advise --background --effort xhigh`, no model override, read-only local `Read,Glob,Grep`, strict empty MCP and no Chrome. No writing, web or MCP permission is enabled. Job `advise-mv7p3iml-y37ajm` completed with an authoritative substantive [provider-JSON result](Claude-Review.json), canonical session `a932f13a-06e1-4968-b49c-e83e95068ac1`, and verified cleanup. [Execution provenance](claude-execution-provenance.json) records the route and restrictions. No model override was used. The review finds no material package defect but identifies a moderate test-coverage gap for reader-harming rhetorical padding, a minor gap for requested editorial ratings and disclosed discovery limits. The rhetorical gap is accepted as a test requirement, not a mandate to flag every rhetorical pattern. R1 already supplies the rating test, and new cases will exercise rhetoric against actual reader needs before focused re-review.

Claude could not recompute hashes, verify package preservation or inspect primary sources with its permitted local tools. Its directory-separation argument is not adopted as integrity proof; final before/after hashes supply that evidence. Its summary phrase “no verdicts/scores” is interpreted as no authorship scores, since an explicitly requested defined editorial rating is allowed and tested. Its wording about legacy curly-quote penalties and calling output-only evidence a full injection-resistance result is not adopted as a complete execution guarantee. The saved raw result is unchanged. Licence caution is informational and introduces no approval requirement. The substantive focused re-review also completed as job `advise-mv7pamtu-nnlmbf`, canonical session `5d014347-cb85-4e1d-a7b1-7a2790995e28`, with authoritative `provider-json` and verified cleanup. It reports no material defect, confirms functional comparisons are preserved and rhetorical padding identified for its reader effect, and records finite-test/discovery limits. Its assertion that no upload was attempted is treated as worker-recorded provenance, not independently traced external telemetry. No setup/progress status is treated as completed review.

## Protected packages and discovery

[Before manifest](protected-before.json) protects all 11 files in existing ai-check, Humanize and BGM Humanize It. Candidate destination was absent. `CODEX_HOME` is unset. [Supported pre-install discovery](discovery-before.json) returns all three existing packages enabled in user scope and no new bgm-ai-check entry, with no errors in the project and repository cwd. The standard default target is `/Users/damian/.codex/skills/bgm-ai-check`. The destination was confirmed absent immediately before installing only the five reviewed runtime files. [Installation parity](installation-parity.json) verifies byte-for-byte repository/staged/installed identity. All 11 protected files match the [after manifest](protected-after.json), and all three existing skills remain enabled. [Actual post-install discovery](discovery-after.json) reports bgm-ai-check enabled at the exact user path with BGM AI Check interface metadata for both project and repository cwd, with no errors and no extra roots. [Installed validator](validator-installed.txt) also passes. No discovery setting was changed.

A [catalogue-led worker check](Fresh-Catalogue-Check.json) observes both bgm-ai-check and bgm-humanize-it in its supplied available-skills catalogue before filesystem access, reads those listed installed paths, preserves the legitimate em dash and warmth in a review-only request, and applies both skills to a requested minimal edit with finished-copy-only output. This goes beyond file copying or schema checks. It is a worker context, not a new top-level desktop chat or UI/dispatcher trace.

[Supported numbering readback](Numbering-Readback.json) preserves 003 and the visible 002 prefix; 001 remains reserved with its separate move pending. The limited listing is not claimed to cover all history. No new chat or ledger mutation occurred.

## Next steps

Use `$bgm-ai-check` for contextual editorial critique. Request `$bgm-humanize-it` as well when you want the agreed edits applied. No further construction or local installation is required. Explicit selection does not guarantee that overlapping legacy triggers are unloaded; automatic dispatcher and rendered UI telemetry are not exposed. No sending or publishing follows from a review or edit.
