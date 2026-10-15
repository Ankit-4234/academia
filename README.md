# Academia International College Website

React + TypeScript (Vite) frontend and Express + TypeScript API with MongoDB.

```
academia-college/
├── client/   React, Vite, React Router, Framer Motion, Zod
└── server/   Express, Mongoose, Zod, Helmet, CORS, rate limiting
```

## Run locally

```bash
npm install
npm run dev
```

- Website: http://localhost:5180
- API:     http://localhost:5000/api/health

The site works without a database. The forms (contact, application, newsletter)
need MongoDB: copy `.env.example` to `.env` and set `MONGODB_URI`.

## Where to edit content

All page content is in `client/src/data/` (programs, events, notices, FAQs,
calendar, partners, gallery, site details). Images currently load from the
college website; before launch, save copies in `client/public/images`.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | client + server together |
| `npm run build` | type-check and build both |
| `npm run typecheck` | TypeScript checks only |

## Deploy (summary)

- **Client → Vercel**: Root Directory `client`, set `VITE_API_URL=https://<api>.onrender.com/api`
- **Server → Render**: Root Directory `server`, Build `npm install --include=dev && npm run build`,
  Start `npm start`, env `NODE_ENV=production`, `MONGODB_URI`, `CLIENT_URL=https://<your-site>.vercel.app`
- **Database → MongoDB Atlas** (free M0 cluster)
