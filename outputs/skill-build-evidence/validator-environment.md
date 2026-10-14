# Validator environment

The default Python 3.14.6 and the bundled workspace Python both failed to import `yaml` when running the installed Skill Creator validator. The observed exception was `ModuleNotFoundError: No module named 'yaml'`. Those failed attempts are not counted as validation passes.

A temporary isolated virtual environment at `/tmp/bgm-humanize-validator-env` was created and PyYAML 6.0.3 installed there. No global Python environment, installed skill or user setting was changed. This dependency is construction tooling only, not part of BGM Humanize It.

The actual installed validator then returned `Skill is valid!` with exit status 0 for the staged candidate. The final result is saved in `validator-v2.txt`. Its inspected code checks frontmatter parsing and allowed fields, required name/description and types, name syntax and length, description syntax and length, and specific unfinished TODO placeholders. It does not validate UI YAML, link existence, meaningful behaviour or host discovery. Those checks have separate evidence.
