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

    mainWindow.loadFile('windows/index.html')
}

app.on('ready', createWindow)