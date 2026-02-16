# algorand/go-algorand Weekly Newsletter

**Week of 2026-02-09 to 2026-02-16**

## 📋 Executive Summary

In the past week, the Algorand Go repository saw robust activity with 22 pull requests, of which 8 were successfully merged, reflecting ongoing enhancements to the platform. Noteworthy developments include the open pull requests for the AVM poseidon2 hash function (#6560), the addition of cursor-based pagination with prefix support to application boxes (#6558), and improvements in presenting paginated views of assets or applications by incorporating deltas (#6559). Additionally, efforts to optimize evaluation through better prefetching (#6555) and to enhance testing accuracy with specific error assertions (#6543) are underway. While there were no new issues or discussions, the focus remains on advancing the functionality and performance of Algorand’s offerings.

## 📊 Weekly Statistics

- **Pull Requests**: 22 (8 merged)
- **Issues**: 0 (0 closed)
- **Discussions**: 0

## 🔀 Pull Requests

### [#6544](https://github.com/algorand/go-algorand/pull/6544) network: use specific error assertions in tests
**✅ Merged** | *@cce*

#6544: This change improves test reliability by using specific error assertions, helping developers quickly identify the root cause of failures during testing.

### [#6322](https://github.com/algorand/go-algorand/pull/6322) API: add OnlineCirculation to GetSupply
**✅ Merged** | *@cce*

#6322: The addition of OnlineCirculation to the GetSupply API enhances its functionality, allowing developers to access more detailed supply information which can improve user experience.

### [#6552](https://github.com/algorand/go-algorand/pull/6552) API: New pagination endpoint for applications
**✅ Merged** | *@gmalouf*

#6552: The new pagination endpoint for applications streamlines data retrieval, enabling developers to implement more efficient navigation through application data for users.

### [#6556](https://github.com/algorand/go-algorand/pull/6556) Tools: fix DevNet genesis hash in algokey
**✅ Merged** | *@onetechnical*

#6556: SKIP

### [#6553](https://github.com/algorand/go-algorand/pull/6553) CICD: go-algorand relstable4.5.1-remerge mergeback
**✅ Merged** | *@Algo-devops-service*

#6553: SKIP

### [#6550](https://github.com/algorand/go-algorand/pull/6550) go-algorand 4.5.1-stable Release PR
**✅ Merged** | *@Algo-devops-service*

#6550: The release of go-algorand 4.5.1-stable provides developers with a stable version that includes important updates and bug fixes, ensuring better performance and reliability in applications.

### [#6549](https://github.com/algorand/go-algorand/pull/6549) build: add golangci-lint format into make fmt
**✅ Merged** | *@algorandskiy*

#6549: SKIP

### [#6536](https://github.com/algorand/go-algorand/pull/6536) lint: Add gci formatter
**✅ Merged** | *@cce*

#6536: SKIP

### [#6560](https://github.com/algorand/go-algorand/pull/6560) AVM: poseidon2 hash function
**🔄 Open** | *@joe-p*

#6560: The introduction of the poseidon2 hash function in the AVM enhances cryptographic capabilities, providing developers with a more secure option for hashing within their applications.

### [#6558](https://github.com/algorand/go-algorand/pull/6558) API: Add cursor-based pagination with prefix support to application boxes
**🔄 Open** | *@pbennett*

#6558: Adding cursor-based pagination with prefix support to application boxes improves data handling, allowing developers to create more efficient and user-friendly interfaces for navigating application data.

### [#6559](https://github.com/algorand/go-algorand/pull/6559) API: Incorporate deltas in presenting paginated view of assets or applications
**🔄 Open** | *@gmalouf*

#6559: Incorporating deltas in presenting a paginated view of assets or applications will enhance the user experience by providing real-time updates and changes, making data more relevant and actionable.

### [#6555](https://github.com/algorand/go-algorand/pull/6555) Eval: Prefetch better
**🔄 Open** | *@jannotti*

#6555: Prefetching improvements in the evaluation process can lead to better performance, allowing developers to optimize resource usage and enhance overall application speed.

### [#6543](https://github.com/algorand/go-algorand/pull/6543) crypto: use specific error assertions in tests
**🔄 Open** | *@cce*

#6543: This change introduces specific error assertions in crypto tests, improving the robustness of the testing framework and helping developers identify issues more effectively.

### [#6542](https://github.com/algorand/go-algorand/pull/6542) agreement: use specific error assertions in tests
**🔄 Open** | *@cce*

#6542: Similar to other changes, using specific error assertions in agreement tests increases the reliability of the test suite, aiding developers in diagnosing problems quickly.

### [#6557](https://github.com/algorand/go-algorand/pull/6557) node: collect goroutinese stacks before SIGKILL
**🔄 Open** | *@algorandskiy*

#6557: Collecting goroutine stacks before a SIGKILL improves debugging capabilities, helping developers understand the state of the application at the time of termination.

### [#6554](https://github.com/algorand/go-algorand/pull/6554) p2p: ignore pubsub PX peers for all node modes
**🔄 Open** | *@algorandskiy*

#6554: Ignoring pubsub PX peers for all node modes will enhance network efficiency by reducing unnecessary data processing, benefiting developers working on peer-to-peer networking.

### [#6548](https://github.com/algorand/go-algorand/pull/6548) Blocks: Add support for Load and CongestionTax blockheaders
**🔄 Open** | *@jannotti*

#6548: Adding support for Load and CongestionTax blockheaders enables developers to work with new blockchain features, potentially improving transaction management and network performance.

### [#6551](https://github.com/algorand/go-algorand/pull/6551) agreement: implement TODO in broadcast/relay actions
**🔄 Open** | *@algorandskiy*

#6551: Implementing outstanding TODOs in broadcast/relay actions enhances the agreement module, ensuring better communication between nodes and improving overall system reliability.

### [#6512](https://github.com/algorand/go-algorand/pull/6512) testing: assert ErrorContains/ErrorIs instead of Error
**🔄 Open** | *@cce*

#6512: This change shifts error assertions to a more specific format, improving the clarity of tests and helping developers catch errors more effectively.

### [#6546](https://github.com/algorand/go-algorand/pull/6546) tests: fix flaky fetcher, catchpoint, expect tests
**🔄 Open** | *@algorandskiy*

#6546: Fixing flaky tests related to fetchers, catchpoints, and expectations enhances the stability of the testing process, allowing developers to trust test results more fully.

### [#6545](https://github.com/algorand/go-algorand/pull/6545) Chore: do not modify pubsub global variables
**🔄 Open** | *@algorandskiy*

#6545: SKIP

### [#6530](https://github.com/algorand/go-algorand/pull/6530) Build: Automate default prefixes and labels on new and reopened PRs
**❌ Closed** | *@gmalouf*

#6530: SKIP

---

*Generated on 2026-02-16*
