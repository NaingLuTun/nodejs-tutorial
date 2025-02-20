const http = require("http")
const path = require("path")
const fs = require("fs")
const { stringify } = require("querystring")
const fsPromises = require("fs").promises

const PORT = process.env.port || 5000

const serveFile = async (filePath, contentType, response) => {
    try {
        const rawData = await fsPromises.readFile(
            filePath, 
            !contentType.includes("image")? "utf8" : ""    
        )

        const data = contentType === "application/json"? JSON.parse(rawData) : rawData

        response.writeHead(
            filePath.includes("404.html")? 404 : 200,
            {"Content-Type": contentType}
        )

        response.end(
            contentType === "application/json"? JSON.stringify(data) : data
        )
    } catch (err) {
        response.statusCode = 500
        response.end()
    }
}

const server = http.createServer((req, res) => {
    const extension = path.extname(req.url)

    let contentType

    switch(extension) {
        case ".css":
            contentType = "text/css"
            break
        case ".js":
            contentType = "text/javascript"
            break
        case ".json":
            contentType = "application/json"
            break
        case ".jpg":
            contentType = "image/jpeg"
            break
        case ".png":
            contentType = "image/png"
            break
        case ".txt":
            contentType = "text/plain"
            break
        default: 
            contentType = "text/html"
    }

    let filePath =
        contentType === "text/html" && req.url === "/"
        ? path.join(__dirname, "views", "index.html")
        : contentType === "text/html" && req.url.slice(-1) === "/"
            ? path.join(__dirname, "views", req.url, "index.html")
            : contentType === "text/html"
                ? path.join(__dirname, "views", req.url)
                : path.join(__dirname, req.url)

    if(!extension && req.url.slice(-1) !== "/") {filePath += ".html"}

    const fileExists = fs.existsSync(filePath)

    if(fileExists) {
        serveFile(filePath, contentType, res)
    } else {
        // 404 or 301 (redirect)
        switch(path.parse(filePath).base) {
            case "old-page.html" :
                res.writeHead(301, {location: "/new-page.html"})
                res.end()
                break
            case "www-page.html" :
                res.writeHead(301, {location: "/"})
                res.end()
                break
            default:
                serveFile(path.join(__dirname, "views", "404.html"), "text/html", res)
        }
        console.log(path.parse(filePath))
        res.end()
    }
})

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))