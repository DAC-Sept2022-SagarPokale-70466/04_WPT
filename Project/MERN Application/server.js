const express = require('express')

const cors = require('cors')

const routerPerson = require('./route/person')

const app = express();

app.use(cors('*'))

app.use(express.json())


// Add the router for user
app.use('/person', routerPerson)

app.listen(4000, '0.0.0.0', () => {
    console.log('Server started succesfully on port 4000')
})