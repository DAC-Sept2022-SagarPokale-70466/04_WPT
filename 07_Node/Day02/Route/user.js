const express = require('express');
const app = express();
const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Sagar@154',
    database: 'mern'
})

app.use(express.json());

connection.connect();

app.get("/", (req, res) => {
    connection.query("select * from emp", (error, result) => {
        if (error != null) {
            res.send(error)
        }
        else {
            res.send(result);
        }
    })
});

app.post("/", (req, res) => {
    ////connection.connect();
    let query = `insert into Emp values(${req.body.No}, 
                                       '${req.body.Name}', 
                                       '${req.body.Address}');`
    connection.query(query, (error, result) => {
        if (error != null) {
            res.send(error);
        }
        else {
            res.send(result);
        }
    })
});

app.put("/:no", (req, res) => {
    let query = `update Emp set Name = '${req.body.Name}',  
                                Address = '${req.body.Address}' 
                                where No = ${req.params.no}`;
    connection.query(query, (error, result) => {
        if (error != null) {
            res.send(error);
            //connection.end();
        }
        else {
            res.send(result);
            //connection.end();
        }
    })
});

app.delete("/:no", (req, res) => {
    let query = `delete from Emp where No = ${req.params.no}`;

    connection.query(query, (error, result) => {
        if (error != null) {
            res.send(error);
        }
        else {
            res.send(result);
        }
    })
});

module.exports = app;