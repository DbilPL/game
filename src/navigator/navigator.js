const { ipcRenderer } = require('electron');

export default class Navigator {
	/// Navigates to other page
	async push(page) {
		ipcRenderer.send('nav-push', page.filePath);
	}
}