/* eslint no-console: 0 */
'use strict';

const chalk = require( 'chalk' ),
Logger = {
    success(msg) {
        console.log(chalk.green.bold(msg));
    },
    error(msg) {
        console.log(chalk.red.bold(msg));
    }
};
