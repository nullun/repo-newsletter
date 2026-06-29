# algorand/go-algorand Weekly Newsletter

**Week of 2026-06-22 to 2026-06-29**

## 📋 Executive Summary

In the past week, the Algorand Go repository has seen notable activity with 21 pull requests, of which 3 have been successfully merged. Key developments include ongoing work on enhancing DNS bootstrap resolution (#6652), the introduction of native PQ accounts (#6639), and the addition of an autosalt pragma to the logic layer (#6653). Additionally, there's a focus on improving CI/CD processes with a new build and packaging workflow in GitHub Actions (#6567), and a proposal to optimize block assembly by skipping non-elected accounts (#6631). It's a vibrant week for contributors as discussions remain open, though no new issues have been raised.

## 📊 Weekly Statistics

- **Pull Requests**: 21 (3 merged)
- **Issues**: 0 (0 closed)
- **Discussions**: 0

## 🔀 Pull Requests

### [#6650](https://github.com/algorand/go-algorand/pull/6650) Fees: Handle rounding of fees with non-integral usage better
**✅ Merged** | *@jannotti*

#6650: This change improves the handling of fee calculations, ensuring that fees are rounded more accurately during non-integral usage, which can lead to better user experience and cost management for developers dealing with transaction fees.  

### [#6592](https://github.com/algorand/go-algorand/pull/6592) avm: auto-salt TEAL v13 programs to avoid on-curve LogicSig hashes
**✅ Merged** | *@giuliop*

#6592: By auto-salting TEAL v13 programs, this update helps prevent on-curve LogicSig hash collisions, enhancing security for developers using these programs.  

### [#6636](https://github.com/algorand/go-algorand/pull/6636) API: Big transactions simulate fee usage
**✅ Merged** | *@jannotti*

#6636: This update allows the simulation of big transactions to account for fee usage, enabling developers to better predict costs and optimize their transaction strategies.  

### [#6652](https://github.com/algorand/go-algorand/pull/6652) network: harden DNS bootstrap resolution and surface failures
**🔄 Open** | *@nullun*

#6652: This ongoing change aims to strengthen DNS bootstrap resolution, which is crucial for network reliability, helping developers avoid disruptions in service due to resolution failures.  

### [#6639](https://github.com/algorand/go-algorand/pull/6639) txn: native PQ accounts
**🔄 Open** | *@cusma*

#6639: This feature introduces native PQ (Post-Quantum) accounts, allowing developers to adopt more secure account types in anticipation of future cryptographic challenges.  

### [#6653](https://github.com/algorand/go-algorand/pull/6653) logic: add autosalt pragma
**🔄 Open** | *@giuliop*

#6653: The addition of an autosalt pragma simplifies the process of managing salt values in smart contracts, making it easier for developers to enhance security in their applications.  

### [#6567](https://github.com/algorand/go-algorand/pull/6567) CICD: Build and package in GitHub Actions
**🔄 Open** | *@onetechnical*

#6567: Implementing CI/CD with GitHub Actions streamlines the build and packaging process, increasing efficiency and reliability for developers working on the project.  

### [#6631](https://github.com/algorand/go-algorand/pull/6631) agreement: skip block assembly for accounts that are not elected
**🔄 Open** | *@nullun*

#6631: This change optimizes block assembly by skipping unnecessary operations for non-elected accounts, improving performance and resource usage for developers.  

### [#6627](https://github.com/algorand/go-algorand/pull/6627) blockdb: add windowed compression with zstd
**🔄 Open** | *@cce*

#6627: Introducing windowed compression with zstd enhances data storage efficiency in block databases, benefiting developers by reducing storage costs and improving access times.  

### [#6641](https://github.com/algorand/go-algorand/pull/6641) build(deps): bump github.com/quic-go/quic-go from 0.59.0 to 0.59.1 in /tools/block-generator
**🔄 Open** | *@dependabot[bot]*

#6641: SKIP  

### [#6637](https://github.com/algorand/go-algorand/pull/6637) transactions: allow large lsigs with size pricing
**🔄 Open** | *@giuliop*

#6637: This update allows larger LogicSignatures (lsigs) while considering size pricing, providing developers with greater flexibility in crafting complex transactions.  

### [#6634](https://github.com/algorand/go-algorand/pull/6634) txn: group signature fields into embedded struct
**🔄 Open** | *@nullun*

#6634: Grouping signature fields into an embedded struct simplifies transaction management, making it easier for developers to work with transaction signatures.  

### [#4953](https://github.com/algorand/go-algorand/pull/4953) write failed LogicSig and App TEAL trace to node.log
**🔄 Open** | *@brianolson*

#4953: This feature improves debugging by logging failed LogicSig and App TEAL traces, aiding developers in troubleshooting issues more effectively.  

### [#6640](https://github.com/algorand/go-algorand/pull/6640) build(deps): bump github.com/quic-go/quic-go from 0.59.0 to 0.59.1 in /tools/debug/algodump
**🔄 Open** | *@dependabot[bot]*

#6640: SKIP  

### [#6596](https://github.com/algorand/go-algorand/pull/6596) AVM: app_params_set, new box params, and "foreign" box opcodes
**🔄 Open** | *@jannotti*

#6596: The introduction of new box parameters and foreign box opcodes enhances the functionality of the AVM, allowing developers to create more complex applications.  

### [#5412](https://github.com/algorand/go-algorand/pull/5412) draft: test data race and postMessagesOfInterestThread
**🔄 Open** | *@algonautshant*

#5412: SKIP  

### [#6499](https://github.com/algorand/go-algorand/pull/6499) tests: use more realistic BlockEvaluator in ledger/ledger_test.go
**🔄 Open** | *@cce*

#6499: This update utilizes a more realistic BlockEvaluator in tests, improving the accuracy of ledger testing and helping developers ensure their code behaves as expected.  

### [#2335](https://github.com/algorand/go-algorand/pull/2335) WIP: Call ParamsRound() to subtract from nextRound in mainLoop init
**🔄 Open** | *@cce*

#2335: SKIP  

### [#5424](https://github.com/algorand/go-algorand/pull/5424) WIP txHandler: do not rebroadcast to peers sent duplicate messages
**🔄 Open** | *@algorandskiy*

#5424: This work-in-progress change prevents the rebroadcasting of duplicate messages to peers, optimizing network efficiency and reducing unnecessary load for developers.  

### [#3925](https://github.com/algorand/go-algorand/pull/3925) crypto: Variable-time implementation of VRF verify
**🔄 Open** | *@fabrice102*

#3925: The implementation of a variable-time VRF verify enhances security by mitigating timing attacks, providing developers with a more secure cryptographic function.  

### [#6651](https://github.com/algorand/go-algorand/pull/6651) Chore: Remove dryrun and tealdbg
**🔄 Open** | *@jannotti*

#6651: This chore removes outdated features like dryrun and tealdbg, streamlining the codebase and allowing developers to focus on more relevant tools and functionalities.  

---

*Generated on 2026-06-29*
