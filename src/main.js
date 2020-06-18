import { Storage } from './features/storage/storage.js';
import Navigator from './features/navigator/navigator.js';


// Initialise navigator
export const navigator = new Navigator();

// Initialise storage for savings
export const savingsStorage = new Storage({filePath: '../../features/storage/json/savings.json'});