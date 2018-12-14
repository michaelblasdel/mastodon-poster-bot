// Setup Node Requirements
const { app, BrowserWindow, Menu } = require('electron');

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

// Draw About BrowserWindow
let aboutWin;
function createAbout () {
    aboutWin = new BrowserWindow({
        center: true,
        autoHideMenuBar: true,
        minimizable: false,
        maximizable: false,
        resizable: false,
        skipTaskbar: true,
        width: 500,
        height: 250
    });
    aboutWin.loadFile('about.html');

    //win.webContents.openDevTools()

    // Emitted when the window is closed.
    aboutWin.on('closed', () => {
        aboutWin = null;
    })
}

// Application Menu
const appMenu = [
    {
        label: 'About',
        click () {
            createAbout();
        }
    }
];
Menu.setApplicationMenu(Menu.buildFromTemplate(appMenu));

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
