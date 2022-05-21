const categorias = require('../databases/categorias.json')

const controllerHome = {
  index: (req, res) => {
    const categoriasAtivas = categorias.filter(
      categoria => categoria.ativo == true
    )

    res.render('home', { categorias: categoriasAtivas })
  },
}

module.exports = controllerHome