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
