# algorand/go-algorand Weekly Newsletter

**Week of 2026-02-07 to 2026-02-14**

## 📋 Executive Summary

### Executive Summary for algorand/go-algorand (Week of [Insert Date])

This past week, the algorand/go-algorand repository saw a notable uptick in activity, with a total of 9 commits and 21 pull requests, 8 of which have been successfully merged. This level of engagement highlights the ongoing commitment of our developer community to enhance and refine the Algorand protocol. Notably, there were no new issues reported, indicating a stable environment for our users and developers alike.

Among the key pull requests currently open, several focus on improving the API's functionality, including enhancements for paginated views and cursor-based pagination with prefix support. Additionally, there are efforts to optimize the evaluation process and enhance testing standards through specific error assertions in crypto and agreement modules. These developments are essential for maintaining the robustness of the Algorand ecosystem and ensuring that developers have the tools they need to build effectively. We encourage all contributors to stay engaged with these discussions and continue to drive innovation within the repository.

## 📊 Weekly Statistics

- **Commits**: 9
- **Pull Requests**: 21 (8 merged)
- **Issues**: 0 (0 closed)
- **Discussions**: 0

## 💻 Commits (9)

- [`00da5ef`](https://github.com/algorand/go-algorand/commit/00da5ef87c2b46cc4a4237d6a9e66f9b9ae7fcc8) network: use specific error assertions in tests (#6544) - *cce*
- [`3753683`](https://github.com/algorand/go-algorand/commit/37536834672be9124eb849dba41c72fbb245d7a4) API: add OnlineCirculation to GetSupply (#6322) - *cce*
- [`c0b7a27`](https://github.com/algorand/go-algorand/commit/c0b7a274cf273f8bcc75816087e7bdfbd6062436) API: New pagination endpoint for applications (#6552) - *Gary Malouf*
- [`ee8281b`](https://github.com/algorand/go-algorand/commit/ee8281bbe217cc69657862b006caba7ca52e232f) Tools: fix DevNet genesis hash in algokey (#6556) - *John Lee*
- [`c80fa40`](https://github.com/algorand/go-algorand/commit/c80fa40149d62f775bc7a9dbe68c0080b73d9471) Merge pull request #6553 from Algo-devops-service/relstable4.5.1-remerge - *John Lee*
- [`74a6d9b`](https://github.com/algorand/go-algorand/commit/74a6d9bca013d0c835e310394f5494aa2cbbe13a) build: add golangci-lint format into make fmt (#6549) - *Pavel Zbitskiy*
- [`96024d7`](https://github.com/algorand/go-algorand/commit/96024d73e96a76e3c337eead14c66cd9dedd3503) Bump Version, Remove buildnumber.dat and genesistimestamp.dat files. - *DevOps Service*
- [`6acf7d8`](https://github.com/algorand/go-algorand/commit/6acf7d8a716113c262712f18eea0f7b2177b0638) Merge remote-tracking branch 'origin/rel/stable' into relstable4.5.1-remerge - *DevOps Service*
- [`a8c16ec`](https://github.com/algorand/go-algorand/commit/a8c16ecc2324cc10acb75de367c0b5dad4b0a5a3) Merge pull request #6550 from Algo-devops-service/relstable4.5.1 - *John Lee*

## 🔀 Pull Requests (21)

### Merged (8)

- [#6544](https://github.com/algorand/go-algorand/pull/6544) network: use specific error assertions in tests - *@cce*
- [#6322](https://github.com/algorand/go-algorand/pull/6322) API: add OnlineCirculation to GetSupply - *@cce*
- [#6552](https://github.com/algorand/go-algorand/pull/6552) API: New pagination endpoint for applications - *@gmalouf*
- [#6556](https://github.com/algorand/go-algorand/pull/6556) Tools: fix DevNet genesis hash in algokey - *@onetechnical*
- [#6553](https://github.com/algorand/go-algorand/pull/6553) CICD: go-algorand relstable4.5.1-remerge mergeback - *@Algo-devops-service*
- [#6550](https://github.com/algorand/go-algorand/pull/6550) go-algorand 4.5.1-stable Release PR - *@Algo-devops-service*
- [#6549](https://github.com/algorand/go-algorand/pull/6549) build: add golangci-lint format into make fmt - *@algorandskiy*
- [#6536](https://github.com/algorand/go-algorand/pull/6536) lint: Add gci formatter - *@cce*

### Opened (12)

- [#6559](https://github.com/algorand/go-algorand/pull/6559) API: Incorporate deltas in presenting paginated view of assets or applications - *@gmalouf*
- [#6558](https://github.com/algorand/go-algorand/pull/6558) API: Add cursor-based pagination with prefix support to application boxes - *@pbennett*
- [#6555](https://github.com/algorand/go-algorand/pull/6555) Eval: Prefetch better - *@jannotti*
- [#6543](https://github.com/algorand/go-algorand/pull/6543) crypto: use specific error assertions in tests - *@cce*
- [#6542](https://github.com/algorand/go-algorand/pull/6542) agreement: use specific error assertions in tests - *@cce*
- [#6557](https://github.com/algorand/go-algorand/pull/6557) node: collect goroutinese stacks before SIGKILL - *@algorandskiy*
- [#6554](https://github.com/algorand/go-algorand/pull/6554) p2p: ignore pubsub PX peers for all node modes - *@algorandskiy*
- [#6548](https://github.com/algorand/go-algorand/pull/6548) Blocks: Add support for Load and CongestionTax blockheaders - *@jannotti*
- [#6551](https://github.com/algorand/go-algorand/pull/6551) agreement: implement TODO in broadcast/relay actions - *@algorandskiy*
- [#6512](https://github.com/algorand/go-algorand/pull/6512) testing: assert ErrorContains/ErrorIs instead of Error - *@cce*
- [#6546](https://github.com/algorand/go-algorand/pull/6546) tests: fix flaky fetcher, catchpoint, expect tests - *@algorandskiy*
- [#6545](https://github.com/algorand/go-algorand/pull/6545) Chore: do not modify pubsub global variables - *@algorandskiy*

### Closed (1)

- [#6530](https://github.com/algorand/go-algorand/pull/6530) Build: Automate default prefixes and labels on new and reopened PRs - *@gmalouf*

---

*Generated on 2026-02-14*
