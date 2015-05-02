'use strict';
var childProcess = require('child_process');
var test = require('ava');
var isAdmin = require('./');

test('normal user', function (t) {
	t.plan(1);

	childProcess.execFile(process.execPath, ['fixture.js'], {cwd: __dirname}, function (err) {
		t.assert(err, err);
	});
});

test('admin user', function (t) {
	t.plan(1);

	childProcess.execFile('elevate.exe', [process.execPath, 'fixture.js'], {cwd: __dirname}, function (err) {
		t.assert(!err, err);
	});
});
