import https from 'https';

https.get("https://swasha.org/corporate-gifting/", (res) => {
  let data = "";
  if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
    console.log("Redirected to:", res.headers.location);
    https.get(res.headers.location, (res2) => {
      let data2 = "";
      res2.on("data", c => data2 += c);
      res2.on("end", () => analyze(data2));
    });
    return;
  }
  res.on("data", c => data += c);
  res.on("end", () => analyze(data));
}).on("error", err => console.error("Error:", err.message));

function analyze(html) {
  console.log("HTML length:", html.length);
  const title = html.match(/<title>([^<]+)<\/title>/i);
  console.log("Title:", title ? title[1] : "N/A");

  // Headings
  const h1 = (html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || []).map(h => h.replace(/<[^>]+>/g, '').trim());
  const h2 = (html.match(/<h2[^>]*>([\s\S]*?)<\/h2>/gi) || []).map(h => h.replace(/<[^>]+>/g, '').trim());
  const h3 = (html.match(/<h3[^>]*>([\s\S]*?)<\/h3>/gi) || []).map(h => h.replace(/<[^>]+>/g, '').trim());

  console.log("H1:", h1);
  console.log("H2:", h2);
  console.log("H3:", h3.slice(0, 10));

  // Style attributes / colors
  const hexes = Array.from(new Set(html.match(/#[0-9a-fA-F]{6}\b/g) || []));
  console.log("Hex colors found in HTML:", hexes);

  // Check for CSS link
  const cssLinks = (html.match(/<link[^>]+rel=["']stylesheet["'][^>]*>/gi) || []);
  console.log("CSS links:", cssLinks.slice(0, 5));
}
