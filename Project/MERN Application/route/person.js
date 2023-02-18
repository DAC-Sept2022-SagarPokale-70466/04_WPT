
const express = require('express')

const db = require('../db')

const router = express.Router();

const cryptoJs = require('crypto-js')

const utils = require('../utils')

router.get('/', (request, response) => {
    const quary = 'select id, firstname, lastname, email, password from person'
    db.pool.execute(quary, (error, person) => {
        response.send(utils.createResult(error, person))
    })

})


router.post('/', (request, response) => {
    const { firstname, lastname, email, password } = request.body

    // Encrypt password
    const encryptedPass = String(cryptoJs.MD5(password))

    const query = 'insert into person (firstname , lastname , email , password) values (?, ?, ? ,?)'
    db.pool.execute(query, [firstname, lastname, email, password], (error, result) =>
    {
        response.send(utils.createResult(error, result))
    })
})

module.exports = router