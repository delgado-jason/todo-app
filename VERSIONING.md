---

## 3) Versioning plan (SemVer that matches your milestones)
Since this is a course project, start at **0.x** until you feel “done”.

Suggested milestones:
- **v0.1.0**: Base todo CRUD + complete toggle (in-memory only)
- **v0.2.0**: Projects (create/select/delete project)
- **v0.3.0**: localStorage persistence for projects + todos
- **v0.4.0**: Edit flows + better UI/validation
- **v1.0.0**: “Project complete” (polish + stable behavior)

Rule of thumb:
- `MINOR` = new feature chunk (projects, persistence)
- `PATCH` = fixes/refactors without changing behavior

---

## 4) Commit message convention (simple + “professional”)

Use these prefixes (works great with feature branches):

- `feat:` new feature
- `fix:` bug fix
- `refactor:` restructure without behavior change
- `docs:` README/notes
- `chore:` tooling/config (webpack scripts, eslint)

Examples you’ll actually use:

- `chore: set up webpack dev server and asset handling`
- `feat: add project creation and selection`
- `feat: persist projects and todos to localStorage`
- `refactor: split storage logic into storage module`
- `fix: prevent deleting active project with todos`

---

## 5) Branch workflow (good practice without being heavy)

Keep `main` stable. Work in branches:

- `chore/webpack-setup`
- `feat/projects`
- `feat/localstorage`
- `fix/form-validation`

Flow:

1. `git checkout -b feat/projects`
2. Commit small logical steps
3. Merge back to `main` (optionally via PR on GitHub even if solo)

---

## 6) CHANGELOG.md (ready for your planned releases)

```md
# Changelog

All notable changes to this project will be documented here.

## [0.3.0] - YYYY-MM-DD

### Added

- localStorage persistence for projects and todos

## [0.2.0] - YYYY-MM-DD

### Added

- Projects: create, rename, delete, and select project
- Display todos by active project

## [0.1.0] - YYYY-MM-DD

### Added

- Create/edit/delete todos
- Mark todo complete/incomplete
```
