const http = require('http')

const mysql = require('mysql')

const server = http.createServer((req, res) => {
    res.setHeader("Content-type", 'application/JSON')

    var connection = mysql.createConnection({
        host: "Localhost",
        user: "root",
        password: "Sagar@154",
        database: "mern"
    });
    connection.connect();

    // connection.query("select * from Emp", (error, result)=>
    // {
    //   if(error!=null)
    //    {
    //     res.write("Something wrong!!");
    //     connection.end();
    //     console.log(error)
    //     res.end();
    //    }
    //    else
    //    {
    //     res.write(JSON.stringify(result));
    //     connection.end();
    //     res.end();
    //    }
    // })


    connection.query("insert into Emp values(20, 'akshay', 'banglore')", (error, result)=>
    {
      if(error!=null)
       {
        res.write("Something wrong!!");
        connection.end();
        res.end();
       }
       else
       {
        res.write(JSON.stringify(result));
        connection.end();
        res.end();
       }
    })

});

server.listen(9999, () => { console.log("Server started on port 9999") })