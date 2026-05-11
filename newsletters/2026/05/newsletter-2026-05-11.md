# algorand/go-algorand Weekly Newsletter

**Week of 2026-05-04 to 2026-05-11**

## 📋 Executive Summary

In the past week, the Algorand Go repository saw significant activity with 17 pull requests, of which 4 were merged, and 2 new issues were opened. Notable ongoing pull requests include enhancements to consensus traffic via pubsub (#6501), improvements for handling large transactions (#6528), and the introduction of windowed compression with zstd for block databases (#6627). Additionally, there's a key focus on testing cleanups to maintain functionality (#6623) and a dependency update to the IPLD library (#6626). On the issue front, two important discussions are underway regarding access to foreign resources across transaction groups (#4391) and the implications of blocks under 3 seconds on rewards (#2917). Developers and users should keep an eye on these developments as they may significantly impact future functionalities and performance.

## 📊 Weekly Statistics

- **Pull Requests**: 17 (4 merged)
- **Issues**: 2 (0 closed)
- **Discussions**: 0

## 🔀 Pull Requests

### [#6622](https://github.com/algorand/go-algorand/pull/6622) CICD: don't require vars for nightlies
**✅ Merged** | *@onetechnical*

#6622: This change simplifies the continuous integration and deployment (CICD) process by removing the requirement for variables in nightly builds, making it easier for developers to manage and automate their testing workflows.

### [#6600](https://github.com/algorand/go-algorand/pull/6600) AVM: Variable length branches
**✅ Merged** | *@jannotti*

#6600: The introduction of variable length branches in the Algorand Virtual Machine (AVM) enhances flexibility in smart contract execution, allowing developers to create more complex and efficient logic in their applications.

### [#6620](https://github.com/algorand/go-algorand/pull/6620) CICD: go-algorand relstable4.7.0-remerge mergeback
**✅ Merged** | *@Algo-devops-service*

#6620: This mergeback ensures that the go-algorand codebase is synchronized with the latest stable release, providing developers with the most up-to-date features and fixes.

### [#6619](https://github.com/algorand/go-algorand/pull/6619) go-algorand 4.7.0-stable Release PR
**✅ Merged** | *@Algo-devops-service*

#6619: The release of go-algorand version 4.7.0 brings new features and improvements, which are crucial for developers looking to leverage the latest enhancements in their applications.

### [#6501](https://github.com/algorand/go-algorand/pull/6501) network: consensus traffic via pubsub
**🔄 Open** | *@algorandskiy*

#6501: This pull request proposes implementing consensus traffic via pubsub, which could improve network efficiency and responsiveness, benefiting developers who rely on real-time data.

### [#6528](https://github.com/algorand/go-algorand/pull/6528) Eval: Big transactions
**🔄 Open** | *@jannotti*

#6528: The addition of support for big transactions in the evaluation phase allows developers to handle larger data sets and operations, enhancing the capabilities of their applications.

### [#6627](https://github.com/algorand/go-algorand/pull/6627) blockdb: add windowed compression with zstd
**🔄 Open** | *@cce*

#6627: Introducing windowed compression with zstd in blockdb can significantly improve data storage efficiency and retrieval speeds, which is vital for developers working with large datasets.

### [#6623](https://github.com/algorand/go-algorand/pull/6623) Tests: cleanups, no functionality should be changed
**🔄 Open** | *@jannotti*

#6623: SKIP

### [#6626](https://github.com/algorand/go-algorand/pull/6626) build(deps): bump github.com/ipld/go-ipld-prime from 0.22.0 to 0.23.0 in /tools/debug/algodump
**🔄 Open** | *@dependabot[bot]*

#6626: This dependency update ensures that the tools related to algodump are using the latest version of go-ipld-prime, which may include performance improvements and bug fixes important for developers.

### [#6621](https://github.com/algorand/go-algorand/pull/6621) build: support macports in configure_dev.sh
**🔄 Open** | *@algorandskiy*

#6621: Adding support for MacPorts in the development configuration script broadens the compatibility for developers using different package management systems on macOS.

### [#6625](https://github.com/algorand/go-algorand/pull/6625) build(deps): bump github.com/ipld/go-ipld-prime from 0.22.0 to 0.23.0
**🔄 Open** | *@dependabot[bot]*

#6625: This dependency update brings the go-ipld-prime library to a newer version, which may provide enhancements and fixes that could benefit developers using this library.

### [#6624](https://github.com/algorand/go-algorand/pull/6624) build(deps): bump github.com/ipld/go-ipld-prime from 0.22.0 to 0.23.0 in /tools/block-generator
**🔄 Open** | *@dependabot[bot]*

#6624: Similar to #6625, this update ensures that the block-generator tool is using the latest version of go-ipld-prime, potentially improving its functionality and performance.

### [#6596](https://github.com/algorand/go-algorand/pull/6596) AVM: app_params_set, new box params, and "foreign" box opcodes
**🔄 Open** | *@jannotti*

#6596: The addition of new opcodes related to app parameters and foreign boxes in the AVM enhances the functionality available to developers, enabling more sophisticated smart contract designs.

### [#6617](https://github.com/algorand/go-algorand/pull/6617) Add more data to our langspec.json files
**🔄 Open** | *@iglosiggio*

#6617: This update enriches the langspec.json files with more data, which is essential for developers seeking comprehensive documentation and understanding of language specifications.

### [#4018](https://github.com/algorand/go-algorand/pull/4018) REST API: add support for optional "round" parameter to lookup queries
**🔄 Open** | *@cce*

#4018: Adding support for an optional "round" parameter in REST API lookup queries enhances the API's flexibility, allowing developers to make more precise queries based on specific blockchain rounds.

### [#6560](https://github.com/algorand/go-algorand/pull/6560) AVM: poseidon2 hash function
**🔄 Open** | *@joe-p*

#6560: The introduction of the poseidon2 hash function in the AVM provides developers with a new cryptographic option, potentially improving the security and efficiency of smart contracts.

### [#6514](https://github.com/algorand/go-algorand/pull/6514) statetrie: continue in-memory merkle patricia trie implementation
**❌ Closed** | *@cce*

#6514: SKIP

---

*Generated on 2026-05-11*
