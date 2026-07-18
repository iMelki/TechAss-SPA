# Open Tasks

GitHub Issues are the durable source of truth. This file keeps the local
checkout discoverable for agents.

## Active Work

- [TechAss-SPA#37 - Archive public TechAss-SPA repository after owner approval](https://github.com/iMelki/TechAss-SPA/issues/37):
  the disposition decision is public archive, not revival. The remaining step
  is the explicit owner-approved GitHub repository archive setting change.

## Completed In This Repo

- Resolved [TechAss-SPA#39 - Resolve current critical/high dependency alerts and repair legacy CI](https://github.com/iMelki/TechAss-SPA/issues/39):
  pinned `websocket-driver` 0.7.5 and `adm-zip` 0.6.0 in the existing v1
  lockfile, then moved the Azure build to `main`, Node 16, `npm ci`, and the
  repository's locked Angular CLI. Full Angular modernization remains outside
  this bounded maintenance repair.
- Added a README historical/archive notice.
- Added `docs/archival-decision-2026-06-30.md` with the public/private archive
  criteria and explicit non-actions.
- Closed [TechAss-SPA#36 - Decide archive vs revival path for legacy Angular SPA](https://github.com/iMelki/TechAss-SPA/issues/36):
  decision is public archive, do not revive unless a funded modernization owner
  appears. A 2026-07-01 lightweight scan found no obvious secret/token patterns;
  the actual archive setting is tracked separately in `TechAss-SPA#37`.
