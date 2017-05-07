#!/usr/bin/env node
'use strict';
const isAdmin = require('.');

isAdmin().then(admin => {
	console.log('Is admin?', admin ? 'Yes' : 'No');
	process.exit(admin ? 0 : 1);
});
