# algorand/go-algorand Weekly Newsletter

**Week of 2026-04-20 to 2026-04-27**

## 📋 Executive Summary

In the past week, the Algorand Go repository saw a total of 10 pull requests, with 4 successfully merged, reflecting ongoing development efforts. Notably, several key pull requests are currently open, including enhancements for handling big transactions (#6528), improved stack type tracking for the match opcode (#6618), and auto-salting for TEAL v13 programs to enhance security (#6592). Additionally, there are updates aimed at enriching the language specification files (#6617) and a complete rebuild of the libsodium tree (#6616). The repository remains active with no new issues reported this week, indicating a focused momentum towards refining the platform.

## 📊 Weekly Statistics

- **Pull Requests**: 10 (4 merged)
- **Issues**: 0 (0 closed)
- **Discussions**: 0

## 🔀 Pull Requests

### [#6057](https://github.com/algorand/go-algorand/pull/6057) AVM: Implement lsig size pooling
**✅ Merged** | *@giuliop*

#6057: The implementation of lsig size pooling enhances the efficiency of handling Logic Signatures, which can lead to improved performance for developers working with smart contracts.  

### [#6615](https://github.com/algorand/go-algorand/pull/6615) build: fix allocbound directive lookup
**✅ Merged** | *@giuliop*

#6615: Fixing the allocbound directive lookup streamlines the build process, ensuring that developers have a more reliable compilation environment.  

### [#6588](https://github.com/algorand/go-algorand/pull/6588) API: Deal with params that are in deltas
**✅ Merged** | *@jannotti*

#6588: Addressing parameters in deltas improves the API's robustness, allowing developers to work with more complex data structures seamlessly.  

### [#2923](https://github.com/algorand/go-algorand/pull/2923) Support arm cross compile
**✅ Merged** | *@bricerisingalgorand*

#2923: Supporting ARM cross-compilation expands the platform compatibility for developers, enabling them to build applications for a wider range of devices.  

### [#6528](https://github.com/algorand/go-algorand/pull/6528) Eval: Big transactions
**🔄 Open** | *@jannotti*

#6528: The open pull request for big transactions indicates ongoing work to enhance the system's capability to handle larger transactions, which could significantly benefit users dealing with high-volume operations.  

### [#6618](https://github.com/algorand/go-algorand/pull/6618) Assembler: Properly perform stack type tracking for match opcode
**🔄 Open** | *@jannotti*

#6618: Proper stack type tracking for the match opcode will improve the reliability of opcode execution, reducing potential errors for developers working with assembly code.  

### [#6592](https://github.com/algorand/go-algorand/pull/6592) avm: auto-salt TEAL v13 programs to avoid on-curve LogicSig hashes
**🔄 Open** | *@giuliop*

#6592: Auto-salting TEAL v13 programs improves security by preventing on-curve LogicSig hashes, which is crucial for developers focused on safeguarding their smart contracts.  

### [#6617](https://github.com/algorand/go-algorand/pull/6617) Add more data to our langspec.json files
**🔄 Open** | *@iglosiggio*

#6617: Adding more data to langspec.json files will enhance the documentation and usability of the language specification, aiding developers in understanding and utilizing the language effectively.  

### [#6616](https://github.com/algorand/go-algorand/pull/6616) build: rebuild copied libsodium tree from scratch
**🔄 Open** | *@giuliop*

#6616: Rebuilding the copied libsodium tree from scratch ensures that developers have access to the latest security features and improvements in cryptographic functions.  

### [#6573](https://github.com/algorand/go-algorand/pull/6573) LogicSig: harden address derivation for v13+
**❌ Closed** | *@giuliop*

#6573: Hardened address derivation for v13+ strengthens the security of Logic Signatures, providing developers with more robust tools for creating secure smart contracts.  

---

*Generated on 2026-04-27*
