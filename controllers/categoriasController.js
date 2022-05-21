const categorias = require('../databases/categorias.json')

const categoriasController = {
  index: (req, res) => {
    let categoriasAtivas = categorias.filter(
      categoria => categoria.ativo == true
    )
    console.log('Rota categorias home ', categoriasAtivas)
    res.render('home', { categorias: categoriasAtivas })
  },
  categoriesView: (req, res) => {
    res.render('categories', { teste: 'catetegorias' })
  }
}

module.exports = categoriasController
