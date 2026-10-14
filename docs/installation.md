# Installation and troubleshooting

These instructions install the two standalone skill packages into local Codex. They do not change any other skills or publish a plugin.

The [official Codex skills documentation](https://developers.openai.com/codex/skills) describes local discovery, invocation and configuration. Locations and UI can change between hosts; check that documentation if your host differs from the build environment.

## Install through Codex

Ask the built-in installer to install the repository's two subfolders:

```text
$skill-installer Install skill/bgm-humanize-it and skill/bgm-ai-check
from the GitHub repository george-media/bgm-humanize-it.
```

The installer chooses its supported user location. Access to the repository is required; a private repository requires an authorised GitHub account. Do not put credentials in a prompt.

## Inspect and install manually

Clone the repository using your existing GitHub authentication, then inspect the two `SKILL.md` files and their references:

```bash
git clone https://github.com/george-media/bgm-humanize-it.git
cd bgm-humanize-it
```

Run the following in Bash or another POSIX shell from the cloned repository. It uses `~/.agents/skills`, the user-wide location documented by OpenAI, and refuses to overwrite either existing destination:

```bash
(
  set -eu
  bgm_skills_dir="${BGM_SKILLS_DIR:-$HOME/.agents/skills}"
  for bgm_skill in bgm-humanize-it bgm-ai-check; do
    if [ -e "$bgm_skills_dir/$bgm_skill" ] || [ -L "$bgm_skills_dir/$bgm_skill" ]; then
      printf 'Already installed: %s\n' "$bgm_skills_dir/$bgm_skill" >&2
      exit 1
    fi
  done
  mkdir -p "$bgm_skills_dir"
  for bgm_skill in bgm-humanize-it bgm-ai-check; do
    cp -R "skill/$bgm_skill" "$bgm_skills_dir/$bgm_skill"
  done
)
```

For a repository-only installation, run from this clone and set `BGM_SKILLS_DIR` to the target repository's absolute `.agents/skills` directory before running the same block:

```bash
export BGM_SKILLS_DIR="/absolute/path/to/your-project/.agents/skills"
```

Unset `BGM_SKILLS_DIR` afterwards if you only needed it for this install. Repository-scoped skills apply within that repository's supported discovery scope; user-scoped skills apply across that local user's repositories.

The build environment also verified user-scope discovery under `~/.codex/skills`. If your installer already uses that location, keep one installed copy there rather than copying the same skill into both roots. Duplicate names can appear separately in selectors.

## Verify availability

1. Find **BGM Humanize It** and **BGM AI Check** in your host's skill selector, or ask Codex which installed skills are available.
2. Explicitly invoke `$bgm-ai-check` on a short synthetic passage and request review only. Check that it gives editorial observations without an authorship verdict or full rewrite.
3. Invoke `$bgm-humanize-it` on the same passage and request a light edit. Check that facts and qualifications survive.

File presence proves installation, not that an already-open chat has refreshed. OpenAI documents automatic detection of skill changes and a restart if changes do not appear. Restart Codex after changing skill enable/disable settings. Wait for active work to finish first.

## Enable or disable a skill

The BGM packages allow automatic invocation by default. Enabling a skill and allowing automatic invocation are different settings: `allow_implicit_invocation: false` still allows explicit invocation.

Prefer your host's supported skill settings. Alternatively, the documented local configuration uses `[[skills.config]]` entries in `~/.codex/config.toml`. For example, to disable an installed legacy skill without deleting its files:

```toml
[[skills.config]]
path = "/absolute/path/to/humanize/SKILL.md"
enabled = false

[[skills.config]]
path = "/absolute/path/to/ai-check/SKILL.md"
enabled = false
```

Replace each path with the actual installed entrypoint. Change existing entries rather than creating conflicting duplicates. Preserve unrelated settings, then restart Codex. To re-enable a skill, set its entry to `enabled = true` or remove the disabling entry.

Disabling legacy `humanize` and `ai-check` is optional. Installing the BGM packages does not replace, delete or automatically disable them. If overlapping skills interfere with your intended workflow, explicitly select the BGM skill and review your host's settings. Higher-priority instructions still apply.

## Update

From the clone, use `git pull --ff-only` after handling any local changes. Review [the changelog](../CHANGELOG.md) and the diff before updating an installed copy.

Back up your installed BGM folders outside every scanned skills directory, including any local customisations. Move the old installed folders out of the discovery root, then rerun the installation block to copy the new source. Keep both packages from the same repository commit when using their paired workflow. Do not merge a new folder into an old one blindly; removed reference files could otherwise remain installed.

## Remove

Disable the relevant skill first if you want to preserve its files. For removal, move only the installed `bgm-humanize-it` or `bgm-ai-check` folder outside the scanned skill root. Remove any stale configuration entry for that moved path and refresh Codex. Keep a backup if you have customisations. Do not move or remove unrelated skill folders.

## Troubleshooting

| Symptom | Check |
| --- | --- |
| Skill is missing | Correct discovery root, `SKILL.md` in the immediate skill folder, repository access and enabled settings; refresh Codex |
| Two copies appear | Duplicate installations with the same machine name in user and repository roots |
| Review becomes a rewrite | State review-only scope and explicitly select BGM AI Check; inspect conflicting instructions |
| Old skills still appear | Saved enable/disable settings and whether the current chat has reloaded its catalogue |
| References fail to load | Copy the whole package, including `references/`, `agents/` and `LICENSE` |

This repo has no cloud installer, published plugin or verified Windows-specific installation procedure. The shell examples target POSIX environments; on other systems, copy the complete folders into the location supported by your Codex host.
