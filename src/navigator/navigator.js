const { ipcRenderer } = require('electron');

export default class Navigator {
	/// Navigates to other page
	push(page) {
		ipcRenderer.send('nav-push', page.filePath);
	}
	/// Closes app
	close() {
		ipcRenderer.send('nav-close');
	}
}