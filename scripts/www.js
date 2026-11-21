// copies the web files into www/ for the Android build
const fs = require("fs"), path = require("path");
const items = ["index.html", "sw.js", "manifest.webmanifest", "icon-192.png", "icon-512.png", "vendor", "fonts"];
fs.rmSync("www", { recursive: true, force: true });
fs.mkdirSync("www");
for (const i of items) fs.cpSync(i, path.join("www", i), { recursive: true });
console.log("www ready");
