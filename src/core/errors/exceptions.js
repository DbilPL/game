class AppException {
	constructor(message) {
		this.message = message;
	}
}

class StorageException extends AppException {
	constructor(message) {
		super(message);
	}
} 

class NoDataException extends AppException {
	constructor(message) {
		super(message);
	}
}

module.exports = {
	StorageException,
	NoDataException
};