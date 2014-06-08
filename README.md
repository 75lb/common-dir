[![view on npm](http://img.shields.io/npm/v/common-dir.svg)](https://www.npmjs.org/package/common-dir)
[![npm module downloads per month](http://img.shields.io/npm/dm/common-dir.svg)](https://www.npmjs.org/package/common-dir)
[![Build Status](https://travis-ci.org/75lb/common-dir.svg?branch=master)](https://travis-ci.org/75lb/common-dir)
[![Dependency Status](https://david-dm.org/75lb/common-dir.svg)](https://david-dm.org/75lb/common-dir)


#common-dir
commonDir returns the parent directory common to each path in the list

####Example
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
















