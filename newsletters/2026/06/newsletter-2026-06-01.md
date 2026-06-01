# algorand/go-algorand Weekly Newsletter

**Week of 2026-05-25 to 2026-06-01**

## 📋 Executive Summary

In the past week, the Algorand repository saw significant activity with 12 pull requests, of which 3 were successfully merged, and 1 new issue was opened. Noteworthy ongoing pull requests include enhancements to transaction handling with large logic signatures (#6637), a variable-time implementation of VRF verification (#3925), and improvements to API functionality for simulating fee usage on big transactions (#6636). Additionally, there's a focus on optimizing cryptographic processes, as seen in the batch verification for OneTimeSignature implementations (#6635). On the issues front, there's an ongoing discussion regarding the addition of a pragma directive to control assembler autosalt behavior (#6632). Developers and users should stay tuned for these promising updates that aim to enhance the platform's functionality and performance.

## 📊 Weekly Statistics

- **Pull Requests**: 12 (3 merged)
- **Issues**: 1 (0 closed)
- **Discussions**: 0

## 🔀 Pull Requests

### [#6528](https://github.com/algorand/go-algorand/pull/6528) Eval: Big transactions
**✅ Merged** | *@jannotti*

#6528: This pull request enhances the evaluation of big transactions, allowing developers to better handle larger transaction sizes, which can improve user experience in high-volume scenarios.

### [#6613](https://github.com/algorand/go-algorand/pull/6613) go-algorand 4.7.0-beta Release PR
**✅ Merged** | *@Algo-devops-service*

#6613: The release of go-algorand 4.7.0-beta introduces new features and performance improvements, enabling developers to test upcoming functionalities before the stable release.

### [#6619](https://github.com/algorand/go-algorand/pull/6619) go-algorand 4.7.0-stable Release PR
**✅ Merged** | *@Algo-devops-service*

#6619: The go-algorand 4.7.0-stable release provides developers and users with a stable version that includes the latest enhancements and bug fixes, ensuring a more reliable experience.

### [#6637](https://github.com/algorand/go-algorand/pull/6637) transactions: allow large lsigs with size pricing
**🔄 Open** | *@giuliop*

#6637: This open pull request proposes allowing large logic signatures (lsigs) with size-based pricing, which could facilitate more complex smart contracts for developers, impacting transaction costs and efficiency.

### [#3925](https://github.com/algorand/go-algorand/pull/3925) crypto: Variable-time implementation of VRF verify
**🔄 Open** | *@fabrice102*

#3925: The implementation of a variable-time approach for VRF verification aims to enhance security practices, which is crucial for developers focused on cryptographic integrity in their applications.

### [#6636](https://github.com/algorand/go-algorand/pull/6636) API: Big transactions simulate fee usage
**🔄 Open** | *@jannotti*

#6636: This pull request aims to simulate fee usage for big transactions via the API, offering developers better insights into transaction costs and helping users make informed decisions.

### [#6635](https://github.com/algorand/go-algorand/pull/6635) crypto: use batch verification for OneTimeSignature (votes, heartbeats)
**🔄 Open** | *@cce*

#6635: The introduction of batch verification for OneTimeSignature in votes and heartbeats can improve performance and reduce processing time, benefiting developers working on applications that require rapid verification.

### [#4953](https://github.com/algorand/go-algorand/pull/4953) write failed LogicSig and App TEAL trace to node.log
**🔄 Open** | *@brianolson*

#4953: By logging failed LogicSig and App TEAL traces, this enhancement aids developers in debugging their applications, providing greater transparency into transaction failures.

### [#6633](https://github.com/algorand/go-algorand/pull/6633) goal: add empty refs flag
**🔄 Open** | *@nullun*

#6633: The addition of an empty refs flag in the goal tool can streamline developer workflows by allowing them to manage references more efficiently during transaction processing.

### [#4018](https://github.com/algorand/go-algorand/pull/4018) REST API: add support for optional "round" parameter to lookup queries
**🔄 Open** | *@cce*

#4018: This pull request adds support for an optional "round" parameter in REST API lookup queries, allowing developers to retrieve more specific data and improving the flexibility of API interactions.

### [#6592](https://github.com/algorand/go-algorand/pull/6592) avm: auto-salt TEAL v13 programs to avoid on-curve LogicSig hashes
**🔄 Open** | *@giuliop*

#6592: The auto-salt feature for TEAL v13 programs aims to prevent on-curve LogicSig hashes, enhancing security and ensuring developers can create safer smart contracts.

### [#6634](https://github.com/algorand/go-algorand/pull/6634) txn: group signature fields into embedded struct
**🔄 Open** | *@nullun*

#6634: Grouping signature fields into an embedded struct in transactions can lead to cleaner code and improved readability, making it easier for developers to manage transaction data.

## 🐛 Issues

### [#6632](https://github.com/algorand/go-algorand/issues/6632) Add pragma directive to control assembler autosalt behavior
**🔄 Open** | *@giuliop* | `Enhancement`

#6632: The addition of a pragma directive to control assembler autosalt behavior allows developers to customize how the assembler handles salt during encryption processes, potentially improving security and performance based on specific use cases. This change enhances flexibility for developers working with cryptographic functions, making it easier to optimize their applications.

---

*Generated on 2026-06-01*
