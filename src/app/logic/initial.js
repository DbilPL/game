/* eslint-disable quotes */
import routes from '../../core/constants/pages.js';
import { NoDataException } from '../../core/errors/exceptions.js';
import { navigator, savingsStorage } from '../../main.js';



// When all content loaded, pushing into main page
function main() {
	checkForContent()
		.then(() => navigator.push(routes.mainPage))
		.catch(navigator.close);
}

// Checks if content are avaliable (JSON files with savings)
function checkForContent() {
	return new Promise(function (res, rej) {
		setTimeout(function () {
			const savings = savingsStorage.read();

			savings
				.then(function (savings) {
					if (!savings) {
						rej(new NoDataException('No data provided in savings!'));
					} else {
						res();
					}
				});
		}, 3000);
	});
}

// And here all it goes
main();