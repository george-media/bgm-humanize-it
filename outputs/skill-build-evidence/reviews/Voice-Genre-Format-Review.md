# Voice, genre and format review

Reviewed on 14 October 2026. Independent read-only review of the full `outputs/BGM-Humanize-It-Creation-Prompt.md` and all six files in `skill/bgm-humanize-it`. No other review results were read. No candidate, installed package or configuration was changed. The counterexample below is a static adversarial probe, not an observed execution failure.

## Verdict

One low-severity wording finding. No material defect found in the remaining voice, genre or format instructions. The package preserves minimum intervention, useful rhetoric, technical precision, humour, empathy and requested output forms. The finding should be corrected before finalising because it is a small universal prohibition inside otherwise context-sensitive guidance.

## Finding VG1 — P3 — The entrypoint prohibits slang without the contextual qualification

**Exact evidence:** `skill/bgm-humanize-it/SKILL.md:34` says: “Do not inject errors, forced loose ends, slang or unsupported first-person specificity.” `references/genres.md:27` instead rejects “artificial slang” and permits suitable informal features where requested or supported by context. `SKILL.md:24` instructs adaptation to sample vocabulary and the current genre. Creation prompt P7 rejects artificial slang, rather than all colloquial vocabulary, and P5.8 requires useful sample features to be adapted to the current brief.

**Practical counterexample:** A supplied team-message sample regularly uses ordinary Australian colloquial language such as “arvo”, “reckon” and “no dramas”. The user asks for a fresh team message at the same register from facts stating that an upload is complete and a check is due this afternoon. The unqualified entrypoint wording can encourage replacing an appropriate “I’ll check it this arvo” with formal wording, despite the sample and audience supporting the colloquial register. This is a plausible instruction conflict, not proof that an evaluator actually produced that failure. The explicit user brief would still have priority.

**Proposed correction:** Replace the relevant sentence with: “Do not inject errors, forced loose ends, artificial slang or unsupported first-person specificity.” Alternatively qualify slang as unwarranted by the brief, samples or audience. Keep the prohibition on invented authenticity tokens. No larger rewrite is needed.

## Other challenges and evidence

| Challenge | Assessment and precise candidate evidence |
|---|---|
| Excessive terseness and loss of warmth | `references/editing-and-voice.md:3,15,43` explicitly subordinates terse defaults to the brief, retains jokes and empathy, and checks what shortening loses. `SKILL.md:24,38` carries those safeguards into the entrypoint. A warm apology with a remedy, conditional date and useful wry aside is not instructed to become corporate shorthand. |
| Technical damage | `references/editing-and-voice.md:29` retains established disciplinary terms and stable names. `references/genres.md:7` permits formal punctuation, passive voice and longer sentences. There is no instruction to delete “robust regression” or “leverage scores”. |
| Sample adaptation and phrase preservation | `SKILL.md:14,24` separates sample-only facts and wording from source material, while preserving distinctive wording already in the draft. `references/editing-and-voice.md:13,15` makes sample inferences tentative, allows authorised boilerplate and resists caricature. A draft phrase is not marked for deletion merely because it also appears in a sample. |
| Rhetoric, lists and conclusions | `SKILL.md:32` preserves useful lists, necessary items and conclusions and allows legitimate rhetorical patterns. `references/editing-and-voice.md:33` expressly permits anaphora, triads, chiasmus, reveal pivots and aphoristic endings. A third necessary safety step and a useful concluding summary have no removal rule. |
| Narrative and fictional invention | `references/genres.md:11,15` preserves narrative movement and real supplied perspective, allows fiction and expressive repetition, and rejects forced thesis openings, unresolved endings and fictional citations. `SKILL.md:22` retains the nonfiction/fiction boundary. |
| Minimum intervention | `SKILL.md:28` says proofreading stays proofreading. `references/editing-and-voice.md:7` permits no change to already-clear prose. `SKILL.md:38` and the reference final reread carry exceptions and scope through completion. |
| House style and typography | `SKILL.md:16` protects exact quotations and literal content while applying Australian English and authored-heading style. `references/editing-and-voice.md:39` allows feasible user-measurable preferences as house style. No general em-dash, curly-quote or semicolon ban is introduced. |
| Requested output and missing essentials | `SKILL.md:12,20,40` permits essential clarification and honours requested explanations, alternatives, side-by-side edits and formats. Finished-copy output is a default rather than an unconditional gate. |
| Teamwork Desk | The conditional reference read at `SKILL.md:28` covers destination decisions. `references/genres.md:23` requires customer-safe HTML, supplied first name and no manual sign-off, and distinguishes drafting from sending. The same facts can support a different register and format for a team update. |

## Limits

This review evaluates the actual candidate instructions against the reviewed requirements. It does not establish application discovery, actual skill selection, successful installation, behavioural test results, source verification or detector outcomes. Metadata and licence were read for package context, but this review does not replace schema validation, the accuracy/research review or the required independent forward tests. No finding is made about the underlying research claims here.

Candidate SHA-256 hashes at review:

```text
8665c624994aa168739e73c29f440f313a549c5e92a5e2c6ca0c7c48f43274cd  SKILL.md
e857323dad088a394caa45c9d34069f9598e8f2b2371318a16d4e588a385141f  agents/openai.yaml
0261d6664eea6c1cd1203686249c3fc9b9f4cef47b6e1706503a5c5525d522ad  LICENSE
777d30436777c38c3111656db00e004e598f3331a4064219b753774585c20a74  references/editing-and-voice.md
5a9739f741087b5ce391c41664527eb1bdea630755d5b4a5d0a9bf1dedb03234  references/genres.md
a9fa4609d1db2f75936144803073800874e07b8dc65687087abf6e176302df84  references/research.md
```

## Next steps

The coordinator should record a disposition for VG1 and, if accepted, qualify the entrypoint wording and check it against contextual informal voice. Complete the separately required behavioural tests and remaining reviews. This reviewer has no further action unless a focused re-review is requested.
