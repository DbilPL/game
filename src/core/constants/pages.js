const Page = require('../../features/navigator/page.js');

// TODO: Initialise pages

module.exports = {
	mainPage: new Page({
		filePath: 'src/app/pages/mainPage.html'
	}),
	settingsPage: new Page({
		filePath: 'src/app/pages/settingsPage.html'
	})
};