const { app, BrowserWindow } = require('electron')

let mainWindow = null

function createWindow() {
    mainWindow = new BrowserWindow( {
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    mainWindow.setMenuBarVisibility(false)
    mainWindow.loadFile('src/windows/mainWindow.html')
}

app.on('ready', createWindow)