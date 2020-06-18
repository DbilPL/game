const Storage = require('./features/storage/storage.js');
const Navigator = require('./features/navigator/navigator.js');


// Initialise navigator
const navigator = new Navigator();

// Initialise storage for savings
const savingsStorage = new Storage({filePath: '../../app/data/savings.json'});

// Initialise storage for settings
const settingsStorage = new Storage({filePath: '../../app/data/settings.json'});

module.exports = {
	navigator,
	savingsStorage,
	settingsStorage
};