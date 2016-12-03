/* eslint no-console: 0*/

'use strict';

const chalk = require('chalk');
const Logger = {
	success(msg) {
		console.log(chalk.green.bold('OK:'), msg);
	},
	error(msg) {
		console.log(chalk.red.bold('Error:'), msg);
	},
	warning(msg) {
		console.log(chalk.yellow.bold('Warning:'), msg);
	},
	info(msg) {
		console.log(chalk.blue.bold('Info:'), msg);
	},
};

Logger.success('Działa');
Logger.error('Nie działa');
Logger.warning('To tylko ostrzeżenie');
Logger.info('Wszystko działa');
