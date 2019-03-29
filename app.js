if (process.platform == 'win32')
  process.env['VLC_PLUGIN_PATH'] = require('path').join(__dirname, 'node_modules/wcjs-prebuilt/bin/plugins');
var electron = require("electron");
const { app, BrowserWindow} = electron;
var mainWindow = null;
function createWindow() {
   win = new BrowserWindow({width: 800, height: 600})
   win.loadURL('file://' + __dirname + '/index.html')
   win.openDevTools({ detach: false});
}
app.on('ready', createWindow)