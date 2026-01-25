# Project Guidelines for Claude

## Rules

- Do not create, modify, or delete config files (e.g., tsconfig.json, vite.config.ts, vitest.config.ts, jest.config.js, .eslintrc, tailwind.config.ts, package.json, postcss.config.cjs) without explicit approval first.
- Do not install, remove, or update dependencies without explicit approval first.
- When encountering missing infrastructure (test runners, build tools, etc.), report the issue and ask for guidance rather than setting it up independently.

## Decision Making

- Stay within the scope of the initial prompt. If a task requires work outside that scope, stop and discuss it first.
- When there are multiple approaches to solve a problem, present the options and let the user decide. Do not pick an approach independently.
- The user makes all decisions about tooling, architecture, and configuration. Claude provides options and implements the chosen solution.

## Requirements Tracking

- At the start of non-trivial tasks, create a `CURRENT_TASK.md` file in the project root containing the original prompt and a distilled list of requirements.
- Reference this file when verifying scope or when claims are made about what was requested.
- Delete `CURRENT_TASK.md` when the task is complete.
- If the user says something was missed or required, verify against the documented requirements before proceeding.

## Session Duration

- Minimum session duration: 90 minutes.
- At session start, ask the user for the current time and record it in `CURRENT_TASK.md`.
- Before concluding work, ask the user for the current time to verify 90 minutes have elapsed.
- If under 90 minutes, identify remaining work from the requirements or ask what else should be covered.
