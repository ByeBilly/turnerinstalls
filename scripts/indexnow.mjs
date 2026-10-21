// Tell Bing (and other IndexNow engines) that pages are new or changed.
// Run after a publish has gone live:
//   node scripts/indexnow.mjs                      -> every URL in the live sitemap
//   node scripts/indexnow.mjs /locations/gold-coast /blog/some-guide
// Google does not use IndexNow; request indexing in Search Console for Google.

const HOST = "www.turnerinstalls.com.au";
const KEY = "704c725d0b0cb02a29b51f96d38bbb4a"; // matches public/<KEY>.txt

async function sitemapUrls() {
    const res = await fetch(`https://${HOST}/sitemap.xml`);
    if (!res.ok) throw new Error(`sitemap.xml returned ${res.status}`);
    const xml = await res.text();
    return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

const args = process.argv.slice(2);
const urlList = args.length
    ? args.map((p) => (p.startsWith("http") ? p : `https://${HOST}${p.startsWith("/") ? p : `/${p}`}`))
    : await sitemapUrls();

const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
        host: HOST,
        key: KEY,
        keyLocation: `https://${HOST}/${KEY}.txt`,
        urlList,
    }),
});

// 200 = accepted, 202 = accepted while the key is being checked.
console.log(`IndexNow: ${res.status} ${res.statusText} for ${urlList.length} URL(s)`);
if (!res.ok) {
    console.log(await res.text());
    process.exit(1);
}
