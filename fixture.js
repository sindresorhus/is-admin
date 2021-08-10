#!/usr/bin/env node
import process from 'node:process';
import isAdmin from './index.js';

(async () => {
	const admin = await isAdmin();

	console.log('Is admin?', admin ? 'Yes' : 'No');
	process.exit(admin ? 0 : 1);
})();
