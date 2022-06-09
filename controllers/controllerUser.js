const controllerUser = {
  index: (req, res) => {},
  show: (req, res) => {},
  createUser: (req, res) => {
    res.render('users/createUser', {})
  },
  storeUser: (req, res) => {
    res.render('users/storeUser', {
      message: `Usuário criado com sucesso!`
    })
  },
  editUser: (req, res) => {
    res.render('users/editUser', {})
  },
  updateUser: (req, res) => {
    // res.render('users/updateUser', {
    //   message: `Usuário alterado com sucesso!`
    // })
    console.log('update user')
    console.log(
      'alterados dados do usuario e redirecionada para a tela de login'
    )
    res.redirect('/')
  },
  editPassword: (req, res) => {
    console.log('edit Password')
    res.render('users/editPassword', {})
  },
  updatePassword: (req, res) => {
    console.log('update Password')
    console.log('alterada a senha e redirecionada para a tela de login')
    res.redirect('/')
  },
  destroy: (req, res) => {},
  userSignIn: (req, res) => {
    console.log('sign in')
    res.render('users/userSignIn', { usuarioLogado: 'Nome Usuário' })
  },
  userLogged: (req, res) => {
    console.log('redirecionando para home após o login')
    // res.render('partials/header', { usuarioLogado: 'usuario logado' })
    res.redirect('/')
  },
  userSignUp: (req, res) => {
    console.log('userSignUp - sign up')
    res.render('users/userSignUp', { usuarioLogado: 'Nome Usuário' })
  },
  userCreated: (req, res) => {
    console.log(
      'userCreated - redirecionando para a tela de login após criar a conta'
    )
    //res.render('users/userSignIn', {})
    res.redirect('/')
  },
  addressEdit: (req, res) => {
    console.log('addressEdit - enderecos do usuario')

    const enderecos = require('../databases/userAddresses.json')

    res.render('users/userAddress', { enderecos })
  },
  addressUpdate: (req, res) => {
    console.log('addressEdit - enderecos do usuario alterado')
    res.render('users/editUser', {})
  },
  creditCardEdit: (req, res) => {
    console.log(' creditCartEdit - edit')

    const cartoes = require('../databases/userCreditCards.json')

    res.render('users/userCreditCard', { cartoes })
  },
  creditCardUpdate: (req, res) => {
    console.log(' creditCartUpdate - update')
    res.render('users/userCreditCard', {})
  }
}

module.exports = controllerUser
