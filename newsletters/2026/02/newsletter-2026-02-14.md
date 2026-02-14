# algorand/go-algorand Weekly Newsletter

**Week of 2026-02-07 to 2026-02-14**

## 📋 Executive Summary

In the past week, the Algorand Go repository saw significant activity with 21 pull requests submitted, of which 8 were successfully merged. Key developments include ongoing enhancements to the API, with notable open pull requests focusing on incorporating deltas for better pagination of assets and adding cursor-based pagination with prefix support. Additionally, improvements in evaluation prefetching and the introduction of specific error assertions in crypto and agreement tests are underway. There were no new issues or discussions reported this week, reflecting a stable environment for ongoing development.

## 📊 Weekly Statistics

- **Pull Requests**: 21 (8 merged)
- **Issues**: 0 (0 closed)
- **Discussions**: 0

## 🔀 Pull Requests

### [#6544](https://github.com/algorand/go-algorand/pull/6544) network: use specific error assertions in tests
**✅ Merged** | *@cce*

#6544: This change improves the reliability of tests by using specific error assertions, helping developers identify issues more accurately during testing.  

### [#6322](https://github.com/algorand/go-algorand/pull/6322) API: add OnlineCirculation to GetSupply
**✅ Merged** | *@cce*

#6322: The addition of OnlineCirculation to the GetSupply API enhances functionality, allowing users to retrieve more specific supply information relevant to online circulation.  

### [#6552](https://github.com/algorand/go-algorand/pull/6552) API: New pagination endpoint for applications
**✅ Merged** | *@gmalouf*

#6552: The new pagination endpoint for applications optimizes data retrieval, improving the user experience by allowing developers to handle large sets of application data more efficiently.  

### [#6556](https://github.com/algorand/go-algorand/pull/6556) Tools: fix DevNet genesis hash in algokey
**✅ Merged** | *@onetechnical*

#6556: SKIP  

### [#6553](https://github.com/algorand/go-algorand/pull/6553) CICD: go-algorand relstable4.5.1-remerge mergeback
**✅ Merged** | *@Algo-devops-service*

#6553: SKIP  

### [#6550](https://github.com/algorand/go-algorand/pull/6550) go-algorand 4.5.1-stable Release PR
**✅ Merged** | *@Algo-devops-service*

#6550: The go-algorand 4.5.1-stable release introduces new features and improvements, providing developers and users with a more stable and enhanced version of the software.  

### [#6549](https://github.com/algorand/go-algorand/pull/6549) build: add golangci-lint format into make fmt
**✅ Merged** | *@algorandskiy*

#6549: SKIP  

### [#6536](https://github.com/algorand/go-algorand/pull/6536) lint: Add gci formatter
**✅ Merged** | *@cce*

#6536: SKIP  

### [#6559](https://github.com/algorand/go-algorand/pull/6559) API: Incorporate deltas in presenting paginated view of assets or applications
**🔄 Open** | *@gmalouf*

#6559: This enhancement to the API will allow for more efficient data presentation by incorporating deltas in the paginated view, improving performance and usability for developers.  

### [#6558](https://github.com/algorand/go-algorand/pull/6558) API: Add cursor-based pagination with prefix support to application boxes
**🔄 Open** | *@pbennett*

#6558: The addition of cursor-based pagination with prefix support for application boxes will enable more flexible and efficient querying of application data, benefiting both developers and users.  

### [#6555](https://github.com/algorand/go-algorand/pull/6555) Eval: Prefetch better
**🔄 Open** | *@jannotti*

#6555: This update aims to improve the efficiency of the prefetch mechanism, potentially leading to better performance in data retrieval operations.  

### [#6543](https://github.com/algorand/go-algorand/pull/6543) crypto: use specific error assertions in tests
**🔄 Open** | *@cce*

#6543: This change will enhance the testing process for cryptographic functions by using specific error assertions, leading to more accurate error handling and debugging.  

### [#6542](https://github.com/algorand/go-algorand/pull/6542) agreement: use specific error assertions in tests
**🔄 Open** | *@cce*

#6542: By implementing specific error assertions in agreement tests, this change improves the reliability of the testing framework, aiding developers in identifying issues more effectively.  

### [#6557](https://github.com/algorand/go-algorand/pull/6557) node: collect goroutinese stacks before SIGKILL
**🔄 Open** | *@algorandskiy*

#6557: Collecting goroutine stacks before a SIGKILL will aid in diagnosing issues related to abrupt terminations, providing developers with better insights into failures.  

### [#6554](https://github.com/algorand/go-algorand/pull/6554) p2p: ignore pubsub PX peers for all node modes
**🔄 Open** | *@algorandskiy*

#6554: Ignoring pubsub PX peers for all node modes will streamline peer management, potentially enhancing performance and stability for developers working on node configurations.  

### [#6548](https://github.com/algorand/go-algorand/pull/6548) Blocks: Add support for Load and CongestionTax blockheaders
**🔄 Open** | *@jannotti*

#6548: Adding support for Load and CongestionTax blockheaders allows for more comprehensive data handling and analysis, which can be crucial for developers working on transaction processing.  

### [#6551](https://github.com/algorand/go-algorand/pull/6551) agreement: implement TODO in broadcast/relay actions
**🔄 Open** | *@algorandskiy*

#6551: Implementing the TODO in broadcast/relay actions will complete existing functionalities, improving the overall robustness and reliability of the agreement module.  

### [#6512](https://github.com/algorand/go-algorand/pull/6512) testing: assert ErrorContains/ErrorIs instead of Error
**🔄 Open** | *@cce*

#6512: This change enhances testing accuracy by asserting specific error conditions, which will help developers catch issues more effectively during the testing phase.  

### [#6546](https://github.com/algorand/go-algorand/pull/6546) tests: fix flaky fetcher, catchpoint, expect tests
**🔄 Open** | *@algorandskiy*

#6546: Fixing flaky tests related to fetcher, catchpoint, and expect will lead to more reliable test outcomes, assisting developers in maintaining code quality.  

### [#6545](https://github.com/algorand/go-algorand/pull/6545) Chore: do not modify pubsub global variables
**🔄 Open** | *@algorandskiy*

#6545: SKIP  

### [#6530](https://github.com/algorand/go-algorand/pull/6530) Build: Automate default prefixes and labels on new and reopened PRs
**❌ Closed** | *@gmalouf*

#6530: SKIP  

---

*Generated on 2026-02-14*
