# algorand/go-algorand Weekly Newsletter

**Week of 2026-04-06 to 2026-04-13**

## 📋 Executive Summary

In the past week, the Algorand Go repository has seen significant activity with 29 pull requests, of which 4 have been merged. Noteworthy open pull requests include enhancements to the Algorand Virtual Machine (AVM) with variable length branches (#6600) and optimizations for the assembler's constant handling (#6598). The repository also addresses critical cryptographic improvements (#3925) and fixes a logic issue in the ledger's transaction trimming process (#4615). Additionally, developers are working on improving logging for failed LogicSig and App TEAL traces (#4953). On the issue front, a potential vulnerability has been identified (#6606) and remains open for discussion. This week’s developments reflect ongoing efforts to enhance performance and security within the Algorand ecosystem.

## 📊 Weekly Statistics

- **Pull Requests**: 29 (4 merged)
- **Issues**: 1 (0 closed)
- **Discussions**: 0

## 🔀 Pull Requests

### [#6581](https://github.com/algorand/go-algorand/pull/6581) dht: do not err on context deadline
**✅ Merged** | *@algorandskiy*

#6581: This change prevents errors related to context deadlines in the DHT, improving the reliability of operations that depend on timely responses, which is crucial for developers working with distributed systems.

### [#6589](https://github.com/algorand/go-algorand/pull/6589) build: fix MacOS 14 SDK and XCode 16.x issue
**✅ Merged** | *@algorandskiy*

#6589: The fix for the MacOS 14 SDK and XCode 16.x issue ensures that developers can build and run the software smoothly on the latest MacOS versions, enhancing compatibility for Mac users.

### [#6597](https://github.com/algorand/go-algorand/pull/6597) CICD: update actions to use SLACK_WEBHOOK_URL
**✅ Merged** | *@onetechnical*

#6597: Updating the CI/CD actions to use SLACK_WEBHOOK_URL improves the integration with Slack, allowing for better notifications and communication during the development process.

### [#6599](https://github.com/algorand/go-algorand/pull/6599) logging: use atomic logrus level accessors to prevent data races
**✅ Merged** | *@cce*

#6599: By using atomic logrus level accessors, this change prevents data races in logging, ensuring that log messages are consistent and reliable, which is important for debugging and monitoring.

### [#6600](https://github.com/algorand/go-algorand/pull/6600) AVM: Variable length branches
**🔄 Open** | *@jannotti*

#6600: The introduction of variable length branches in the AVM could enhance the flexibility and efficiency of smart contract execution, allowing developers to create more complex logic without sacrificing performance.

### [#6598](https://github.com/algorand/go-algorand/pull/6598) assembler: single-pass optimizeConstants using cumulative delta array
**🔄 Open** | *@jannotti*

#6598: This single-pass optimization for constants using a cumulative delta array in the assembler aims to improve performance, making the execution of code more efficient for developers.

### [#3925](https://github.com/algorand/go-algorand/pull/3925) crypto: Variable-time implementation of VRF verify
**🔄 Open** | *@fabrice102*

#3925: The variable-time implementation of VRF verify improves security and performance in cryptographic operations, which is essential for developers focusing on secure applications.

### [#4615](https://github.com/algorand/go-algorand/pull/4615) Ledger: Correct off by one logic in txTail.recent trim loop
**🔄 Open** | *@AlgoAxel*

#4615: Correcting the off-by-one logic in the txTail.recent trim loop addresses a potential bug that could lead to incorrect transaction handling, improving the reliability of the ledger.

### [#4953](https://github.com/algorand/go-algorand/pull/4953) write failed LogicSig and App TEAL trace to node.log
**🔄 Open** | *@brianolson*

#4953: Writing failed LogicSig and App TEAL traces to node.log provides better debugging information for developers, helping them diagnose issues with smart contract execution.

### [#2335](https://github.com/algorand/go-algorand/pull/2335) WIP: Call ParamsRound() to subtract from nextRound in mainLoop init
**🔄 Open** | *@cce*

#2335: This WIP change aims to improve the main loop initialization by adjusting the nextRound parameter, which could enhance the overall performance of the system.

### [#5412](https://github.com/algorand/go-algorand/pull/5412) draft: test data race and postMessagesOfInterestThread
**🔄 Open** | *@algonautshant*

#5412: Testing for data races in the postMessagesOfInterestThread is crucial for ensuring thread safety, which is important for developers working on concurrent applications.

### [#5818](https://github.com/algorand/go-algorand/pull/5818) eval: split TestTransactionGroup from BlockEvaluator using TransactionGroupTester
**🔄 Open** | *@cce*

#5818: Splitting TestTransactionGroup from BlockEvaluator allows for more modular testing, making it easier for developers to test transaction processing independently.

### [#5424](https://github.com/algorand/go-algorand/pull/5424) WIP txHandler: do not rebroadcast to peers sent duplicate messages
**🔄 Open** | *@algorandskiy*

#5424: Preventing the rebroadcast of duplicate messages to peers in the txHandler improves network efficiency and reduces unnecessary traffic, benefiting overall system performance.

### [#5637](https://github.com/algorand/go-algorand/pull/5637) ledger: increase locks granularity in lookupWithoutRewards
**🔄 Open** | *@algorandskiy*

#5637: Increasing lock granularity in lookupWithoutRewards can lead to improved performance by reducing contention, which is important for developers optimizing transaction processing.

### [#5943](https://github.com/algorand/go-algorand/pull/5943) eval: increase opcode budget with fee credit
**🔄 Open** | *@joe-p*

#5943: Increasing the opcode budget with fee credit allows for more complex transactions without additional fees, providing developers with greater flexibility in their smart contracts.

### [#4913](https://github.com/algorand/go-algorand/pull/4913) performance: Speculative block assembly into master
**🔄 Open** | *@algorandskiy*

#4913: Speculative block assembly into master aims to enhance performance by allowing for faster block creation, which is critical for developers focused on scalability.

### [#6540](https://github.com/algorand/go-algorand/pull/6540) build(deps): bump github.com/quic-go/quic-go from 0.49.1 to 0.57.0
**🔄 Open** | *@dependabot[bot]*

#6540: Bumping the quic-go dependency ensures that developers benefit from the latest features and fixes, improving the performance and reliability of QUIC protocol implementations.

### [#6584](https://github.com/algorand/go-algorand/pull/6584) scripts: update go sdk type exporter 
**🔄 Open** | *@algorandskiy*

#6584: SKIP

### [#6587](https://github.com/algorand/go-algorand/pull/6587) build(deps): bump github.com/sirupsen/logrus from 1.9.0 to 1.9.1
**🔄 Open** | *@dependabot[bot]*

#6587: Updating the logrus dependency to a newer version may include bug fixes and performance improvements, which could enhance logging capabilities for developers.

### [#6588](https://github.com/algorand/go-algorand/pull/6588) API: Deal with params that are in deltas
**🔄 Open** | *@jannotti*

#6588: This change deals with parameters in deltas, potentially improving API responsiveness and accuracy, which is significant for developers relying on precise data handling.

### [#6595](https://github.com/algorand/go-algorand/pull/6595) chore: better error handling in fast catchup mode
**🔄 Open** | *@algorandskiy*

#6595: Improving error handling in fast catchup mode enhances system robustness, allowing developers to better manage edge cases during rapid data synchronization.

### [#6601](https://github.com/algorand/go-algorand/pull/6601) build(deps): bump github.com/ipld/go-ipld-prime from 0.21.0 to 0.22.0
**🔄 Open** | *@dependabot[bot]*

#6601: Bumping the go-ipld-prime dependency ensures that developers have access to the latest features and improvements in the IPLD library, which is essential for data structuring.

### [#6602](https://github.com/algorand/go-algorand/pull/6602) build(deps): bump github.com/ipld/go-ipld-prime from 0.21.0 to 0.22.0 in /tools/debug/algodump
**🔄 Open** | *@dependabot[bot]*

#6602: SKIP

### [#6603](https://github.com/algorand/go-algorand/pull/6603) build(deps): bump github.com/sirupsen/logrus from 1.9.0 to 1.9.1 in /tools/block-generator
**🔄 Open** | *@dependabot[bot]*

#6603: SKIP

### [#6604](https://github.com/algorand/go-algorand/pull/6604) build(deps): bump github.com/sirupsen/logrus from 1.9.0 to 1.9.1 in /tools/debug/algodump
**🔄 Open** | *@dependabot[bot]*

#6604: SKIP

### [#6607](https://github.com/algorand/go-algorand/pull/6607) build(deps): bump go.opentelemetry.io/otel/sdk from 1.40.0 to 1.43.0
**🔄 Open** | *@dependabot[bot]*

#6607: Bumping the OpenTelemetry SDK dependency could enhance observability features, providing developers with better tools for monitoring and tracing their applications.

### [#6608](https://github.com/algorand/go-algorand/pull/6608) build(deps): bump go.opentelemetry.io/otel/sdk from 1.40.0 to 1.43.0 in /tools/block-generator
**🔄 Open** | *@dependabot[bot]*

#6608: SKIP

### [#6609](https://github.com/algorand/go-algorand/pull/6609) build(deps): bump go.opentelemetry.io/otel/sdk from 1.40.0 to 1.43.0 in /tools/debug/algodump
**🔄 Open** | *@dependabot[bot]*

#6609: SKIP

### [#6605](https://github.com/algorand/go-algorand/pull/6605) build(deps): bump github.com/ipld/go-ipld-prime from 0.21.0 to 0.22.0 in /tools/block-generator
**🔄 Open** | *@dependabot[bot]*

#6605: SKIP

## 🐛 Issues

### [#6606](https://github.com/algorand/go-algorand/issues/6606) Vulnerability in go-algorand project
**🔄 Open** | *@ankitdn* | `bug`

#6606: The identified vulnerability in the go-algorand project poses a potential risk to the security and integrity of applications built on this platform, necessitating prompt attention from developers to mitigate any potential exploits and protect user data. Users relying on this project should be aware of the vulnerability and ensure they are using the latest secure version.

---

*Generated on 2026-04-13*
