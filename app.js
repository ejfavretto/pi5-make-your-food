const express = require('express')
const categoriasRoutes = require('./routes/categoriasRoutes')
const path = require('path')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', categoriasRoutes)

app.listen(port, console.log(`Servidor rodando na porta ${port}`))
