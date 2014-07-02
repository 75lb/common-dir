[![view on npm](http://img.shields.io/npm/v/common-dir.svg)](https://www.npmjs.org/package/common-dir)
[![npm module downloads per month](http://img.shields.io/npm/dm/common-dir.svg)](https://www.npmjs.org/package/common-dir)
[![Build Status](https://travis-ci.org/75lb/common-dir.svg?branch=master)](https://travis-ci.org/75lb/common-dir)
[![Dependency Status](https://david-dm.org/75lb/common-dir.svg)](https://david-dm.org/75lb/common-dir)

<a name="module_common-dir"></a>
##common-dir(files)

commonDir returns the parent directory common to each path in the list

**Params**

- files `Array` - An array of file paths to inspect

  
**Returns**: `string` - - A single path ending with the path separator, e.g. "/user/some/folder/"  
**Example**  
```js
> var commonDir = require("common-dir");
> files = [ 
  '/Users/75lb/one/package.json',
  '/Users/75lb/one/test',
  '/Users/75lb/two/test/main.js'     
]
> commonDir(files)
'/Users/75lb/'
```

