# BGM HUMANIZE IT

Always respond in Australian English. Be direct, concise, sceptical and accurate. Avoid pleasantries and filler. Use calm professional wording for client-facing material. Do not use semicolons in copy headings.

## Client-facing replies

For Teamwork Desk replies, follow Damian's direct instructions: write customer-facing replies in HTML unless instructed otherwise, address the client by their supplied first name, use professional calm customer-safe wording, and omit manual sign-offs because Desk adds signatures automatically. Do not apply the internal blunt tone to clients or invent a name. This is a destination-specific user convention, not a universal writing rule or permission to send.

## Project chat numbering

Apply this rule at the start of every new or resumed top-level chat before substantive work or delegation, and verify it again before completion.

- Project ID: `c89183e8-feea-4819-9d4f-4432b3e4e282`.
- Project root: `/Users/damian/Documents/Codex/PROJECTS/BGM HUMANIZE IT`.
- Every top-level chat title must have exactly one three-digit prefix followed by a space: `NNN Descriptive title`.
- The founding research chat is reserved as `001 Review video and draft prompt`, thread `01a1385e-8081-7b02-a740-4f362b3fa443`. This reservation remains valid while its sidebar move is pending.
- Read `TASK-NUMBERING.json` and inspect live project chat titles using supported app tools. Include chats identified by project ID or project root, archived numbers and existing reservations. Exclude proven worker/subagent chats.
- Preserve an existing valid unique prefix and its descriptive title. Do not double-prefix titles or renumber other chats as routine work.
- For a new chat, allocate one greater than the highest number already used or reserved, zero-padded to three digits. Start at 001 only for an empty unreserved sequence. Never recycle archived, deleted, failed-creation or reserved numbers.
- Reserve the number in `TASK-NUMBERING.json` before creating a chat and pass the prefixed title directly to `create_thread`. Record the returned thread ID and verify the title with a supported readback. A failed or uncertain creation must be reconciled before retrying.
- Use one owner for numbering. Concurrent chat creation must acquire an exclusive local reservation lock, re-read the ledger and live titles inside the lock, and release the lock after recording the reservation. Never allocate from a stale counter. For 999 exhaustion, report the limit instead of switching to four digits.
- Rename through `set_thread_title` only. Do not edit Codex databases or indexes. If listing is incomplete, use the ledger and supported readbacks, record the limitation, and avoid inventing completeness.
- At completion, verify this chat's title and the visible top-level project titles. Record any unresolved missing prefix or collision without mutating unrelated projects.
- This instruction operates when Codex starts or resumes work. It is not an application-level hook and does not promise immediate numbering of an untouched manually created chat.

## Project scope and review

The project develops BGM Humanize It, an evidence-informed drafting and editing skill. Accuracy, the user's requested scope, meaning, authorial voice and explicit house style take precedence over stylistic pattern removal.

The current engineering task creates a reviewed implementation prompt. It does not authorise creating, installing, replacing or disabling a skill until a separate implementation request executes that prompt.

Keep the installed `humanize` skill unchanged. Retain useful guidance and explicitly reject unsupported universal detector rules. Use progressive disclosure rather than an indiscriminately large skill entrypoint.

Use silent independent workers for cleanly separable subtasks when authorised. Keep one owner for overlapping files and stateful operations. When instructed to work silently, report verified completion and genuine blockers only.

Every completed, blocked or handed-off task ends with a `Next steps` section. This applies to the surrounding task report, not automatically to customer-facing text or an edited deliverable.
