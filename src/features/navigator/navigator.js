const { ipcRenderer } = require('electron');

module.exports = class Navigator {
	/// Navigates to other page
	push(page) {
		ipcRenderer.send('nav-push', page.filePath);
	}
	/// Closes app
	close({ force }) {
		ipcRenderer.send(force ? 'nav-close-force' : 'nav-close');
	}
};