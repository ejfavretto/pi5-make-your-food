const controllerOrder = {
  index: (req, res) => {
    res.render('users/userOrders', {})
  },
  store: (req, res) => {},
  create: (req, res) => {},
  show: (req, res) => {},
  edit: (req, res) => {},
  update: (req, res) => {},
  destroy: (req, res) => {}
}

module.exports = controllerOrder
