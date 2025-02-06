// this is imported from node js
import http from "http"

const PORT = 8080

const server = http.createServer((req, res) => {

    /* Status codes
    
        Informational responses (100 – 199)
        Successful responses (200 – 299)
        Redirection messages (300 – 399)
        Client error responses (400 – 499)
        Server error responses (500 – 599)
    */
    
    //// res.setHeader("Content-Type", "text/html");  ////

    // The `response.setHeader(name, value)` method, introduced in v0.4.0 of the ‘http‘ module, is used to set a single header value for implicit headers. If the header already exists in the headers to be sent, its value will be replaced.


    // res.statusCode = 200  // the status code of the request


    res.writeHead(200, {"Content-Type": "text/html"}) // writeHead method allows you to set both the status code and set the headers
    
    //res.write(`<h3>Hello user</h3>`) // this response sends text to the client when the server starts
    
    res.end("<h1>Server Connected</h1>") // have to end the response after doing what you need
})

// creates a server that listens on the port you set and runs the callback when connected
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})