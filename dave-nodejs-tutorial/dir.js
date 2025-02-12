const fs = require("fs")
const path = require("path")

// fs.existsSync checks if a path exists or not. fs.mkdir creates a folder
if (!fs.existsSync("./new")) {
    fs.mkdir("./new", (err) => {
        if (err) throw err
        console.log("Directory created")
    })
}

console.log(path.join(__dirname, "files", "starter.txt"))

if (!fs.existsSync(path.join(__dirname, "files", "starter.txt"))) {
    fs.writeFile(path.join(__dirname, "files", "starter.txt"), "Hello my name is Francis.", (err) => {
        if (err) {
            console.error("Error creating file:", err);
        } else {
            console.log("File created successfully");
        }
    });
}

if (fs.existsSync(path.join(__dirname, "files", "starter.txt"))) {
    fs.unlink(path.join(__dirname, "files", "starter.txt"), (err) => {
        if (err) {
            console.error("Error deleting file:", err);
        } else {
            console.log("File deleted successfully");
        }
    });
}



// exit on uncaught errors
process.on("uncaughtException", err => {
    console.error(`There was an uncaught error: ${err}`)
    process.exit(1)
})