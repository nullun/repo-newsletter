# algorand/go-algorand Weekly Newsletter

**Week of 2026-03-16 to 2026-03-23**

## 📋 Executive Summary

In the past week, the Algorand go-algorand repository saw significant activity with 423 pull requests, of which 408 were successfully merged. Noteworthy ongoing developments include enhancements for LogicSig address derivation and automated salting for TEAL v13 programs, both aimed at improving security and efficiency. Additionally, efforts to address API parameter management and fix compatibility issues with MacOS 14 and XCode 16.x are underway. An important open issue regarding allowing larger LogicSig programs with fee-based pricing is also under discussion. Overall, the team is making strides to enhance functionality and user experience, and developers are encouraged to stay engaged with these updates.

## 📊 Weekly Statistics

- **Pull Requests**: 423 (408 merged)
- **Issues**: 1 (0 closed)
- **Discussions**: 0

## 🔀 Pull Requests

### [#6564](https://github.com/algorand/go-algorand/pull/6564) network: upgrade libp2p ecosystem to fix dependabot security alerts
**✅ Merged** | *@gmalouf*

- The upgrade of the libp2p ecosystem addresses security alerts, enhancing the overall security posture of the network for developers and users.

### [#6558](https://github.com/algorand/go-algorand/pull/6558) API: Add cursor-based pagination with prefix support to application boxes
**✅ Merged** | *@pbennett*

- The addition of cursor-based pagination with prefix support improves the API's usability, allowing developers to implement more efficient data retrieval in application boxes.

### [#6585](https://github.com/algorand/go-algorand/pull/6585) CICD: go-algorand relstable4.6.0-remerge mergeback
**✅ Merged** | *@Algo-devops-service*

- SKIP

### [#6580](https://github.com/algorand/go-algorand/pull/6580) go-algorand 4.6.0-stable Release PR
**✅ Merged** | *@Algo-devops-service*

- The release of go-algorand version 4.6.0 introduces new features and improvements, providing developers with enhanced tools for building applications.

### [#4886](https://github.com/algorand/go-algorand/pull/4886) testing: defi txn group benchmark
**✅ Merged** | *@algorandskiy*

- SKIP

### [#4755](https://github.com/algorand/go-algorand/pull/4755) daemon: pool error messages and old txn expiration
**✅ Merged** | *@algorandskiy*

- The pooling of error messages and old transaction expiration in the daemon improves error handling and transaction management, leading to a more stable application experience.

### [#2093](https://github.com/algorand/go-algorand/pull/2093) DB data migration for empty accounts
**✅ Merged** | *@algorandskiy*

- The DB data migration for empty accounts ensures data integrity and optimizes database performance, benefitting developers managing user accounts.

### [#6330](https://github.com/algorand/go-algorand/pull/6330) network: count received traffic before decompression
**✅ Merged** | *@algorandskiy*

- Counting received traffic before decompression helps optimize network performance and resource utilization, enhancing user experience during data transmission.

### [#5874](https://github.com/algorand/go-algorand/pull/5874) network: fix TestSlowPeerDisconnection regression after #5634
**✅ Merged** | *@algorandskiy*

- The fix for the TestSlowPeerDisconnection regression ensures more reliable testing of peer disconnection scenarios, leading to a more robust network.

### [#2091](https://github.com/algorand/go-algorand/pull/2091) Prevent storing empty accounts in DB after opting out from an app
**✅ Merged** | *@algorandskiy*

- Preventing the storage of empty accounts in the database after opting out from an app maintains data cleanliness and integrity.

### [#6385](https://github.com/algorand/go-algorand/pull/6385) network: disable pubsub PX for hybrid relays
**✅ Merged** | *@algorandskiy*

- Disabling pubsub PX for hybrid relays improves message propagation efficiency in certain network configurations, benefiting developers using hybrid relay setups.

### [#6081](https://github.com/algorand/go-algorand/pull/6081) network: remove ws net proto 2.1
**✅ Merged** | *@algorandskiy*

- Removing the ws net proto 2.1 reduces unnecessary complexity in the network stack, streamlining communication protocols for developers.

### [#6391](https://github.com/algorand/go-algorand/pull/6391) network: wsnet with p2p backup meshing strategy
**✅ Merged** | *@algorandskiy*

- The introduction of a new p2p backup meshing strategy enhances network resilience, providing developers and users with a more reliable connectivity option.

### [#6374](https://github.com/algorand/go-algorand/pull/6374) network: refactor networking mesh maintaining code
**✅ Merged** | *@algorandskiy*

- Refactoring the networking mesh maintaining code improves maintainability and performance, making it easier for developers to work with the networking layer.

### [#4910](https://github.com/algorand/go-algorand/pull/4910) rest api: update WaitForBlock summary
**✅ Merged** | *@algorandskiy*

- Updating the WaitForBlock summary in the REST API enhances documentation clarity, aiding developers in understanding its functionality.

### [#6272](https://github.com/algorand/go-algorand/pull/6272) util: implement GetTotalMemory for mac and windows
**✅ Merged** | *@algorandskiy*

- Implementing GetTotalMemory for macOS and Windows provides developers with better system resource management capabilities.

### [#5457](https://github.com/algorand/go-algorand/pull/5457) algod: adjust numeric version encoding
**✅ Merged** | *@algorandskiy*

- Adjusting numeric version encoding in algod improves compatibility and consistency across different components of the system.

### [#4031](https://github.com/algorand/go-algorand/pull/4031) 320 rounds: txtail review fixes
**✅ Merged** | *@algorandskiy*

- SKIP

### [#3988](https://github.com/algorand/go-algorand/pull/3988) TxTail reload test
**✅ Merged** | *@algorandskiy*

- SKIP

### [#3935](https://github.com/algorand/go-algorand/pull/3935) 320 rounds: expose block header from txtail
**✅ Merged** | *@algorandskiy*

- Exposing block header from txtail allows developers to access more detailed blockchain information, enhancing application capabilities.

### [#6520](https://github.com/algorand/go-algorand/pull/6520) txHandler: do not forward p2p -> ws non-accepted messages
**✅ Merged** | *@algorandskiy*

- The modification to txHandler prevents the forwarding of non-accepted messages, ensuring cleaner message handling in the network.

### [#4905](https://github.com/algorand/go-algorand/pull/4905) tests: fix flaky TestTxHandlerRememberReportErrorsWithTxPool
**✅ Merged** | *@algorandskiy*

- Fixing a flaky test in the txHandler improves the reliability of the testing suite, ensuring consistent results for developers.

### [#3874](https://github.com/algorand/go-algorand/pull/3874) 320 rounds: minor txTail fixes
**✅ Merged** | *@algorandskiy*

- SKIP

### [#6257](https://github.com/algorand/go-algorand/pull/6257) txHandler: do not drop accepted mgs
**✅ Merged** | *@algorandskiy*

- The implementation of early duplicates detection in the txHandler enhances transaction processing efficiency, reducing potential errors.

### [#6195](https://github.com/algorand/go-algorand/pull/6195) network: handle empty wsPeer supplied to transaction handler
**✅ Merged** | *@algorandskiy*

- Introducing an applications rate limiter helps manage application usage, ensuring fair resource allocation among users.

### [#4877](https://github.com/algorand/go-algorand/pull/4877) txHandler: disable canonical hashmap by default
**✅ Merged** | *@algorandskiy*

- Fixing the TestTxHandlerAppRateLimiter ensures that the rate limiting functionality is correctly validated, improving the reliability of application interactions.

### [#4806](https://github.com/algorand/go-algorand/pull/4806) txHandler: early duplicates detection
**✅ Merged** | *@algorandskiy*

- Enhancements to ERL resources management in the txHandler optimize resource utilization, benefiting application performance.

### [#5734](https://github.com/algorand/go-algorand/pull/5734) txHandler: applications rate limiter
**✅ Merged** | *@algorandskiy*

- Adjusting ARL triggering to occur at half of a base backlog capacity improves responsiveness to transaction loads, enhancing user experience.

### [#4923](https://github.com/algorand/go-algorand/pull/4923) bench: fix benchmarking after remerges
**✅ Merged** | *@algorandskiy*

- Fixing ARL triggering without ERL ensures consistent application behavior under varying load conditions.

### [#6075](https://github.com/algorand/go-algorand/pull/6075) txHandler: fix TestTxHandlerAppRateLimiter
**✅ Merged** | *@algorandskiy*

- Implementing catchpoint persistence enhances the reliability of catchpoint functionality, aiding developers in maintaining application state.

### [#6019](https://github.com/algorand/go-algorand/pull/6019) txHandler: fixes to ERL resources management
**✅ Merged** | *@algorandskiy*

- Fixing a potential problem with non-uniform consensus versions improves the stability and reliability of the consensus mechanism.

### [#5873](https://github.com/algorand/go-algorand/pull/5873) txHandler: kick in ARL at 1/2 of a base backlog capacity
**✅ Merged** | *@algorandskiy*

- Bumping the defaultKMDTimeoutSecs in libgoal enhances timeout handling, improving the overall robustness of the KMD operations.

### [#5872](https://github.com/algorand/go-algorand/pull/5872) txHandler: fix ARL triggering without ERL
**✅ Merged** | *@algorandskiy*

- SKIP

### [#4075](https://github.com/algorand/go-algorand/pull/4075) 320 rounds: implement catchpoint persistence - enhancements
**✅ Merged** | *@algorandskiy*

- SKIP

### [#3453](https://github.com/algorand/go-algorand/pull/3453) Fix a potential problem of committing non-uniform consensus versions
**✅ Merged** | *@algorandskiy*

- Increasing the wait timeout in TestTotalWeightChanges improves test reliability, ensuring that developers can trust the results.

### [#6353](https://github.com/algorand/go-algorand/pull/6353) libgoal: bump defaultKMDTimeoutSecs
**✅ Merged** | *@algorandskiy*

- Fixing top online warning in TestAcctUpdatesCachesInitialization enhances the accuracy of tests, providing clearer insights for developers.

### [#6137](https://github.com/algorand/go-algorand/pull/6137) tests: go test RUN/PASS output parser
**✅ Merged** | *@algorandskiy*

- Reenabling catchpoint tests ensures comprehensive testing of catchpoint functionality, improving overall system reliability.

### [#5881](https://github.com/algorand/go-algorand/pull/5881) tests: log all relay logs on e2e failure
**✅ Merged** | *@algorandskiy*

- Adding retries to TestCatchpointTrackerWaitNotBlocking enhances test resilience, providing more reliable test outcomes for developers.

### [#4473](https://github.com/algorand/go-algorand/pull/4473) tests: ledger reload accessing txtail history
**✅ Merged** | *@algorandskiy*

- Fixing publicKeyIdentTracker data race in hybrid mode enhances stability and prevents potential issues during network operations.

### [#4446](https://github.com/algorand/go-algorand/pull/4446) tests: fix logged panics in reproducible labels test
**✅ Merged** | *@algorandskiy*

- Adding more metrics in the txHandler enhances monitoring capabilities, providing developers with better insights into transaction processing.

### [#6420](https://github.com/algorand/go-algorand/pull/6420) tests: increase wait timeout in TestTotalWeightChanges
**✅ Merged** | *@algorandskiy*

- Listening for upcoming spinoff connections in tealdbg improves debugging capabilities for developers working with TEAL programs.

### [#4451](https://github.com/algorand/go-algorand/pull/4451) tests: fix top online warning in TestAcctUpdatesCachesInitialization
**✅ Merged** | *@algorandskiy*

- Enabling cost and fee pooling in tealdbg enhances cost management for developers, allowing for more efficient transaction processing.

### [#4419](https://github.com/algorand/go-algorand/pull/4419) tests: reenable catchpoint tests
**✅ Merged** | *@algorandskiy*

- Printing out intermediate decoding errors improves debugging and error reporting, aiding developers in identifying issues.

### [#6472](https://github.com/algorand/go-algorand/pull/6472) tests: add retries to TestCatchpointTrackerWaitNotBlocking
**✅ Merged** | *@algorandskiy*

- Listening on a specified address in tealdbg enhances flexibility for developers, allowing them to customize their debugging environment.

### [#6086](https://github.com/algorand/go-algorand/pull/6086) p2p: do not register closing peer
**✅ Merged** | *@algorandskiy*

- Extending global and txn field tests for all TEAL versions and protocols ensures comprehensive testing coverage, enhancing reliability for developers.

### [#5520](https://github.com/algorand/go-algorand/pull/5520) tests: fix TestLedgerReloadStateProofVerificationTracker
**✅ Merged** | *@algorandskiy*

- SKIP

### [#6480](https://github.com/algorand/go-algorand/pull/6480) tests: disable flaky TestSimpleUpgrade on macos CI builder
**✅ Merged** | *@algorandskiy*

- SKIP

### [#6098](https://github.com/algorand/go-algorand/pull/6098) tests: flaky tests fixes
**✅ Merged** | *@algorandskiy*

- Merging master into stateproof verification ensures that the stateproof functionality is up-to-date with the latest changes, improving reliability.

### [#5496](https://github.com/algorand/go-algorand/pull/5496) tests: reenable TestVotersReloadFromDiskPassRecoveryPeriod
**✅ Merged** | *@algorandskiy*

- Fixing state proof e2e test failures enhances the robustness of the testing suite, ensuring consistent validation of stateproof functionality.

### [#5494](https://github.com/algorand/go-algorand/pull/5494) tests: fix flaky ledger stateproof and rpcs tests
**✅ Merged** | *@algorandskiy*

- SKIP

### [#6579](https://github.com/algorand/go-algorand/pull/6579) pingpong: fix asset creation race
**✅ Merged** | *@algorandskiy*

- Making catchpoint generation backward compatible improves usability for developers, allowing for smoother transitions between versions.

### [#6574](https://github.com/algorand/go-algorand/pull/6574) tests: fix TestNodeSetCatchpointCatchupMode data race
**✅ Merged** | *@algorandskiy*

- Fixing metrics test in

### [#5487](https://github.com/algorand/go-algorand/pull/5487) tests: flaky tests fixes
**✅ Merged** | *@algorandskiy*

undefined

### [#6546](https://github.com/algorand/go-algorand/pull/6546) tests: fix flaky fetcher, catchpoint, expect tests
**✅ Merged** | *@algorandskiy*

undefined

### [#6110](https://github.com/algorand/go-algorand/pull/6110) network: fix publicKeyIdentTracker data race in hybrid mode
**✅ Merged** | *@algorandskiy*

undefined

### [#4786](https://github.com/algorand/go-algorand/pull/4786) txHandler: add more metric
**✅ Merged** | *@algorandskiy*

undefined

### [#1634](https://github.com/algorand/go-algorand/pull/1634) tealdbg: listen for upcoming spinoff connections
**✅ Merged** | *@algorandskiy*

undefined

### [#2954](https://github.com/algorand/go-algorand/pull/2954) Enable cost and fee pooling in tealdbg
**✅ Merged** | *@algorandskiy*

undefined

### [#2084](https://github.com/algorand/go-algorand/pull/2084) Print out intermediate decoding errors
**✅ Merged** | *@algorandskiy*

undefined

### [#1977](https://github.com/algorand/go-algorand/pull/1977) tealdbg: listen on specified address
**✅ Merged** | *@algorandskiy*

undefined

### [#2669](https://github.com/algorand/go-algorand/pull/2669) Extend global and txn field tests for all TEAL versions and protocols
**✅ Merged** | *@algorandskiy*

undefined

### [#2336](https://github.com/algorand/go-algorand/pull/2336) Add missing txna allowed args to doc and langspec
**✅ Merged** | *@algorandskiy*

undefined

### [#4827](https://github.com/algorand/go-algorand/pull/4827) test: disable TestWebsocketNetworkTelemetryTCP on CI
**✅ Merged** | *@algorandskiy*

undefined

### [#5199](https://github.com/algorand/go-algorand/pull/5199) stateproof: merge master
**✅ Merged** | *@algorandskiy*

undefined

### [#5170](https://github.com/algorand/go-algorand/pull/5170) Do not stop stateproof service in fast catchup mode
**✅ Merged** | *@algorandskiy*

undefined

### [#5148](https://github.com/algorand/go-algorand/pull/5148) merge master into stateproof-verification
**✅ Merged** | *@algorandskiy*

undefined

### [#5839](https://github.com/algorand/go-algorand/pull/5839) tests: fix state proof e2e test failures
**✅ Merged** | *@algorandskiy*

undefined

### [#1838](https://github.com/algorand/go-algorand/pull/1838) Switch from map of modified accounts to an array
**✅ Merged** | *@algorandskiy*

undefined

### [#5598](https://github.com/algorand/go-algorand/pull/5598) ledger: make catchpoint generation backward compatible
**✅ Merged** | *@algorandskiy*

undefined

### [#4396](https://github.com/algorand/go-algorand/pull/4396) tests: add debug output to e2e_basic_start_stop
**✅ Merged** | *@algorandskiy*

undefined

### [#5830](https://github.com/algorand/go-algorand/pull/5830) ledger: rollback vetting historical stateproof blocks
**✅ Merged** | *@algorandskiy*

undefined

### [#5106](https://github.com/algorand/go-algorand/pull/5106) ledger: fix metrics test
**✅ Merged** | *@algorandskiy*

undefined

### [#5099](https://github.com/algorand/go-algorand/pull/5099) ledger: eternalData trackers concept
**✅ Merged** | *@algorandskiy*

undefined

### [#5070](https://github.com/algorand/go-algorand/pull/5070) algod: split SetFdSoftLimit calls for relay and non-relay nodes
**✅ Merged** | *@algorandskiy*

undefined

### [#5966](https://github.com/algorand/go-algorand/pull/5966) tests: move TestCheckSpender to transactions package
**✅ Merged** | *@algorandskiy*

undefined

### [#5891](https://github.com/algorand/go-algorand/pull/5891) api: optimize /transactions/pending/{txid} endpoint
**✅ Merged** | *@algorandskiy*

undefined

### [#6069](https://github.com/algorand/go-algorand/pull/6069) rest api: make RawTransactionAsync developer api
**✅ Merged** | *@algorandskiy*

undefined

### [#6067](https://github.com/algorand/go-algorand/pull/6067) rest api: Fix to Disable API authentication
**✅ Merged** | *@algorandskiy*

undefined

### [#5738](https://github.com/algorand/go-algorand/pull/5738) tests: fix flaky simulate test
**✅ Merged** | *@algorandskiy*

undefined

### [#6377](https://github.com/algorand/go-algorand/pull/6377) tests: remove "Fail" part from test test names
**✅ Merged** | *@algorandskiy*

undefined

### [#2972](https://github.com/algorand/go-algorand/pull/2972) Fix global-state-schema key name in REST API spec
**✅ Merged** | *@algorandskiy*

undefined

### [#5851](https://github.com/algorand/go-algorand/pull/5851) network: fixes to public address support
**✅ Merged** | *@algorandskiy*

undefined

### [#5420](https://github.com/algorand/go-algorand/pull/5420) tools: txn replayer
**✅ Merged** | *@algorandskiy*

undefined

### [#2255](https://github.com/algorand/go-algorand/pull/2255) Introduce V28 consensus version
**✅ Merged** | *@algorandskiy*

undefined

### [#4716](https://github.com/algorand/go-algorand/pull/4716) test: fix after boxes and prefetcher remerge
**✅ Merged** | *@algorandskiy*

undefined

### [#4352](https://github.com/algorand/go-algorand/pull/4352) prefetcher: enable prefetcher for assets and apps
**✅ Merged** | *@algorandskiy*

undefined

### [#4650](https://github.com/algorand/go-algorand/pull/4650) network: compression followup fixes
**✅ Merged** | *@algorandskiy*

undefined

### [#4589](https://github.com/algorand/go-algorand/pull/4589) network: proposal payload compression
**✅ Merged** | *@algorandskiy*

undefined

### [#5815](https://github.com/algorand/go-algorand/pull/5815) tests: add refreshAvailablePeers catchup unit test
**✅ Merged** | *@algorandskiy*

undefined

### [#5682](https://github.com/algorand/go-algorand/pull/5682) build: disable pebbledb on arm32
**✅ Merged** | *@algorandskiy*

undefined

### [#5235](https://github.com/algorand/go-algorand/pull/5235) algod: search phonebook in data directory in addition to bindir
**✅ Merged** | *@algorandskiy*

undefined

### [#4265](https://github.com/algorand/go-algorand/pull/4265) testing: fix TestParticipationDB_Locking
**✅ Merged** | *@algorandskiy*

undefined

### [#6126](https://github.com/algorand/go-algorand/pull/6126) p2p: fan in incoming txns into backlog worker
**✅ Merged** | *@algorandskiy*

undefined

### [#5982](https://github.com/algorand/go-algorand/pull/5982) p2p: fix wantTXGossip modifications
**✅ Merged** | *@algorandskiy*

undefined

### [#6381](https://github.com/algorand/go-algorand/pull/6381) network: do not use telemetry id for p2p nets
**✅ Merged** | *@algorandskiy*

undefined

### [#6336](https://github.com/algorand/go-algorand/pull/6336) tests: fix a race in TestP2PMetainfoExchange
**✅ Merged** | *@algorandskiy*

undefined

### [#6156](https://github.com/algorand/go-algorand/pull/6156) network: handle p2p to ws messages propagation
**✅ Merged** | *@algorandskiy*

undefined

### [#5941](https://github.com/algorand/go-algorand/pull/5941) p2p: add telemetry and DHT/libp2p metrics
**✅ Merged** | *@algorandskiy*

undefined

### [#6048](https://github.com/algorand/go-algorand/pull/6048) tests: extend TestP2PRelay logging
**✅ Merged** | *@algorandskiy*

undefined

### [#5962](https://github.com/algorand/go-algorand/pull/5962) p2p: test scenarios support
**✅ Merged** | *@algorandskiy*

undefined

### [#5935](https://github.com/algorand/go-algorand/pull/5935) p2p: introduce Gossip peer capability
**✅ Merged** | *@algorandskiy*

undefined

### [#6070](https://github.com/algorand/go-algorand/pull/6070) p2p: handle txns in pubsub validator
**✅ Merged** | *@algorandskiy*

undefined

### [#6059](https://github.com/algorand/go-algorand/pull/6059) tests: disable TestP2PRelay on CI
**✅ Merged** | *@algorandskiy*

undefined

### [#6569](https://github.com/algorand/go-algorand/pull/6569) network: adjust pubsub params
**✅ Merged** | *@algorandskiy*

undefined

### [#6545](https://github.com/algorand/go-algorand/pull/6545) Chore: do not modify pubsub global variables
**✅ Merged** | *@algorandskiy*

undefined

### [#6101](https://github.com/algorand/go-algorand/pull/6101) p2p: get rid of interface{} from PeerStore methods
**✅ Merged** | *@algorandskiy*

undefined

### [#6119](https://github.com/algorand/go-algorand/pull/6119) p2p: store private keys as PKCS#8 ASN.1 DER PEM
**✅ Merged** | *@algorandskiy*

undefined

### [#5867](https://github.com/algorand/go-algorand/pull/5867) p2p: start p2p networking and DHT ops when starting services, not when instantiating them
**✅ Merged** | *@algorandskiy*

undefined

### [#5929](https://github.com/algorand/go-algorand/pull/5929) p2p: support block request redirects for p2p addresses
**✅ Merged** | *@algorandskiy*

undefined

### [#6147](https://github.com/algorand/go-algorand/pull/6147) tools: heapWatch metrics imported into Prometheus/Grafana
**✅ Merged** | *@algorandskiy*

undefined

### [#6127](https://github.com/algorand/go-algorand/pull/6127) node: clear new p2p net handlers on fast catchup
**✅ Merged** | *@algorandskiy*

undefined

### [#6105](https://github.com/algorand/go-algorand/pull/6105) p2p: Add algod_network_p2p_* traffic metrics
**✅ Merged** | *@algorandskiy*

undefined

### [#5898](https://github.com/algorand/go-algorand/pull/5898) p2p: HTTP catchup over p2p network
**✅ Merged** | *@algorandskiy*

undefined

### [#6144](https://github.com/algorand/go-algorand/pull/6144) network: fix misplaced p2p received TX metric
**✅ Merged** | *@algorandskiy*

undefined

### [#6376](https://github.com/algorand/go-algorand/pull/6376) node: fallback to ws or p2p on hybrid misconfiguration
**✅ Merged** | *@algorandskiy*

undefined

### [#6082](https://github.com/algorand/go-algorand/pull/6082) p2p: fix connection deduplication in hybrid mode
**✅ Merged** | *@algorandskiy*

undefined

### [#6035](https://github.com/algorand/go-algorand/pull/6035) p2p: hybrid node net identity for connection deduplication
**✅ Merged** | *@algorandskiy*

undefined

### [#6130](https://github.com/algorand/go-algorand/pull/6130) config: ensure both ws and p2p net running the same mode in hybrid
**✅ Merged** | *@algorandskiy*

undefined

### [#5933](https://github.com/algorand/go-algorand/pull/5933) network: unify wsPeerCore use for HTTP and p2p HTTP transport
**✅ Merged** | *@algorandskiy*

undefined

### [#5922](https://github.com/algorand/go-algorand/pull/5922) p2p: enable p2p http txsync
**✅ Merged** | *@algorandskiy*

undefined

### [#5931](https://github.com/algorand/go-algorand/pull/5931) p2p: rate limit outgoing p2p http connections
**✅ Merged** | *@algorandskiy*

undefined

### [#5924](https://github.com/algorand/go-algorand/pull/5924) p2p: http catchpoints support
**✅ Merged** | *@algorandskiy*

undefined

### [#6312](https://github.com/algorand/go-algorand/pull/6312) p2p: peer metainfo support
**✅ Merged** | *@algorandskiy*

undefined

### [#6123](https://github.com/algorand/go-algorand/pull/6123) p2p: make sure p2p http server runs on all interfaces
**✅ Merged** | *@algorandskiy*

undefined

### [#5976](https://github.com/algorand/go-algorand/pull/5976) p2p: refactor gossipsub to validation and handling
**✅ Merged** | *@algorandskiy*

undefined

### [#6132](https://github.com/algorand/go-algorand/pull/6132) p2p: exclude self from GetPeers results
**✅ Merged** | *@algorandskiy*

undefined

### [#6129](https://github.com/algorand/go-algorand/pull/6129) p2p: reuse existing libp2p.Host for http clients
**✅ Merged** | *@algorandskiy*

undefined

### [#6566](https://github.com/algorand/go-algorand/pull/6566) tests: fix stopping race in http client harness
**✅ Merged** | *@algorandskiy*

undefined

### [#6554](https://github.com/algorand/go-algorand/pull/6554) p2p: ignore pubsub PX peers for all node modes
**✅ Merged** | *@algorandskiy*

undefined

### [#6118](https://github.com/algorand/go-algorand/pull/6118) network: fix outgoing HTTP rate limiting
**✅ Merged** | *@algorandskiy*

undefined

### [#6116](https://github.com/algorand/go-algorand/pull/6116) tests: fix a race in TestP2PwsStreamHandlerDedup
**✅ Merged** | *@algorandskiy*

undefined

### [#6562](https://github.com/algorand/go-algorand/pull/6562) p2p: fix StopNotify vs notifyAll deadlock on stop
**✅ Merged** | *@algorandskiy*

undefined

### [#6320](https://github.com/algorand/go-algorand/pull/6320) tests: fix TestP2PEnableGossipService_BothDisable
**✅ Merged** | *@algorandskiy*

undefined

### [#6092](https://github.com/algorand/go-algorand/pull/6092) p2p: do not advertise private and non-routable addresses
**✅ Merged** | *@algorandskiy*

undefined

### [#6267](https://github.com/algorand/go-algorand/pull/6267) p2p: fix http RoundTripper
**✅ Merged** | *@algorandskiy*

undefined

### [#6266](https://github.com/algorand/go-algorand/pull/6266) catchpointdump: support p2p nodes
**✅ Merged** | *@algorandskiy*

undefined

### [#6308](https://github.com/algorand/go-algorand/pull/6308) network: close p2p conn in CloseWithoutFlush
**✅ Merged** | *@algorandskiy*

undefined

### [#6073](https://github.com/algorand/go-algorand/pull/6073) p2p: support EnableGossipService in p2p streams
**✅ Merged** | *@algorandskiy*

undefined

### [#6096](https://github.com/algorand/go-algorand/pull/6096) docs: p2p package overview
**✅ Merged** | *@algorandskiy*

undefined

### [#5926](https://github.com/algorand/go-algorand/pull/5926) p2p: fix infinite loop in dnsaddr resolution
**✅ Merged** | *@algorandskiy*

undefined

### [#6299](https://github.com/algorand/go-algorand/pull/6299) p2p: fix DHT FindPeer internal buffer size
**✅ Merged** | *@algorandskiy*

undefined

### [#6142](https://github.com/algorand/go-algorand/pull/6142) p2p: upgrade libp2p
**✅ Merged** | *@algorandskiy*

undefined

### [#6079](https://github.com/algorand/go-algorand/pull/6079) tests: fix TestNodeHybridTopology
**✅ Merged** | *@algorandskiy*

undefined

### [#6040](https://github.com/algorand/go-algorand/pull/6040) p2p: more CR fixes: ERL and DHT err logging
**✅ Merged** | *@algorandskiy*

undefined

### [#6038](https://github.com/algorand/go-algorand/pull/6038) p2p feature PR: CR fixes
**✅ Merged** | *@algorandskiy*

undefined

### [#6277](https://github.com/algorand/go-algorand/pull/6277) catchup: improve classBasedPeerSelector on small peer sets
**✅ Merged** | *@algorandskiy*

undefined

### [#6103](https://github.com/algorand/go-algorand/pull/6103) config: use P2PHybridIncomingConnectionsLimit only for hybrid mode
**✅ Merged** | *@algorandskiy*

undefined

### [#5827](https://github.com/algorand/go-algorand/pull/5827) p2p dht: more tests and minor fixes
**✅ Merged** | *@algorandskiy*

undefined

### [#6318](https://github.com/algorand/go-algorand/pull/6318) p2p: reduce severity of failed capabilities advertisement
**✅ Merged** | *@algorandskiy*

undefined

### [#6310](https://github.com/algorand/go-algorand/pull/6310) p2p: ignore initial no peers error in capabilities advertisement
**✅ Merged** | *@algorandskiy*

undefined

### [#6131](https://github.com/algorand/go-algorand/pull/6131) network: allow multi-role phonebook entries
**✅ Merged** | *@algorandskiy*

undefined

### [#5833](https://github.com/algorand/go-algorand/pull/5833) p2p: fix dht-hybrid merge
**✅ Merged** | *@algorandskiy*

undefined

### [#2732](https://github.com/algorand/go-algorand/pull/2732) Make config.MaxLogCalls dependant on some consensus param
**✅ Merged** | *@algorandskiy*

undefined

### [#4611](https://github.com/algorand/go-algorand/pull/4611) ledger: fix accounts cache ordering
**✅ Merged** | *@algorandskiy*

undefined

### [#3831](https://github.com/algorand/go-algorand/pull/3831) ledger: test OnlineAccountData
**✅ Merged** | *@algorandskiy*

undefined

### [#6314](https://github.com/algorand/go-algorand/pull/6314) ledger: fix duplicate empty rows for suspended accounts
**✅ Merged** | *@algorandskiy*

undefined

### [#6295](https://github.com/algorand/go-algorand/pull/6295) ledger: fix exceeding offline rows in online accounts table
**✅ Merged** | *@algorandskiy*

undefined

### [#6505](https://github.com/algorand/go-algorand/pull/6505) test: fix node TestNodeHybridTopology
**✅ Merged** | *@algorandskiy*

undefined

### [#6412](https://github.com/algorand/go-algorand/pull/6412) tests: debug node TestNodeHybridTopology
**✅ Merged** | *@algorandskiy*

undefined

### [#3639](https://github.com/algorand/go-algorand/pull/3639) goal node create improvements
**✅ Merged** | *@algorandskiy*

undefined

### [#6517](https://github.com/algorand/go-algorand/pull/6517) network: fix double counting in numOutgoingPending
**✅ Merged** | *@algorandskiy*

undefined

### [#6407](https://github.com/algorand/go-algorand/pull/6407) tests: network flaky tests fixes
**✅ Merged** | *@algorandskiy*

undefined

### [#5936](https://github.com/algorand/go-algorand/pull/5936) network: use network context for DNS operations in readFromSRV
**✅ Merged** | *@algorandskiy*

undefined

### [#6519](https://github.com/algorand/go-algorand/pull/6519) network: exclude TX traffic from conn performance monitoring
**✅ Merged** | *@algorandskiy*

undefined

### [#6518](https://github.com/algorand/go-algorand/pull/6518) network: handle p2p addr expiration in ReplacePeerList
**✅ Merged** | *@algorandskiy*

undefined

### [#6406](https://github.com/algorand/go-algorand/pull/6406) network: fix mesher stopping logic
**✅ Merged** | *@algorandskiy*

undefined

### [#6316](https://github.com/algorand/go-algorand/pull/6316) tests: fix TestP2PRelay data race
**✅ Merged** | *@algorandskiy*

undefined

### [#6269](https://github.com/algorand/go-algorand/pull/6269) test: add OverrideKmdConfig to libgoalFixture
**✅ Merged** | *@algorandskiy*

undefined

### [#5231](https://github.com/algorand/go-algorand/pull/5231) test: enable runtime metrics in custom templates
**✅ Merged** | *@algorandskiy*

undefined

### [#6091](https://github.com/algorand/go-algorand/pull/6091) netgoal: allow unknown template tokens
**✅ Merged** | *@algorandskiy*

undefined

### [#5205](https://github.com/algorand/go-algorand/pull/5205) tools: compare node.log for matching catchpoint roots
**✅ Merged** | *@algorandskiy*

undefined

### [#5178](https://github.com/algorand/go-algorand/pull/5178) deploy templates: increase default npn number for mmnet-model
**✅ Merged** | *@algorandskiy*

undefined

### [#5801](https://github.com/algorand/go-algorand/pull/5801) tools: improve heapwatch chart drawing scripts
**✅ Merged** | *@algorandskiy*

undefined

### [#5661](https://github.com/algorand/go-algorand/pull/5661) tools: metrics files visualizer
**✅ Merged** | *@algorandskiy*

undefined

### [#4833](https://github.com/algorand/go-algorand/pull/4833) metrics: count large txn groups and msigs
**✅ Merged** | *@algorandskiy*

undefined

### [#6108](https://github.com/algorand/go-algorand/pull/6108) metrics: collect total netdev sent/received bytes
**✅ Merged** | *@algorandskiy*

undefined

### [#4529](https://github.com/algorand/go-algorand/pull/4529) tests: fix network metrics race condition in tests
**✅ Merged** | *@algorandskiy*

undefined

### [#4899](https://github.com/algorand/go-algorand/pull/4899) metrics: update some new metric names
**✅ Merged** | *@algorandskiy*

undefined

### [#4526](https://github.com/algorand/go-algorand/pull/4526) metrics: network tag filtering test
**✅ Merged** | *@algorandskiy*

undefined

### [#4879](https://github.com/algorand/go-algorand/pull/4879) metrics: fix TestGetValue
**✅ Merged** | *@algorandskiy*

undefined

### [#4839](https://github.com/algorand/go-algorand/pull/4839) txHandler: metrics for txpool.Remember
**✅ Merged** | *@algorandskiy*

undefined

### [#3661](https://github.com/algorand/go-algorand/pull/3661) algod : deregister metrics tracker on close
**✅ Merged** | *@algorandskiy*

undefined

### [#5956](https://github.com/algorand/go-algorand/pull/5956) metrics: support labeled gauges
**✅ Merged** | *@algorandskiy*

undefined

### [#2040](https://github.com/algorand/go-algorand/pull/2040) Unit test demonstrating high memory consumption
**✅ Merged** | *@algorandskiy*

undefined

### [#5655](https://github.com/algorand/go-algorand/pull/5655) encoding: eliminate unnecessary allocations
**✅ Merged** | *@algorandskiy*

undefined

### [#2006](https://github.com/algorand/go-algorand/pull/2006) Improve memory allocations in cloneAssetHoldings and cloneAssetParams
**✅ Merged** | *@algorandskiy*

undefined

### [#4082](https://github.com/algorand/go-algorand/pull/4082) ledger: onlineacct tracker preserve blocks as voters requires
**✅ Merged** | *@algorandskiy*

undefined

### [#3939](https://github.com/algorand/go-algorand/pull/3939) ledger: fix lookupLatest usage of the resources cache
**✅ Merged** | *@algorandskiy*

undefined

### [#4235](https://github.com/algorand/go-algorand/pull/4235) 320 rounds: fix linter complains
**✅ Merged** | *@algorandskiy*

undefined

### [#4221](https://github.com/algorand/go-algorand/pull/4221) 320 rounds: PR feedback fixes
**✅ Merged** | *@algorandskiy*

undefined

### [#3885](https://github.com/algorand/go-algorand/pull/3885) 320 rounds: restore voting data in accountbase
**✅ Merged** | *@algorandskiy*

undefined

### [#4211](https://github.com/algorand/go-algorand/pull/4211) 320 rounds PR feedback
**✅ Merged** | *@algorandskiy*

undefined

### [#4209](https://github.com/algorand/go-algorand/pull/4209) Re-enable catchpoint expect test
**✅ Merged** | *@algorandskiy*

undefined

### [#4200](https://github.com/algorand/go-algorand/pull/4200) 320 rounds: PR feedback fixes
**✅ Merged** | *@algorandskiy*

undefined

### [#4185](https://github.com/algorand/go-algorand/pull/4185) txtail: do not lock in commitRound
**✅ Merged** | *@algorandskiy*

undefined

### [#4032](https://github.com/algorand/go-algorand/pull/4032) Move online queries into onlineAccountsDbQueries
**✅ Merged** | *@algorandskiy*

undefined

### [#3951](https://github.com/algorand/go-algorand/pull/3951) 320 rounds: more precise online accounts test
**✅ Merged** | *@algorandskiy*

undefined

### [#3891](https://github.com/algorand/go-algorand/pull/3891) 320 rounds: Add LRU cache into online accounts tracker
**✅ Merged** | *@algorandskiy*

undefined

### [#4052](https://github.com/algorand/go-algorand/pull/4052) Better reporting for TestLedgerMemoryLeak
**✅ Merged** | *@algorandskiy*

undefined

### [#3814](https://github.com/algorand/go-algorand/pull/3814) 320 rounds: online accounts DB support
**✅ Merged** | *@algorandskiy*

undefined

### [#3800](https://github.com/algorand/go-algorand/pull/3800) 320 rounds: make a separate online accounts tracker
**✅ Merged** | *@algorandskiy*

undefined

### [#4207](https://github.com/algorand/go-algorand/pull/4207) Fix exceed mem allocation in state deltas
**✅ Merged** | *@algorandskiy*

undefined

### [#3899](https://github.com/algorand/go-algorand/pull/3899) 320 rounds: parameterized lookback
**✅ Merged** | *@algorandskiy*

undefined

### [#4097](https://github.com/algorand/go-algorand/pull/4097) Temporary disable empty voting data check
**✅ Merged** | *@algorandskiy*

undefined

### [#3974](https://github.com/algorand/go-algorand/pull/3974) 320 rounds: Ledger keyreg test
**✅ Merged** | *@algorandskiy*

undefined

### [#3876](https://github.com/algorand/go-algorand/pull/3876) 320 rounds: fix TestFullCatchpointWriter
**✅ Merged** | *@algorandskiy*

undefined

### [#4042](https://github.com/algorand/go-algorand/pull/4042) 320 rounds: Fix race cond in TestReproducibleCatchpointLabels
**✅ Merged** | *@algorandskiy*

undefined

### [#4037](https://github.com/algorand/go-algorand/pull/4037) 320 rounds: extended online accounts history for voters
**✅ Merged** | *@algorandskiy*

undefined

### [#5999](https://github.com/algorand/go-algorand/pull/5999) logger: fix data race in tests
**✅ Merged** | *@algorandskiy*

undefined

### [#4893](https://github.com/algorand/go-algorand/pull/4893) teal: optimize CheckSignature
**✅ Merged** | *@algorandskiy*

undefined

### [#4038](https://github.com/algorand/go-algorand/pull/4038) 320 rounds: fix cache incompleteness
**✅ Merged** | *@algorandskiy*

undefined

### [#5741](https://github.com/algorand/go-algorand/pull/5741) chore: generalize persisted lists in ledger
**✅ Merged** | *@algorandskiy*

undefined

### [#5612](https://github.com/algorand/go-algorand/pull/5612) netdeploy: allow simple local net topologies
**✅ Merged** | *@algorandskiy*

undefined

### [#5527](https://github.com/algorand/go-algorand/pull/5527) ledger: increase locks granularity in lookupWithoutRewards
**✅ Merged** | *@algorandskiy*

undefined

### [#6522](https://github.com/algorand/go-algorand/pull/6522) Chore: Update license copyright to 2026
**✅ Merged** | *@algorandskiy*

undefined

### [#6215](https://github.com/algorand/go-algorand/pull/6215) Chore: Update license copyright to 2025
**✅ Merged** | *@algorandskiy*

undefined

### [#5442](https://github.com/algorand/go-algorand/pull/5442) build: fix shadow linter in debug tools
**✅ Merged** | *@algorandskiy*

undefined

### [#5965](https://github.com/algorand/go-algorand/pull/5965) refactor: remove ledgercore.OnlineAccountData
**✅ Merged** | *@algorandskiy*

undefined

### [#5876](https://github.com/algorand/go-algorand/pull/5876) tests: rewrite triggerTrackerFlush test helper
**✅ Merged** | *@algorandskiy*

undefined

### [#5622](https://github.com/algorand/go-algorand/pull/5622) libgoal: set FirstValid to LastRound to prevent early tnxs
**✅ Merged** | *@algorandskiy*

undefined

### [#3769](https://github.com/algorand/go-algorand/pull/3769) ledger: fix LookupLatest when the ledger advances
**✅ Merged** | *@algorandskiy*

undefined

### [#3618](https://github.com/algorand/go-algorand/pull/3618) ledger-refactoring: testing network template
**✅ Merged** | *@algorandskiy*

undefined

### [#2937](https://github.com/algorand/go-algorand/pull/2937) Remove time ledger tracker as not used
**✅ Merged** | *@algorandskiy*

undefined

### [#6024](https://github.com/algorand/go-algorand/pull/6024) tests: fix TestVotersReloadFromDiskAfterOneStateProofCommitted
**✅ Merged** | *@algorandskiy*

undefined

### [#5737](https://github.com/algorand/go-algorand/pull/5737) tests: fix a rare data race in staling tracker tests
**✅ Merged** | *@algorandskiy*

undefined

### [#3348](https://github.com/algorand/go-algorand/pull/3348) ledger refactoring: addrid lookup fix
**✅ Merged** | *@algorandskiy*

undefined

### [#6363](https://github.com/algorand/go-algorand/pull/6363) tests: fix testCatchpointAfterStakeLookupTxns
**✅ Merged** | *@algorandskiy*

undefined

### [#3378](https://github.com/algorand/go-algorand/pull/3378) ledger refactoring: fix zero addrids in TestCompactDeltasResources
**✅ Merged** | *@algorandskiy*

undefined

### [#3373](https://github.com/algorand/go-algorand/pull/3373) ledger refactoring: make TestAcctUpdates faster by ~10s
**✅ Merged** | *@algorandskiy*

undefined

### [#4739](https://github.com/algorand/go-algorand/pull/4739) tests: make ledger tests ~20 sec faster
**✅ Merged** | *@algorandskiy*

undefined

### [#3014](https://github.com/algorand/go-algorand/pull/3014) Allow all trackers committing into DB
**✅ Merged** | *@algorandskiy*

undefined

### [#6090](https://github.com/algorand/go-algorand/pull/6090) tests: fix flushing in TestVotersReloadFromDiskAfterOneStateProofCommitted
**✅ Merged** | *@algorandskiy*

undefined

### [#3640](https://github.com/algorand/go-algorand/pull/3640) ledger refactoring: rename NewAcct to Acct in StateDelta
**✅ Merged** | *@algorandskiy*

undefined

### [#3294](https://github.com/algorand/go-algorand/pull/3294) ledger refactoring: Remove ToBasicsAccountDataMap - part 2
**✅ Merged** | *@algorandskiy*

undefined

### [#6088](https://github.com/algorand/go-algorand/pull/6088) tests: debug logging for TestVotersReloadFromDiskAfterOneStateProofCommitted
**✅ Merged** | *@algorandskiy*

undefined

### [#6060](https://github.com/algorand/go-algorand/pull/6060) tests: fix concurrent accout commits in TestLedgerVerifiesOldStateProofs
**✅ Merged** | *@algorandskiy*

undefined

### [#3292](https://github.com/algorand/go-algorand/pull/3292) ledger refactoring: Ordered resource deltas - part 1
**✅ Merged** | *@algorandskiy*

undefined

### [#3526](https://github.com/algorand/go-algorand/pull/3526) ledger refactoring: remove rtype from resources table
**✅ Merged** | *@algorandskiy*

undefined

### [#3482](https://github.com/algorand/go-algorand/pull/3482) ledger refactoring: generalize TestResourcesDataSetData for apps
**✅ Merged** | *@algorandskiy*

undefined

### [#3323](https://github.com/algorand/go-algorand/pull/3323) ledger refactoring: implement resources writing
**✅ Merged** | *@algorandskiy*

undefined

### [#6041](https://github.com/algorand/go-algorand/pull/6041) ledger: restore block listeners on reloadLedger
**✅ Merged** | *@algorandskiy*

undefined

### [#3410](https://github.com/algorand/go-algorand/pull/3410) ledger refactoring: restore fast rounds for catchpoint e2e test
**✅ Merged** | *@algorandskiy*

undefined

### [#3362](https://github.com/algorand/go-algorand/pull/3362) Fix for deleted resources deltas + test
**✅ Merged** | *@algorandskiy*

undefined

### [#3657](https://github.com/algorand/go-algorand/pull/3657) ledger refactoring: cleanup StateDelta
**✅ Merged** | *@algorandskiy*

undefined

### [#3600](https://github.com/algorand/go-algorand/pull/3600) ledger refactoring: merge in master and c2c
**✅ Merged** | *@algorandskiy*

undefined

### [#3405](https://github.com/algorand/go-algorand/pull/3405) Make TestAcctUpdates faster
**✅ Merged** | *@algorandskiy*

undefined

### [#4425](https://github.com/algorand/go-algorand/pull/4425) ledger: do not shadow db error in account lookup
**✅ Merged** | *@algorandskiy*

undefined

### [#3648](https://github.com/algorand/go-algorand/pull/3648) Add addrid resolution comments
**✅ Merged** | *@algorandskiy*

undefined

### [#3532](https://github.com/algorand/go-algorand/pull/3532) ledger refactoring: more tests and dead code removal
**✅ Merged** | *@algorandskiy*

undefined

### [#6039](https://github.com/algorand/go-algorand/pull/6039) node: close ledger and part keys on node shutdown
**✅ Merged** | *@algorandskiy*

undefined

### [#3623](https://github.com/algorand/go-algorand/pull/3623) ledger: fix ledger.Eval code comments
**✅ Merged** | *@algorandskiy*

undefined

### [#3629](https://github.com/algorand/go-algorand/pull/3629) catchpointdump: load only option
**✅ Merged** | *@algorandskiy*

undefined

### [#3576](https://github.com/algorand/go-algorand/pull/3576) Account sorting in catchpointdump printer
**✅ Merged** | *@algorandskiy*

undefined

### [#3374](https://github.com/algorand/go-algorand/pull/3374) ledger refactoring: catchpoint fixes
**✅ Merged** | *@algorandskiy*

undefined

### [#4463](https://github.com/algorand/go-algorand/pull/4463) ledger: extend catchpoint blocks lookback
**✅ Merged** | *@algorandskiy*

undefined

### [#4460](https://github.com/algorand/go-algorand/pull/4460) ledger: fix txtail restoring from catchpoints
**✅ Merged** | *@algorandskiy*

undefined

### [#3325](https://github.com/algorand/go-algorand/pull/3325) ledger refactoring: catchpointdump support of new schema
**✅ Merged** | *@algorandskiy*

undefined

### [#3408](https://github.com/algorand/go-algorand/pull/3408) ledger refactoring: test for updating holdings and params
**✅ Merged** | *@algorandskiy*

undefined

### [#3367](https://github.com/algorand/go-algorand/pull/3367) Add totals checks into acct updates tests
**✅ Merged** | *@algorandskiy*

undefined

### [#2984](https://github.com/algorand/go-algorand/pull/2984) Move accountdb schema migration to trackerdb.go
**✅ Merged** | *@algorandskiy*

undefined

### [#3492](https://github.com/algorand/go-algorand/pull/3492) ledger refactoring: set empty addrid for deleted resources in base case
**✅ Merged** | *@algorandskiy*

undefined

### [#3050](https://github.com/algorand/go-algorand/pull/3050) Use LookupAgreement in AlgorandFullNode.VotingKeys()
**✅ Merged** | *@algorandskiy*

undefined

### [#3046](https://github.com/algorand/go-algorand/pull/3046) ledger: Implement LookupAgreement
**✅ Merged** | *@algorandskiy*

undefined

### [#5644](https://github.com/algorand/go-algorand/pull/5644) ledger: move accountUpdatesLedgerEvaluator to tracker.go
**✅ Merged** | *@algorandskiy*

undefined

### [#3522](https://github.com/algorand/go-algorand/pull/3522) ledger refactoring: avoid exceed copying when calling WithUpdatedRewards
**✅ Merged** | *@algorandskiy*

undefined

### [#3519](https://github.com/algorand/go-algorand/pull/3519) Add compact deltas permutations into TestAccountUnorderedUpdates
**✅ Merged** | *@algorandskiy*

undefined

### [#3528](https://github.com/algorand/go-algorand/pull/3528) Test empty update entries for deleted accounts in accountsNewRound
**✅ Merged** | *@algorandskiy*

undefined

### [#3518](https://github.com/algorand/go-algorand/pull/3518) ledger refactoring: acct new round fix + test
**✅ Merged** | *@algorandskiy*

undefined

### [#5018](https://github.com/algorand/go-algorand/pull/5018) network: increase max incoming connections limit
**✅ Merged** | *@algorandskiy*

undefined

### [#4930](https://github.com/algorand/go-algorand/pull/4930) log: stderr offending large log messages
**✅ Merged** | *@algorandskiy*

undefined

### [#6125](https://github.com/algorand/go-algorand/pull/6125) scripts: allow metrics filtering by labels in metrics_viz.py
**✅ Merged** | *@algorandskiy*

undefined

### [#6018](https://github.com/algorand/go-algorand/pull/6018) rest api: /debug/settings/pprof admin endpoint for debugging
**✅ Merged** | *@algorandskiy*

undefined

### [#5638](https://github.com/algorand/go-algorand/pull/5638) tools: add mutex profile to heapWatch
**✅ Merged** | *@algorandskiy*

undefined

### [#5761](https://github.com/algorand/go-algorand/pull/5761) tools: better heap data rendering
**✅ Merged** | *@algorandskiy*

undefined

### [#5565](https://github.com/algorand/go-algorand/pull/5565) perf tests: use metrics for memory usage charts
**✅ Merged** | *@algorandskiy*

undefined

### [#6557](https://github.com/algorand/go-algorand/pull/6557) node: collect goroutines stacks before SIGKILL
**✅ Merged** | *@algorandskiy*

undefined

### [#5165](https://github.com/algorand/go-algorand/pull/5165) goal: catchup without args prompts to continue
**✅ Merged** | *@algorandskiy*

undefined

### [#5017](https://github.com/algorand/go-algorand/pull/5017) goal: allow ConfigJSONOverride in local network templates
**✅ Merged** | *@algorandskiy*

undefined

### [#5577](https://github.com/algorand/go-algorand/pull/5577) build: upgrade to go1.20.6
**✅ Merged** | *@algorandskiy*

undefined

### [#5760](https://github.com/algorand/go-algorand/pull/5760) perf: upgrade go-deadlock
**✅ Merged** | *@algorandskiy*

undefined

### [#5224](https://github.com/algorand/go-algorand/pull/5224) util/s3: improve patch number capacity in version comparison
**✅ Merged** | *@algorandskiy*

undefined

### [#2092](https://github.com/algorand/go-algorand/pull/2092) Fix initial balances in ledger tests
**✅ Merged** | *@algorandskiy*

undefined

### [#6261](https://github.com/algorand/go-algorand/pull/6261) network: fix peerstore Get/Put races
**✅ Merged** | *@algorandskiy*

undefined

### [#5188](https://github.com/algorand/go-algorand/pull/5188) ledger: fix error shadowing in onlineAccountsNewRoundImpl
**✅ Merged** | *@algorandskiy*

undefined

### [#2742](https://github.com/algorand/go-algorand/pull/2742) Fix TestRekeyUpgrade test
**✅ Merged** | *@algorandskiy*

undefined

### [#6259](https://github.com/algorand/go-algorand/pull/6259) tests: fix flaky TestLedgerErrorValidate
**✅ Merged** | *@algorandskiy*

undefined

### [#2038](https://github.com/algorand/go-algorand/pull/2038) Fix ClearState program applying when it errs
**✅ Merged** | *@algorandskiy*

undefined

### [#2037](https://github.com/algorand/go-algorand/pull/2037) Fix for empty local state key value map assignment
**✅ Merged** | *@algorandskiy*

undefined

### [#6256](https://github.com/algorand/go-algorand/pull/6256) tests: fix flaky TestApplicationsUpgradeOverREST
**✅ Merged** | *@algorandskiy*

undefined

### [#6251](https://github.com/algorand/go-algorand/pull/6251) tests: fix flaky TestApplicationsUpgradeOverGossip
**✅ Merged** | *@algorandskiy*

undefined

### [#6173](https://github.com/algorand/go-algorand/pull/6173) tests: Fix MaxConnectionsPerIP setting in agreement/gossip tests
**✅ Merged** | *@algorandskiy*

undefined

### [#5266](https://github.com/algorand/go-algorand/pull/5266) ledger: fix error shadowing in accountsNewRound
**✅ Merged** | *@algorandskiy*

undefined

### [#5535](https://github.com/algorand/go-algorand/pull/5535) rest api: Allow fast track transaction broadcasting via txHandler
**✅ Merged** | *@algorandskiy*

undefined

### [#2313](https://github.com/algorand/go-algorand/pull/2313) REST API: make extra-program-pages and apps-total-extra-pages optional
**✅ Merged** | *@algorandskiy*

undefined

### [#2306](https://github.com/algorand/go-algorand/pull/2306) testing: move extra page test to e2e_subs
**✅ Merged** | *@algorandskiy*

undefined

### [#2699](https://github.com/algorand/go-algorand/pull/2699) Add individual program length checks into updateApplication
**✅ Merged** | *@algorandskiy*

undefined

### [#2694](https://github.com/algorand/go-algorand/pull/2694) Consensus upgrade for ExtraProgramPages fix
**✅ Merged** | *@algorandskiy*

undefined

### [#6014](https://github.com/algorand/go-algorand/pull/6014) ledger: introduce expired stake cache
**✅ Merged** | *@algorandskiy*

undefined

### [#5244](https://github.com/algorand/go-algorand/pull/5244) tests: fix expect test regex and logger
**✅ Merged** | *@algorandskiy*

undefined

### [#5158](https://github.com/algorand/go-algorand/pull/5158) tests: fix debug output in expect test harness
**✅ Merged** | *@algorandskiy*

undefined

### [#5119](https://github.com/algorand/go-algorand/pull/5119) tests: debug flaky expect test
**✅ Merged** | *@algorandskiy*

undefined

### [#5078](https://github.com/algorand/go-algorand/pull/5078) tests: add more logging to expect test
**✅ Merged** | *@algorandskiy*

undefined

### [#4343](https://github.com/algorand/go-algorand/pull/4343) tests: extended logging on expect test abort
**✅ Merged** | *@algorandskiy*

undefined

### [#6122](https://github.com/algorand/go-algorand/pull/6122) tests: fix expect tests and add EOF linter
**✅ Merged** | *@algorandskiy*

undefined

### [#4437](https://github.com/algorand/go-algorand/pull/4437) tests: add timestamps to some expect common operations
**✅ Merged** | *@algorandskiy*

undefined

### [#4405](https://github.com/algorand/go-algorand/pull/4405) tests: improve logging in expect tests
**✅ Merged** | *@algorandskiy*

undefined

### [#2790](https://github.com/algorand/go-algorand/pull/2790) Disable expect tests again
**✅ Merged** | *@algorandskiy*

undefined

### [#2781](https://github.com/algorand/go-algorand/pull/2781) Fix goalNodeTest.exp
**✅ Merged** | *@algorandskiy*

undefined

### [#2772](https://github.com/algorand/go-algorand/pull/2772) Fix ParseHostOrURL and enable expect tests
**✅ Merged** | *@algorandskiy*

undefined

### [#6170](https://github.com/algorand/go-algorand/pull/6170) eval: do not disassemble failed app transaction
**✅ Merged** | *@algorandskiy*

undefined

### [#2975](https://github.com/algorand/go-algorand/pull/2975) Extended logic eval error
**✅ Merged** | *@algorandskiy*

undefined

### [#6176](https://github.com/algorand/go-algorand/pull/6176) txHandler: Use IP address instead of IP:port pair
**✅ Merged** | *@algorandskiy*

undefined

### [#2086](https://github.com/algorand/go-algorand/pull/2086) ledger: avoid producing empty local delta
**✅ Merged** | *@algorandskiy*

undefined

### [#5995](https://github.com/algorand/go-algorand/pull/5995) tests: make e2e TestBasicSuspension less flaky
**✅ Merged** | *@algorandskiy*

undefined

### [#5681](https://github.com/algorand/go-algorand/pull/5681) tests: log algod-err and algod-out on e2e failure
**✅ Merged** | *@algorandskiy*

undefined

### [#5062](https://github.com/algorand/go-algorand/pull/5062) e2e tests: log pending transactions in case of failure
**✅ Merged** | *@algorandskiy*

undefined

### [#6143](https://github.com/algorand/go-algorand/pull/6143) tests: make goal-partkey-commands e2e-subs test serial
**✅ Merged** | *@algorandskiy*

undefined

### [#6095](https://github.com/algorand/go-algorand/pull/6095) tests: fix e2e subs goal-partkey-commands
**✅ Merged** | *@algorandskiy*

undefined

### [#6021](https://github.com/algorand/go-algorand/pull/6021) tests: set communication timeout in kmd.init_wallet_handle
**✅ Merged** | *@algorandskiy*

undefined

### [#6342](https://github.com/algorand/go-algorand/pull/6342) tests: fix TestStateProofRecovery
**✅ Merged** | *@algorandskiy*

undefined

### [#5692](https://github.com/algorand/go-algorand/pull/5692) tests: fix restAPI test fixture
**✅ Merged** | *@algorandskiy*

undefined

### [#5189](https://github.com/algorand/go-algorand/pull/5189) tests: fix esingle-payer-swap e2e subs test
**✅ Merged** | *@algorandskiy*

undefined

### [#6410](https://github.com/algorand/go-algorand/pull/6410) tests: fix wait timeout in TestApplicationsUpgradeOverREST
**✅ Merged** | *@algorandskiy*

undefined

### [#5996](https://github.com/algorand/go-algorand/pull/5996) tests: make TestBasicPayouts less flaky
**✅ Merged** | *@algorandskiy*

undefined

### [#6030](https://github.com/algorand/go-algorand/pull/6030) tests: preserve logs on LibGoalFixture failure
**✅ Merged** | *@algorandskiy*

undefined

### [#5696](https://github.com/algorand/go-algorand/pull/5696) build: resume/fix ci expect tests
**✅ Merged** | *@algorandskiy*

undefined

### [#4429](https://github.com/algorand/go-algorand/pull/4429) tests: stop network before reading logs
**✅ Merged** | *@algorandskiy*

undefined

### [#6027](https://github.com/algorand/go-algorand/pull/6027) libgoal: output debug info on failure to stderr
**✅ Merged** | *@algorandskiy*

undefined

### [#6026](https://github.com/algorand/go-algorand/pull/6026) tests: debug output on LibGoalFixture failure
**✅ Merged** | *@algorandskiy*

undefined

### [#5380](https://github.com/algorand/go-algorand/pull/5380) tools: allow dumpblocks work with wal-enabled dbs
**✅ Merged** | *@algorandskiy*

undefined

### [#3664](https://github.com/algorand/go-algorand/pull/3664) dryrun: add gloads test
**✅ Merged** | *@algorandskiy*

undefined

### [#2945](https://github.com/algorand/go-algorand/pull/2945) Add application account into a dryrun req created by goal
**✅ Merged** | *@algorandskiy*

undefined

### [#5764](https://github.com/algorand/go-algorand/pull/5764) ci: fix scripts/create_and_deploy_recipe.sh build
**✅ Merged** | *@algorandskiy*

undefined

### [#5053](https://github.com/algorand/go-algorand/pull/5053) tests: disable TestInitialSync on CI
**✅ Merged** | *@algorandskiy*

undefined

### [#1761](https://github.com/algorand/go-algorand/pull/1761) Code style fixes DNSSEC client
**✅ Merged** | *@algorandskiy*

undefined

### [#6093](https://github.com/algorand/go-algorand/pull/6093) tests: fixes to e2e test logs parsers
**✅ Merged** | *@algorandskiy*

undefined

### [#5473](https://github.com/algorand/go-algorand/pull/5473) netdeploy: Add AdminAPIToken to network templates
**✅ Merged** | *@algorandskiy*

undefined

### [#5200](https://github.com/algorand/go-algorand/pull/5200) txHandler: make dedup working set independent from ERL
**✅ Merged** | *@algorandskiy*

undefined

### [#4266](https://github.com/algorand/go-algorand/pull/4266) codec: new TxHandler byte decoder
**✅ Merged** | *@algorandskiy*

undefined

### [#4856](https://github.com/algorand/go-algorand/pull/4856) testing: make MakeAccountData as testing only method
**✅ Merged** | *@algorandskiy*

undefined

### [#3910](https://github.com/algorand/go-algorand/pull/3910) ledger: fix possible dbRound unsynchronization for trackers and registry
**✅ Merged** | *@algorandskiy*

undefined

### [#5869](https://github.com/algorand/go-algorand/pull/5869) tests: custom recipe tweaks
**✅ Merged** | *@algorandskiy*

undefined

### [#5397](https://github.com/algorand/go-algorand/pull/5397) consensus: Introduce versions v37 and v38
**✅ Merged** | *@algorandskiy*

undefined

### [#4334](https://github.com/algorand/go-algorand/pull/4334) consensus: introduce v33, v34
**✅ Merged** | *@algorandskiy*

undefined

### [#3846](https://github.com/algorand/go-algorand/pull/3846) config: add some warning comments about changing RewardUnit value
**✅ Merged** | *@algorandskiy*

undefined

### [#5821](https://github.com/algorand/go-algorand/pull/5821) build: regenerate api routes and resolve merge error in catchup
**✅ Merged** | *@algorandskiy*

undefined

### [#5536](https://github.com/algorand/go-algorand/pull/5536) tests: fix coder tester for TxType bound
**✅ Merged** | *@algorandskiy*

undefined

### [#5446](https://github.com/algorand/go-algorand/pull/5446) config: let go-generate to produce config-vXX.json files
**✅ Merged** | *@algorandskiy*

undefined

### [#6058](https://github.com/algorand/go-algorand/pull/6058) ci: pin reviewdog version to v0.18.1
**✅ Merged** | *@algorandskiy*

undefined

### [#3371](https://github.com/algorand/go-algorand/pull/3371) ledger refactoring: tealdbg + dryrun tests fixes
**✅ Merged** | *@algorandskiy*

undefined

### [#5993](https://github.com/algorand/go-algorand/pull/5993) tests: fix TestExactAccountChunk
**✅ Merged** | *@algorandskiy*

undefined

### [#5846](https://github.com/algorand/go-algorand/pull/5846) catchup: Fix empty cert if ledger already has a block
**✅ Merged** | *@algorandskiy*

undefined

### [#4236](https://github.com/algorand/go-algorand/pull/4236) tests: fixes to catchpoint e2e tests
**✅ Merged** | *@algorandskiy*

undefined

### [#6037](https://github.com/algorand/go-algorand/pull/6037) catchup: do not loop forever if there is no peers
**✅ Merged** | *@algorandskiy*

undefined

### [#5856](https://github.com/algorand/go-algorand/pull/5856) tests: dump logs if e2e test node exited with an error
**✅ Merged** | *@algorandskiy*

undefined

### [#5809](https://github.com/algorand/go-algorand/pull/5809) catchup: fetchAndWrite/fetchRound quit early on errNoBlockForRound
**✅ Merged** | *@algorandskiy*

undefined

### [#5952](https://github.com/algorand/go-algorand/pull/5952) tests: dump logs at the end of exit callback
**✅ Merged** | *@algorandskiy*

undefined

### [#5794](https://github.com/algorand/go-algorand/pull/5794) catchup: pause catchup if ledger lagging behind
**✅ Merged** | *@algorandskiy*

undefined

### [#5413](https://github.com/algorand/go-algorand/pull/5413) ledger: report catchpoint writing only when it actually started
**✅ Merged** | *@algorandskiy*

undefined

### [#5584](https://github.com/algorand/go-algorand/pull/5584) tools: let catchpointdump to calculate and print data hashes
**✅ Merged** | *@algorandskiy*

undefined

### [#5210](https://github.com/algorand/go-algorand/pull/5210) catchpointdump: fix panic when processing gzip files
**✅ Merged** | *@algorandskiy*

undefined

### [#3566](https://github.com/algorand/go-algorand/pull/3566) catchpointdump: allow print filters
**✅ Merged** | *@algorandskiy*

undefined

### [#5594](https://github.com/algorand/go-algorand/pull/5594) ledger: rename catchpointWriter to catchpointFileWriter for clarity
**✅ Merged** | *@algorandskiy*

undefined

### [#3598](https://github.com/algorand/go-algorand/pull/3598) Add filter fields to catchpointdump net command
**✅ Merged** | *@algorandskiy*

undefined

### [#3596](https://github.com/algorand/go-algorand/pull/3596) catchpointdump: set genesis proto version
**✅ Merged** | *@algorandskiy*

undefined

### [#5963](https://github.com/algorand/go-algorand/pull/5963) catchpoint: fix data files deletion in hot/cold dirs scenario
**✅ Merged** | *@algorandskiy*

undefined

### [#4535](https://github.com/algorand/go-algorand/pull/4535) catchpoint: fix peer ranking
**✅ Merged** | *@algorandskiy*

undefined

### [#4703](https://github.com/algorand/go-algorand/pull/4703) catchpoint: actualize limit constants and fix txtail table init
**✅ Merged** | *@algorandskiy*

undefined

### [#4390](https://github.com/algorand/go-algorand/pull/4390) tests: fix TestBasicCatchpointCatchup
**✅ Merged** | *@algorandskiy*

undefined

### [#4171](https://github.com/algorand/go-algorand/pull/4171) catchpointdump: fix downloading logic
**✅ Merged** | *@algorandskiy*

undefined

### [#5214](https://github.com/algorand/go-algorand/pull/5214) ledger: fix commit tasks enqueueing
**✅ Merged** | *@algorandskiy*

undefined

### [#5032](https://github.com/algorand/go-algorand/pull/5032) build: fix build after #4979
**✅ Merged** | *@algorandskiy*

undefined

### [#3590](https://github.com/algorand/go-algorand/pull/3590) Add catchpointdump into tools package
**✅ Merged** | *@algorandskiy*

undefined

### [#5026](https://github.com/algorand/go-algorand/pull/5026) tools: box key utility
**✅ Merged** | *@algorandskiy*

undefined

### [#4561](https://github.com/algorand/go-algorand/pull/4561) tests: fix method name after typo correction
**✅ Merged** | *@algorandskiy*

undefined

### [#5910](https://github.com/algorand/go-algorand/pull/5910) blockdb: bound max deleted blocks per blockdb sync
**✅ Merged** | *@algorandskiy*

undefined

### [#4724](https://github.com/algorand/go-algorand/pull/4724) db: add AtomicContext
**✅ Merged** | *@algorandskiy*

undefined

### [#2611](https://github.com/algorand/go-algorand/pull/2611) Use strict json encoder in REST API v2 endpoints
**✅ Merged** | *@algorandskiy*

undefined

### [#5632](https://github.com/algorand/go-algorand/pull/5632) tests: fix e2e TestAssetValidRounds after libgoal adjustment
**✅ Merged** | *@algorandskiy*

undefined

### [#4400](https://github.com/algorand/go-algorand/pull/4400) tests: stabilize TestAssetCreateWaitRestartDelete
**✅ Merged** | *@algorandskiy*

undefined

### [#4351](https://github.com/algorand/go-algorand/pull/4351) tests: fix TestAssetValidRounds
**✅ Merged** | *@algorandskiy*

undefined

### [#3930](https://github.com/algorand/go-algorand/pull/3930) utils: add arm32-specific NanoSleep implementation
**✅ Merged** | *@algorandskiy*

undefined

### [#2750](https://github.com/algorand/go-algorand/pull/2750) Increase max app opt ins to 50
**✅ Merged** | *@algorandskiy*

undefined

### [#1765](https://github.com/algorand/go-algorand/pull/1765) App refactoring
**✅ Merged** | *@algorandskiy*

undefined

### [#6061](https://github.com/algorand/go-algorand/pull/6061) algod: fix telemetry lookup if phonebook is used
**✅ Merged** | *@algorandskiy*

undefined

### [#5848](https://github.com/algorand/go-algorand/pull/5848) network: Use peer address after proxy fix for app rate limiter if available
**✅ Merged** | *@algorandskiy*

undefined

### [#1854](https://github.com/algorand/go-algorand/pull/1854) Adjust timeouts in assets-app.sh/sectok-app.sh tests
**✅ Merged** | *@algorandskiy*

undefined

### [#6551](https://github.com/algorand/go-algorand/pull/6551) agreement: implement TODO in broadcast/relay actions
**✅ Merged** | *@algorandskiy*

undefined

### [#6349](https://github.com/algorand/go-algorand/pull/6349) agreement: fix mainLoop vs Shutdown race
**✅ Merged** | *@algorandskiy*

undefined

### [#6007](https://github.com/algorand/go-algorand/pull/6007) agreement: log current player state for VoteBroadcast and ProposalBroadcast events
**✅ Merged** | *@algorandskiy*

undefined

### [#6455](https://github.com/algorand/go-algorand/pull/6455) chore: remove MessageHandle
**✅ Merged** | *@algorandskiy*

undefined

### [#3651](https://github.com/algorand/go-algorand/pull/3651) testing: Fix a typo in agreement test
**✅ Merged** | *@algorandskiy*

undefined

### [#5882](https://github.com/algorand/go-algorand/pull/5882) agreement: dump demux queues on fuzzer test failure
**✅ Merged** | *@algorandskiy*

undefined

### [#5678](https://github.com/algorand/go-algorand/pull/5678) ledger: fix error condition leaked from KV-related refactoring
**✅ Merged** | *@algorandskiy*

undefined

### [#5619](https://github.com/algorand/go-algorand/pull/5619) tests: fix close - commit data race in tracker tests
**✅ Merged** | *@algorandskiy*

undefined

### [#2095](https://github.com/algorand/go-algorand/pull/2095) ledger: compatibility mode for account index calculation in eval delta
**✅ Merged** | *@algorandskiy*

undefined

### [#2180](https://github.com/algorand/go-algorand/pull/2180) 1k assets: consensus parameter and feature switch
**✅ Merged** | *@algorandskiy*

undefined

### [#1939](https://github.com/algorand/go-algorand/pull/1939) 1k+ assets benchmarks and groups merging
**✅ Merged** | *@algorandskiy*

undefined

### [#1936](https://github.com/algorand/go-algorand/pull/1936) 1k+ assets (part 5)
**✅ Merged** | *@algorandskiy*

undefined

### [#1935](https://github.com/algorand/go-algorand/pull/1935) 1k+ assets (part 4)
**✅ Merged** | *@algorandskiy*

undefined

### [#1934](https://github.com/algorand/go-algorand/pull/1934) 1k+ assets (part 3)
**✅ Merged** | *@algorandskiy*

undefined

### [#1933](https://github.com/algorand/go-algorand/pull/1933) 1k+ assets (part 2)
**✅ Merged** | *@algorandskiy*

undefined

### [#6549](https://github.com/algorand/go-algorand/pull/6549) build: add golangci-lint format into make fmt
**✅ Merged** | *@algorandskiy*

undefined

### [#6534](https://github.com/algorand/go-algorand/pull/6534) tests: fix some flaky tests - p2p, ledger, e2e-subs
**✅ Merged** | *@algorandskiy*

undefined

### [#6532](https://github.com/algorand/go-algorand/pull/6532) tests: flaky tests fixes
**✅ Merged** | *@algorandskiy*

undefined

### [#6531](https://github.com/algorand/go-algorand/pull/6531) txHandler: use txn.Access data when calculating app usage rates
**✅ Merged** | *@algorandskiy*

undefined

### [#6535](https://github.com/algorand/go-algorand/pull/6535) txHandler: penalize erred app transactions
**✅ Merged** | *@algorandskiy*

undefined

### [#4803](https://github.com/algorand/go-algorand/pull/4803) Algod: support state proofs recoverability
**✅ Merged** | *@id-ms*

undefined

### [#6573](https://github.com/algorand/go-algorand/pull/6573) LogicSig: harden address derivation for v13+
**🔄 Open** | *@giuliop*

undefined

### [#6592](https://github.com/algorand/go-algorand/pull/6592) Auto-salt TEAL v13 programs to avoid on-curve LogicSig hashes
**🔄 Open** | *@giuliop*

undefined

### [#6588](https://github.com/algorand/go-algorand/pull/6588) API: Deal with params that are in deltas
**🔄 Open** | *@jannotti*

undefined

### [#6589](https://github.com/algorand/go-algorand/pull/6589) build: fix MacOS 14 SDK and XCode 16.x issue
**🔄 Open** | *@algorandskiy*

undefined

### [#6591](https://github.com/algorand/go-algorand/pull/6591) tests: fix TestDiscardUnrequestedBlockResponse race
**🔄 Open** | *@algorandskiy*

undefined

### [#6587](https://github.com/algorand/go-algorand/pull/6587) build(deps): bump github.com/sirupsen/logrus from 1.9.0 to 1.9.1
**🔄 Open** | *@dependabot[bot]*

undefined

### [#6540](https://github.com/algorand/go-algorand/pull/6540) build(deps): bump github.com/quic-go/quic-go from 0.49.1 to 0.57.0
**🔄 Open** | *@dependabot[bot]*

undefined

### [#6586](https://github.com/algorand/go-algorand/pull/6586) chore: remove unused address reassignment in tests
**🔄 Open** | *@operagxoksana*

undefined

### [#6584](https://github.com/algorand/go-algorand/pull/6584) scripts: update go sdk type exporter 
**🔄 Open** | *@algorandskiy*

undefined

### [#6581](https://github.com/algorand/go-algorand/pull/6581) dht: do not err on context deadline
**🔄 Open** | *@algorandskiy*

undefined

### [#6528](https://github.com/algorand/go-algorand/pull/6528) Eval: Big transactions
**🔄 Open** | *@jannotti*

undefined

### [#6583](https://github.com/algorand/go-algorand/pull/6583) network: fix double logging with elevated level
**🔄 Open** | *@algorandskiy*

undefined

### [#6590](https://github.com/algorand/go-algorand/pull/6590) build: fix MacOS 14 SDK and CLT 16.x issue
**❌ Closed** | *@algorandskiy*

undefined

### [#6561](https://github.com/algorand/go-algorand/pull/6561) build(deps): bump filippo.io/edwards25519 from 1.0.0 to 1.1.1 in /tools/block-generator
**❌ Closed** | *@dependabot[bot]*

undefined

### [#5065](https://github.com/algorand/go-algorand/pull/5065) Stateproof: avoid removing registry record if state proof keys exist
**❌ Closed** | *@algonathan*

undefined

## 🐛 Issues

### [#6582](https://github.com/algorand/go-algorand/issues/6582) AVM: Allow larger LogicSig programs with fee-based pricing
**🔄 Open** | *@jannotti* | `Enhancement`

#6582: This change enables developers to create more complex LogicSig programs by increasing the allowable size, while implementing a fee-based pricing model. This is significant as it allows for greater flexibility and functionality in smart contract development on the AVM, potentially enhancing user experiences and use cases.

---

*Generated on 2026-03-23*
