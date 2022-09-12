// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')

function urlFromComponents ({pathname = '/', protocol = 'https:', ...props} = {}) {
  const url = new URL('https://site.example');
  url.protocol = protocol;
  url.hostname = props.hostname;
  url.pathname = pathname;
  return url;
}

function createWindow () {

  var splash = new BrowserWindow({
    width: 500, 
    height: 300, 
    transparent: false, 
    frame: false, 
    alwaysOnTop: true 
  });

  splash.loadFile('splash-screen/Splash.html');
  splash.center();

  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // and load the index.html of the app.
  // mainWindow.loadFile('index.html')
  // mainWindow.loadURL("localhost:3000");
  const startUrl = process.env.ELECTRON_START_URL || urlFromComponents({
    pathname: path.join(__dirname, '/../build/index.html'),
    protocol: 'file:',
    slashes: true
  });

  mainWindow.loadURL(startUrl);
  mainWindow.title = "";
  // mainWindow.setIcon();
  mainWindow.webContents.openDevTools(); // open dev tools 
  mainWindow.setMenu(null);

  setTimeout(function () {
    splash.close();
    mainWindow.show();
  }, 5000);
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()

})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.