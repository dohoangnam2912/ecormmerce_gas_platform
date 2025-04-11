const {default: helmet} = require('helmet')
const compression = require('compression')
const express = require('express')
const morgan = require('morgan')
const app = express()


// init middlewares
app.use(morgan("tiny"))
app.use(helmet())
app.use(compression())
// init db
require('./dbs/init.mongodb')

// init routes
app.get('/', (req, res, next) => {
    const strCompress = "Hello! My name is Momo"
    return res.status(200).json({
        message: "Welcome!",
        metadata: strCompress.repeat(100000)
    })
}) // Function thong bao
// handling error

module.exports = app