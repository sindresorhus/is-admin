#!/usr/bin/env node
'use strict';
var isAdmin = require('./');

isAdmin(function (admin) {
	process.exit(admin ? 0 : 1);
});
