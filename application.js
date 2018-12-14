// Setup Node Requirements
const { app, BrowserWindow } = require('electron');

// Draw Main BrowserWindow
let win;
function createWindow () {

    win = new BrowserWindow({ width: 800, height: 600 });
    win.loadFile('index.html');

    //win.webContents.openDevTools()

    // Emitted when the window is closed.
    win.on('closed', () => {
        win = null;
    })
}
app.on('ready', createWindow);

// Manage Application States
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})
app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
})
