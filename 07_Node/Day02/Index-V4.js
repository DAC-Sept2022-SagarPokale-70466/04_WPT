const http = require('http')
const sunbeamJsonObj = require('./Sunbeam')

const student = [
    new sunbeamJsonObj.Student(101, "Sagar", "Nashik"),
    new sunbeamJsonObj.Student(102, "Akshay", "Nashik"),
    new sunbeamJsonObj.Student(103, "Anukesh", "Aurangabad"),
    new sunbeamJsonObj.Student(104, "Saurabh", "Nagar"),
    new sunbeamJsonObj.Student(105, "Nishant", "Nagpur")
]

const server = http.createServer((request, response) =>{
    // response.write("U Requested "+request.url);

    // response.setHeader('Content-type','text/html')
    // response.write(`<h2> Hello Node </h2>`)

    if(request.url == '/student' && request.method.toLowerCase() == 'get')
    {
        response.setHeader("Content-type",'Application/JSON')
        response.write(JSON.stringify(student));
    }
    
    if(request.url == '/student' && request.method.toLowerCase() == 'post')
    {
        response.write("responce is POST");
    } 
    
    if(request.url == '/student' && request.method.toLowerCase() == 'put')
    {
        response.write("Requesting the PUT method");
    }

    response.end();
})

server.listen(9999,() =>{console.log("Server started on post : 9999")})
