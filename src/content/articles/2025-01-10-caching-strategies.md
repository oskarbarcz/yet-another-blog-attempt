---
title: "Effective caching strategies for web applications"
excerpt: "From CDN to Redis – layered caching patterns that scale and avoid common pitfalls."
date: 2025-01-10
readTime: "9 min"
tags:
  - caching
  - redis
  - performance
  - reactionary
coverUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1640&auto=format&fit=crop"
reactionaryContext: |
  Ten wpis jest reakcją na masowe awarie systemów e-commerce, które miały miejsce w pierwszej połowie stycznia 2025 roku. Problemy z niewydolnością warstw cache'owania doprowadziły do paraliżu wielu popularnych platform.

  Więcej o tych wydarzeniach przeczytasz w:
  - [Analiza awarii na portalu TechNews](https://example.com/ecommerce-outage-2025)
  - [Raport o stanie infrastruktury 2025](https://example.com/infrastructure-report)

  ![Wykres obciążenia serwerów](https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop)

  Poniższy artykuł ma na celu dostarczenie wiedzy, która pozwoli uniknąć podobnych scenariuszy w przyszłości.
---

Caching is essential for performance, but cache invalidation remains one of the hardest problems.
Explore multi-layer caching strategies, TTL patterns, and cache-aside vs write-through approaches.

---

## Markup Showcase: Caching Examples

This section intentionally exercises many markup elements to validate styles and readability in long‑form content.

### Headings and paragraphs

Caching layers typically include: CDN, reverse proxy, application cache (e.g., `Redis`), and client‑side caches.
Using a multi‑tier approach reduces origin load and tail latencies.

#### Emphasis and links

Use a cache strategy document for your team: see the
[caching playbook](/articles) and the
external guide on TTLs at
https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching.
You can also use strong emphasis like **must** and _should_ when writing rules; sometimes ~~never~~ rarely is appropriate.

### Lists

- CDN cache with long TTL for static assets
- Edge function for HTML with short TTL and revalidation
  - Stale‑while‑revalidate pattern
  - Cache keys include locale and device category
- App cache (Redis)
  1. Read‑through on miss
  2. Write‑through for critical data
  3. Invalidate on mutation

- [ ] Task: audit all cache keys for collisions
- [x] Task: add cache metrics and dashboards

> Note: Caching doesn’t fix slow origins; it only hides them. Measure and optimize upstream performance.

> Tip:
>
> Use background refresh jobs to repopulate hot keys before they expire.

### Inline code and a long, unbroken value

Compute a cache key like `user:${userId}:cart:v3`. Here’s a pathological long token to test wrapping/scrolling in inline contexts:
`AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA`.

### Code blocks

```js
// cache-aside read
async function getUserProfile(id, { cache, db }) {
  const key = `user:${id}:profile:v1`;
  const cached = await cache.get(key);
  if (cached) return JSON.parse(cached);
  const fresh = await db.users.findById(id);
  await cache.set(key, JSON.stringify(fresh), { ttl: 300 });
  return fresh;
}
```

```bash
# Warm hot keys in the background
redis-cli --cluster call 10.0.0.10:6379 KEYS 'user:*:profile:v1' \
  | xargs -I {} bash -c 'curl -sS https://api.example.com/prime/{} > /dev/null'
```

```json
{
  "cache": {
    "defaultTTL": 300,
    "staleWhileRevalidate": 30,
    "namespaces": ["user", "product", "search"]
  }
}
```

A single very long code line to test horizontal overflow:

```js
const VERY_LONG =
  "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
```

### Tables

| Layer        | Typical TTL | Invalidation        |
| ------------ | ----------- | ------------------- |
| CDN          | days        | purge by path/tag   |
| Proxy (HTML) | seconds     | SWR + background    |
| App (Redis)  | minutes     | key delete on write |

### Images

![Server room showing network cables](https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop)

### Horizontal rule

---

### Sub/sup edge cases

Cache H<sub>2</sub>O metaphor and E=mc<sup>2</sup> for emphasis.
