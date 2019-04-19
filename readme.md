# is-admin

> Check if the process is running as Administrator on Windows


## Install

```
$ npm install is-admin
```


## Usage

```js
const isAdmin = require('is-admin');

(async () => {
	console.log(await isAdmin());
	//=> false
})();
```


## API

### isAdmin()

Returns a `Promise<boolean>` indicating whether the process is running as Administrator.


## Related

- [is-elevated](https://github.com/sindresorhus/is-elevated) - Check if the process is running with elevated privileges *(cross-platform)*


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
