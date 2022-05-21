const routerHome = require('./routes/routerHome')

const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', routerHome)

app.listen(port, console.log(`Servidor rodando na porta ${port}`))
