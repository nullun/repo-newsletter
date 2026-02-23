# algorand/go-algorand Weekly Newsletter

**Week of 2026-02-16 to 2026-02-23**

## 📋 Executive Summary

In the past week, the Algorand Go repository saw the submission of 11 new pull requests, with notable contributions focused on enhancing prefetching mechanisms, addressing potential deadlock issues in the p2p layer, and improving API functionalities, including the introduction of cursor-based pagination and deltas for asset views. While there were no issues closed or discussions initiated, these ongoing developments reflect the team's commitment to refining the platform's performance and usability. Developers and users should keep an eye on these open pull requests as they progress.

## 📊 Weekly Statistics

- **Pull Requests**: 11 (0 merged)
- **Issues**: 0 (0 closed)
- **Discussions**: 0

## 🔀 Pull Requests

### [#6555](https://github.com/algorand/go-algorand/pull/6555) Eval: Prefetch better
**🔄 Open** | *@jannotti*

#6555: This change aims to improve the performance of the evaluation process by enhancing prefetching mechanisms, which can lead to faster execution times for developers and users relying on efficient data processing.

### [#6562](https://github.com/algorand/go-algorand/pull/6562) p2p: fix StopNotify vs notifyAll deadlock on stop
**🔄 Open** | *@algorandskiy*

#6562: This fix addresses a potential deadlock issue between StopNotify and notifyAll in the peer-to-peer module, ensuring more reliable stopping behavior and preventing application hangs for developers working with concurrency.

### [#6554](https://github.com/algorand/go-algorand/pull/6554) p2p: ignore pubsub PX peers for all node modes
**🔄 Open** | *@algorandskiy*

#6554: By ignoring pubsub PX peers across all node modes, this update simplifies the peer selection process, potentially improving the efficiency of network communication for developers and users.

### [#6558](https://github.com/algorand/go-algorand/pull/6558) API: Add cursor-based pagination with prefix support to application boxes
**🔄 Open** | *@pbennett*

#6558: The addition of cursor-based pagination with prefix support enhances the API's usability, allowing developers to retrieve application boxes more efficiently and improving the user experience when navigating large datasets.

### [#6559](https://github.com/algorand/go-algorand/pull/6559) API: Incorporate deltas in presenting paginated view of assets or applications
**🔄 Open** | *@gmalouf*

#6559: Incorporating deltas in the paginated view of assets or applications provides developers with more dynamic and responsive data presentation, enhancing the overall user experience by reducing load times for updates.

### [#6551](https://github.com/algorand/go-algorand/pull/6551) agreement: implement TODO in broadcast/relay actions
**🔄 Open** | *@algorandskiy*

#6551: Implementing the TODO in broadcast/relay actions improves the functionality of the agreement module, ensuring that developers have a more robust toolset for managing message broadcasting.

### [#6548](https://github.com/algorand/go-algorand/pull/6548) Blocks: Add support for Load and CongestionTax blockheaders
**🔄 Open** | *@jannotti*

#6548: This update introduces support for Load and CongestionTax blockheaders, expanding the blockchain's capabilities and providing developers with new tools for monitoring network performance and resource management.

### [#6561](https://github.com/algorand/go-algorand/pull/6561) build(deps): bump filippo.io/edwards25519 from 1.0.0 to 1.1.1 in /tools/block-generator
**🔄 Open** | *@dependabot[bot]*

#6561: Bumping the dependency version for edwards25519 enhances cryptographic performance and security in the block-generator tool, which is crucial for developers working on secure applications.

### [#4018](https://github.com/algorand/go-algorand/pull/4018) REST API: add support for optional "round" parameter to lookup queries
**🔄 Open** | *@cce*

#4018: Adding support for an optional "round" parameter in lookup queries enhances the REST API's flexibility, allowing developers to retrieve more specific data and improving the overall efficiency of data queries.

### [#6560](https://github.com/algorand/go-algorand/pull/6560) AVM: poseidon2 hash function
**🔄 Open** | *@joe-p*

#6560: The introduction of the poseidon2 hash function in the AVM offers developers a new cryptographic option, potentially improving performance and security in applications relying on hashing.

### [#6546](https://github.com/algorand/go-algorand/pull/6546) tests: fix flaky fetcher, catchpoint, expect tests
**🔄 Open** | *@algorandskiy*

#6546: Fixing flaky tests related to the fetcher, catchpoint, and expect tests enhances the reliability of the testing suite, allowing developers to have more confidence in their code's stability and correctness.

---

*Generated on 2026-02-23*
