import Navigator from './navigator/navigator.js';
import routes from './constants/pages.js';

// Initialise navigator
export const navigator = new Navigator();

// When all content loaded, pushing into main page
async function main() {
	loadContent().then(() => navigator.push(routes.mainPage));
}

// Loads content (all npc and player data and checks if they are provided)
async function loadContent() {
	// TODO: Think about what content we want to load
}

// And here all it goes
main();