# algorand/go-algorand Weekly Newsletter

**Week of 2026-06-15 to 2026-06-22**

## 📋 Executive Summary

In the past week, the Algorand Go repository experienced notable activity with 31 pull requests, of which 6 were merged, and 1 new issue was opened. Key ongoing development includes significant enhancements such as support for larger logic signatures in #6637, an update to the quic-go dependency in #6640, and the introduction of windowed compression with zstd in #6627. Additionally, there are discussions around optimizing block assembly processes for non-elected accounts in #6631 and exploring native payment queue accounts in #6639. One important issue, #6632, seeks to introduce a pragma directive for managing assembler autosalt behavior. Overall, the team continues to push forward with impactful improvements and optimizations, fostering a robust development environment for Algorand.

## 📊 Weekly Statistics

- **Pull Requests**: 31 (6 merged)
- **Issues**: 1 (0 closed)
- **Discussions**: 0

## 🔀 Pull Requests

### [#6638](https://github.com/algorand/go-algorand/pull/6638) Build: locate e2e test binaries via `go env`, not $GOPATH
**✅ Merged** | *@jannotti*

#6638: This change allows developers to locate end-to-end test binaries using `go env`, streamlining the build process and reducing dependency on the `$GOPATH` environment variable.

### [#6649](https://github.com/algorand/go-algorand/pull/6649) eval: handle error in gload of a txn that didn't run a program
**✅ Merged** | *@cce*

#6649: This update improves error handling in the evaluation of transactions that did not execute a program, enhancing the robustness of the evaluation process for developers.

### [#6647](https://github.com/algorand/go-algorand/pull/6647) tools: bump msgp to v1.1.63
**✅ Merged** | *@cce*

#6647: SKIP

### [#6646](https://github.com/algorand/go-algorand/pull/6646) go-algorand 4.7.3-beta Release PR
**✅ Merged** | *@onetechnical*

#6646: The release of go-algorand 4.7.3-beta introduces new features and improvements, providing developers with the latest enhancements for building applications on the Algorand platform.

### [#6645](https://github.com/algorand/go-algorand/pull/6645) CICD: go-algorand relstable4.7.3-remerge mergeback
**✅ Merged** | *@onetechnical*

#6645: SKIP

### [#6628](https://github.com/algorand/go-algorand/pull/6628) chore: ensure heartbeat lsig is an invalid ed25519 point
**✅ Merged** | *@cusma*

#6628: This change ensures that heartbeat logic signatures (lsigs) are invalid ed25519 points, which enhances security by preventing the use of invalid signatures in the system.

### [#6637](https://github.com/algorand/go-algorand/pull/6637) transactions: allow large lsigs with size pricing
**🔄 Open** | *@giuliop*

#6637: This proposal aims to allow larger logic signatures (lsigs) with size-based pricing, potentially improving flexibility for developers working with complex transactions.

### [#6640](https://github.com/algorand/go-algorand/pull/6640) build(deps): bump github.com/quic-go/quic-go from 0.59.0 to 0.59.1 in /tools/debug/algodump
**🔄 Open** | *@dependabot[bot]*

#6640: Bumping the quic-go dependency version improves performance and stability in the algodump tool, benefiting developers who utilize this tool for debugging.

### [#6639](https://github.com/algorand/go-algorand/pull/6639) txn: native PQ accounts
**🔄 Open** | *@cusma*

#6639: This proposal introduces native participation quorum (PQ) accounts, which could enhance transaction capabilities for developers working with Algorand's account system.

### [#6631](https://github.com/algorand/go-algorand/pull/6631) agreement: skip block assembly for accounts that are not elected
**🔄 Open** | *@nullun*

#6631: This change aims to skip block assembly for accounts that are not elected, optimizing the agreement process and improving efficiency for developers.

### [#6627](https://github.com/algorand/go-algorand/pull/6627) blockdb: add windowed compression with zstd
**🔄 Open** | *@cce*

#6627: This proposal adds windowed compression using zstd to block database operations, which could significantly improve performance and storage efficiency for developers.

### [#6636](https://github.com/algorand/go-algorand/pull/6636) API: Big transactions simulate fee usage
**🔄 Open** | *@jannotti*

#6636: This change allows for the simulation of fee usage for large transactions in the API, providing developers with better insights into transaction costs and behavior.

### [#6634](https://github.com/algorand/go-algorand/pull/6634) txn: group signature fields into embedded struct
**🔄 Open** | *@nullun*

#6634: This update groups signature fields into an embedded struct within transactions, improving code organization and potentially simplifying transaction handling for developers.

### [#6641](https://github.com/algorand/go-algorand/pull/6641) build(deps): bump github.com/quic-go/quic-go from 0.59.0 to 0.59.1 in /tools/block-generator
**🔄 Open** | *@dependabot[bot]*

#6641: SKIP

### [#5637](https://github.com/algorand/go-algorand/pull/5637) ledger: increase locks granularity in lookupWithoutRewards
**🔄 Open** | *@algorandskiy*

#5637: This proposal increases the granularity of locks in the lookupWithoutRewards function, which may enhance performance and concurrency handling for developers.

### [#6592](https://github.com/algorand/go-algorand/pull/6592) avm: auto-salt TEAL v13 programs to avoid on-curve LogicSig hashes
**🔄 Open** | *@giuliop*

#6592: This change introduces auto-salting for TEAL v13 programs to avoid on-curve LogicSig hashes, enhancing security and robustness for developers working with smart contracts.

### [#6499](https://github.com/algorand/go-algorand/pull/6499) tests: use more realistic BlockEvaluator in ledger/ledger_test.go
**🔄 Open** | *@cce*

#6499: This update enhances the test suite by using a more realistic BlockEvaluator, improving the reliability of tests in the ledger module for developers.

### [#2335](https://github.com/algorand/go-algorand/pull/2335) WIP: Call ParamsRound() to subtract from nextRound in mainLoop init
**🔄 Open** | *@cce*

#2335: SKIP

### [#4953](https://github.com/algorand/go-algorand/pull/4953) write failed LogicSig and App TEAL trace to node.log
**🔄 Open** | *@brianolson*

#4953: This proposal aims to write failed LogicSig and App TEAL traces to the node log, improving debugging capabilities for developers by providing more detailed error information.

### [#5424](https://github.com/algorand/go-algorand/pull/5424) WIP txHandler: do not rebroadcast to peers sent duplicate messages
**🔄 Open** | *@algorandskiy*

#5424: This change prevents duplicate message rebroadcasting to peers, which can help optimize network efficiency and reduce unnecessary load for developers.

### [#3925](https://github.com/algorand/go-algorand/pull/3925) crypto: Variable-time implementation of VRF verify
**🔄 Open** | *@fabrice102*

#3925: This proposal implements a variable-time approach to VRF verification, potentially enhancing security and performance for cryptographic operations in the system.

### [#5412](https://github.com/algorand/go-algorand/pull/5412) draft: test data race and postMessagesOfInterestThread
**🔄 Open** | *@algonautshant*

#5412: This draft aims to test data races and the postMessagesOfInterestThread, improving the reliability and stability of concurrent operations for developers.

### [#4976](https://github.com/algorand/go-algorand/pull/4976) agreement: don't attempt to make proposal if no particating accounts
**🔄 Open** | *@cce*

#4976: This change prevents proposals from being made if there are no participating accounts, enhancing the agreement process's efficiency and correctness for developers.

### [#6567](https://github.com/algorand/go-algorand/pull/6567) CICD: Build and package in GitHub Actions
**🔄 Open** | *@onetechnical*

#6567: This proposal introduces building and packaging in GitHub Actions, streamlining the CI/CD process and improving development workflows for developers.

### [#6648](https://github.com/algorand/go-algorand/pull/6648) build(deps): bump github.com/quic-go/quic-go from 0.59.0 to 0.59.1
**🔄 Open** | *@dependabot[bot]*

#6648: SKIP

### [#6596](https://github.com/algorand/go-algorand/pull/6596) AVM: app_params_set, new box params, and "foreign" box opcodes
**🔄 Open** | *@jannotti*

#6596: This change introduces new application parameters, box parameters, and "foreign" box opcodes in the AVM, expanding the functionality available to developers for building smart contracts.

### [#6624](https://github.com/algorand/go-algorand/pull/6624) build(deps): bump github.com/ipld/go-ipld-prime from 0.22.0 to 0.23.0 in /tools/block-generator
**❌ Closed** | *@dependabot[bot]*

#6624: SKIP

### [#6625](https://github.com/algorand/go-algorand/pull/6625) build(deps): bump github.com/ipld/go-ipld-prime from 0.22.0 to 0.23.0
**❌ Closed** | *@dependabot[bot]*

#6625: SKIP

### [#6626](https://github.com/algorand/go-algorand/pull/6626) build(deps): bump github.com/ipld/go-ipld-prime from 0.22.0 to 0.23.0 in /tools/debug/algodump
**❌ Closed** | *@dependabot[bot]*

#6626: SKIP

### [#6642](https://github.com/algorand/go-algorand/pull/6642) transactions: reject heartbeat transactions with missing fields
**❌ Closed** | *@Curtis-D*

#6642: This change rejects heartbeat transactions that have missing fields, enhancing the integrity of transaction processing and ensuring that only valid transactions are accepted.

### [#6540](https://github.com/algorand/go-algorand/pull/6540) build(deps): bump github.com/quic-go/quic-go from 0.49.1 to 0.57.0
**❌ Closed** | *@dependabot[bot]*

#6540: SKIP

---

*Generated on 2026-06-22*
