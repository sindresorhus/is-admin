import test from 'ava';
import execa from 'execa';

if (process.platform === 'win32') {
	test('normal user', t => {
		t.throws(execa('node', ['fixture.js'], {cwd: __dirname}));
	});

	test('admin user', t => {
		t.notThrows(execa('elevate.exe', [process.execPath, 'fixture.js'], {cwd: __dirname}));
	});
} else {
	test('non-win', t => {
		t.throws(execa('./fixture.js', {cwd: __dirname}));
	});
}
