# algorand/go-algorand Weekly Newsletter

**Week of 2026-07-20 to 2026-07-27**

## 📋 Executive Summary

In the past week, the Algorand Go repository has seen significant activity with 38 pull requests submitted, of which 10 have been successfully merged, indicating a robust development pace. Notably, open pull requests include enhancements such as the addition of windowed compression with zstd (#6627) and clarifications in documentation concerning MiMC and Poseidon2 input requirements (#6680). Additionally, there are ongoing efforts to address data races and improve testing with PR #5412, while work-in-progress items like #2335 aim to refine the main loop initialization process. Overall, the absence of new issues suggests a stable environment, allowing developers and users to focus on the continuous improvement and optimization of Algorand's functionalities.

## 📊 Weekly Statistics

- **Pull Requests**: 38 (10 merged)
- **Issues**: 0 (0 closed)
- **Discussions**: 0

## 🔀 Pull Requests

### [#6679](https://github.com/algorand/go-algorand/pull/6679) config: auto-shorten proto upgrades for fnet
**✅ Merged** | *@tasosbit*

#6679: SKIP  

### [#6676](https://github.com/algorand/go-algorand/pull/6676) sortition: f128 followups
**✅ Merged** | *@nullun*

#6676: SKIP  

### [#6675](https://github.com/algorand/go-algorand/pull/6675) FNet: add fnet1..4 consensus versions, genesis, and docker
**✅ Merged** | *@tasosbit*

#6675: This pull request introduces new consensus versions for FNet, along with the necessary genesis and Docker configurations, which will enhance the system's capability to handle multiple consensus protocols.  

### [#6672](https://github.com/algorand/go-algorand/pull/6672) sortition: use SelectF128
**✅ Merged** | *@cce*

#6672: This change updates the sortition mechanism to utilize SelectF128, improving the efficiency and accuracy of random selection processes within the network.  

### [#6670](https://github.com/algorand/go-algorand/pull/6670) tests: fix verify tests after remerge
**✅ Merged** | *@algorandskiy*

#6670: SKIP  

### [#6628](https://github.com/algorand/go-algorand/pull/6628) chore: ensure heartbeat lsig is an invalid ed25519 point
**✅ Merged** | *@cusma*

#6628: This update ensures that the heartbeat logic signature is validated against invalid points, enhancing security and robustness in transaction processing.  

### [#6668](https://github.com/algorand/go-algorand/pull/6668) go-algorand 4.7.4-beta Release PR
**✅ Merged** | *@onetechnical*

#6668: The release of go-algorand 4.7.4-beta includes various improvements and fixes, providing developers with a more stable and feature-rich version for development and testing.  

### [#6667](https://github.com/algorand/go-algorand/pull/6667) CICD: go-algorand relstable4.7.4-remerge mergeback
**✅ Merged** | *@onetechnical*

#6667: SKIP  

### [#6669](https://github.com/algorand/go-algorand/pull/6669) falcon: sign ToBeHashed, not Hashed
**✅ Merged** | *@cce*

#6669: This change corrects the signing process to ensure that the data being hashed is accurate, which is crucial for maintaining the integrity of cryptographic operations.  

### [#6666](https://github.com/algorand/go-algorand/pull/6666) Txn: Make challenge discount explicit in HeartbeatTransaction
**✅ Merged** | *@jannotti*

#6666: This update makes the challenge discount explicit in HeartbeatTransaction, improving transparency and understanding of transaction costs in the heartbeat process.  

### [#6627](https://github.com/algorand/go-algorand/pull/6627) blockdb: add windowed compression with zstd
**🔄 Open** | *@cce*

#6627: The addition of windowed compression with zstd in blockdb aims to optimize storage efficiency and access speed, potentially leading to better performance in data retrieval.  

### [#6680](https://github.com/algorand/go-algorand/pull/6680)  docs: clarify MiMC, Poseidon2 input requirements
**🔄 Open** | *@giuliop*

#6680: SKIP  

### [#5412](https://github.com/algorand/go-algorand/pull/5412) draft: test data race and postMessagesOfInterestThread
**🔄 Open** | *@algonautshant*

#5412: SKIP  

### [#2335](https://github.com/algorand/go-algorand/pull/2335) WIP: Call ParamsRound() to subtract from nextRound in mainLoop init
**🔄 Open** | *@cce*

#2335: SKIP  

### [#6671](https://github.com/algorand/go-algorand/pull/6671) tests: network tags test fix
**🔄 Open** | *@algorandskiy*

#6671: This pull request fixes network tags tests, ensuring that network-related functionalities are accurately validated and enhancing overall test reliability.  

### [#6678](https://github.com/algorand/go-algorand/pull/6678) build(deps): bump golang.org/x/crypto from 0.51.0 to 0.52.0 in /tools/block-generator
**🔄 Open** | *@dependabot[bot]*

#6678: SKIP  

### [#6677](https://github.com/algorand/go-algorand/pull/6677) Version: Promote vFuture as v42
**🔄 Open** | *@jannotti*

#6677: This change promotes vFuture as v42, which may indicate significant updates or features that developers should be aware of for compatibility and planning.  

### [#5424](https://github.com/algorand/go-algorand/pull/5424) WIP txHandler: do not rebroadcast to peers sent duplicate messages
**🔄 Open** | *@algorandskiy*

#5424: This work-in-progress aims to prevent the rebroadcasting of duplicate messages to peers, which can enhance network efficiency and reduce unnecessary traffic.  

### [#6674](https://github.com/algorand/go-algorand/pull/6674) API: Add `GET /v2/node/peers` endpoint and `goal node peers` command
**🔄 Open** | *@nullun*

#6674: The addition of the `GET /v2/node/peers` API endpoint and `goal node peers` command will provide users with better visibility into peer connections, facilitating network management.  

### [#6673](https://github.com/algorand/go-algorand/pull/6673) CI: try 386 tests
**🔄 Open** | *@cce*

#6673: SKIP  

### [#4953](https://github.com/algorand/go-algorand/pull/4953) write failed LogicSig and App TEAL trace to node.log
**🔄 Open** | *@brianolson*

#4953: This pull request will enhance debugging by writing failed LogicSig and App TEAL traces to the node log, aiding developers in troubleshooting issues.  

### [#6659](https://github.com/algorand/go-algorand/pull/6659) tools: Remove more uses of reflection-based msgp encoding
**🔄 Open** | *@cce*

#6659: SKIP  

### [#6634](https://github.com/algorand/go-algorand/pull/6634) txn: group signature fields into embedded struct
**🔄 Open** | *@nullun*

#6634: This change groups signature fields into an embedded struct, improving code organization and potentially enhancing performance in transaction processing.  

### [#4913](https://github.com/algorand/go-algorand/pull/4913) performance: Speculative block assembly into master
**🔄 Open** | *@algorandskiy*

#4913: This proposal aims to implement speculative block assembly into the master branch, which could lead to performance improvements in block creation and validation.  

### [#6500](https://github.com/algorand/go-algorand/pull/6500) Algod API: Get connected peers
**🔄 Open** | *@agodnic*

#6500: The Algod API update to retrieve connected peers will enhance network diagnostics and monitoring, providing developers with valuable insights into peer interactions.  

### [#6661](https://github.com/algorand/go-algorand/pull/6661) build(deps): bump golang.org/x/crypto from 0.51.0 to 0.52.0 in /tools/debug/algodump
**🔄 Open** | *@dependabot[bot]*

#6661: SKIP  

### [#3925](https://github.com/algorand/go-algorand/pull/3925) crypto: Variable-time implementation of VRF verify
**🔄 Open** | *@fabrice102*

#3925: This pull request introduces a variable-time implementation of VRF verification, which can enhance security against timing attacks in cryptographic operations.  

### [#4976](https://github.com/algorand/go-algorand/pull/4976) agreement: don't attempt to make proposal if no particating accounts
**🔄 Open** | *@cce*

#4976: This change prevents proposals from being made when there are no participating accounts, ensuring that the consensus mechanism operates correctly and efficiently.  

### [#4615](https://github.com/algorand/go-algorand/pull/4615) Ledger: Correct off by one logic in txTail.recent trim loop
**🔄 Open** | *@AlgoAxel*

#4615: This fix addresses an off-by-one logic error in the transaction tail trimming process, improving the accuracy of transaction management in the ledger.  

### [#5120](https://github.com/algorand/go-algorand/pull/5120) Specblockasm
**🔄 Open** | *@brianolson*

#5120: SKIP  

### [#5249](https://github.com/algorand/go-algorand/pull/5249) perf: performance test for async vote verification
**🔄 Open** | *@algonautshant*

#5249: This performance test for asynchronous vote verification aims to evaluate and improve the efficiency of the voting process within the consensus mechanism.  

### [#5341](https://github.com/algorand/go-algorand/pull/5341) bug: panic when a vote verification task added while shutting down the agreement service
**🔄 Open** | *@algonautshant*

#5341: This fix addresses a panic issue when adding a vote verification task during the shutdown of the agreement service, enhancing the stability of the system.  

### [#5637](https://github.com/algorand/go-algorand/pull/5637) ledger: increase locks granularity in lookupWithoutRewards
**🔄 Open** | *@algorandskiy*

#5637: This update increases the granularity of locks in the lookupWithoutRewards function, potentially improving performance and concurrency in ledger operations.  

### [#5720](https://github.com/algorand/go-algorand/pull/5720) catchup: state-proof-based catchup
**🔄 Open** | *@zeldovich*

#5720: The implementation of state-proof-based catchup will improve the efficiency and reliability of the catchup process in the network, enhancing overall system robustness.  

### [#6270](https://github.com/algorand/go-algorand/pull/6270) AVM: Optimizations and Extensions of Bytes math
**🔄 Open** | *@jannotti*

#6270: This pull request introduces optimizations and extensions for byte math in the AVM, which can lead to better performance and capabilities in smart contract execution.  

### [#6298](https://github.com/algorand/go-algorand/pull/6298) Afrz: ASA Global Freeze
**🔄 Open** | *@nullun*

#6298: The ASA Global Freeze feature will allow for enhanced control over asset management within the network, providing users with more robust options for asset governance.  

### [#6501](https://github.com/algorand/go-algorand/pull/6501) network: consensus traffic via pubsub
**🔄 Open** | *@algorandskiy*

#6501: This change enables consensus traffic to utilize pubsub mechanisms, which may improve communication efficiency and responsiveness within the network.  

### [#6499](https://github.com/algorand/go-algorand/pull/6499) tests: use more realistic BlockEvaluator in ledger/ledger_test.go
**🔄 Open** | *@cce*

#6499: This update enhances the ledger tests by employing a more realistic BlockEvaluator, which will improve the reliability and accuracy of ledger-related testing.  

---

*Generated on 2026-07-27*
