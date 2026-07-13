# algorand/go-algorand Weekly Newsletter

**Week of 2026-07-06 to 2026-07-13**

## 📋 Executive Summary

In the past week, the Algorand Go repository saw notable development activity with 34 pull requests submitted, of which 12 were successfully merged, showcasing the team's ongoing efforts to enhance the platform. Key open pull requests include improvements to LogicSig with big arguments (#6664), advancements in delegated logic signatures (#6663), and the introduction of a structured approach for group signature fields in transactions (#6634). Additionally, there are important updates aimed at optimizing block assembly processes for non-elected accounts (#6631) and implementing windowed compression with zstd in the block database (#6627). With no new issues or discussions reported, the focus remains firmly on these enhancements, promising exciting developments for developers and users alike.

## 📊 Weekly Statistics

- **Pull Requests**: 34 (12 merged)
- **Issues**: 0 (0 closed)
- **Discussions**: 0

## 🔀 Pull Requests

### [#6655](https://github.com/algorand/go-algorand/pull/6655) catchup: log early exit reason at Info level
**✅ Merged** | *@cce*

#6655: This change improves logging by providing an early exit reason at the Info level, which can help developers diagnose issues more effectively during catchup operations.

### [#6649](https://github.com/algorand/go-algorand/pull/6649) eval: handle error in gload of a txn that didn't run a program
**✅ Merged** | *@cce*

#6649: This update enhances error handling during the gload process for transactions that didn't run a program, improving the robustness of transaction evaluations for users.

### [#6644](https://github.com/algorand/go-algorand/pull/6644) lint: convert interface{} => any
**✅ Merged** | *@cce*

#6644: This change modernizes the code by converting `interface{}` to `any`, making the codebase clearer and potentially reducing type-related errors for developers.

### [#6639](https://github.com/algorand/go-algorand/pull/6639) txn: native PQ accounts
**✅ Merged** | *@cusma*

#6639: This addition of native PQ accounts allows for more efficient and direct interactions with the Algorand network, benefiting developers working with transaction processing.

### [#6662](https://github.com/algorand/go-algorand/pull/6662) goal: don't fail asset info when the reserve holds nothing
**✅ Merged** | *@nullun*

#6662: This fix ensures that asset information retrieval does not fail when the reserve holds nothing, improving user experience and reliability in asset management.

### [#6596](https://github.com/algorand/go-algorand/pull/6596) AVM: app_params_set, new box params, and "foreign" box opcodes
**✅ Merged** | *@jannotti*

#6596: The introduction of new app parameters and box opcodes enhances the capabilities of the Algorand Virtual Machine (AVM), providing developers with more tools for application development.

### [#6637](https://github.com/algorand/go-algorand/pull/6637) transactions: allow large lsigs with size pricing
**✅ Merged** | *@giuliop*

#6637: Allowing large logic signatures with size pricing optimizes transaction processing, enabling developers to work with more complex smart contracts without performance penalties.

### [#6653](https://github.com/algorand/go-algorand/pull/6653) logic: add autosalt pragma
**✅ Merged** | *@giuliop*

#6653: The addition of the autosalt pragma provides developers with a new way to manage salt values in their logic, enhancing the security and flexibility of applications.

### [#6660](https://github.com/algorand/go-algorand/pull/6660) build: dependabot-7-8-26
**✅ Merged** | *@jannotti*

#6660: SKIP

### [#6652](https://github.com/algorand/go-algorand/pull/6652) network: harden DNS bootstrap resolution and surface failures
**✅ Merged** | *@nullun*

#6652: This hardening of DNS bootstrap resolution improves network reliability and security, ensuring that nodes can connect more reliably to the network.

### [#6657](https://github.com/algorand/go-algorand/pull/6657) tests: fix flaky TestPeeringWithIdentityChallenge
**✅ Merged** | *@algorandskiy*

#6657: SKIP

### [#6651](https://github.com/algorand/go-algorand/pull/6651) Chore: Remove dryrun and tealdbg
**✅ Merged** | *@jannotti*

#6651: SKIP

### [#6664](https://github.com/algorand/go-algorand/pull/6664) amv: LogicSig big args
**🔄 Open** | *@giuliop*

#6664: This open pull request aims to support large arguments in LogicSigs, which could enhance the flexibility and capability of smart contracts in future implementations.

### [#6663](https://github.com/algorand/go-algorand/pull/6663) avm: pq delegated lsig
**🔄 Open** | *@cusma*

#6663: This proposal for delegated LogicSigs in the AVM could enable more complex transaction structures, allowing developers to create more advanced functionalities.

### [#6634](https://github.com/algorand/go-algorand/pull/6634) txn: group signature fields into embedded struct
**🔄 Open** | *@nullun*

#6634: Grouping signature fields into an embedded struct simplifies the transaction data structure, improving code maintainability and readability for developers.

### [#6631](https://github.com/algorand/go-algorand/pull/6631) agreement: skip block assembly for accounts that are not elected
**🔄 Open** | *@nullun*

#6631: This change to skip block assembly for non-elected accounts can optimize performance by reducing unnecessary processing, benefiting overall network efficiency.

### [#6627](https://github.com/algorand/go-algorand/pull/6627) blockdb: add windowed compression with zstd
**🔄 Open** | *@cce*

#6627: The addition of windowed compression with zstd in blockdb could significantly reduce storage requirements and improve data retrieval speeds for developers working with large datasets.

### [#5637](https://github.com/algorand/go-algorand/pull/5637) ledger: increase locks granularity in lookupWithoutRewards
**🔄 Open** | *@algorandskiy*

#5637: Increasing lock granularity in the lookupWithoutRewards function enhances concurrency control, potentially improving performance in high-load scenarios for developers.

### [#5412](https://github.com/algorand/go-algorand/pull/5412) draft: test data race and postMessagesOfInterestThread
**🔄 Open** | *@algonautshant*

#5412: This draft aims to test for data races and ensure thread safety in postMessagesOfInterestThread, which is crucial for maintaining application stability.

### [#4953](https://github.com/algorand/go-algorand/pull/4953) write failed LogicSig and App TEAL trace to node.log
**🔄 Open** | *@brianolson*

#4953: This enhancement will write failed LogicSig and App TEAL traces to the node log, aiding developers in debugging and improving the reliability of their applications.

### [#6499](https://github.com/algorand/go-algorand/pull/6499) tests: use more realistic BlockEvaluator in ledger/ledger_test.go
**🔄 Open** | *@cce*

#6499: This update introduces a more realistic BlockEvaluator in tests, leading to more accurate testing scenarios and improving the reliability of ledger-related functionality.

### [#2335](https://github.com/algorand/go-algorand/pull/2335) WIP: Call ParamsRound() to subtract from nextRound in mainLoop init
**🔄 Open** | *@cce*

#2335: SKIP

### [#5424](https://github.com/algorand/go-algorand/pull/5424) WIP txHandler: do not rebroadcast to peers sent duplicate messages
**🔄 Open** | *@algorandskiy*

#5424: This work-in-progress aims to prevent duplicate message rebroadcasting to peers, which can enhance network efficiency and reduce unnecessary traffic.

### [#6659](https://github.com/algorand/go-algorand/pull/6659) tools: Remove more uses of reflection-based msgp encoding
**🔄 Open** | *@cce*

#6659: This ongoing effort to remove reflection-based msgp encoding can lead to performance improvements and increased type safety in the codebase.

### [#3925](https://github.com/algorand/go-algorand/pull/3925) crypto: Variable-time implementation of VRF verify
**🔄 Open** | *@fabrice102*

#3925: The implementation of a variable-time VRF verify function enhances security against timing attacks, making it more robust for cryptographic applications.

### [#6567](https://github.com/algorand/go-algorand/pull/6567) CICD: Build and package in GitHub Actions
**🔄 Open** | *@onetechnical*

#6567: This addition of GitHub Actions for build and packaging improves the CI/CD process, streamlining development workflows and enhancing deployment reliability.

### [#6661](https://github.com/algorand/go-algorand/pull/6661) build(deps): bump golang.org/x/crypto from 0.51.0 to 0.52.0 in /tools/debug/algodump
**🔄 Open** | *@dependabot[bot]*

#6661: Bumping the golang.org/x/crypto dependency updates cryptographic functionalities, potentially improving security and performance in the debug tools.

### [#6617](https://github.com/algorand/go-algorand/pull/6617) docs: Add more data to our langspec.json files
**🔄 Open** | *@iglosiggio*

#6617: SKIP

### [#5943](https://github.com/algorand/go-algorand/pull/5943) eval: increase opcode budget with fee credit
**❌ Closed** | *@joe-p*

#5943: SKIP

### [#6641](https://github.com/algorand/go-algorand/pull/6641) build(deps): bump github.com/quic-go/quic-go from 0.59.0 to 0.59.1 in /tools/block-generator
**❌ Closed** | *@dependabot[bot]*

#6641: SKIP

### [#6640](https://github.com/algorand/go-algorand/pull/6640) build(deps): bump github.com/quic-go/quic-go from 0.59.0 to 0.59.1 in /tools/debug/algodump
**❌ Closed** | *@dependabot[bot]*

#6640: SKIP

### [#6656](https://github.com/algorand/go-algorand/pull/6656) build(deps): bump golang.org/x/net from 0.49.0 to 0.55.0 in /tools/debug/algodump
**❌ Closed** | *@dependabot[bot]*

#6656: SKIP

### [#6648](https://github.com/algorand/go-algorand/pull/6648) build(deps): bump github.com/quic-go/quic-go from 0.59.0 to 0.59.1
**❌ Closed** | *@dependabot[bot]*

#6648: SKIP

### [#6658](https://github.com/algorand/go-algorand/pull/6658) build(deps): bump golang.org/x/net from 0.49.0 to 0.55.0
**❌ Closed** | *@dependabot[bot]*

#6658: SKIP

---

*Generated on 2026-07-13*
