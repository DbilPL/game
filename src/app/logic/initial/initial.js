/* eslint-disable quotes */
const routes = require('../../../core/constants/pages.js');
const { NoDataException } = require('../../../core/errors/exceptions.js');
const { navigator, savingsStorage } = require('../../../main.js');

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

// Starts animation on initial page
function startLoadingAnimation() {
	const textContainer = document.querySelector('.loadingText');

	let text = 'Loading';

	let counter = 1;

	const interval = setInterval(function () {
		
		if (counter < 4) {
			counter++;
			text += '.';
		} else {
			clearInterval(interval);
		}
		
		textContainer.innerText = text;   
	}, 1000);
}

// When all content loaded, pushing into main page
function main() {
	checkForContent()
		.then(() => navigator.push(routes.mainPage))
		.catch(navigator.close);
		
	startLoadingAnimation();
}
// And here all it goes
main();