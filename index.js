'use strict';
const execa = require('execa');

module.exports = async () => {
	if (process.platform !== 'win32') {
		return false;
	}

	try {
		// http://stackoverflow.com/a/21295806/1641422
		await execa.shell('fsutil dirty query %systemdrive%');
		return true;
	} catch (error) {
		if (error.code === 'ENOENT') {
			return testFltmc();
		}

		return false;
	}
};

// http://stackoverflow.com/a/28268802
async function testFltmc() {
	try {
		await execa('fltmc');
		return true;
	} catch (_) {
		return false;
	}
}
