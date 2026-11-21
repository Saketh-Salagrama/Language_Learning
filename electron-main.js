const { app, BrowserWindow } = require("electron");
function create() {
  const w = new BrowserWindow({ width: 1280, height: 800, backgroundColor: "#1c1021", autoHideMenuBar: true });
  w.loadFile("index.html");
}
app.whenReady().then(create);
app.on("window-all-closed", () => app.quit());
