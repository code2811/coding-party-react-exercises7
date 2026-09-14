# Coding Party — React + TypeScript Exercises

A team dashboard app built as a group exercise covering 50 progressive React + TypeScript tasks, split into 5 sections across 5 contributors.

## Getting Started

```bash
npm install
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`) in your browser.

Other useful scripts:

```bash
npm run build     # type-check and build for production
npm run lint      # run oxlint
npm run preview   # preview the production build locally
```

## Features

- Typed team dashboard with a score counter (increment/decrement, floor-clamped at 0)
- Add new members through a controlled, typed form
- Remove members and toggle their active/inactive status
- Filter members by status (All / Active / Inactive)
- Search members by name
- Styled, responsive member cards with a flex layout

## Project Structure

```
src/
├── App.tsx              # Root component — renders TeamDashboard
├── TeamDashboard.tsx     # Main dashboard: state, form, filters, search
├── TeamDashboard.css     # Dashboard layout styling
├── MemberCard.tsx        # Member card component
├── MemberCard.css        # Card styling
├── ScoreControls.tsx     # Team score increment/decrement controls
├── types.ts              # Shared Member interface
├── index.css             # Global base styles
└── main.tsx              # App entry point
```

## Team Contributions

| Section | Tasks | Topic | Contributor |
|---|---|---|---|
| I | 1–10 | Basic Component Creation | Jongkuch Isaac Chol Anyar |
| II | 11–20 | Props and TypeScript | Olive Umurerwa |
| III | 21–30 | Styling Components | Frida Kayiranga |
| IV | 31–40 | State, Events, and Forms | Beni Niyogisubizo |
| V | 41–50 | Object/Array State and Component Communication | Walusansa Jesse Kisaale |

Each section was developed on its own branch and merged via pull request into `task-1-basic-components`. Authorship is marked in each file with `// Author:` comments.
