import { Storage } from './features/storage/storage.js';
import Navigator from './features/navigator/navigator.js';


// Initialise navigator
export const navigator = new Navigator();

// Initialise storage for savings
export const savingsStorage = new Storage({filePath: '../../app/data/savings.json'});

// Initialise storage for settings
export const settingsStorage = new Storage({filePath: '../../app/data/settings.json'});