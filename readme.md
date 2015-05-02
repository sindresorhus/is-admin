# is-admin

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


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
