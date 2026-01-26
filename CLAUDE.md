# Claude Code Rules

## Authorization Required Before All Changes

- **Never modify, create, or delete any file without explicit authorization from the user.**
- When the user asks a question, gives an opinion prompt, or requests analysis (e.g., "what do you think?", "what's the best approach?", "how should we fix this?"), respond with analysis and recommendations only. Do not make any changes.
- A question is not an instruction. A recommendation is not permission to act. Wait for the user to explicitly say to proceed (e.g., "go ahead", "do it", "make those changes", "yes, apply that").
- If uncertain whether the user is asking for analysis or authorizing a change, ask for clarification. Default to not changing anything.

## Configuration Files

- **Never modify configuration files without first consulting the user and receiving explicit approval.** This includes but is not limited to: `package.json`, `tsconfig.json`, `tailwind.config.ts`, `jest.config.*`, `next.config.*`, `postcss.config.*`, `.env`, and any other project config.
- Always describe the intended config change and the reason before making it. Wait for approval.

## Visual and UI Work

- **Before implementing any UI feature, describe what it will look like.** Do not assume the user's mental image matches yours. Describe the visual approach (e.g., "I'll use line icons" vs "I'll use filled silhouette shapes") and confirm before building.
- When the user provides a reference image or describes a visual style, match that style precisely. If the implementation will differ from what was described, flag it and ask.

## Refactoring Completeness

- **When doing a codebase-wide refactoring pass, run a comprehensive search for all instances before reporting completion.** Use grep/search tools to verify zero remaining occurrences of the pattern being replaced.
- Never say "done" with known stragglers remaining. If something was missed, disclose it immediately rather than hoping it won't matter.

## Verify Impact

- **After making a change, verify it has the intended visible or functional effect.** Do not just confirm the code compiles — confirm the change is actually observable.
- If a change won't be noticeable in the user's current context (e.g., swapping theme colors on a page that uses neutral colors), proactively flag that instead of saying "done" without caveat.

## UX Over Cleverness

- **When choosing between implementation approaches, prioritize usability over technical elegance.** A native OS feature that works perfectly beats a custom-built solution that is harder to use.
- Consider the end-user experience first. "Dogfooding" or showcasing internal components is secondary to the feature actually being pleasant and intuitive to use.
