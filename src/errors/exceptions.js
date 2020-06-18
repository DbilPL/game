class AppException {
	constructor(message) {
		this.message = message;
	}
}

export class StorageException extends AppException {
	constructor(message) {
		super(message);
	}
} 

export class NoDataException extends AppException {
	constructor(message) {
		super(message);
	}
} 