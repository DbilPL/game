import { Storage } from '../storage/storage.js';
import Navigator from '../navigator/navigator.js';


// Initialise navigator
export const navigator = new Navigator();

// Initialise storage for savings
export const savingsStorage = new Storage({filePath: '../storage/json/savings.json'});