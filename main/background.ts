import { app, ipcMain, dialog } from "electron";
import serve from "electron-serve";
import {
  createWindow,
  readProject,
  syncProject,
  publishProject,
} from "./helpers";
import Store from "electron-store";


const store = new Store();

const latestOpenedProject: any = store.get("latestOpenedProject");

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
    if (latestOpenedProject) {
      const projectData = readProject(latestOpenedProject);
      mainWindow.webContents.send("open-project", JSON.parse(projectData));
    }
  }

  ipcMain.on("open-project", (event, arg) => {
    dialog
      .showOpenDialog(mainWindow, {
        properties: ["openFile", "openDirectory"],
      })
      .then(async (result) => {
        const projectPath = result.filePaths[0];
        const projectData = readProject(projectPath);
        store.set("latestOpenedProject", projectPath);
        event.sender.send("open-project", JSON.parse(projectData));
      })
      .catch((err) => {
        console.log(err);
      });
  });

  ipcMain.on("publish-project", (event, data) => {
    dialog.showMessageBox(mainWindow, { message: "Publish Successful 🚀" });
    publishProject(latestOpenedProject, JSON.parse(data));
  });

  ipcMain.on("sync-project", (event, data) => {
    syncProject(latestOpenedProject, data);
  });
})();

app.on("window-all-closed", () => {
  app.quit();
});
