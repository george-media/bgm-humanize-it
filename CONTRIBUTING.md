# Contributing

Use [GitHub issues](https://github.com/george-media/bgm-humanize-it/issues) for reproducible problems and focused proposals. Repository access is required while the project is private. Provide the relevant skill, Codex host/version, requested workflow, a synthetic or anonymised example, expected behaviour and actual behaviour.

Changes should improve a demonstrated reader or workflow problem while preserving the brief, facts, voice and requested scope. Do not add universal punctuation bans, vocabulary quotas, authorship percentages, detector-evasion recipes or mandatory rewrite loops.

## Working on a change

1. Start a branch from `main` and keep the change focused.
2. Update the relevant package under `skill/`; conditional detail belongs in `references/`.
3. Check frontmatter, UI metadata and relative links. Exercise realistic affected cases and record limitations honestly. See [validation](docs/validation.md).
4. Update user documentation and [the changelog](CHANGELOG.md) when behaviour or installation changes.
5. Open a pull request explaining the problem, resulting behaviour and checks performed. Include a before/after example if it helps assessment.

Retain MIT notices and identify substantial adapted material. Avoid duplicating guidance across package entrypoints and docs. Historical audits are snapshots; add a new dated record rather than rewriting old results to imply they validated new behaviour.

Keep user-specific installation settings, client material, credentials and local environment inventories out of contributions. Synthetic examples are preferred. Do not run reviews on private material through external tools without the relevant authority.

There is no promised support response time or scheduled release cadence.
