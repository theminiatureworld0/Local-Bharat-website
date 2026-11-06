import https from 'https';

https.get("https://swasha.org/corporate-gifting/", (res) => {
  let data = "";
  res.on("data", c => data += c);
  res.on("end", () => {
    // Look for banner / hero markup
    const mainSection = data.match(/<main[\s\S]*?<\/main>/i) || data.match(/<body[\s\S]*?<\/body>/i);
    if (mainSection) {
      console.log("First 3000 chars of body:");
      console.log(mainSection[0].slice(0, 3000));
    }
  });
});
