'use strict';
var childProcess = require('child_process');

module.exports = function (cb) {
	if (process.platform !== 'win32') {
		throw new Error('Windows only');
	}

	// http://stackoverflow.com/a/11995662/64949
	childProcess.execFile('net.exe', ['session'], function (err) {
		cb(!err);
	});
};
