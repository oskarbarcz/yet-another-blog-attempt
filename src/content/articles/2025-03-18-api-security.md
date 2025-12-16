---
title: "API security best practices: beyond authentication"
excerpt: "Rate limiting, CORS, input validation, and defense in depth for modern REST and GraphQL APIs."
date: 2025-03-18
readTime: "11 min"
tags:
  - security
  - api
  - backend
coverUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1640&auto=format&fit=crop"
---

Securing APIs requires a multi-layered approach beyond just JWT tokens.
We'll cover rate limiting, input sanitization, OWASP top 10 for APIs, and security headers.

---

## Markup Showcase: API Security

### Headings and narrative

Security relies on layered controls: authentication, authorization, validation, monitoring, and response. Defense‑in‑depth reduces the blast radius when a single control fails.

#### Emphasis and links

Always validate inputs at trust boundaries. See the
[OWASP API Security Top 10](https://owasp.org/API-Security/) and internal
[security checklist](/updates) for rollout steps. Avoid leaking sensitive data; mask values like `Authorization: Bearer ***` in logs.

### Lists

1. Authentication: short‑lived tokens, refresh flows, clock skew handling
2. Authorization: least privilege, ABAC/RBAC, deny by default
3. Validation: schema‑based (e.g., `zod`, `ajv`) at the edge and service
   - Normalize encodings
   - Enforce size limits
   - Reject unknown fields

- [x] Add rate limiter per IP + token
- [ ] Enable anomaly detection on GraphQL operations

> Caution: Security headers such as `Content-Security-Policy` and `Strict-Transport-Security` should be applied consistently across all routes.

### Inline code

Return minimal error messages like `400 Bad Request` with a machine‑readable body, but never echo untrusted input in the message.

### Code blocks (TypeScript)

```ts
import { z } from "zod";

const Payload = z.object({
  email: z.string().email(),
  plan: z.enum(["free", "pro", "enterprise"]).default("free"),
});

export async function handler(req: Request) {
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";
  // Simple rate limit interface (pseudo)
  const allowed = await rateLimit.allow({
    key: `signup:${ip}`,
    limit: 20,
    window: 60_000,
  });
  if (!allowed) return new Response("Too Many Requests", { status: 429 });

  const json = await req.json();
  const parsed = Payload.safeParse(json);
  if (!parsed.success) {
    return new Response(JSON.stringify({ error: "invalid_payload" }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }

  // ... business logic
  return new Response(JSON.stringify({ ok: true }), { status: 200 });
}
```

### JSON example

```json
{
  "security": {
    "rateLimit": { "windowMs": 60000, "max": 100 },
    "cors": { "origins": ["https://example.com"], "allowCredentials": false },
    "headers": [
      "Strict-Transport-Security: max-age=31536000; includeSubDomains",
      "X-Content-Type-Options: nosniff"
    ]
  }
}
```

### HTML snippet

```html
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self'; img-src https: data:; object-src 'none'"
/>
```

### Table

| Control          | Purpose            | Example                 |
| ---------------- | ------------------ | ----------------------- |
| Rate limiting    | Throttle abuse     | token+IP sliding window |
| Input validation | Prevent injection  | JSON schema at gateway  |
| Content Security | Reduce XSS vectors | CSP with nonces         |

### Long URL wrapping test

https://example.com/security/this/is/a/very/long/path/that/should/wrap/or/scroll/properly/depending/on/styles/applied/to/links

---

### Image

![Lock on metal door](https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop)
