# Spacedock

Spacedock is a React + TypeScript + Vite project that presents NASA exploration content with live data (DONKI space weather), curated scientific facts, and NASA RSS news.

## Getting started

Install dependencies and run the dev server:

```bash
yarn install
yarn dev
```

Build for production:

```bash
yarn build
```

## Environment variables

Copy `.env.example` to `.env` and adjust values if needed:

```bash
cp .env.example .env
```

Variables:

- `VITE_BASE_API` — NASA Open API base URL (default `https://api.nasa.gov`).
- `VITE_API_KEY` — NASA API key (defaults to `DEMO_KEY` if not set).
- `VITE_RSS_PROXY` — RSS proxy for NASA feeds (default uses AllOrigins).

## Data sources

- NASA Open APIs (DONKI, APOD).
- NASA Image and Video Library API.
- NASA RSS feeds (parsed client-side with a proxy and cached).

## What’s done

- Added four completed science pages (Planetary, Lunar, Heliophysics, Biological & Physical).
- Implemented NASA DONKI live data with filters and caching.
- Added latest NASA news sections with RSS parsing and fallbacks.
- Documented environment configuration in `.env.example`.
