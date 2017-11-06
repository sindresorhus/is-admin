'use strict';
const childProcess = require('child_process');

module.exports = () => {
	if (process.platform !== 'win32') {
		return Promise.resolve(false);
	}

	// https://stackoverflow.com/a/11995662
	return new Promise(resolve => {
		childProcess.exec('NET SESSION', (err, stdout, stderr) => {
			resolve(!err && !stderr.trim());
		});
	});
};
