import process from 'node:process';
import test from 'ava';
import execa from 'execa';

if (process.platform === 'win32') {
	test('normal user', async t => {
		await t.throwsAsync(execa('node', ['fixture.js']));
	});

	test('admin user', async t => {
		await t.notThrowsAsync(execa('elevate.exe', [process.execPath, 'fixture.js']));
	});
} else {
	test('non-win', async t => {
		await t.throwsAsync(execa('./fixture.js'));
	});
}
