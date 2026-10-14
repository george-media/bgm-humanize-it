# Accuracy, research and scope review

Reviewed 14 October 2026. Independent, read-only adversarial review of the creation prompt and all six files in `/Users/damian/Sites/localhost/bgm-humanize-it/skill/bgm-humanize-it`. No other reviewer's conclusions were supplied or consulted. No candidate files, installed skills or settings were changed. This file is the reviewer's sole output.

## Result

**No material findings in the candidate package within this review's remit.** The candidate carries the critical accuracy and scope safeguards in its entrypoint, adds relevant detail through conditional references, and does not restore the rejected detector mechanisms. This conclusion is a document and source review, not evidence of successful application discovery, runtime behaviour or construction completion.

## Adversarial checks

- **Meaning, uncertainty and citation scope:** `SKILL.md`, “Preserve substance and voice”, lines 20–22, and `references/editing-and-voice.md`, “Meaning and evidence”, expressly preserve quantities, denominators, conditions and supported citation scope. The practical counterexample is a response-rate citation moved next to an effectiveness claim, or six responses out of twelve becoming nine to preserve 75%. The instructions explicitly reject both changes and require a transparent reliable correction. No correction to the package is required.
- **Brief and sample separation:** `SKILL.md`, “Establish the brief”, line 14, and “Preserve substance and voice”, line 24, distinguish factual material from style examples. `references/editing-and-voice.md`, “Samples”, protects legitimate wording already present in the draft. A sample saying the writer practised medicine for ten years or using a distinctive catchphrase does not authorise either detail in an unrelated update. The explicit authorisation exception accommodates approved quotation and boilerplate without turning all sample text into source material. No material gap found.
- **Nonfiction and fiction:** `SKILL.md`, line 22, prohibits fabricated real experience and evidence but permits explicitly framed fiction and labelled hypothetical examples. `references/genres.md`, “Narrative, blog and essay” and “Creative and lyrical”, carries the distinction through genre guidance. A first-person fictional scene is permitted; the same invented memory presented as a real case history is prohibited. No material gap found.
- **Intervention and precision:** `SKILL.md`, “Edit proportionately”, lines 28–34, and `references/editing-and-voice.md`, “Language and structure” and “Stop and reread”, retain technical terminology, genuine trade-offs, meaningful uncertainty and minimal intervention. Robust regression and leverage scores need not be renamed. A three-action safety list need not lose an item. The rules distinguish editorial choices from universal authorship tests.
- **Permissions and embedded instructions:** `SKILL.md`, line 14, prevents source/sample instructions from granting tool authority or changing the task. `references/genres.md`, “Teamwork Desk”, explicitly makes a draft distinct from permission to send. A malicious quoted instruction to export customer data remains content. The package introduces no tool dependency, external upload workflow or installation authority. No material scope expansion found.
- **Output and unresolved facts:** `SKILL.md`, lines 12, 20 and 40, and `references/editing-and-voice.md`, “Intervention”, permit essential clarification and honest partial work while rejecting a falsely send-ready draft. Explicit explanations and side-by-side output override the finished-text default. A date-free invitation needs clarification; a self-contained paragraph without figures does not need an invented anchor.
- **Research categories and rejected inference:** `references/research.md`, “Evidence categories”, lines 7–9, distinguishes empirical evidence, editorial convention, house style and hypotheses. `SKILL.md`, line 34, rejects detector scoring, paraphrase loops, probability claims, homoglyphs, watermark tricks and decoding recipes. Agreement between models and simulated audiences is not verification. No detector threshold or claimed human fingerprint is adopted.

## Direct source checks

I independently opened the seven sources represented as inspected evidence or guidance. This check did not rely on agreement with the builder or another reviewer.

| Candidate evidence | Direct source inspected and result |
|---|---|
| `references/research.md`, lines 17–19 | [Wang and colleagues, EMNLP 2025 proceedings PDF](https://aclanthology.org/2025.findings-emnlp.532.pdf), abstract, methodology and limitations. Author names, November 2025 proceedings date, genre-sensitive results, computational evaluation, English-only datasets, absent large-scale human assessment and untested cross-genre transfer agree with the candidate's bounded paraphrase. |
| Lines 23–25 | [Dugan and colleagues, RAID proceedings PDF](https://aclanthology.org/2024.acl-long.674.pdf), abstract and limitations. The tested detector sensitivity to attacks, sampling variation and unseen generators is supported. Limited multilingual coverage and ongoing benchmark maintenance are explicit limitations. The candidate does not generalise this to every detector or adopt an evasion recipe. |
| Line 29 | [Microsoft smart-quotes documentation](https://support.microsoft.com/en-au/word/smart-quotes-in-word-and-powerpoint). Automatic straight-to-curly conversion is explicitly documented. The authorship conclusion is correctly labelled as an inference from a software counterexample. |
| Line 37 | [GMU Writing Concisely](https://writingcenter.gmu.edu/writing-resources/general-writing-practices/writing-concisely). Redundancy guidance and adaptation attribution are consistent. The candidate does not reuse example revisions as factual corrections or treat concision as detector science. |
| Line 38 | [Purdue Strategies for Variation](https://owl.purdue.edu/owl/general_writing/academic_writing/sentence_variety/index.html). Purposeful rhythm and opening variation are supported as editorial advice. The candidate imports no sentence quota. |
| Line 39 | [Australian Style Manual, Sentences](https://www.stylemanual.gov.au/writing-and-designing-content/clear-language-and-writing-style/sentences). Audience-oriented structure and clarity are consistent; the page explicitly shows 20 December 2024 as its update date. The candidate confines numerical guidance rather than making it universal. |
| Line 40 | [Anthropic Prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices). Separate instructions, examples and context are explicitly recommended. The candidate correctly identifies provider guidance and makes no empirical promise about this package. |

## Limits

I did not inspect the three video transcripts or the explicitly unverified additional leads. No assertions from those leads are adopted by the candidate, so their omission is consistent with P8. The candidate records historical video-fetch failures at `references/research.md`, line 46; I did not independently inspect the builder's fetch logs and cannot attest to that execution history.

I did not verify the protected-package hash comparison, application selection, installation, actual forward-test outputs, Claude completion or the final implementation audit. The provenance statement about unchanged existing skills at `references/research.md`, line 66, must be backed by the coordinator's construction evidence before completion is claimed. This review supplies no evidence for those separate checks and does not approve installation or publication.

## Next steps

The coordinator should retain this review, complete the required behavioural tests and construction evidence, and substantiate protected-package integrity and any discovery claims. No package correction is required from this review.
