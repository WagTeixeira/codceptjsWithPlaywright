const { I } = inject();

module.exports = {
  fields: {

  },

  button: {
    cadastroButton: 'Cadastro',
    loginButton: 'Login'

  },

  messeges: {

  },

  accessCadastroPage() {
    I.click(this.button.cadastroButton )
  },

  accessLoginPage(){
    I.click(this.button.loginButton)
  }
  
}
