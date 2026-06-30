# Archival Decision - 2026-06-30

## Recommendation

Keep this repository public and archive it after a final owner review.

Do not revive it unless there is a concrete product owner and time budget for a
full modernization. This is an Angular 8 / Node 10-era SPA, so "fixing
Dependabot" would mean a multi-major framework, TypeScript, build, test, and CI
migration rather than a small dependency update.

## Public Archive vs Private Archive

Default to public archive because the repository is already public and appears
to be a historical learning/demo artifact.

Choose private archive only if a review finds a concrete reason:

- secrets, tokens, or private service endpoints
- client/private data
- proprietary code that was not intended to remain public
- legal, brand, or licensing exposure
- harmful exploit content

Making a public repository private is not a cleanup tool. Existing forks and
local clones may still exist, and GitHub visibility changes can affect stars,
watchers, Pages, and fork behavior.

## License State

No license file is present at this checkpoint. Do not add or change a license
without explicit owner approval, because licensing is an IP decision.

## Safe Final Archive Checklist

1. Review the repository for secrets/private data.
2. Decide whether the historical public artifact should remain public.
3. Keep or adjust this README notice.
4. Decide whether to quiet Dependabot/dependency graph noise before archiving.
5. Close stale issues/PRs with an archive note if approved.
6. Archive the repository in GitHub settings only after the above decisions.

## Explicit Non-Actions In This Prep Pass

This prep pass did not:

- archive the repository
- change repository visibility
- disable Dependabot, dependency graph, or security features
- close issues or pull requests
- add or change a license
- delete branches, tags, releases, artifacts, or history
- attempt an Angular/Node dependency upgrade

