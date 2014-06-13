"use strict";
var a = require("array-tools"),
    path = require("path");

/** 
commonDir returns the parent directory common to each path in the list
@module
@param {Array} files - An array of file paths to inspect
@returns {string} - A single path ending with the path separator, e.g. "/user/some/folder/"
@example
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
*/
module.exports = function(files){
    return files
        .map(path.dirname)
        .map(function(dir){
            return dir.split(path.sep);
        })
        .reduce(a.commonSequence)
        .concat([""])
        .join(path.sep);
};
