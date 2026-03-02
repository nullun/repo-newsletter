# algorand/go-algorand Weekly Newsletter

**Week of 2026-02-23 to 2026-03-02**

## 📋 Executive Summary

In the past week, the Algorand Go repository saw significant activity with 19 pull requests submitted, of which 13 were successfully merged. Notable developments include ongoing efforts to enhance network capabilities with a pull request addressing stream creation on existing connections (#6572) and an upgrade to the libp2p ecosystem for improved security (#6564). Additionally, there’s a new feature allowing applications to utilize a --rekey-to flag (#6571), and enhancements to the API for better presentation of paginated asset views (#6559). The team is also working on integrating GitHub Actions for streamlined CI/CD processes (#6567). Currently, there are no new issues or discussions to report, indicating a focused and productive week for the development team.

## 📊 Weekly Statistics

- **Pull Requests**: 19 (13 merged)
- **Issues**: 0 (0 closed)
- **Discussions**: 0

## 🔀 Pull Requests

### [#6554](https://github.com/algorand/go-algorand/pull/6554) p2p: ignore pubsub PX peers for all node modes
**✅ Merged** | *@algorandskiy*

This change allows peer-to-peer (P2P) communication to ignore certain peers in the pubsub context, improving the efficiency and reliability of message delivery across all node modes.  

### [#6565](https://github.com/algorand/go-algorand/pull/6565) kmd: fix macOS HID failures caused by Go async preemption signals
**✅ Merged** | *@nullun*

This fix addresses HID-related failures on macOS due to Go's async preemption, enhancing user experience for macOS developers by ensuring better compatibility with hardware interfaces.  

### [#6570](https://github.com/algorand/go-algorand/pull/6570) metrics: use otel namespace for libp2p metrics, support histograms, filter high-cardinality tags
**✅ Merged** | *@cce*

The update implements the OpenTelemetry namespace for libp2p metrics, enabling more precise performance tracking and the ability to support histograms, which can aid in identifying bottlenecks.  

### [#6557](https://github.com/algorand/go-algorand/pull/6557) node: collect goroutines stacks before SIGKILL
**✅ Merged** | *@algorandskiy*

By collecting goroutine stacks before a SIGKILL signal, developers can gain better insights into application behavior during crashes, which is critical for debugging and stability improvements.  

### [#6569](https://github.com/algorand/go-algorand/pull/6569) network: adjust pubsub params
**✅ Merged** | *@algorandskiy*

Adjusting pubsub parameters enhances the network's performance and reliability, potentially leading to more efficient message distribution among nodes.  

### [#6545](https://github.com/algorand/go-algorand/pull/6545) Chore: do not modify pubsub global variables
**✅ Merged** | *@algorandskiy*

This change prevents unintended modifications to global variables in the pubsub system, promoting better encapsulation and reducing the risk of bugs related to state management.  

### [#6568](https://github.com/algorand/go-algorand/pull/6568) network: don't listen if IncomingConnectionsLimit == 0
**✅ Merged** | *@cce*

The update ensures that the network will not accept incoming connections if the limit is set to zero, which can help prevent unnecessary resource usage and improve overall system stability.  

### [#6566](https://github.com/algorand/go-algorand/pull/6566) tests: fix stopping race in http client harness
**✅ Merged** | *@algorandskiy*

Fixing a stopping race condition in the HTTP client harness improves the reliability of tests, leading to more stable and predictable test outcomes for developers.  

### [#6495](https://github.com/algorand/go-algorand/pull/6495) network: silently fall back if uncompressed vote received for stateless decoder
**✅ Merged** | *@cce*

The silent fallback mechanism for uncompressed votes enhances the robustness of the stateless decoder, ensuring that it can still function correctly even when encountering unexpected input.  

### [#6551](https://github.com/algorand/go-algorand/pull/6551) agreement: implement TODO in broadcast/relay actions
**✅ Merged** | *@algorandskiy*

Implementing the TODO in broadcast/relay actions enhances the agreement protocol, which is crucial for maintaining consensus in distributed systems.  

### [#6526](https://github.com/algorand/go-algorand/pull/6526) metrics: measure block assembly re-evaluation failures
**✅ Merged** | *@cce*

Measuring block assembly re-evaluation failures provides developers with insights into potential inefficiencies in block processing, leading to improved performance and reliability.  

### [#6562](https://github.com/algorand/go-algorand/pull/6562) p2p: fix StopNotify vs notifyAll deadlock on stop
**✅ Merged** | *@algorandskiy*

This fix resolves a deadlock issue between StopNotify and notifyAll, which enhances the robustness of the P2P communication layer during shutdown processes.  

### [#6572](https://github.com/algorand/go-algorand/pull/6572) network: handle stream creation on existing conns
**🔄 Open** | *@algorandskiy*

Handling stream creation on existing connections will improve the efficiency of network resource utilization and reduce latency for ongoing communications.  

### [#6564](https://github.com/algorand/go-algorand/pull/6564) network: upgrade libp2p ecosystem to fix dependabot security alerts
**🔄 Open** | *@gmalouf*

Upgrading the libp2p ecosystem addresses security vulnerabilities identified by dependabot, ensuring that the project remains secure and up-to-date with the latest dependencies.  

### [#6571](https://github.com/algorand/go-algorand/pull/6571) Add --rekey-to flag for calling applications
**🔄 Open** | *@nullun*

The addition of the --rekey-to flag allows applications to specify a new key destination, enhancing flexibility in key management for developers.  

### [#6559](https://github.com/algorand/go-algorand/pull/6559) API: Incorporate deltas in presenting paginated view of assets or applications
**🔄 Open** | *@gmalouf*

Incorporating deltas in paginated views of assets or applications improves user experience by enabling more efficient data loading and presentation.  

### [#6567](https://github.com/algorand/go-algorand/pull/6567) CICD: Build and package in GitHub Actions
**🔄 Open** | *@onetechnical*

Building and packaging in GitHub Actions streamlines the development workflow, allowing for more efficient CI/CD processes and better integration with GitHub.  

### [#6555](https://github.com/algorand/go-algorand/pull/6555) Eval: Prefetch better
**🔄 Open** | *@jannotti*

Improving prefetching mechanisms in the evaluation process can enhance performance and responsiveness, leading to a better user experience in applications.  

---

*Generated on 2026-03-02*
