# is-admin

> Check if the process is running as Administrator on Windows


## Install

```
$ npm install --save is-admin
```


## Usage

```js
const isAdmin = require('is-admin');

isAdmin().then(admin => {
	console.log(admin);
	//=> false
});
```


## API

### isAdmin()

Returns a `Promise<boolean>` indicating whether the process is running as Administrator.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
