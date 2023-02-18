const express = require('express')
const app = express()

app.get('/', function (req, res) {
  
    let users = [
                { "No": 11, "Name": "Amit1", "Adrress": "Pune" },
                { "No": 12, "Name": "Amit1", "Adrress": "Pune" },
                { "No": 12, "Name": "Amit1", "Adrress": "Pune" }
            ];
  

    res.send(users);
})

module.exports = app;