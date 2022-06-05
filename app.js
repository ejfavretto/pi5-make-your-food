const routerCart = require('./routes/routerCart')
const routerCategory = require('./routes/routerCategory')
const routerCheckout = require('./routes/routerCheckout')
const routerHome = require('./routes/routerHome')
const routerSignInAndOut = require('./routes/routerSignInAndOut')
const routerUser = require('./routes/routerUser')

const express = require('express')
const path = require('path')
const routerOrder = require('./routes/routerOrder')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', routerCart)
app.use('/', routerCategory)
app.use('/', routerCheckout)
app.use('/', routerHome)
app.use('/', routerSignInAndOut)
app.use('/', routerUser)

app.listen(port, console.log(`Servidor rodando na porta ${port}`))
