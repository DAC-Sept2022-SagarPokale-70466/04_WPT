// const http = require("http");

// const server = http.createServer((request, response) => {

//     let users = [
//         { "No": 11, "Name": "Amit1", "Adrress": "Pune" },
//         { "No": 12, "Name": "Amit1", "Adrress": "Pune" },
//         { "No": 12, "Name": "Amit1", "Adrress": "Pune" }
//     ];

//     response.setHeader('Content-Type', 'application/json');
//     response.write(JSON.stringify(users));
//// We have to write the both line in the plain JS file
//     response.end();
// });

// server.listen(9898, () => {
//     console.log("Server Started :) ");
// })


// ---------------------------------------------------------------------


const config = require('config'); // This package will automically read the config folder and default.json file
const port = config.get("port");


const express = require('express')
const app = express()

app.use((request, response, next) =>{       // This will SOLVE the CORS error
    response.setHeader("Access-Control-Allow-Origin", "*");  //Default call only for GET method, so for this we write the next
    response.setHeader("Access-Control-Allow-Methods", "*");
    response.setHeader("Access-Control-Allow-Headers", "*");

    next();
});

const userRoutes = require('./routes/users');

app.use('/users', userRoutes); // When /users request is there use userRoutes

app.listen(port);