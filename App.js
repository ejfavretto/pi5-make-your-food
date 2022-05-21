const express = require('express')
const CategoriasRoutes = require('./routes/CategoriasRoutes')
const path = require('path')
const { application } = require('express')
const app = express()
const port = 3333

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', CategoriasRoutes)

app.listen(port, console.log(`Servidor roando na porta ${port}`))
