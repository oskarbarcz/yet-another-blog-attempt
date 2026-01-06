---
title: "Distributed systems fundamentals: CAP and consistency"
excerpt: "Understanding CAP theorem, eventual consistency, and consensus algorithms for reliable systems."
date: 2025-07-14
readTime: "13 min"
tags:
  - distributed-systems
  - architecture
  - consistency
coverUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1640&auto=format&fit=crop"
---

# THIS ARTICLE WAS WRITTEN BY AI AS MOCK ARTICLE AND IT WILL BE REMOVED SOON. THIS IS JUST FOR TESTING PURPOSES.

# TEN ARTYKUŁ ZOSTAŁ NAPISANY PRZEZ AI JAKO ARTYKUŁ TESTOWY I WKRÓTCE ZOSTANIE USUNIĘTY. POWSTAŁ TYLKO DO CELÓW TESTOWANIA.

Building distributed systems means dealing with network partitions, consistency trade-offs, and failure modes.
Explore CAP theorem, eventual consistency models, and consensus algorithms like Raft and Paxos.

---

## Markup Showcase: Distributed Systems

### Headings and narrative

In unreliable networks, partitions are normal. Systems choose trade‑offs between availability and consistency. Client experience often improves with monotonic reads and read‑your‑writes guarantees.

#### Emphasis and links

See the excellent overview of [CAP](https://en.wikipedia.org/wiki/CAP_theorem) and Martin Kleppmann’s writing on
[eventual consistency](https://martin.kleppmann.com/papers/).
Internal notes live in the [architecture docs](/articles).

### Lists

- Partition tolerance is mandatory in distributed systems
- Choose between stronger consistency vs higher availability
  - Session guarantees can improve UX
  - Use CRDTs for conflict‑free merges

1. Detect leader failure
2. Elect new leader (Raft)
3. Resume log replication

> Quote: “The network is reliable” — a famous fallacy of distributed computing.

### Inline code

Client sessions can pin to a `leaderId` and fall back when `heartbeat` timeouts occur.

### Code blocks

```text
Pseudo‑Raft (very simplified):
onHeartbeatTimeout() {
  becomeCandidate();
  requestVotes();
  if (votes > quorum) becomeLeader();
}
```

```bash
# Simulate packet loss with tc on Linux
sudo tc qdisc add dev eth0 root netem loss 10% delay 50ms 10ms distribution normal
```

```ts
type LogEntry = { index: number; term: number; data: Uint8Array };

function append(entries: LogEntry[], next: LogEntry) {
  const last = entries.at(-1);
  if (last && last.index + 1 !== next.index) throw new Error("hole in log");
  return [...entries, next];
}
```

### Alignment table

| Model               | Consistency   | Availability | Notes                  |
| :------------------ | :------------ | -----------: | :--------------------- |
| Single leader       | Strong (R/W)  |       medium | failover required      |
| Leader + followers  | Strong (R/W)  |         high | read replicas possible |
| Multi‑leader        | Eventual      |         high | conflict resolution    |
| Leaderless (quorum) | Tunable (R/W) |         high | choose R/W quorums     |

### Horizontal rule

---

### Sub/sup and long URL

Replication factor R<sub>f</sub>=3 is common; latency p95<sup>th</sup> should remain stable under node loss.

https://example.org/distributed/systems/research/papers/2025/long/path/with/many/segments/to/test/wrapping

### Image

![Network topology illustration](https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop)
