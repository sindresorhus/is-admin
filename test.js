import test from 'ava';
import execa from 'execa';

if (process.platform === 'win32') {
	test('normal user', t => {
		t.throws(execa('node', ['fixture.js']));
	});

	test('admin user', t => {
		t.notThrows(execa('elevate.exe', [process.execPath, 'fixture.js']));
	});
} else {
	test('non-win', t => {
		t.throws(execa('./fixture.js'));
	});
}
