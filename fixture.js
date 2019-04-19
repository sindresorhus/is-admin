#!/usr/bin/env node
'use strict';
const isAdmin = require('.');

(async () => {
	const admin = await isAdmin();

	console.log('Is admin?', admin ? 'Yes' : 'No');
	process.exit(admin ? 0 : 1);
})();
