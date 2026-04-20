# algorand/go-algorand Weekly Newsletter

**Week of 2026-04-13 to 2026-04-20**

## 📋 Executive Summary

In the past week, the Algorand go-algorand repository has seen significant activity with 22 pull requests submitted, of which 7 have been merged, reflecting ongoing enhancements and bug fixes. Notable open pull requests include updates to the AVM for variable-length branches and improvements in TEAL disassembly, which aim to refine the development experience. Additionally, two critical issues are currently open, including a vulnerability in the project and a challenge with reassembling disassembled programs that contain unused subroutines. Developers and users should stay tuned for updates as these matters are addressed, ensuring the continued robustness of the Algorand platform.

## 📊 Weekly Statistics

- **Pull Requests**: 22 (7 merged)
- **Issues**: 2 (0 closed)
- **Discussions**: 0

## 🔀 Pull Requests

### [#6613](https://github.com/algorand/go-algorand/pull/6613) go-algorand 4.7.0-beta Release PR
**✅ Merged** | *@Algo-devops-service*

go-algorand 4.7.0-beta Release PR: This release introduces new features and improvements to the Algorand platform, providing developers and users with enhanced functionality and performance.

### [#6588](https://github.com/algorand/go-algorand/pull/6588) API: Deal with params that are in deltas
**✅ Merged** | *@jannotti*

API: Deal with params that are in deltas: This change improves the API's ability to handle parameters that are part of deltas, resulting in more robust data management and interaction for developers.

### [#6598](https://github.com/algorand/go-algorand/pull/6598) assembler: single-pass optimizeConstants using cumulative delta array
**✅ Merged** | *@jannotti*

assembler: single-pass optimizeConstants using cumulative delta array: This optimization enhances the assembler's efficiency by allowing it to process constants in a single pass, improving performance for developers working with assembly code.

### [#6611](https://github.com/algorand/go-algorand/pull/6611) Legal: Update copyright to the Foundation
**✅ Merged** | *@jannotti*

build: combine dependabot dependency upgrades (April 2026): This PR consolidates multiple dependency upgrades into a single commit, streamlining the update process and ensuring that the project remains up-to-date with minimal disruption.

### [#6615](https://github.com/algorand/go-algorand/pull/6615) protocol: find allocbound directives from module root
**🔄 Open** | *@giuliop*

Legal: Update copyright to the Foundation: This update reflects the correct copyright holder, ensuring legal clarity and compliance for the project.

### [#6614](https://github.com/algorand/go-algorand/pull/6614) testing: refactor TestLookup{Application,Asset}ResourcesWithDeltas
**🔄 Open** | *@cce*

chore: better error handling in fast catchup mode: Improved error handling in fast catchup mode enhances the reliability of the system, helping developers manage and troubleshoot issues more effectively.

### [#6594](https://github.com/algorand/go-algorand/pull/6594) avm: fix teal disassembly for deadcode
**🔄 Open** | *@nullun*

protocol: find allocbound directives from module root: This ongoing work aims to enhance protocol functionality by improving how allocbound directives are identified, potentially leading to better resource management for developers.

### [#6592](https://github.com/algorand/go-algorand/pull/6592) avm: auto-salt TEAL v13 programs to avoid on-curve LogicSig hashes
**🔄 Open** | *@giuliop*

testing: refactor TestLookup{Application,Asset}ResourcesWithDeltas: This refactor aims to improve the testing framework, making it easier for developers to validate resource lookups with deltas, thereby increasing the reliability of the testing process.

### [#6612](https://github.com/algorand/go-algorand/pull/6612) go-algorand 4.7.0-beta Release PR
**❌ Closed** | *@Algo-devops-service*

AVM: Variable length branches: This proposed feature introduces support for variable-length branches in the Algorand Virtual Machine, which could enhance the flexibility and efficiency of smart contract execution for developers.

### [#6604](https://github.com/algorand/go-algorand/pull/6604) build(deps): bump github.com/sirupsen/logrus from 1.9.0 to 1.9.1 in /tools/debug/algodump
**❌ Closed** | *@dependabot[bot]*

avm: fix teal disassembly for deadcode: This fix addresses issues with disassembling TEAL code that contains dead code, improving the accuracy and usability of the disassembly tools for developers.

### [#6602](https://github.com/algorand/go-algorand/pull/6602) build(deps): bump github.com/ipld/go-ipld-prime from 0.21.0 to 0.22.0 in /tools/debug/algodump
**❌ Closed** | *@dependabot[bot]*

avm: auto-salt TEAL v13 programs to avoid on-curve LogicSig hashes: This change aims to enhance security by automatically salting TEAL v13 programs, helping to prevent potential vulnerabilities related to LogicSig hashes for developers.

### [#6609](https://github.com/algorand/go-algorand/pull/6609) build(deps): bump go.opentelemetry.io/otel/sdk from 1.40.0 to 1.43.0 in /tools/debug/algodump
**❌ Closed** | *@dependabot[bot]*

go-algorand 4.7.0-beta Release PR: This release introduces new features and improvements to the Algorand platform, providing developers and users with enhanced functionality and performance.

### [#6603](https://github.com/algorand/go-algorand/pull/6603) build(deps): bump github.com/sirupsen/logrus from 1.9.0 to 1.9.1 in /tools/block-generator
**❌ Closed** | *@dependabot[bot]*

build(deps): bump github.com/sirupsen/logrus from 1.9.0 to 1.9.1 in /tools/debug/algodump: This dependency bump updates the logging library used in algodump, potentially improving logging functionality and stability for developers.

### [#6605](https://github.com/algorand/go-algorand/pull/6605) build(deps): bump github.com/ipld/go-ipld-prime from 0.21.0 to 0.22.0 in /tools/block-generator
**❌ Closed** | *@dependabot[bot]*

build(deps): bump github.com/ipld/go-ipld-prime from 0.21.0 to 0.22.0 in /tools/debug/algodump: This update to the IPLD library may enhance data handling capabilities in algodump, benefiting developers working on data structures.

### [#6601](https://github.com/algorand/go-algorand/pull/6601) build(deps): bump github.com/ipld/go-ipld-prime from 0.21.0 to 0.22.0
**❌ Closed** | *@dependabot[bot]*

build(deps): bump go.opentelemetry.io/otel/sdk from 1.40.0 to 1.43.0 in /tools/debug/algodump: This dependency upgrade improves the OpenTelemetry SDK, which may enhance observability and monitoring in the algodump tool for developers.

### [#6607](https://github.com/algorand/go-algorand/pull/6607) build(deps): bump go.opentelemetry.io/otel/sdk from 1.40.0 to 1.43.0
**❌ Closed** | *@dependabot[bot]*

build(deps): bump go.opentelemetry.io/otel/sdk from 1.40.0 to 1.43.0 in /tools/block-generator: Similar to the previous item, this update enhances the OpenTelemetry SDK for the block-generator tool, improving monitoring capabilities for developers.

### [#6587](https://github.com/algorand/go-algorand/pull/6587) build(deps): bump github.com/sirupsen/logrus from 1.9.0 to 1.9.1
**❌ Closed** | *@dependabot[bot]*

build(deps): bump github.com/sirupsen/logrus from 1.9.0 to 1.9.1 in /tools/block-generator: This update to the logging library in the block-generator tool may enhance logging performance and reliability for developers.

---

*Generated on 2026-04-20*
