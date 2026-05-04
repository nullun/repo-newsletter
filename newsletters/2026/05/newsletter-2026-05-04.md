# algorand/go-algorand Weekly Newsletter

**Week of 2026-04-27 to 2026-05-04**

## 📋 Executive Summary

In the past week, the Algorand Go repository saw significant activity with 11 pull requests, five of which were successfully merged, and one issue closed. Notable ongoing pull requests include enhancements to the AVM with the introduction of the Poseidon2 hash function (#6560), updates to application parameters and new opcodes (#6596), and improvements in testing practices (#6614). Additionally, the recent closed issue (#6489) addressed a critical bug related to reassembling disassembled programs with unused subroutines. Developers and users should stay tuned for these enhancements that aim to improve functionality and performance within the Algorand ecosystem.

## 📊 Weekly Statistics

- **Pull Requests**: 11 (5 merged)
- **Issues**: 1 (1 closed)
- **Discussions**: 0

## 🔀 Pull Requests

### [#6619](https://github.com/algorand/go-algorand/pull/6619) go-algorand 4.7.0-stable Release PR
**✅ Merged** | *@Algo-devops-service*

go-algorand 4.7.0-stable Release PR: This release introduces stability improvements and bug fixes, ensuring a more reliable experience for developers and users working with the Algorand platform.

### [#6616](https://github.com/algorand/go-algorand/pull/6616) build: rebuild copied libsodium tree from scratch
**✅ Merged** | *@giuliop*

build: rebuild copied libsodium tree from scratch: This update enhances the integrity and performance of cryptographic functions by ensuring the libsodium library is built from a clean state, which may improve security and reliability for developers.

### [#6613](https://github.com/algorand/go-algorand/pull/6613) go-algorand 4.7.0-beta Release PR
**✅ Merged** | *@Algo-devops-service*

go-algorand 4.7.0-beta Release PR: This beta release allows developers to test new features and improvements before the stable version is officially released, providing an opportunity to provide feedback and prepare for upcoming changes.

### [#6594](https://github.com/algorand/go-algorand/pull/6594) avm: fix teal disassembly for deadcode
**✅ Merged** | *@nullun*

avm: fix teal disassembly for deadcode: This fix ensures that the disassembly of TEAL code correctly handles dead code, improving debugging and development processes for developers working with Algorand's smart contracts.

### [#6618](https://github.com/algorand/go-algorand/pull/6618) Assembler: Properly perform stack type tracking for match opcode
**✅ Merged** | *@jannotti*

Assembler: Properly perform stack type tracking for match opcode: This enhancement improves the type tracking for the match opcode in the assembler, helping developers avoid type-related errors and improving the overall robustness of their applications.

### [#6596](https://github.com/algorand/go-algorand/pull/6596) AVM: app_params_set, new box params, and "foreign" box opcodes
**🔄 Open** | *@jannotti*

AVM: poseidon2 hash function: This feature introduces the Poseidon2 hash function to the Algorand Virtual Machine, offering developers a new cryptographic tool that could enhance the security and efficiency of their applications.

### [#6543](https://github.com/algorand/go-algorand/pull/6543) crypto: use specific error assertions in tests
**🔄 Open** | *@cce*

AVM: app_params_set, new box params, and "foreign" box opcodes: This addition expands the functionality of the Algorand Virtual Machine by introducing new opcodes and parameters, enabling developers to create more complex and feature-rich smart contracts.

### [#6614](https://github.com/algorand/go-algorand/pull/6614) testing: refactor TestLookup{Application,Asset}ResourcesWithDeltas
**🔄 Open** | *@cce*

crypto: use specific error assertions in tests: This change improves the testing framework by implementing specific error assertions, which will help developers identify issues more quickly and ensure higher code quality.

### [#6592](https://github.com/algorand/go-algorand/pull/6592) avm: auto-salt TEAL v13 programs to avoid on-curve LogicSig hashes
**🔄 Open** | *@giuliop*

testing: refactor TestLookup{Application,Asset}ResourcesWithDeltas: This refactor improves the organization and readability of the test code for resource lookups, making it easier for developers to maintain and extend tests in the future.

### [#6528](https://github.com/algorand/go-algorand/pull/6528) Eval: Big transactions
**🔄 Open** | *@jannotti*

avm: auto-salt TEAL v13 programs to avoid on-curve LogicSig hashes: This feature introduces automatic salting for TEAL v13 programs, enhancing security by preventing potential vulnerabilities associated with LogicSig hashes, thereby aiding developers in writing more secure contracts.

## 🐛 Issues

### [#6489](https://github.com/algorand/go-algorand/issues/6489) Unable to reassemble a disassembled program that contains unused subroutines
**✅ Closed** | *@nullun* | `bug`

The resolution of this issue means that developers can now successfully reassemble disassembled programs even if they contain unused subroutines, improving the overall functionality and reliability of the disassembly process. This enhancement is particularly relevant for developers working with legacy code or complex applications, as it allows for more efficient code analysis and modification.

---

*Generated on 2026-05-04*
