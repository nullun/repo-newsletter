# algorand/go-algorand Weekly Newsletter

**Week of 2026-06-08 to 2026-06-15**

## 📋 Executive Summary

In the past week, the Algorand Go repository saw a total of 7 pull requests, with 1 successfully merged, indicating ongoing enhancements to the platform. Notable open pull requests include improvements to native PQ accounts (#6639), state-proof-based catchup mechanisms (#5720), and better handling of proposal attempts when no participating accounts are present (#4976). Additionally, there are efforts to refine the ledger's locking granularity (#5637) and to modernize code by converting interface types (#6644). There were no new issues or discussions this week, suggesting a stable environment as the team focuses on these key developments.

## 📊 Weekly Statistics

- **Pull Requests**: 7 (1 merged)
- **Issues**: 0 (0 closed)
- **Discussions**: 0

## 🔀 Pull Requests

### [#104](https://github.com/algorand/go-algorand/pull/104) Move travis to 18.04
**✅ Merged** | *@Karmastic*

#104: Moving Travis CI to Ubuntu 18.04 ensures that the build environment is up-to-date, which may improve compatibility and performance for developers running tests and builds.

### [#6639](https://github.com/algorand/go-algorand/pull/6639) txn: native PQ accounts
**🔄 Open** | *@cusma*

#6639: Implementing native PQ accounts in transactions will enhance the functionality and security of the platform, allowing for more efficient account management and operations.

### [#5720](https://github.com/algorand/go-algorand/pull/5720) catchup: state-proof-based catchup
**🔄 Open** | *@zeldovich*

#5720: Introducing state-proof-based catchup will improve the reliability and speed of node synchronization, ensuring that users have access to the most current state of the network.

### [#4976](https://github.com/algorand/go-algorand/pull/4976) agreement: don't attempt to make proposal if no particating accounts
**🔄 Open** | *@cce*

#4976: Preventing proposals from being made without participating accounts will streamline the proposal process and reduce errors, ensuring that only valid and actionable proposals are submitted.

### [#5637](https://github.com/algorand/go-algorand/pull/5637) ledger: increase locks granularity in lookupWithoutRewards
**🔄 Open** | *@algorandskiy*

#5637: Increasing the granularity of locks in the lookupWithoutRewards function will enhance performance and concurrency, allowing for more efficient data access and reducing potential bottlenecks.

### [#6644](https://github.com/algorand/go-algorand/pull/6644) lint: convert interface{} => any
**🔄 Open** | *@cce*

#6644: Converting interface{} to any in linting will improve type safety and code clarity, making it easier for developers to understand and maintain the codebase.

### [#6592](https://github.com/algorand/go-algorand/pull/6592) avm: auto-salt TEAL v13 programs to avoid on-curve LogicSig hashes
**🔄 Open** | *@giuliop*

#6592: Auto-salting TEAL v13 programs to avoid on-curve LogicSig hashes will enhance security by preventing certain attack vectors, resulting in safer smart contract execution for users.

---

*Generated on 2026-06-15*
