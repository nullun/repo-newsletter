# algorand/go-algorand Weekly Newsletter

**Week of 2026-03-09 to 2026-03-16**

## 📋 Executive Summary

In the past week, the Algorand Go repository saw vibrant development activity with 16 pull requests, of which 7 were successfully merged, showcasing ongoing enhancements to the platform. Notable open pull requests include the upcoming 4.6.0-stable release, the introduction of cursor-based pagination for application boxes, and improvements to consensus traffic via pubsub. Additionally, there are significant discussions around handling big transactions and addressing context deadlines in the DHT. While no new issues were reported, the engagement in pull requests reflects a focused effort to elevate the functionality and performance of Algorand's offerings.

## 📊 Weekly Statistics

- **Pull Requests**: 16 (7 merged)
- **Issues**: 0 (0 closed)
- **Discussions**: 0

## 🔀 Pull Requests

### [#6578](https://github.com/algorand/go-algorand/pull/6578) go-algorand 4.6.0-beta Release PR
**✅ Merged** | *@Algo-devops-service*

#6578: The release of go-algorand 4.6.0-beta introduces new features and improvements that developers can leverage for enhanced performance and functionality in their applications. Users can expect a more robust and feature-rich experience with this beta version.

### [#6571](https://github.com/algorand/go-algorand/pull/6571) Goal: Add --rekey-to flag for calling applications
**✅ Merged** | *@nullun*

#6571: The addition of the --rekey-to flag allows developers to specify a different address for rekeying in application calls, providing greater flexibility and control over asset management and security.

### [#6548](https://github.com/algorand/go-algorand/pull/6548) Blocks: Add support for Load and CongestionTax blockheaders
**✅ Merged** | *@jannotti*

#6548: Supporting Load and CongestionTax blockheaders enhances the network's ability to manage and communicate block data, improving overall efficiency and resource allocation for developers building on the platform.

### [#6579](https://github.com/algorand/go-algorand/pull/6579) pingpong: fix asset creation race
**✅ Merged** | *@algorandskiy*

#6579: Fixing the asset creation race condition ensures that developers can create assets reliably without encountering issues that could disrupt user transactions or lead to inconsistencies.

### [#6576](https://github.com/algorand/go-algorand/pull/6576) network: fix streamManager deadlock that causes goroutine leak on P2P hybrid relays
**✅ Merged** | *@cce*

#6576: Resolving the deadlock in streamManager prevents goroutine leaks, which is crucial for maintaining system stability and performance during peer-to-peer hybrid relay operations, benefiting both developers and users.

### [#6555](https://github.com/algorand/go-algorand/pull/6555) Eval: Prefetch better
**✅ Merged** | *@jannotti*

#6555: Improved prefetching in the evaluation process leads to faster and more efficient transaction processing, enhancing the overall user experience and reducing latency in application responses.

### [#6574](https://github.com/algorand/go-algorand/pull/6574) tests: fix TestNodeSetCatchpointCatchupMode data race
**✅ Merged** | *@algorandskiy*

#6574: Fixing the data race in TestNodeSetCatchpointCatchupMode enhances the reliability of tests, ensuring that developers can trust their testing framework to accurately reflect the behavior of the code under various conditions.

### [#6581](https://github.com/algorand/go-algorand/pull/6581) dht: do not err on context deadline
**🔄 Open** | *@algorandskiy*

#6581: The open pull request aims to prevent errors related to context deadlines in the DHT, which would enhance the reliability of distributed hash table operations for developers working on decentralized applications.

### [#6528](https://github.com/algorand/go-algorand/pull/6528) Eval: Big transactions
**🔄 Open** | *@jannotti*

#6528: The open pull request for Big transactions will allow developers to handle larger transactions more effectively, making it easier to implement complex use cases that require significant data transfers.

### [#6580](https://github.com/algorand/go-algorand/pull/6580) go-algorand 4.6.0-stable Release PR
**🔄 Open** | *@Algo-devops-service*

#6580: The upcoming release of go-algorand 4.6.0-stable promises to deliver a stable version with refined features, allowing developers to confidently deploy applications with the latest enhancements.

### [#6558](https://github.com/algorand/go-algorand/pull/6558) API: Add cursor-based pagination with prefix support to application boxes
**🔄 Open** | *@pbennett*

#6558: Adding cursor-based pagination with prefix support for application boxes will enable developers to implement more efficient data retrieval methods, improving user experience by allowing smoother navigation through large datasets.

### [#6501](https://github.com/algorand/go-algorand/pull/6501) network: consensus traffic via pubsub
**🔄 Open** | *@algorandskiy*

#6501: Introducing consensus traffic via pubsub enhances the network's communication efficiency, allowing developers to build applications that can respond more quickly to consensus-related events.

### [#6564](https://github.com/algorand/go-algorand/pull/6564) network: upgrade libp2p ecosystem to fix dependabot security alerts
**🔄 Open** | *@gmalouf*

#6564: Upgrading the libp2p ecosystem addresses security vulnerabilities, ensuring that developers can build secure applications and maintain user trust in the platform.

### [#6573](https://github.com/algorand/go-algorand/pull/6573) LogicSig: harden address derivation for v13+
**🔄 Open** | *@giuliop*

#6573: Hardening address derivation for LogicSig v13+ improves the security of smart contracts, providing developers with stronger safeguards against potential vulnerabilities in their applications.

### [#6567](https://github.com/algorand/go-algorand/pull/6567) CICD: Build and package in GitHub Actions
**🔄 Open** | *@onetechnical*

#6567: Implementing build and packaging in GitHub Actions streamlines the development process, allowing developers to automate workflows and improve the efficiency of their deployment pipelines.

### [#6575](https://github.com/algorand/go-algorand/pull/6575) go-algorand 4.6.0-beta Release PR
**❌ Closed** | *@Algo-devops-service*

#6575: SKIP

---

*Generated on 2026-03-16*
