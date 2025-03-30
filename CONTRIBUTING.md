# Contributing to Salsa UI

Thanks for helping improve **@flavioespinoza/salsa-ui**! Here's the guide for contributing code, features, or documentation.

---

## ✅ Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) standard for all commits. This enables automated changelogs and semantic versioning using **semantic-release**.

### 🔤 Format

```
<type>(optional scope): <short description>
```

Example:

```
feat(button): add loading state support
```

---

### 🔠 Types

| Type     | Description                                          |
| -------- | ---------------------------------------------------- |
| feat     | A new feature                                        |
| fix      | A bug fix                                            |
| docs     | Documentation-only changes                           |
| style    | Code formatting, whitespace, etc. (no logic changes) |
| refactor | Code improvements that don't change behavior         |
| perf     | Performance improvements                             |
| test     | Adding or updating tests                             |
| chore    | Build tasks, CI config, dependency updates           |
| revert   | Revert a previous commit                             |
| build    | Build system or tooling changes                      |
| ci       | CI configuration updates                             |

---

### 💥 Breaking Changes

To introduce a breaking change:

1. Add `!` after the type:

   ```
   feat!: drop Node.js 16 support
   ```

2. Or add a footer:

   ```
   BREAKING CHANGE: updated chart props API
   ```

---

## 🧪 Local Development

```bash
yarn install
yarn build
yarn dev
```

To preview the Docsify docs:

```bash
npx docsify-cli serve docs
```

---

## 📦 Publishing

This is handled automatically via GitHub Actions when pushing to `main`, using `semantic-release`.

Manual steps (if needed):

```bash
npm version patch
git push --follow-tags
npm publish --access public
```

---

MIT Licensed  
Made with ❤️ by Flavio Espinoza
