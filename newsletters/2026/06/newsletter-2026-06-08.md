# algorand/go-algorand Weekly Newsletter

**Week of 2026-06-01 to 2026-06-08**

## 📋 Executive Summary

In the past week, the Algorand Go repository saw a total of 14 pull requests, with 2 successfully merged, reflecting ongoing development efforts. Notable open pull requests include enhancements to transaction handling, such as rejecting heartbeat transactions with missing fields (#6642) and work on native PQ accounts (#6639). Additionally, there are improvements aimed at the build process, including locating end-to-end test binaries more effectively (#6638) and updating dependencies in the block generator tool (#6641). Currently, no new issues or discussions have been reported, indicating a stable week for the project.

## 📊 Weekly Statistics

- **Pull Requests**: 14 (2 merged)
- **Issues**: 0 (0 closed)
- **Discussions**: 0

## 🔀 Pull Requests

### [#6635](https://github.com/algorand/go-algorand/pull/6635) crypto: use batch verification for OneTimeSignature (votes, heartbeats)
**✅ Merged** | *@cce*

#6635: This change improves the efficiency of verifying OneTimeSignatures, which can enhance performance in applications relying on votes and heartbeats, ultimately benefiting developers and users through faster transaction processing.

### [#6633](https://github.com/algorand/go-algorand/pull/6633) goal: add empty refs flag
**✅ Merged** | *@nullun*

#6633: The addition of an empty refs flag allows developers to manage references more effectively, providing greater control in scenarios where no references are needed, which can simplify certain operations.

### [#2335](https://github.com/algorand/go-algorand/pull/2335) WIP: Call ParamsRound() to subtract from nextRound in mainLoop init
**🔄 Open** | *@cce*

#2335: This work-in-progress pull request aims to adjust the main loop initialization by calling ParamsRound(), which could lead to improved performance and reliability in the system's operational flow once completed.

### [#6639](https://github.com/algorand/go-algorand/pull/6639) txn: native PQ accounts
**🔄 Open** | *@cusma*

#6639: Introducing native PQ accounts will enable better integration and management of accounts within the system, which could enhance user experience and functionality.

### [#6642](https://github.com/algorand/go-algorand/pull/6642) transactions: reject heartbeat transactions with missing fields
**🔄 Open** | *@Curtis-D*

#6642: By rejecting heartbeat transactions with missing fields, this update ensures data integrity and reduces the likelihood of errors in transaction processing, leading to a more robust system.

### [#6638](https://github.com/algorand/go-algorand/pull/6638) Build: locate e2e test binaries via `go env`, not $GOPATH
**🔄 Open** | *@jannotti*

#6638: This change will enhance the build process by locating end-to-end test binaries via `go env`, which can streamline development workflows and improve consistency across different environments.

### [#6641](https://github.com/algorand/go-algorand/pull/6641) build(deps): bump github.com/quic-go/quic-go from 0.59.0 to 0.59.1 in /tools/block-generator
**🔄 Open** | *@dependabot[bot]*

#6641: Bumping the quic-go dependency to version 0.59.1 in the block-generator tool ensures that developers benefit from the latest features and bug fixes, potentially improving performance and stability.

### [#6640](https://github.com/algorand/go-algorand/pull/6640) build(deps): bump github.com/quic-go/quic-go from 0.59.0 to 0.59.1 in /tools/debug/algodump
**🔄 Open** | *@dependabot[bot]*

#6640: Similar to #6641, updating the quic-go dependency in the algodump tool enhances its functionality and reliability, which is crucial for developers relying on this tool for debugging.

### [#6628](https://github.com/algorand/go-algorand/pull/6628) chore: ensure heartbeat lsig is an invalid ed25519 point
**🔄 Open** | *@cusma*

#6628: Ensuring that heartbeat lsig is an invalid ed25519 point adds a layer of security, preventing potential misuse or errors in cryptographic operations, which is critical for maintaining system integrity.

### [#6596](https://github.com/algorand/go-algorand/pull/6596) AVM: app_params_set, new box params, and "foreign" box opcodes
**🔄 Open** | *@jannotti*

#6596: The introduction of new application parameters and foreign box opcodes in the AVM expands the capabilities for developers, allowing for more complex application logic and interactions.

### [#6636](https://github.com/algorand/go-algorand/pull/6636) API: Big transactions simulate fee usage
**🔄 Open** | *@jannotti*

#6636: Simulating fee usage for big transactions provides developers with better tools for estimating costs and optimizing transaction strategies, which enhances user experience by reducing unexpected fees.

### [#6637](https://github.com/algorand/go-algorand/pull/6637) transactions: allow large lsigs with size pricing
**🔄 Open** | *@giuliop*

#6637: Allowing large lsigs with size pricing offers developers more flexibility in transaction design, enabling them to create larger signatures without prohibitive costs, which can be particularly beneficial for complex applications.

### [#4358](https://github.com/algorand/go-algorand/pull/4358) WIP performance: Speculative block assembly into master
**❌ Closed** | *@yossigi*

#4358: SKIP

### [#6643](https://github.com/algorand/go-algorand/pull/6643) cli: add explicit rekey safety guardrails
**❌ Closed** | *@yathishbl60*

#6643: Adding explicit rekey safety guardrails improves security by preventing accidental rekeying of accounts, which protects users from potential loss of access to their assets.

---

*Generated on 2026-06-08*
