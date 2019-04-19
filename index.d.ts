/**
Check if the process is running as Administrator on Windows.

@returns Whether the process is running as Administrator.

@example
```
import isAdmin = require('is-admin');

(async () => {
	console.log(await isAdmin());
	//=> false
})();
```
*/
declare function isAdmin(): Promise<boolean>;

export = isAdmin;
