const express = require('express');
const userApp = require('./user');

const app = express();

app.use((req, res, next) => {
    // res.setHeader("Ac")
    res.setHeader("Access-Control-Allow-Origin", "*");
    //line above  will only make GET possible in case of CORS issue
    

    next();
});

app.use('/user', userApp)

app.get('/', (req, res) => {
    res.send("Welcome to Home page")
})







app.listen(9999, () => { console.log("Server started") });

