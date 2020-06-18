const { navigator } = require('../../../main.js');
const routes  = require('../../../core/constants/pages.js');

// Sets functions on all buttons in main menu
function setOnClickListenersOnButtons() {
	const buttons = document.querySelectorAll('.menuButton');

	const functions = [
		function () {
			
		},
		function () {
			navigator.push(routes.settingsPage);
		},
		function () {

		},
		function () {
			navigator.close();
		},
	];

	functions
		.map(
			(value, index) =>
				buttons[index].addEventListener('click', value)
		);
}

function main() {
	setOnClickListenersOnButtons();
}

// And here all it goes
main();