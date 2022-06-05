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
    res.render('users/updateUser', {
      message: `Usuário alterado com sucesso!`
    })
  },
  editPassword: (req, res) => {
    console.log('edit Password')
    res.render('users/editPassword', {})
  },
  updatePassword: (req, res) => {
    console.log('update Password')
    console.log('alterada a senha e redirecionada para a tela de login')
    res.render('users/userSignIn', { usuarioLogado: 'Nome Usuário' })
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
    res.render('users/userSignIn', {})
  }
}

module.exports = controllerUser
