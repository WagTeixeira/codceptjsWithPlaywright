const { I } = inject();

module.exports = {

  fields: {
    userField: '#user',
    passwordField: '#password'

  },

  button: {
    loginButton: '#btnLogin'
  },

  messeges: {
    messegeLoginRight: 'Login realizado'
  },

  submitLoginAccount(email, senha) {
    I.fillField(this.fields.userField, email )
    I.fillField(this.fields.passwordField, senha)

  },

  loginUser(){
    I.click(this.button.loginButton)
  },

  validateLogin() {
    I.see(this.messeges.messegeLoginRight)
  }

}
