const { app, BrowserWindow, Menu} = require('electron')
const path = require('path')

const template = [
    {
        label: "File",
        submenu: [
            {role: 'close'},
            {role: 'quit'}
        ]
    },
    {
        label: "Tools",
        submenu: [
            {
                label: "Test",
                click() {
                    console.log("Test!")
                }
            }
        ]
    }
]

let mainWindow = null
const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)

function createMainWindow() {
    mainWindow = new BrowserWindow({
        width: 1920,
        height:1080,
        webPreferences: {
            nodeIntegration: true
        },
        title: "CDI Main Window",
        icon: path.join(`${__dirname}/../res/icon/cdi_revert.png`)
    })
    
    mainWindow.loadURL('https://learning.chungdahm.com')
}

app.on('ready', createMainWindow)

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', ()=> {
    if(win === null) {
        createMainWindow()
    }
})