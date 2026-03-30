# algorand/go-algorand Weekly Newsletter

**Week of 2026-03-23 to 2026-03-30**

## 📋 Executive Summary

In the past week, the Algorand Go repository has seen notable activity with 13 pull requests submitted, of which 5 have been successfully merged. Key ongoing developments include enhancements to the API for handling parameters in deltas (#6588), updates to the AVM with new box parameters and foreign box opcodes (#6596), and improvements in error handling during fast catchup mode (#6595). Additionally, there have been significant fixes to the TEAL disassembly process and enhancements in assembly support (#6594), along with an update to the Go SDK type exporter (#6584). There are currently no new issues or discussions to report, indicating a focused effort on these important features and improvements.

## 📊 Weekly Statistics

- **Pull Requests**: 13 (5 merged)
- **Issues**: 0 (0 closed)
- **Discussions**: 0

## 🔀 Pull Requests

### [#6568](https://github.com/algorand/go-algorand/pull/6568) network: don't listen if IncomingConnectionsLimit == 0
**✅ Merged** | *@cce*

Developers will benefit from the change in #6568 as it prevents the application from listening for incoming connections when the limit is set to zero, enhancing resource management.  

### [#6593](https://github.com/algorand/go-algorand/pull/6593) tests: fix data race in catchpoint tests
**✅ Merged** | *@algorandskiy*

The fix in #6593 addresses a data race condition in catchpoint tests, improving the reliability and accuracy of test results for developers.  

### [#6583](https://github.com/algorand/go-algorand/pull/6583) network: fix double logging with elevated level
**✅ Merged** | *@algorandskiy*

#6583 resolves an issue with double logging at elevated log levels, allowing for clearer and more concise logging output during network operations.  

### [#6591](https://github.com/algorand/go-algorand/pull/6591) tests: fix TestDiscardUnrequestedBlockResponse race
**✅ Merged** | *@algorandskiy*

The fix in #6591 resolves a race condition in the TestDiscardUnrequestedBlockResponse, ensuring more stable and predictable test behavior.  

### [#6588](https://github.com/algorand/go-algorand/pull/6588) API: Deal with params that are in deltas
**🔄 Open** | *@jannotti*

#6588 introduces handling for parameters that are in deltas, which could enhance the API's flexibility and responsiveness to changes in data.  

### [#6596](https://github.com/algorand/go-algorand/pull/6596) AVM: app_params_set, new box params, and "foreign" box opcodes
**🔄 Open** | *@jannotti*

#6596 adds new functionalities related to app parameters and box opcodes, expanding the capabilities of the AVM for developers working with smart contracts.  

### [#6595](https://github.com/algorand/go-algorand/pull/6595) chore: better error handling in fast catchup mode
**🔄 Open** | *@algorandskiy*

#6595 improves error handling in fast catchup mode, which is crucial for maintaining system stability and performance during high-load scenarios.  

### [#6594](https://github.com/algorand/go-algorand/pull/6594) avm: fix teal disassembly for deadcode and enhance assembly support for scratch/frame opcodes
**🔄 Open** | *@nullun*

#6594 enhances the teal disassembly process for deadcode and adds support for new assembly features, improving the development experience for those working with smart contracts.  

### [#6584](https://github.com/algorand/go-algorand/pull/6584) scripts: update go sdk type exporter 
**🔄 Open** | *@algorandskiy*

#6584 updates the Go SDK type exporter, which likely improves the integration and usability of Go SDK for developers.  

### [#6581](https://github.com/algorand/go-algorand/pull/6581) dht: do not err on context deadline
**🔄 Open** | *@algorandskiy*

#6581 ensures that the DHT does not error out on context deadlines, improving the robustness of distributed hash table operations.  

### [#6592](https://github.com/algorand/go-algorand/pull/6592) Auto-salt TEAL v13 programs to avoid on-curve LogicSig hashes
**🔄 Open** | *@giuliop*

#6592 introduces auto-salting for TEAL v13 programs, which enhances security by preventing certain types of attacks related to LogicSig hashes.  

### [#6589](https://github.com/algorand/go-algorand/pull/6589) build: fix MacOS 14 SDK and XCode 16.x issue
**🔄 Open** | *@algorandskiy*

#6589 resolves compatibility issues with MacOS 14 SDK and XCode 16.x, ensuring that developers using these tools can build and run the software without issues.  

---

*Generated on 2026-03-30*
