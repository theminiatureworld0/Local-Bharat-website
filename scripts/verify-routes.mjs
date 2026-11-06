import http from 'http';

const routes = [
  "/",
  "/collections",
  "/collections/stone-wall-decorations",
  "/collections/stone-idols-and-sculptures",
  "/collections/temple-stone-carvings",
  "/products/lotus-relief-sandstone-wall-panel",
  "/products/monolithic-ganesha-deity-sculpture",
  "/products/monolithic-shiva-deity-sculpture",
  "/products/handcrafted-sandstone-home-temple-mandir",
  "/products/traditional-carved-stone-pooja-mandir",
  "/projects",
  "/about",
  "/contact"
];

let completed = 0;
let errors = 0;

for (const r of routes) {
  http.get("http://localhost:3001" + r, (res) => {
    console.log(`Route [${r}] -> HTTP ${res.statusCode}`);
    if (res.statusCode !== 200) errors++;
    completed++;
    if (completed === routes.length) {
      if (errors === 0) {
        console.log("All 13 routes tested and returned 200 OK!");
        process.exit(0);
      } else {
        console.error(`${errors} route(s) returned non-200 code.`);
        process.exit(1);
      }
    }
  }).on("error", (err) => {
    console.error(`Route [${r}] -> Error: ${err.message}`);
    errors++;
    completed++;
    if (completed === routes.length) process.exit(1);
  });
}
