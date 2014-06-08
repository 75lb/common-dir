[![view on npm](http://img.shields.io/npm/v/common-dir.svg)](https://www.npmjs.org/package/common-dir)
[![npm module downloads per month](http://img.shields.io/npm/dm/common-dir.svg)](https://www.npmjs.org/package/common-dir)
[![Build Status](https://travis-ci.org/75lb/common-dir.svg?branch=master)](https://travis-ci.org/75lb/common-dir)
[![Dependency Status](https://david-dm.org/75lb/common-dir.svg)](https://david-dm.org/75lb/common-dir)


#common-dir
commonDir returns the parent directory common to each path in the list

####Example
```js
> var commonDir = require("common-dir");
> files = fs.readdirSync(".").map(function(file){ return path.resolve(file); })
[ '/Users/Lloyd/Documents/75lb/wodge/.DS_Store',
  '/Users/Lloyd/Documents/75lb/wodge/.git',
  '/Users/Lloyd/Documents/75lb/wodge/.gitignore',
  '/Users/Lloyd/Documents/75lb/wodge/.jshintrc',
  '/Users/Lloyd/Documents/75lb/wodge/README.md',
  '/Users/Lloyd/Documents/75lb/wodge/lib',
  '/Users/Lloyd/Documents/75lb/wodge/node_modules',
  '/Users/Lloyd/Documents/75lb/wodge/package.json',
  '/Users/Lloyd/Documents/75lb/wodge/test' ]
> commonDir(files)
'/Users/Lloyd/Documents/75lb/wodge/'
```
















