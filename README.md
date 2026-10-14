# BGM Humanize It and BGM AI Check

Two complementary Codex skills from By George Media for clear writing and evidence-led editorial review.

**BGM Humanize It** drafts and edits prose while preserving facts, meaning and authorial voice. **BGM AI Check** reviews prose for generic, formulaic or audience-mismatched writing, using quoted evidence and proportionate suggestions.

Neither skill determines who wrote a passage, estimates an AI-written percentage or promises a detector score.

## Choose a skill

| Skill | Use it for | Default result |
| --- | --- | --- |
| [BGM Humanize It](skill/bgm-humanize-it/SKILL.md) | Drafting from notes, light editing, substantial revision or adapting to supplied voice samples | Finished copy, with essential factual issues handled separately |
| [BGM AI Check](skill/bgm-ai-check/SKILL.md) | Contextual critique of clarity, specificity, repetition, structure and voice | A concise assessment with exact evidence and minimal suggested action |

AI Check stays review-only unless you request edits. When you request both review and revision, it can hand the original brief, text and findings to Humanize It. Either skill can be used independently.

## Install

You need a Codex host that supports local skills. These are instruction-only packages: no package manager, API key, external detector or runtime scripts are required by either skill. Your usual Codex account and host requirements still apply.

With Codex's built-in skill installer, ask:

```text
$skill-installer Install both skills from george-media/bgm-humanize-it:
skill/bgm-humanize-it and skill/bgm-ai-check.
```

Repository access is required. If you prefer to inspect and copy the files yourself, follow the [installation guide](docs/installation.md). It covers user-wide and repository-only installation, verification, updates, removal and optional legacy-skill settings.

This repository supplies standalone skill folders, not a published plugin. A local installation does not install them into cloud ChatGPT chats or other computers.

## Use

Mention the installed skill explicitly for predictable selection:

```text
$bgm-humanize-it Lightly edit the update below for a non-technical client.
Keep every fact, qualification and commitment. Return the edited copy only.

[Paste the draft]
```

```text
$bgm-ai-check Review the draft below for a client newsletter.
Quote any material problems, explain their effect and suggest minimal fixes.
Do not rewrite it or estimate whether it was AI-written.

[Paste the draft]
```

Both packages allow normal automatic selection when their descriptions match the task. Explicit selection does not guarantee that no other instructions or skills apply. See [usage and examples](docs/usage.md) for the paired workflow, voice samples and house style.

## Editorial approach

- Preserve supported facts, uncertainty, citations, commitments and the requested edit scope.
- Judge language in context. Em dashes, Oxford commas, formal vocabulary, triads and coherent structure are not automatic defects.
- Use Australian English and the user's explicit house style. Preserve quotations and literal content.
- Keep proofreading small. Do not manufacture findings, invent nonfiction experience or add deliberate mistakes to sound human.
- Keep critique separate from deliverable copy. Neither skill sends or publishes material.

Review does not automatically verify every factual claim. Provide relevant sources or request verification where needed.

## Documentation

- [Installation and troubleshooting](docs/installation.md)
- [Usage, examples and style defaults](docs/usage.md)
- [Validation, research and limitations](docs/validation.md)
- [Changes](CHANGELOG.md)
- [Contributing](CONTRIBUTING.md)
- [Security and private material](SECURITY.md)
- [Licence](LICENSE) and [third-party notices](THIRD_PARTY_NOTICES.md)

## Repository layout

```text
skill/bgm-humanize-it/   Installable drafting and editing package
skill/bgm-ai-check/      Installable editorial review package
docs/                   User documentation
outputs/                Historical prompts, reviews and build evidence
sources/                Historical project instruction snapshots
```

Install only the chosen folders under `skill/`. Historical evidence contains local paths, session identifiers and build-time settings; it is not a portable installer or the current user guide.

## Licence and attribution

MIT licensed. Useful concepts were adapted from the Humanize and AI-Check packages credited to Harshaneel Gokhale. Their complete MIT notices are retained in each skill. See [third-party notices](THIRD_PARTY_NOTICES.md) for the distinction between adapted guidance, research sources and original BGM work.
