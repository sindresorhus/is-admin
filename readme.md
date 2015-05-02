# is-admin [![Build Status](https://travis-ci.org/sindresorhus/is-admin.svg?branch=master)](https://travis-ci.org/sindresorhus/is-admin)

> Check if the process is running as Administrator on Windows


## Install

```
$ npm install --save is-admin
```


## Usage

```js
var isAdmin = require('is-admin');

isAdmin(function (admin) {
	console.log(admin);
	// false
});
```


## Test

I don't know how to automate the test. So for now, just run `npm test` in a normal command-line, then in a elevated command-line *(Started with "Run a Administrator")*, and manually check the output.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
