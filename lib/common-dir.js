"use strict";
var w = require("wodge"),
    path = require("path");

/** 
commonDir returns the parent directory common to each path in the list
@module
@param {Array} files - An array of file paths to inspect
@returns {string} - A single path ending with the path separator, e.g. "/user/some/folder/"
@example
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
*/
module.exports = function(files){
    return files
        .map(path.dirname)
        .map(function(dir){
            return dir.split(path.sep);
        })
        .reduce(w.commonSequence)
        .concat([""])
        .join(path.sep);
};
