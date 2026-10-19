// 记录同步 + 错题 API。其余路径交给静态资源。TOKEN 是 Cloudflare 里设置的 Secret，不进仓库。
const J = (o, s = 200) => new Response(JSON.stringify(o), { status: s, headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" } });

export default {
  async fetch(req, env) {
    const url = new URL(req.url);
    if (!url.pathname.startsWith("/api/")) return env.ASSETS.fetch(req);
    const auth = req.headers.get("authorization") || "";
    if (!env.TOKEN || auth !== "Bearer " + env.TOKEN) return J({ error: "unauthorized" }, 401);
    const p = url.pathname;
    try {
      if (p === "/api/state" && req.method === "GET") {
        const r = await env.DB.prepare("SELECT ver,data,updated FROM state WHERE id=1").first();
        return J({ ver: r.ver, data: JSON.parse(r.data), updated: r.updated });
      }
      if (p === "/api/state" && req.method === "PUT") {
        const b = await req.json();
        const data = JSON.stringify(b.data || {});
        if (data.length > 900000) return J({ error: "too large" }, 413);
        const r = await env.DB.prepare("UPDATE state SET ver=ver+1,data=?,updated=datetime('now') WHERE id=1 AND ver=?").bind(data, b.ver | 0).run();
        if (!r.meta.changes) {
          const cur = await env.DB.prepare("SELECT ver,data FROM state WHERE id=1").first();
          return J({ error: "conflict", ver: cur.ver, data: JSON.parse(cur.data) }, 409);
        }
        return J({ ver: (b.ver | 0) + 1 });
      }
      if (p === "/api/wrong" && req.method === "GET") {
        const r = await env.DB.prepare("SELECT id,created,chapter,section,type_key,source,cause,data FROM wrong ORDER BY id").all();
        return J({ items: r.results.map(x => ({ ...x, data: JSON.parse(x.data) })) });
      }
      if (p === "/api/wrong" && req.method === "POST") {
        const b = await req.json();
        const r = await env.DB.prepare("INSERT INTO wrong(created,chapter,section,type_key,source,cause,data) VALUES(datetime('now'),?,?,?,?,?,?)")
          .bind(b.chapter || "", b.section || "", b.type_key || "", b.source || "", b.cause || "", JSON.stringify(b.data || {})).run();
        return J({ id: r.meta.last_row_id });
      }
    } catch (e) { return J({ error: String(e) }, 500); }
    return J({ error: "not found" }, 404);
  },
};
