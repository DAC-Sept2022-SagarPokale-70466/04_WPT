const Database = require('./CURD')

const objDatabase = new Database();

objDatabase.on("EventHappend",() =>{console.log("File Log")})

objDatabase.Insert("Some Data")