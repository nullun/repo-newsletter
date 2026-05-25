# algorand/go-algorand Weekly Newsletter

**Week of 2026-05-18 to 2026-05-25**

## 📋 Executive Summary

In the past week, the Algorand Go repository saw a total of 8 pull requests, with 2 successfully merged, reflecting ongoing enhancements to the platform. Noteworthy open pull requests include advancements in state-proof-based catchup (#5720), support for big transactions (#6528), and improvements to consensus traffic management via pubsub (#6501). Additionally, there's an innovative proposal for implementing windowed compression with zstd in block databases (#6627) and a change to streamline block assembly for non-elected accounts (#6631). There were no new issues or discussions, indicating a stable development environment as the team continues to focus on these significant enhancements.

## 📊 Weekly Statistics

- **Pull Requests**: 8 (2 merged)
- **Issues**: 0 (0 closed)
- **Discussions**: 0

## 🔀 Pull Requests

### [#9](https://github.com/algorand/go-algorand/pull/9) [GOAL2-769] Fix update script for joining mainnet
**✅ Merged** | *@Karmastic*

#9: This update script fix ensures that developers can successfully join the mainnet, improving accessibility and stability for users participating in the network.  

### [#6630](https://github.com/algorand/go-algorand/pull/6630) Tools: Default Cloudflare DNS records to 60s TTL
**✅ Merged** | *@onetechnical*

#6630: Setting the default TTL for Cloudflare DNS records to 60 seconds enhances the responsiveness of DNS changes, which can lead to improved performance and reliability for users.  

### [#5720](https://github.com/algorand/go-algorand/pull/5720) catchup: state-proof-based catchup
**🔄 Open** | *@zeldovich*

#5720: The state-proof-based catchup feature aims to improve the efficiency of syncing nodes with the network, which is crucial for maintaining data integrity and performance.  

### [#6528](https://github.com/algorand/go-algorand/pull/6528) Eval: Big transactions
**🔄 Open** | *@jannotti*

#6528: The introduction of support for big transactions in the evaluation process allows developers to handle larger data transfers, which can enhance user experience and functionality in high-volume scenarios.  

### [#6501](https://github.com/algorand/go-algorand/pull/6501) network: consensus traffic via pubsub
**🔄 Open** | *@algorandskiy*

#6501: Implementing consensus traffic via pubsub optimizes communication between nodes, potentially increasing the speed and reliability of consensus processes for developers and users alike.  

### [#6627](https://github.com/algorand/go-algorand/pull/6627) blockdb: add windowed compression with zstd
**🔄 Open** | *@cce*

#6627: Adding windowed compression with zstd in blockdb will reduce storage requirements and improve data retrieval speeds, benefiting developers managing large datasets and users accessing blockchain data.  

### [#6631](https://github.com/algorand/go-algorand/pull/6631) agreement: skip block assembly for accounts that are not elected
**🔄 Open** | *@nullun*

#6631: Skipping block assembly for accounts that are not elected can streamline the consensus process, making it more efficient and reducing unnecessary resource usage for developers and users.  

### [#6617](https://github.com/algorand/go-algorand/pull/6617) docs: Add more data to our langspec.json files
**🔄 Open** | *@iglosiggio*

#6617: SKIP

---

*Generated on 2026-05-25*
