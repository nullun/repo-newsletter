# algorand/go-algorand Weekly Newsletter

**Week of 2026-03-30 to 2026-04-06**

## 📋 Executive Summary

In the past week, the Algorand Go repository saw a flurry of activity with 24 pull requests, of which 5 were successfully merged, reflecting ongoing enhancements and bug fixes. Noteworthy contributions include updates for MacOS compatibility (#6589), improvements to the AVM with variable length branches (#6600), and enhancements to transaction testing (#5818). Additionally, a significant update to the CI/CD pipeline was proposed to streamline communication with Slack (#6597). While there were no new issues reported or discussions initiated, the momentum in pull requests showcases the team's commitment to refining the platform and addressing user needs.

## 📊 Weekly Statistics

- **Pull Requests**: 24 (5 merged)
- **Issues**: 0 (0 closed)
- **Discussions**: 0

## 🔀 Pull Requests

### [#3423](https://github.com/algorand/go-algorand/pull/3423) go-algorand 3.3.0-beta 
**✅ Merged** | *@Algo-devops-service*

go-algorand 3.3.0-beta: This release introduces new features and improvements to the Algorand platform, providing developers with enhanced capabilities for building applications.

### [#6384](https://github.com/algorand/go-algorand/pull/6384) logging: log configuration migration messages
**✅ Merged** | *@cce*

logging: log configuration migration messages: This update improves transparency during log configuration changes, helping developers diagnose issues related to logging more effectively.

### [#3798](https://github.com/algorand/go-algorand/pull/3798) go-algorand 3.5.1-stable 
**✅ Merged** | *@Algo-devops-service*

go-algorand 3.5.1-stable: This stable release includes critical updates and optimizations, ensuring developers have access to the latest performance enhancements and bug fixes.

### [#3279](https://github.com/algorand/go-algorand/pull/3279) go-algorand 3.2.1-stable 
**✅ Merged** | *@Algo-devops-service*

go-algorand 3.2.1-stable: This stable version provides developers with a reliable foundation for building applications, incorporating important fixes and updates from previous iterations.

### [#3280](https://github.com/algorand/go-algorand/pull/3280) Falcon key gen time: set LastPartKeyRound 3K
**✅ Merged** | *@algonautshant*

Falcon key gen time: set LastPartKeyRound 3K: This change optimizes the key generation process, potentially improving performance for developers working with Falcon cryptography.

### [#6589](https://github.com/algorand/go-algorand/pull/6589) build: fix MacOS 14 SDK and XCode 16.x issue
**🔄 Open** | *@algorandskiy*

eval: split TestTransactionGroup from BlockEvaluator using TransactionGroupTester: This refactoring enhances the testing framework, allowing for more modular and efficient testing of transaction groups, which can lead to more robust applications.

### [#6597](https://github.com/algorand/go-algorand/pull/6597) CICD: update actions to use SLACK_WEBHOOK_URL
**🔄 Open** | *@onetechnical*

build: fix MacOS 14 SDK and XCode 16.x issue: This fix ensures compatibility with the latest MacOS and XCode versions, allowing developers to build and run their applications without compatibility issues.

### [#6588](https://github.com/algorand/go-algorand/pull/6588) API: Deal with params that are in deltas
**🔄 Open** | *@jannotti*

CICD: update actions to use SLACK_WEBHOOK_URL: This update streamlines continuous integration and deployment notifications, improving communication for developers during the development process.

### [#6600](https://github.com/algorand/go-algorand/pull/6600) AVM: Variable length branches
**🔄 Open** | *@jannotti*

API: Deal with params that are in deltas: This enhancement improves API functionality, enabling developers to better handle parameter changes, which can lead to more dynamic applications.

### [#6599](https://github.com/algorand/go-algorand/pull/6599) logging: use atomic logrus level accessors to prevent data races
**🔄 Open** | *@cce*

AVM: Variable length branches: Introducing variable length branches in the Algorand Virtual Machine (AVM) allows for more efficient code execution, benefiting developers by enabling more flexible programming constructs.

### [#2335](https://github.com/algorand/go-algorand/pull/2335) WIP: Call ParamsRound() to subtract from nextRound in mainLoop init
**🔄 Open** | *@cce*

logging: use atomic logrus level accessors to prevent data races: This change enhances logging reliability in concurrent environments, helping developers avoid potential data race issues during logging operations.

### [#6596](https://github.com/algorand/go-algorand/pull/6596) AVM: app_params_set, new box params, and "foreign" box opcodes
**🔄 Open** | *@jannotti*

WIP: Call ParamsRound() to subtract from nextRound in mainLoop init: This work-in-progress aims to refine the main loop initialization, potentially improving the overall efficiency of the Algorand protocol.

### [#6594](https://github.com/algorand/go-algorand/pull/6594) avm: fix teal disassembly for deadcode and enhance assembly support for scratch/frame opcodes
**🔄 Open** | *@nullun*

AVM: app_params_set, new box params, and "foreign" box opcodes: This update expands the capabilities of the AVM, allowing developers to utilize new features for application parameters and box operations, enhancing application functionality.

### [#6598](https://github.com/algorand/go-algorand/pull/6598) assembler: single-pass optimizeConstants using cumulative delta array
**🔄 Open** | *@jannotti*

avm: fix teal disassembly for deadcode and enhance assembly support for scratch/frame opcodes: This fix improves the disassembly process for TEAL code, aiding developers in debugging and optimizing their smart contracts.

### [#5720](https://github.com/algorand/go-algorand/pull/5720) catchup: state-proof-based catchup
**🔄 Open** | *@zeldovich*

assembler: single-pass optimizeConstants using cumulative delta array: This optimization improves the efficiency of constant handling in the assembler, benefiting developers by speeding up the compilation process.

### [#6595](https://github.com/algorand/go-algorand/pull/6595) chore: better error handling in fast catchup mode
**🔄 Open** | *@algorandskiy*

catchup: state-proof-based catchup: This new feature enhances the catchup process for nodes in the Algorand network, improving synchronization and reliability for developers running Algorand nodes.

### [#5943](https://github.com/algorand/go-algorand/pull/5943) eval: increase opcode budget with fee credit
**🔄 Open** | *@joe-p*

chore: better error handling in fast catchup mode: This improvement enhances the robustness of the fast catchup mode, allowing developers to more effectively handle errors during node synchronization.

### [#6524](https://github.com/algorand/go-algorand/pull/6524) Eval: Prioritize tipping groups
**❌ Closed** | *@jannotti*

eval: increase opcode budget with fee credit: This change allows developers to utilize a larger opcode budget when executing smart contracts, promoting more complex and feature-rich applications.

### [#3433](https://github.com/algorand/go-algorand/pull/3433) Creating clean branch / PR for audit
**❌ Closed** | *@jannotti*

dynamic lambda: current round awareness for AttachReceivedAt, AttachValidatedAt: This update enhances the functionality of dynamic lambdas, providing developers with better tools for managing round awareness in their applications.

### [#6586](https://github.com/algorand/go-algorand/pull/6586) chore: remove unused address reassignment in tests
**❌ Closed** | *@operagxoksana*

Creating clean branch / PR for audit: SKIP

### [#3243](https://github.com/algorand/go-algorand/pull/3243) DO NOT MERGE - go-algorand v3.2.0-beta
**❌ Closed** | *@onetechnical*

chore: remove unused address reassignment in tests: SKIP

### [#6400](https://github.com/algorand/go-algorand/pull/6400) Eval: Move congestion monitoring and fee escalation on-chain
**❌ Closed** | *@jannotti*

DO NOT MERGE - go-algorand v3.2.0-beta: SKIP

---

*Generated on 2026-04-06*
