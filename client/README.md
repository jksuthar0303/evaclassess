# PREPSPHERE - Examination Preparation Platform

PREPSPHERE is an all-in-one exam preparation and learning management ecosystem for competitive exams including UPSC, SSC, Banking, Railways, State PSCs, and Defense services.

## Project Structure

```
PREPSPHERE/
├── public/                # Static assets, sitemap, robots, manifest
├── src/
│   ├── app/               # Root app, providers, router and configs
│   ├── assets/            # Static media, icons, logos
│   ├── components/        # UI primitives, layout frames, charts, common components
│   ├── features/          # Domain features (auth, exams, courses, tests, etc.)
│   ├── modules/           # Module bundles (public, student, admin)
│   │   ├── public/pages/Home/Home.jsx
│   ├── stores/            # Global context stores (auth, theme, ui, notification)
│   ├── services/          # API & business logic services
│   ├── hooks/             # Reusable custom React hooks
│   ├── lib/               # Utility wrappers (axios, query, permissions, storage)
│   ├── utils/             # Formatters, date, currency, numbers, file helpers
│   ├── constants/         # App configs, routes, roles, permissions, endpoints
│   ├── data/              # Seed & mock domain data
│   ├── styles/            # CSS styles and design system variables
│   └── types/             # TypeScript / JSDoc typings
```

## Running Development
```bash
npm run dev
```
Development server will run on `http://localhost:3004`.
