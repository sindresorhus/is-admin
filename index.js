'use strict';
const execa = require('execa');

module.exports = () => {
	if (process.platform !== 'win32') {
		return Promise.resolve(false);
	}

	// http://stackoverflow.com/a/11995662/64949
	return execa('net.exe', ['session']).then(() => true).catch(() => false);
};
