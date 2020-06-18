const {app, BrowserWindow, ipcMain, dialog} = require('electron');

function createWindow () {
	// Создаем окно браузера.
	const win = new BrowserWindow({
		fullscreen: true,
		webPreferences: {
			nodeIntegration: true
		}
	});

	/// Initialises [Navigator] logic
	setNavigatorHandling(win);

	// and load the index.html of the app.
	win.loadFile('./src/app/pages/initialPage.html');  
	// Отображаем средства разработчика.
	win.webContents.openDevTools();
}

function setNavigatorHandling(win) {
	// To other page
	ipcMain.on('nav-push', function (_, page) {
		win.loadFile(page);
	});

	// Closes window
	ipcMain.on('nav-close', async function () {
		const options = {
			type: 'question',
			buttons: ['Yes, please', 'No, thanks'],
			title: 'Question',
			message: 'Do you want to do this?',
			detail: 'Do you really want to quit my app?',
		};
		
		const result = await dialog.showMessageBox(null, options);

		if (result.response === 0) {
			win.close();
		}
	});

	ipcMain.on('nav-close-force', function () {
		win.close();
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