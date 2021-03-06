
const fs = require('fs');
const path = require('path');
const { StorageException } = require('../../core/errors/exceptions.js');

// Storage for some local saves
module.exports = class Storage {

	constructor({ filePath }) {
		this.filePath = path.join(__dirname, filePath);
	}

	write(json) {
		const filePath = this.filePath;

		return new Promise(function (resolve) {
			if (fs.existsSync(filePath)) {
				const parsedJson = JSON.stringify(json);
	
				resolve(fs.writeFileSync(filePath, parsedJson));
			} else {
				throw new StorageException('No JSON provided for that storage!');
			}
		});
	}

	read() {
		const filePath = this.filePath;
		return new Promise(function (resolve) {
			if (fs.existsSync(filePath)) {
				const file = fs.readFileSync(filePath, 'utf-8');
				const parsedJson = JSON.parse(file);
	
				resolve(parsedJson);
			} else {
				throw new StorageException('No JSON provided for that storage!');
			}
		});
	}
};