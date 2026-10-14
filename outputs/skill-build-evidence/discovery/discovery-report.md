# Global skill discovery investigation

Verified 14 October 2026 (UTC timestamps are in the JSON evidence).

- `CODEX_HOME` is unset in the task shell. The effective default home is `/Users/damian/.codex`.
- Installed command: `/Users/damian/.local/bin/codex`, resolving to `/Users/damian/.local/lib/node_modules/@openai/codex/bin/codex.js`. Version: `codex-cli 0.147.0`.
- Both `/Users/damian/.codex/skills` and `/Users/damian/.agents/skills` are real directories, not symlinks. `/etc/codex/skills` does not exist.
- A supported `initialize` / `initialized` / `skills/list` exchange in an isolated stdio app-server process succeeded with `forceReload: true`, both the BGM project cwd and the implementation repository cwd, and no `perCwdExtraUserRoots` or configuration overrides.
- For each cwd it discovered 49 skills with zero discovery errors: 4 user skills under `~/.agents/skills`, 6 user skills under `~/.codex/skills`, 6 system skills under `~/.codex/skills`, and 33 plugin-bundled skills.
- `humanize` and `ai-check` are enabled user skills under `~/.agents/skills`. `bgm-humanize-it` was absent before installation.
- This host therefore supports the requested Skill Creator default destination `~/.codex/skills/bgm-humanize-it` without an extra root, settings change, plugin wrapper or duplicate installation in `~/.agents/skills`.

## Refresh boundary

The readback verifies the installed CLI host's actual discovery and parser. It refreshes only the newly spawned app-server process. It does not prove that the already running desktop process or this chat's already supplied skill catalogue has refreshed.

The CLI's supported `app-server daemon version` check found no managed control socket at `~/.codex/app-server-control/app-server-control.sock`. No daemon was started or restarted. No desktop restart, private socket discovery, database inspection or write, configuration change, thread creation or turn execution was performed. The task has no directly exposed supported `skills/list` endpoint for its running desktop process.

Official documentation says skill changes are detected automatically and documents `skills/changed` as an invalidation notification followed by `skills/list` with `forceReload`. If a refreshed desktop catalogue is not observable, report that limit and verify the explicit invocation in a subsequent chat or turn after the host updates its catalogue. A CLI discovery readback alone is insufficient to claim current-chat activation or invocation.

## Reusable probe

`probe-skills.mjs` spawns a separate stdio app-server, sends only initialisation and `skills/list`, prints filtered evidence, and terminates that process. It does not invoke a model. Exit status is non-zero on protocol failure or timeout. It retains only counts, discovery errors, selected skill metadata and paths, and stderr byte count, rather than dumping unrelated skills or server stderr.

```bash
/Users/damian/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node /Users/damian/Sites/localhost/bgm-humanize-it/outputs/skill-build-evidence/discovery/probe-skills.mjs > /Users/damian/Sites/localhost/bgm-humanize-it/outputs/skill-build-evidence/discovery/post-install-cli-readback.json
```

After installation, require `bgm-humanize-it` to appear enabled at `/Users/damian/.codex/skills/bgm-humanize-it/SKILL.md` for both cwds with no discovery errors. Also read back that `humanize` and `ai-check` remain enabled at their existing paths. The pre-install evidence is `pre-install-cli-readback.json`.

## Sources

- [Official skills documentation](https://developers.openai.com/codex/skills), fetched during the investigation. It documents standard local roots, progressive disclosure, implicit-invocation metadata and automatic detection.
- [Official app-server skills API](https://learn.chatgpt.com/docs/app-server#skills), fetched during the investigation. It documents `skills/list`, `forceReload`, optional extra user roots and `skills/changed`.
- [Official app-server getting started](https://learn.chatgpt.com/docs/app-server#getting-started), fetched during the investigation. It documents the supported stdio process and initialisation exchange.
- Local CLI help and the JSON protocol readback provide host-specific evidence beyond the root table in the documentation.

## Next steps

Install the separately reviewed candidate in the authorised default destination, then run the probe and inspect the resulting selected skill metadata. Report host discovery and current-chat refresh separately.
