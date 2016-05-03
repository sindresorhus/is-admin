#!/usr/bin/env node
'use strict';
const isAdmin = require('./');

isAdmin().then(admin => {
	process.exit(admin ? 0 : 1);
});
