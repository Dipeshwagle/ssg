import { app, ipcMain, dialog } from "electron";
import serve from "electron-serve";
import { createWindow } from "./helpers";
import fs from 'fs';

const isProd: boolean = process.env.NODE_ENV === "production";

if (isProd) {
  serve({ directory: "app" });
} else {
  app.setPath("userData", `${app.getPath("userData")} (development)`);
}

(async () => {
  await app.whenReady();

  const mainWindow = createWindow("main", {
    width: 1000,
    height: 600,
  });

  if (isProd) {
    await mainWindow.loadURL("app://./home.html");
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/home`);
    mainWindow.webContents.openDevTools();
  }

  ipcMain.on("open-project", (event, arg) => {
    dialog
      .showOpenDialog(mainWindow, {
        properties: ["openFile", "openDirectory"],
      })
      .then((result) => {
        fs.readFile(result.filePaths[0], "utf8", function (err, data) {
          if (err) {
            return console.log(err);
          }
          event.sender.send("open-project", JSON.stringify(JSON.parse(data)));
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });
})();

app.on("window-all-closed", () => {
  app.quit();
});
