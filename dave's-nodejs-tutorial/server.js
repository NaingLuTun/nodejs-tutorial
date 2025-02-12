// node js uses CommonJS modules instead of ES6 modules by default so we need to use the "require" method to import modules.

const os = require("os")
const path = require("path")
const math = require("./math")
const {subtract} = require("./math") // destructured import

// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())


// __dirname returns the current directory's path
// __filename returns the current directory's path and the file name

// __dirname and __filename are values we always have access to in node js
// console.log(__dirname)
// console.log(__filename)


// path.dirname(__filename) returns the __filename's directory's path (same output as __dirname)
// path.basename(__filename) returns just the file name
// path.extname(__filename) returns the file's extension

// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))

// path.parse(__filename) returns the an object containing the file's root, directory, basename, extension, and the file name.
// console.log(path.parse(__filename))

console.log(math.multiply(23, 56))
console.log(subtract(100, 45))