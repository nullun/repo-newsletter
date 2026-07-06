# algorand/go-algorand Weekly Newsletter

**Week of 2026-06-29 to 2026-07-06**

## 📋 Executive Summary

In the past week, the Algorand Go repository saw a notable increase in activity with a total of 21 pull requests submitted, including a significant one related to the AVM that introduces new box parameters and opcodes (#6596). Other key open pull requests address various enhancements, such as improvements to transaction handling with native PQ accounts (#6639) and optimizing agreement processes by skipping block assembly for non-elected accounts (#6631). Despite the surge in pull requests, there were no new issues or discussions logged this week. Overall, the team is actively working on refining the platform, and developers are encouraged to review these ongoing contributions.

## 📊 Weekly Statistics

- **Pull Requests**: 21 (1 merged)
- **Issues**: 0 (0 closed)
- **Discussions**: 0

## 🔀 Pull Requests

### [#6654](https://github.com/algorand/go-algorand/pull/6654) network: avoid panic on invalid fallback DNS resolver
**✅ Merged** | *@nullun*

#6654: This change prevents the application from crashing when it encounters an invalid fallback DNS resolver, enhancing the stability and reliability of the network component for developers and users.  

### [#6596](https://github.com/algorand/go-algorand/pull/6596) AVM: app_params_set, new box params, and "foreign" box opcodes
**🔄 Open** | *@jannotti*

#6596: The introduction of new box parameters and opcodes for foreign boxes allows developers to expand functionality and improve interoperability with external applications.  

### [#6639](https://github.com/algorand/go-algorand/pull/6639) txn: native PQ accounts
**🔄 Open** | *@cusma*

#6639: Implementing native PQ accounts will streamline the transaction process for developers, potentially improving performance and user experience.  

### [#6634](https://github.com/algorand/go-algorand/pull/6634) txn: group signature fields into embedded struct
**🔄 Open** | *@nullun*

#6634: Grouping signature fields into an embedded struct simplifies the code structure, making it easier for developers to manage and understand transaction signatures.  

### [#6631](https://github.com/algorand/go-algorand/pull/6631) agreement: skip block assembly for accounts that are not elected
**🔄 Open** | *@nullun*

#6631: Skipping block assembly for non-elected accounts optimizes the agreement process, potentially reducing resource usage and improving efficiency for the network.  

### [#6641](https://github.com/algorand/go-algorand/pull/6641) build(deps): bump github.com/quic-go/quic-go from 0.59.0 to 0.59.1 in /tools/block-generator
**🔄 Open** | *@dependabot[bot]*

#6641: Updating the quic-go dependency in the block generator ensures that developers benefit from the latest features and fixes, enhancing the tool's performance.  

### [#6640](https://github.com/algorand/go-algorand/pull/6640) build(deps): bump github.com/quic-go/quic-go from 0.59.0 to 0.59.1 in /tools/debug/algodump
**🔄 Open** | *@dependabot[bot]*

#6640: Similar to #6641, this update to the quic-go dependency in the algodump tool brings improvements and optimizations that developers can leverage.  

### [#6627](https://github.com/algorand/go-algorand/pull/6627) blockdb: add windowed compression with zstd
**🔄 Open** | *@cce*

#6627: Adding windowed compression with zstd can significantly improve storage efficiency and performance for block database operations, benefiting both developers and users.  

### [#6656](https://github.com/algorand/go-algorand/pull/6656) build(deps): bump golang.org/x/net from 0.49.0 to 0.55.0 in /tools/debug/algodump
**🔄 Open** | *@dependabot[bot]*

#6656: Bumping the golang.net dependency provides access to newer features and bug fixes, ensuring that the algodump tool remains up-to-date and secure.  

### [#6637](https://github.com/algorand/go-algorand/pull/6637) transactions: allow large lsigs with size pricing
**🔄 Open** | *@giuliop*

#6637: Allowing larger LogicSignatures (lsigs) with size pricing offers developers more flexibility in transaction design, potentially enhancing user capabilities.  

### [#6653](https://github.com/algorand/go-algorand/pull/6653) logic: add autosalt pragma
**🔄 Open** | *@giuliop*

#6653: The addition of the autosalt pragma simplifies salt management in logic scripts, making it easier for developers to write secure and efficient code.  

### [#4953](https://github.com/algorand/go-algorand/pull/4953) write failed LogicSig and App TEAL trace to node.log
**🔄 Open** | *@brianolson*

#4953: Logging failed LogicSig and App TEAL traces will aid developers in debugging and troubleshooting, improving overall development efficiency.  

### [#6655](https://github.com/algorand/go-algorand/pull/6655) catchup: log early exit reason at Info level
**🔄 Open** | *@cce*

#6655: Logging early exit reasons at the Info level enhances transparency and aids in diagnosing issues during the catchup process for developers.  

### [#6651](https://github.com/algorand/go-algorand/pull/6651) Chore: Remove dryrun and tealdbg
**🔄 Open** | *@jannotti*

#6651: SKIP  

### [#5412](https://github.com/algorand/go-algorand/pull/5412) draft: test data race and postMessagesOfInterestThread
**🔄 Open** | *@algonautshant*

#5412: SKIP  

### [#3925](https://github.com/algorand/go-algorand/pull/3925) crypto: Variable-time implementation of VRF verify
**🔄 Open** | *@fabrice102*

#3925: The implementation of a variable-time VRF verify enhances cryptographic security, which is crucial for developers focusing on secure applications.  

### [#6499](https://github.com/algorand/go-algorand/pull/6499) tests: use more realistic BlockEvaluator in ledger/ledger_test.go
**🔄 Open** | *@cce*

#6499: Using a more realistic BlockEvaluator in tests improves the reliability of test outcomes, helping developers ensure their code behaves as expected in real-world scenarios.  

### [#2335](https://github.com/algorand/go-algorand/pull/2335) WIP: Call ParamsRound() to subtract from nextRound in mainLoop init
**🔄 Open** | *@cce*

#2335: SKIP  

### [#4018](https://github.com/algorand/go-algorand/pull/4018) REST API: add support for optional "round" parameter to lookup queries
**🔄 Open** | *@cce*

#4018: Adding support for an optional "round" parameter in REST API lookup queries enhances flexibility for developers, allowing for more tailored data retrieval.  

### [#5424](https://github.com/algorand/go-algorand/pull/5424) WIP txHandler: do not rebroadcast to peers sent duplicate messages
**🔄 Open** | *@algorandskiy*

#5424: Preventing the rebroadcasting of duplicate messages to peers improves network efficiency and reduces unnecessary load, benefiting both developers and users.  

### [#6652](https://github.com/algorand/go-algorand/pull/6652) network: harden DNS bootstrap resolution and surface failures
**🔄 Open** | *@nullun*

#6652: Hardening DNS bootstrap resolution and surfacing failures improves the robustness of network connections, leading to a more reliable experience for users.  

---

*Generated on 2026-07-06*
