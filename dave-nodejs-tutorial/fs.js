// These are read, write and append fs(file system) methods can be improved by using fsPromises.

// fs is short for file system, it is a common core module from node js.

const fs = require("fs")

const path = require("path")

// utf8 is the encoding option. (use to encode string)
// path.join() joins all arguments together and normalize the resulting path.

// most methods you find in node are asynchronous. so here it will log out "hello..." first before it finish reading the file.
fs.readFile(path.join(__dirname, "files", "starter.txt"), "utf8", (err, data) => {
    if(err) throw err

    console.log(data)
})
console.log("hello...")


// These chaining methods create a callback hell. Use fsPromise instead.
// fs.writeFile creates a file.
fs.writeFile(path.join(__dirname, "files", "reply.txt"), "Nice to meet you.", (err) => {
    if(err) throw err

    console.log("write complete")

    // appendFile will also create a file if the specified file name is not already created
    // we should do fs.appendFile inside the fs.writeFile callback method because it will be ready to append file after writeFile has created the file
    fs.appendFile(path.join(__dirname, "files", "reply.txt"), "\nYes it is.", (err) => {
        if(err) throw err
    
        console.log("append complete")
        // We're just renaming the file after appending the existing content. We included the fs.rename method inside of fs.appendFile callback to make sure they process happens in the order we expect, as these methods are all asynchronous
        fs.rename(path.join(__dirname, "files", "reply.txt"), path.join(__dirname, "files", "newReply.txt"), (err) => {
            if(err) throw err
        
            console.log("rename complete")
        })
    })
})

// according to node documentation if we get an uncaught error we have to catch it.

// exit on uncaught errors
process.on("uncaughtException", err => {
    console.error(`There was an uncaught error: ${err}`)
    process.exit(1)
})
