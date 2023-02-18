// const os = require('os');

// console.log(os);
// console.log(os.arch)
// console.log(os.cpus())
// console.log(os.freemem())

const fs = require('fs');

console.log(fs);

console.log("Hii")


// Asynchronouse Function
// fs.readdir("c:/", (error, files) => {
//     if (error == null)       // NO Error
//     {
//         files.map(file => {
//             console.log(file);
//         })
//     }
//     else {
//         console.log("Something is Wrong")
//     }
// });

// console.log("Bye")



// Synchronouse Function (will execute as the sequece)
var file = fs.readdirSync("c:/")

file.map(file=>{console.log(file)})

console.log("Bye")