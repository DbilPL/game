const {app, BrowserWindow, ipcMain, screen} = require('electron');

function createWindow () {
	// Создаем окно браузера.
	const win = new BrowserWindow({
		width: screen.width,
		height: screen.height,
		fullscreen: true,
		webPreferences: {
			nodeIntegration: true
		}
	});

	setNavigatorHandling(win);
  
	// and load the index.html of the app.
	win.loadFile('index.html');  
	// Отображаем средства разработчика.
	win.webContents.openDevTools();

}

function setNavigatorHandling(win) {
	ipcMain.on('nav-push', function (_, arg) {
		win.loadFile(arg);
	});

	ipcMain.on('nav-close', function (_, arg) {
		win.close(arg);
	});
}
  
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Некоторые API могут использоваться только после возникновения этого события.
app.whenReady().then(createWindow);
  
// Quit when all windows are closed.
app.on('window-all-closed', () => {
	// Для приложений и строки меню в macOS является обычным делом оставаться
	// активными до тех пор, пока пользователь не выйдет окончательно используя Cmd + Q
	if (process.platform !== 'darwin') {
		app.quit();
	}
});
  
app.on('activate', () => {
	// На MacOS обычно пересоздают окно в приложении,
	// после того, как на иконку в доке нажали и других открытых окон нету.
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});