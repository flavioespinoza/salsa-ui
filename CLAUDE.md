# Claude Code Rules

## Critical: Config & Architecture Files

NEVER modify the following without explicit user approval:
- Config files: `*.config.*`, `*.rc`, `*.json` (package.json, tsconfig.json, etc.)
- Environment files: `.env*`
- Build/bundler configs: webpack, vite, rollup, tsup, esbuild configs
- CI/CD files: `.github/`, `.gitlab-ci.yml`, `Dockerfile`, `docker-compose.*`
- Lock files: `package-lock.json`, `yarn.lock`, `pnpm-lock.yaml`
- Editor/tooling configs: `.vscode/`, `.idea/`, `.editorconfig`

If any of these files need changes to complete a task:
1. STOP
2. Explain what needs to change and why
3. Ask for explicit permission before proceeding

## Scope Discipline

- Stay within the boundaries of what was explicitly requested
- If a blocker is discovered outside the task scope, report it and ask - do not fix it unilaterally
- "Making tests pass" or "fixing errors" is not authorization to modify unrelated files
- When in doubt, ask

## Pre-existing Issues

If you encounter pre-existing issues (broken tests, config problems, etc.) that are unrelated to the current task:
1. Document them clearly
2. Separate them from the task at hand
3. Ask if the user wants them addressed separately

## UI/Layout Development

### Explore Before Implementing

Before creating new pages, components, or layouts:
1. Search the codebase for similar existing implementations
2. Examine how other pages handle the same patterns (e.g., card layouts, full-width sections)
3. Look for reusable components (e.g., `CardSection`) that already solve the problem
4. Follow the established patterns - don't reinvent the wheel

### Verify Visual Changes

When making UI/layout changes:
1. Check that styling matches existing patterns in the codebase
2. If a component should be "full width", verify ALL instances have `w-full` or equivalent
3. When in doubt, ask the user to confirm with a screenshot before moving on
4. Don't declare "done" until the visual output is verified

### Reverting Changes

When asked to "revert" or "go back" to a previous version:
1. If the file has git history, use `git show` to retrieve the exact previous version
2. If there's no git history (uncommitted changes), ASK which version the user means
3. Don't guess or create a "simplified" version - clarify first

## Component Consistency

When creating or modifying components:
1. Check how the same component is used elsewhere in the codebase
2. Maintain consistent props, class names, and patterns
3. If adding a new variant, follow the existing variant pattern exactly
4. Export types and interfaces for component configs (e.g., `AvatarConfig`)

## Communication

- If something doesn't look right after changes, proactively ask for a screenshot
- When the user provides visual feedback, address ALL issues mentioned, not just some
- If multiple iterations are needed, acknowledge the pattern and ask "Is there anything else that looks off?"
