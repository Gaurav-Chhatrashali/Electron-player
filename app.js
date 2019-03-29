// if (process.platform == "win32")
//   process.env["VLC_PLUGIN_PATH"] = require("path").join(
//     __dirname,
//     "node_modules/wcjs-prebuilt/bin/plugins"
//   );

// var electron = require("electron");
// const { app, BrowserWindow } = electron;

// var mainWindow = null;
// // This method will be called when Electron has done everything
// // initialization and ready for creating browser windows.
// app.on("ready", function() {
//   // Create the browser window.
//   mainWindow = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       plugins: true,
//       nodeIntegration: true,
//       contextIsolation: false
//     }
//   });
//   // and load the index.html of the app.
//   mainWindow.loadURL("file://" + __dirname + "/index.html");

//   //var wjs=require('fs');
//   // var wjs = require("wcjs-player");
//   // var player = new wjs("#player").addPlayer({
//   //   autoplay: true,
//   //   wcjs: require("wcjs-prebuilt")
//   // });
//   // player.addPlaylist("file:///C:/Users/admin/Videos/a.mp4");

//   //mainWindow.loadURL('http://localhost/testelectron/index.html');
//   mainWindow.openDevTools({ detach: true });
//   // Emitted when the window is closed.
//   mainWindow.on("closed", function() {
//     mainWindow = null;
//   });
// });




if (process.platform == 'win32')
  process.env['VLC_PLUGIN_PATH'] = require('path').join(__dirname, 'node_modules/wcjs-prebuilt/bin/plugins');

// var app = require('app');  // Module to control application life.
// var BrowserWindow = require('browser-window');  // Module to create native browser window.
var electron = require("electron");
const { app, BrowserWindow} = electron;
var mainWindow = null;


// This method will be called when Electron has done everything
// initialization and ready for creating browser windows.
/*app.on('ready', function () {

  // Create the browser window.
  mainWindow = new BrowserWindow({ width: 800, height: 600, webPreferences:{nodeIntegration: true} });
  // and load the index.html of the app.
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  // mainWindow.loadURL('http://localhost/testelectron/index.html');
  mainWindow.openDevTools({ detach: false});
  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    mainWindow = null;
  });

});*/

function createWindow() {
   win = new BrowserWindow({width: 800, height: 600})
   win.loadURL('file://' + __dirname + '/index.html')
   win.openDevTools({ detach: false});
}

app.on('ready', createWindow)