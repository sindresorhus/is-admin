'use strict';
const execa = require('execa');

module.exports = () => {
	if (process.platform !== 'win32') {
		return Promise.resolve(false);
	}

	// http://stackoverflow.com/a/21295806/1641422
	return execa.shell('fsutil dirty query %systemdrive%').then(() => true).catch(error => {
		if (error.code === 'ENOENT') {
			// http://stackoverflow.com/a/28268802
			return execa('fltmc').then(() => true).catch(() => false);
		}

		return false;
	});
};
