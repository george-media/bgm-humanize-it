# BGM Humanize It engineering audit

Date: 14 October 2026, Australia/Sydney. Owner: chat 002, thread `01a13898-5b8a-7571-99c0-7e422a7dead6`.

Deliverable: [self-contained creation prompt](BGM-Humanize-It-Creation-Prompt.md). This task engineers a prompt. It does not create, install, replace or disable a skill. The subsequent user request authorises committing the documentation to `/Users/damian/Sites/localhost/bgm-humanize-it/`, not executing the implementation prompt or pushing to a remote.

## Status and evidence boundaries

The prompt covers a staged, distinct `bgm-humanize-it` package with display name **BGM Humanize It**, concise entrypoint, conditional references, supported metadata, construction reviews and twenty future behavioural cases. Accuracy, requested intervention, meaning, authorial voice and house style take precedence over pattern removal.

Prompt engineering and the requested review set are complete. Two independent silent workers completed substantive adversarial reviews and focused re-reviews. Additional independent parent reviews and substantive parent Claude results were read and reconciled. This chat's Claude companion review returned an authoritative substantive final result, and its focused re-review explicitly resolved all three findings with no new material findings. All accepted findings are reflected in the final prompt.

The reviews validate the implementation specification. No future skill was generated, run, scored by a detector or validated by `quick_validate.py`. The prompt expressly requires those applicable construction checks later. No detector-evasion or exact voice-replication guarantee is made.

## Sources and authority

| Source | Use and authority |
|---|---|
| [Project AGENTS snapshot](../sources/Project-AGENTS.md) and Damian's direct instructions | Australian English, project numbering, destination-specific client-copy conventions, silent reviewers and completion reporting. Teamwork Desk rules are user conventions, not research findings. |
| [Ledger snapshot](../sources/Task-Numbering-Snapshot.json) and [supported app readback](reviews/Numbering-Readback.json) | Reserved 001 and created 002 identity. This chat did not mutate the live ledger. The parent owns registration. Snapshots are historical evidence, not a new live ledger. |
| [Engineering brief](../ENGINEERING-BRIEF.md) | Full merged prompt, mandatory corrections, useful legacy guidance and research register. Updated precedence, sample-analysis, evidence, discovery, licence and source-authority clarifications were reread. |
| `/Users/damian/.agents/skills/humanize/SKILL.md` | Read in full as source material, including its initial rules, levers, advanced techniques, protocol, genre guidance and word list. Useful guidance retained, unsupported mechanisms rejected. |
| `/Users/damian/.agents/skills/humanize/references/research.md` | Read in full as inherited claims requiring scrutiny, not automatically verified evidence. |
| `/Users/damian/.agents/skills/humanize/LICENSE` | Read MIT licence and verified Copyright (c) 2026 Harshaneel Gokhale. P2 carries the notice/provenance obligation for substantial reuse. |
| `/Users/damian/.codex/skills/.system/skill-creator/SKILL.md` and `references/openai_yaml.md` | Architecture, progressive disclosure, frontmatter/UI metadata, default discovery, staged location, meaningful testing and validator contract. No package initializer was run. |
| Claude Code Advisor 0.1.18 skill and bundled runtime | Required companion-only read-only review, default model selection, xhigh effort, local tools, empty strict MCP, no Chrome and authoritative result handling. |

The legacy skill is deliberately not invoked as a writing authority during engineering. Its instructions conflict with the requested corrections. No Express Glass project content or parent-chat history was read. Parent messages and supplied review files were used only for this task. The lightweight memory search returned no relevant hits and supplied no factual basis.

## Semantic requirements coverage

Locations refer to stable P1–P11 sections and V1–V20 cases in the creation prompt. “Retained” means the capability survives. “Refined” means a source instruction was narrowed or made conditional. “Rejected” means the harmful mechanism was explicitly removed while preserving the useful editorial purpose.

| ID | Source requirement or issue | Disposition and prompt coverage |
|---|---|---|
| C01 | Prompt-only engineering, complete future instructions | Retained. Intro and P1 separate reading/review from later explicit execution. No package created now. |
| C02 | Exact display and machine names | Retained. P1/P3 name the folder, frontmatter and UI display. |
| C03 | Protect installed Humanize and ai-check | Retained. P1/P11 prohibit replacement, disabling and configuration changes, require manifest comparison. |
| C04 | Future staging and installation boundary | Refined. P1 authorises a staged build only when executed. P11 makes global installation conditional on express authority and destination checks. |
| C05 | Self-contained package and concise entrypoint | Retained. P2/P3 provide complete requirements, a focused tree, essential entrypoint safeguards and selective references. Approximate size is guidance, not a gate. |
| C06 | No unnecessary scripts or auxiliary files | Retained. P2/P3/P9 keep reports outside runtime package and require an actual need for extras. |
| C07 | Naming, discovery, metadata and invocation | Retained. P3 has supported YAML, default automatic discovery and `$bgm-humanize-it`; P11 discloses overlap without claiming to unload another skill. |
| C08 | Topic/text and brief fields | Retained. P4 includes purpose, audience/knowledge, main point/action, format, tone/register, target length and optional house style, adding edit scope. |
| C09 | Australian English and explicit house style | Retained. P4/P7 and V16 apply house preferences without labelling them detector evidence. |
| C10 | No semicolons in headings | Retained as a house preference. P4 protects literal quotations and resolves heading conflicts without silent quote edits. |
| C11 | Clarify only material missing information | Refined. P4 asks the fewest needed questions, keeps three as a practical initial default, proceeds when facts suffice, and preserves essential clarification. V12. |
| C12 | Source, brief and samples separated | Retained. P4/P5 distinguish factual authority and style evidence. V3/V13. |
| C13 | Embedded instructions treated as content | Retained. P4 rejects source/sample instructions as tool authority. V13 permits authorised reference reads while testing injection-caused actions. |
| C14 | Sample vocabulary, formality and directness | Retained. P5.8 uses context-specific observations, not compulsory imitation. V3/V19. |
| C15 | Sample rhythm, paragraphs and openings | Retained. P5.8, P6 and V8/V19 adapt to current purpose without sentence quotas. |
| C16 | Punctuation habits, recurring phrases and transitions | Retained. P5.8 uses these as tentative guidance, not forced tics or direct phrase copying. |
| C17 | Avoid importing sample facts or distinctive phrases | Refined. P4 forbids transplanting separate sample phrases without permission, preserves useful wording already in the edited draft and does not infer authorship from overlap. V3/V10/V19. |
| C18 | Straightforward audience-appropriate default voice | Retained. P5.9 with current brief precedence. |
| C19 | Contractions when register supports them | Refined. P5.9/P7 allow rather than require them. V6 checks formal and conversational contexts. |
| C20 | Meaning, facts, numbers, quotations, commitments | Retained. P5.1–2 and final reread in P7. V1/V2/V14. |
| C21 | Qualifications and degree of certainty | Retained. P5.1/P5.6 preserve limitations and conditional conclusions. V1/V5. |
| C22 | Citations remain with supported claims | Retained. P5.1 explicitly protects scope when sentences move. V1/V14. |
| C23 | Incorrect/unsupported source facts | Refined. P5.2 flags issues, permits transparent sourced correction and forbids silent guessing or endorsement. V2. |
| C24 | Supplied experiences and opinions | Retained. P5.3 preserves real perspective and forbids invented nonfiction experience, expertise, quotes or evidence. V8. |
| C25 | Specificity and labelled hypothetical examples | Refined. P5.3 allows supported detail, clearly hypothetical examples or honest abstraction, without mandatory anchors. V12. |
| C26 | Explicit fiction and invention | Retained. P5.4/P7 allow requested fictional scenes/dialogue without requiring nonfiction evidence. V9. |
| C27 | Technical vocabulary and explanations | Retained. P5.5/P7 preserve precision and explain only for audience need. V4. |
| C28 | Consistent named referents | Retained. P5.5 rejects artificial synonym cycling and uses clear pronouns. |
| C29 | Evidence supports argument, material objections | Retained. P5.6 avoids forced provocative positions and false certainty. V5. |
| C30 | Direct verification and primary/synthesis distinction | Retained. P5.7/P8 require appropriate sources and state access limits. Other AI agreement and audience simulation are not verification. V17. |
| C31 | All empirical/causal/comparative claims checked | Retained. P8 includes qualitative as well as numerical claims, source identity/version, method/context and limits. Unsupported assertions are omitted. |
| C32 | Separate evidence, editorial convention, preference and speculation | Retained. P8 names all four categories and blocks inherited citations becoming automatic authority. |
| C33 | Simplification and redundant language | Retained. P6 simplifies only where meaning survives, including unnecessary nominalisations and empty transitions. |
| C34 | Exaggerated claims and vague attributions | Refined. P6 requires support or transparent qualification/removal, and does not quietly delete a central disputed claim. |
| C35 | Helpful humour, empathy, warmth and emphasis | Retained. P5.8/P6/P7 protect them from indiscriminate padding removal. V11/V15/V19. |
| C36 | Assistant acknowledgements, flattery and canned sign-offs | Refined. P6 removes irrelevant framing while retaining appropriate courtesy and required wording. P7 keeps destination-specific exceptions. |
| C37 | Purposeful sentence/paragraph variation | Retained. P6 links rhythm and openings to meaning and emphasis, not numerical quotas. |
| C38 | Active voice and useful passive construction | Retained. P6/P7 and V4 preserve functional passive voice. |
| C39 | Paragraph logic, clear purpose and narrative openings | Refined. P6 resolves referents and links ideas, without forcing point-first or scene-first openings. V8. |
| C40 | Useful headings, lists and all distinct items | Retained. P6/P7 and V7 preserve necessary third items and navigation. |
| C41 | Repetitive rhetoric and useful conclusions | Refined. P6 permits genuine comparisons, anaphora, tricolons, symmetry and endings when useful. V5/V7/V9. |
| C42 | Minimum necessary edit and original structure | Retained. P6 permits zero or minimal change, including prior assistant text. V10. |
| C43 | Final reread of actual output | Retained. P7 separates fidelity/citations, comprehension/structure and voice/style checks, and rechecks changed passages and exceptions. |
| C44 | Finished text default and requested output form | Refined. P7 allows requested explanations, alternatives and formats; essential factual notes/clarification take precedence. V18. |
| C45 | Reject universal sentence/dash/novelty quotas | Rejected. P6 disallows ranges, deviations, bands, fragments, punctuation quotas and compulsory novelty. Explicit compatible house constraints remain preferences. V16. |
| C46 | Reject incoherence, deliberate errors and off-topic additions | Rejected. P6 forbids misfires, forced loose ends, artificial disorder and authenticity tokens. |
| C47 | Reject unsupported first-person plausible specificity | Rejected. P5.3/P6 prohibit implied real experience without material support. |
| C48 | Reject typography-based authorship claims | Rejected. P6 permits punctuation under style/quotation rules and P8 supplies source leads and limits. V6/V14/V17. |
| C49 | Reject absolute vocabulary/comparison bans | Rejected. P5.5/P6 preserve technical uses, quotes, comparisons and boilerplate. V4/V5/V14. |
| C50 | Reject blanket structure/rhetorical bans | Rejected. P6 applies purpose/frequency judgement. V7/V8/V9. |
| C51 | Reject forced sides and caveat deletion | Rejected. P5.6/P6 protect real uncertainty, balanced evidence and provenance. V1/V5. |
| C52 | Reject compulsory rewrite and no-clarification rule | Rejected. P4/P6 allow questions and proportionate edits. V10/V12. |
| C53 | Reject residual pattern removal despite meaning damage | Rejected. P6/P7 prioritise fidelity, genre and voice and include a stopping condition. |
| C54 | Reject detector/puffery-only note restrictions | Rejected. P7 permits consequential factual notes and explicit format requests, without stock detector warnings. V18. |
| C55 | Reject under-half-length proves puffery | Rejected. P6 checks lost substance, nuance, commitments, humour, empathy and explanation. V11. |
| C56 | Reject lowest-detector-score quality and evasion guarantees | Rejected. P6/P8 use editorial criteria, no routine uploads or detector optimisation. |
| C57 | Other legacy advanced/decoding mechanisms | Rejected as default techniques. P6/P8 exclude similarity-as-authorship, detector synonyms, homoglyph/watermark tricks, fixed paraphrase and sampling recipes, and unsupported superiority claims. |
| C58 | Academic/technical genre guidance | Retained conditionally. P7 covers citations, methods, terminology, precision and audience. V4/V6. |
| C59 | Narrative and creative genre guidance | Retained conditionally. P7 distinguishes real memories from fiction and protects expressive forms. V8/V9. |
| C60 | Professional and async genre guidance | Retained conditionally. P7 makes asks clear and permits fitting shorthand without compulsory slang, lowercase or disorder. V15. |
| C61 | Teamwork Desk convention | Direct user preference, explicitly attributed to project AGENTS. P7/V15 scope HTML, supplied first name, tone and automatic signatures, without sending authority. |
| C62 | Seventeen source leads and their limits | Retained. P8 includes every brief URL and audit boundary. Additional legacy leads are quarantined pending verification, not silently inherited. |
| C63 | Structural validator and discovery checks | Retained as future construction work. P9 separates script scope from manual metadata/reference checks. P11 checks active roots and V20 tests positive and negative routing/scope without confusing file creation with discovery. |
| C64 | Independent behavioural cases and semantic invariants | Retained. P9 covers all requested traps in V1–V20, gives evaluators raw tasks without the rubric, and requires actual saved results. |
| C65 | Independent adversarial workers and one edit owner | Retained for engineering/construction. P10 separates reviewer roles and findings from edits. Ordinary rewrites use proportionate checking. |
| C66 | Claude companion, actual final result and blocker handling | Retained. P10 requires configured default, xhigh, local tools, empty MCP, no Chrome, validated result and finding reconciliation. Availability alone is insufficient. |
| C67 | Scope reviews to construction, not normal rewriting | Retained. P1/P6/P10 expressly prevent mandatory recurring review machinery. Human/editor review remains proportionate. |
| C68 | Semantic audit, provenance and licence | Retained. P2/P11 require notice retention, claim checks, review dispositions and evidence links outside runtime package. |
| C69 | Three-digit title, reservations and consent boundary | Retained. P1 uses ledger plus live readback, preserves 001/002 and prohibits bypassing source-folder consent. Current task used no new chat or ledger mutation. |
| C70 | Completion report and Next steps | Retained. P11 requires status and next action. P7 keeps this out of routine edited deliverables unless requested. |

## Review results and dispositions

| Review | Actual evidence | Findings and disposition |
|---|---|---|
| Independent accuracy/research/scope | [Actual final review and focused re-review](reviews/Accuracy-Research-Scope-Review.md) | No material omission or unsupported mechanism. One low-priority V13 test ambiguity accepted and fixed: normal authorised reference reads remain allowed. Focused re-review confirmed resolution. |
| Independent voice/genre/format | [Actual final review and focused re-review](reviews/Voice-Genre-Format-Review.md) | Initial review found no material defect but missed P4's overbreadth. After a separate reviewer identified it, focused re-review confirmed the corrected draft preserves distinctive original wording. This miss is retained in the evidence. |
| Additional parent accuracy and voice reviewers | [Parent-provided results](reviews/Parent-Prompt-Adversarial-Reviews.md) | Accuracy found no material issue. Voice identified P2-severity P4 ambiguity. Accepted: sample-copy restriction now applies only to separate samples. Original humour/phrasing is protected. V10/V19 were rechecked statically. |
| Substantive parent Claude review | [Initial authoritative JSON](reviews/Parent-Claude-Review.json) and [focused re-review](reviews/Parent-Claude-Re-review.json) | Two medium traceability findings accepted: P1/P2 now identify ledger/app authority for 002 and AGENTS provenance for Desk conventions. P4 clarification and overlap clause accepted. Focused re-review marks both medium findings resolved and no new material defect. Non-binding entrypoint word guide retained because it is expressly not a limit. |
| This chat's Claude review | [Initial authoritative JSON](reviews/Claude-Review.json) and [focused re-review](reviews/Claude-Re-review.json) | Completed `advise-mv7lt0zi-nvrlag`, then `rescue-mv7m2no1-gu8wit`, read-only supervised provider JSON, cleanup verified. A: negative discovery testing accepted, with scope-sensitive interpretation. B: explicit validator/manual split accepted. C: active-root verification accepted as an unverified risk, not proof the default root is wrong. Re-review resolves all three and reports no new material finding. |

The parent Claude review had a deliberately limited local source set, so its identity/convention findings indicate missing visible provenance, not evidence that the underlying ID or user instruction was fabricated. The ledger and supported app readback establish 002. Damian's direct instructions, now persisted in project AGENTS, establish the Desk convention. The prompt now makes those origins explicit.

The parent first obtained an authoritative but non-substantive result referring to an earlier review. It was not counted. The saved substantive follow-up is `rescue-mv7lt447-q1p9yf`, a completed read-only supervised job, authoritative `provider-json`, cleanup verified, resumed canonical session `5023f265-a184-4a34-914b-b7f62cefb2eb`. The actual JSON is preserved without rewriting Claude's findings.

This chat's Claude initial review completed with canonical session `cdf306ce-1d6f-4691-8d4f-fc24b9952f18`. The companion used `--effort xhigh` and no model override, so it used the user's configured default. No particular provider model ID is asserted from the result. The installed companion implementation applies local `Read,Glob,Grep`, strict empty MCP and `--no-chrome` to this read-only supervised route. No `--write`, `--allow-web` or `--allow-mcp` was used. The result's opening note acknowledges unavailable writing tools; it returned its substantive review directly and has no write authority.

Claude A's practical testing recommendation is accepted, but automatic selection alone is not necessarily an editing failure. The original P3 requirement was that a narrow task must not become a full rewrite. V20 now tests unrelated requests as well as translation/proofreading, records routing when observable, and distinguishes unnecessary selection from harmful scope expansion. It preserves automatic discovery. Claude B is resolved by separate script and manual-check instructions. Claude C is resolved as a verification requirement, without claiming `.agents/skills` and `.codex/skills` cannot coexist or changing the skill-creator default without evidence. The focused re-review completed through the companion as `rescue-mv7m2no1-gu8wit`, with the same validated canonical session and verified cleanup. Claude explicitly accepted the narrower interpretation of discovery failures.

Reviewer agreement is evidence that the specification was challenged, not proof of research truth or future behaviour. The initial Claude review loosely says P8 contains the old source's numerical figures and names some extra papers individually. The prompt actually avoids importing those figures and groups several extra source leads. These are review-summary imprecisions, not adopted claims, and the saved raw review remains unchanged.

## Research checks and limitations

The accuracy worker independently inspected fourteen non-video source leads using web tools and saved source-specific findings and limitations in its linked review. They support rejecting the legacy transfer from detector statistics to compulsory prose rules. The Australian Style Manual itself contains contextual numerical sentence guidance, so its presence is not treated as permission to import universal quotas. Speech/TTS disfluency findings are not generalised to prose. Model agreement and detector score improvements are not evidence of factual verification or better writing.

All three supplied YouTube URLs failed to fetch in this review. Their transcript-specific advice remains a handoff summary, not independently reverified evidence. P8 requires source inspection before attribution and omission of unsupported research claims. It does not rely on those videos to justify a universal editing mechanism.

Not every inherited Humanize reference was re-researched. Unspecified authors, vendor roundups and extra detector/decoding claims are quarantined in P8 and not adopted. No numerical research result was imported into the new specification. Future package claims, including qualitative empirical, causal and comparative ones, must be verified directly or omitted.

## Verification and repository delivery

The original reviewed candidate is preserved as [v1](reviews/Creation-Prompt-Reviewed-v1.md), SHA-256 `980aa9bb38ecfbb1f2b27c50713073ec916ec3935ae3ef0b5e3ba762cfc905d6`. The first corrections were independently re-reviewed at SHA-256 `38db6709242ab9dfb8570cfc17f980aeb65b6f5af9802e25d2517f5870338119`. The provenance/overlap revision is preserved as [v2](reviews/Creation-Prompt-Reviewed-v2.md), SHA-256 `a188cc5a7b72876b81a61bbb127b280772db2565e101426bbefedb26a5d55016`.

Final prompt SHA-256: `c5d304df1f9754e72251406b2b6ab8c356159fd188fad6bb63b704d9821fe131`. [Final checks](reviews/final-checks.json) confirm all P1–P11 and V1–V20 identifiers, no semicolons in authored headings, no created skill candidate, and no new `bgm-humanize-it` package in either checked global root. All five existing files in Humanize and ai-check match the [before manifest](reviews/protected-skills-before.json). These narrow checks support structure/protection claims, not behavioural correctness.

Supported `list_threads` and `read_thread` readbacks confirm this chat still has exactly one `002 ` prefix, in the correct project, with no visible collision. The app returns `002 Engineer BGM Humanize It skill creation…`; the ledger preserves the full reserved title. No title was changed by this chat. The founding `001 Review video and draft prompt` remains reserved with its sidebar move pending. The checked live listing is capped at 50 and the first archived page has a continuation cursor, so no exhaustive all-history audit is claimed. No new allocation was attempted and the live ledger was not mutated.

The target repository is on `main`, initially had no commits or tracked files, and contained only an untracked `.DS_Store`. No target/ancestor AGENTS file was found in the inspected ancestry. The requested local commit contains only this task's documentation, authority snapshots and supporting review evidence, with `.DS_Store` excluded by `.gitignore` and left in place. Commit identity is recorded by Git rather than embedding a self-referential hash in this audit. No remote push is authorised by the commit request.

Operational paths in the prompt refer to the configured Mac/project. Committing a copy to the requested repository does not move the project or install a skill. Source snapshots document authority at the time of engineering and must not be treated as live discovery or chat state. Repository-copy checks and Git verification accompany delivery.

## Next steps

The engineering prompt is ready for a later explicit construction request. Execute it only when the user requests skill creation. Global installation remains a separately authorised action. The founding chat's pending project move, if still wanted, requires the user's sidebar action.
