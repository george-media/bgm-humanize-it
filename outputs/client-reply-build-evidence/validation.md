# BGM Client Reply validation

Checked 28 October 2026, Australia/Sydney.

- Skill Creator quick validator passed: frontmatter, naming and unfinished scaffold checks only.
- UI metadata parsed and matched the skill name. No runtime scripts, external tools or required skill dependencies.
- Changed-document local Markdown links resolve; Git whitespace checks passed.
- Source/install SHA-256 hashes match for all three package files.
- A fresh supported app-server skills/list readback with forceReload found the skill enabled in both project and source-repository contexts, with no discovery errors.
- Existing source and installed Humanize package hashes were unchanged.
- Six synthetic forward cases and a separate static review found no required changes. Their limits are recorded in the linked evidence.
- An ephemeral installed CLI invocation read the new skill and returned the [saved response](cli-response.md): Desk HTML, supplied first name, no sign-off, staging/production distinction, no invented deployment date, separate Vietnamese explanation.
- Initial CLI attempt with local user configuration failed before generation because its configured model was unsupported by that CLI/account combination. The successful retry used --ignore-user-config with the CLI default model and read-only sandbox in an isolated temporary directory. User settings and credentials were not changed.

## Package hashes

```json
{
  "LICENSE": "8fa433d5efbdf1db79a634daee1be8aae5a71918b0f0ff8e2a9e65936372e554",
  "SKILL.md": "cfa080c16aaf89160c0ed9bb3006e0068e552ef82b3088e2855d5204b68e1df4",
  "agents/openai.yaml": "a20427576bd65e34cd2ef7a51c1959237c5bd98365aff188c0e877a4e8ef3ced"
}
```

## Limits

This verifies the tested local CLI, package structure and finite examples. It does not certify human translation accuracy, repeated performance, the staff member's computer or automatic refresh of already-open chats. No client messages were sent.
