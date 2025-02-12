// If we have a larger file and we want to read it, instead of grabbing the whole file at once, we can grab it byte by byte to make it a little easier on the application.

const fs = require("fs")
const path = require("path")

const rs = fs.createReadStream(path.join(__dirname, "files", "lorem.txt"), {encoding: "utf8"})
const ws = fs.createWriteStream(path.join(__dirname, "files", "new-lorem.txt"))

// rs.on("data") we're listening for data coming in from the fs.createReadStream and data return from it (dataChunk) is then write to new-lorem.txt
/* 

rs.on("data", (dataChunk) => {
    ws.write(dataChunk)
}) 
    
*/

// This does the same as the above code.
// Piping in Node.js is a method used to connect a readable stream to a writable stream, allowing data to flow automatically from the source to the destination.
rs.pipe(ws)