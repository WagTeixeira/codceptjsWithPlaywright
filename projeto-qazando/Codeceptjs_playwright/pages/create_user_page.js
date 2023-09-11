const { I } = inject();

module.exports = {
  fields: {
    nameRegisterField: '#user',
    emailRegisterField: '#email',
    passwordRegisterField: '#password'

  },

  button: {
    cadastroRegisterButton: '#btnRegister'
  },

  messeges: {

  },

  submitCreateNewAccount(nome, email, senha) {
    I.fillField(this.fields.nameRegisterField, nome )
    I.fillField(this.fields.emailRegisterField, email)
    I.fillField(this.fields.passwordRegisterField, senha)
    
  },

  createUser() {
    I.click(this.button.cadastroRegisterButton)
  }
  
}
