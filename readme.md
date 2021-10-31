# foreach.js

`foreach.js` is an omnipotent loop function for object

## Install

```sh
npm i foreach.js
# or
yarn add foreach.js
```

## How to use ?

```js
// Import Package
import foreach from "foreach.js";

// mock
let json = {
  name: `foreach.js`,
  author: `joenix`,
  born: 1985
};

let arr = ["my", "name", "is", "joenix"];

/**
 * @param source { object | array }
 * @param callback { function }
 * @param config { object }
 * @property clone { boolean: false }
 * @property deep { boolean: false }
 * @property stop { any: false }
 * @property step { number: 1 }
 * @property long { number: 0 }
 * ======== ======== ========
 */

// Normal
json = foreach(json, (value, key) => console.log(key, value));

// Stop
json = foreach(json, (value, key) => {
  if (key === author && value === "joenix") {
    return false;
  }
});

// Step
arr = foreach(arr, (value, key) => console.log(key, value), { step: 2 });
```
