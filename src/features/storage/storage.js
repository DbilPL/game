
const fs = require('fs');
const path = require('path');
import { StorageException } from '../errors/exceptions.js';

// Storage for some local saves
export class Storage {

	constructor({ filePath }) {
		console.log(path.join(__dirname, filePath));
		this.filePath = path.join(__dirname, filePath);
	}

	write(key, value) {
		const filePath = this.filePath;

		return new Promise(function (resolve) {
			if (fs.existsSync(filePath)) {
				const file = fs.readFileSync(filePath, 'utf-8');
				const parsedJson = JSON.parse(file);
	
				parsedJson[key] = value;
	
				const json = JSON.stringify(parsedJson);
	
				resolve(fs.writeFileSync(filePath, json));
			} else {
				throw new StorageException('No JSON provided for that storage!');
			}
		});
	}

	read(key) {
		const filePath = this.filePath;
		return new Promise(function (resolve) {
			if (fs.existsSync(filePath)) {
				const file = fs.readFileSync(filePath, 'utf-8');
				const parsedJson = JSON.parse(file);
	
				resolve(parsedJson[key]);
			} else {
				throw new StorageException('No JSON provided for that storage!');
			}
		});
	}
}