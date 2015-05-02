'use strict';
var childProcess = require('child_process');

module.exports = function (cb) {
	if (process.platform !== 'win32') {
		setImmediate(cb, null, false);
		return;
	}

	// http://stackoverflow.com/a/11995662/64949
	childProcess.execFile('net.exe', ['session'], function (err) {
		cb(null, !err);
	});
};
