const express = require('express')
const path = require('path')
const vars = require('./config/vars')
const LoginRoutes = require('./routes/login.route')



const app = express()

app.listen(vars.port)

const views = [
  path.join(__dirname, 'views'),
]
console.log('here')

app.set('views', views)
app.set('view engine', 'ejs')

// Routes
app.use('/', LoginRoutes)

/**
 * Exports express
 * @public
 */

module.exports = app
