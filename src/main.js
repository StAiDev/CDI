const { app, BrowserWindow } = require('electron')

let mainWindow = null

function createWindow() {
    mainWindow = new BrowserWindow( {
        width: 1920,
        height: 1080,
        webPreferences: {
            nodeIntegration: true
        }
    })

    mainWindow.setMenuBarVisibility(false)
    mainWindow.loadFile('src/windows/mainWindow.html')
}

app.on('ready', createWindow)