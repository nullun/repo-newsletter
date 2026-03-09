# algorand/go-algorand Weekly Newsletter

**Week of 2026-03-02 to 2026-03-09**

## 📋 Executive Summary

In the past week, the Algorand Go repository has seen a productive burst of activity with 15 pull requests submitted, four of which have been successfully merged. Notably, several key enhancements are in progress, including the introduction of cursor-based pagination for application boxes (#6558), a fix for a deadlock issue in the stream manager affecting P2P hybrid relays (#6576), and improvements to data handling for big transactions (#6528). Additionally, a test has been implemented to address a data race in the TestNodeSetCatchpointCatchupMode (#6574). While there are currently no new issues or discussions, this week's developments are set to enhance performance and functionality for developers and users alike.

## 📊 Weekly Statistics

- **Pull Requests**: 15 (4 merged)
- **Issues**: 0 (0 closed)
- **Discussions**: 0

## 🔀 Pull Requests

### [#6577](https://github.com/algorand/go-algorand/pull/6577) ledger: fix lookupAssetResources/lookupApplicationResources delta-merge bugs
**✅ Merged** | *@cce*

#6577: This fix resolves bugs in the delta-merge process for asset and application resource lookups, ensuring more reliable and accurate results for developers working with ledger data.

### [#6559](https://github.com/algorand/go-algorand/pull/6559) API: Incorporate deltas in presenting paginated view of assets or applications
**✅ Merged** | *@gmalouf*

#6559: By incorporating deltas into the paginated view of assets or applications, this change enhances data retrieval efficiency, providing developers and users with a more responsive and streamlined experience.

### [#6572](https://github.com/algorand/go-algorand/pull/6572) network: handle stream creation on existing conns
**✅ Merged** | *@algorandskiy*

#6572: This update allows the creation of streams on existing connections, improving the flexibility and performance of network communications for developers.

### [#6546](https://github.com/algorand/go-algorand/pull/6546) tests: fix flaky fetcher, catchpoint, expect tests
**✅ Merged** | *@algorandskiy*

#6546: Fixing flaky tests enhances the reliability of the testing suite, ensuring that developers can trust test results and maintain code quality more effectively.

### [#6558](https://github.com/algorand/go-algorand/pull/6558) API: Add cursor-based pagination with prefix support to application boxes
**🔄 Open** | *@pbennett*

#6558: The addition of cursor-based pagination with prefix support for application boxes improves data navigation, making it easier for developers to manage and access large sets of application data.

### [#6576](https://github.com/algorand/go-algorand/pull/6576) network: fix streamManager deadlock that causes goroutine leak on P2P hybrid relays
**🔄 Open** | *@cce*

#6576: This fix addresses a deadlock issue in the streamManager that could lead to goroutine leaks, improving the stability and performance of P2P hybrid relay operations for developers.

### [#6555](https://github.com/algorand/go-algorand/pull/6555) Eval: Prefetch better
**🔄 Open** | *@jannotti*

#6555: SKIP

### [#6528](https://github.com/algorand/go-algorand/pull/6528) Eval: Big transactions
**🔄 Open** | *@jannotti*

#6528: SKIP

### [#6574](https://github.com/algorand/go-algorand/pull/6574) tests: fix TestNodeSetCatchpointCatchupMode data race
**🔄 Open** | *@algorandskiy*

#6574: This fix resolves a data race in the TestNodeSetCatchpointCatchupMode test, enhancing the reliability of the test suite and ensuring accurate testing for developers.

### [#6567](https://github.com/algorand/go-algorand/pull/6567) CICD: Build and package in GitHub Actions
**🔄 Open** | *@onetechnical*

#6567: Implementing build and package processes in GitHub Actions streamlines CI/CD workflows, allowing developers to automate testing and deployment more efficiently.

### [#6548](https://github.com/algorand/go-algorand/pull/6548) Blocks: Add support for Load and CongestionTax blockheaders
**🔄 Open** | *@jannotti*

#6548: Adding support for Load and CongestionTax blockheaders enables developers to handle new blockchain features, improving the functionality and adaptability of their applications.

### [#6573](https://github.com/algorand/go-algorand/pull/6573) LogicSig: harden address derivation for v13+
**🔄 Open** | *@giuliop*

#6573: Hardening address derivation for v13+ LogicSig enhances security measures, ensuring that developers can create more robust smart contracts.

### [#6571](https://github.com/algorand/go-algorand/pull/6571) Goal: Add --rekey-to flag for calling applications
**🔄 Open** | *@nullun*

#6571: The addition of the --rekey-to flag for calling applications provides developers with greater control over transaction management, enhancing usability and flexibility.

### [#6560](https://github.com/algorand/go-algorand/pull/6560) AVM: poseidon2 hash function
**🔄 Open** | *@joe-p*

#6560: Introducing the poseidon2 hash function in the AVM offers developers a new cryptographic option, potentially improving the performance and security of their applications.

### [#6575](https://github.com/algorand/go-algorand/pull/6575) go-algorand 4.6.0-beta Release PR
**❌ Closed** | *@Algo-devops-service*

#6575: SKIP

---

*Generated on 2026-03-09*
