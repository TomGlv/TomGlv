const { chromium } = require("playwright");
(async () => {
  const b = await chromium.launch({ channel: "msedge" });
  const p = await b.newPage({ viewport: { width: 1100, height: 900 }, deviceScaleFactor: 2 });
  await p.goto("file:///C:/Users/tomga/github-profile/_src/gen.html", { waitUntil: "networkidle" });
  await p.evaluate(() => document.fonts.ready);
  for (const theme of ["light", "dark"]) {
    await p.evaluate((t) => { document.body.classList.toggle("dark", t === "dark"); window.render(); }, theme);
    await p.waitForTimeout(400);
    const ids = await p.$$eval(".a", (e) => e.map((x) => x.id).filter(Boolean));
    console.log(ids.join(","));
    for (const id of ids) await p.locator("#" + id).screenshot({ path: `C:/Users/tomga/github-profile/img/${id === "banner" ? "hero" : id}-${theme}.png` });
  }
  await b.close();
  console.log("ok");
})();
