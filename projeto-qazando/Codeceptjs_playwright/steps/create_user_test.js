const { faker } = require('@faker-js/faker');
var validacao = require('assert');

const {I, home_page, create_user_page, my_account_page } = inject();

Feature('Create User');
// async basicamente força irá forçar o testes esperar uma coisa acontecer para depois prosseguir com as outras 
Scenario('Cadastro de novo usuário', async ({ I, home_page, create_user_page, my_account_page}) => {

    let nomeFaker = faker.internet.userName();
    let emailFaker = faker.internet.email();
    let senhaFaker = faker.internet.password();

    
     I.amOnPage('/')

     home_page.accessCadastroPage()

     create_user_page.submitCreateNewAccount(nomeFaker, emailFaker, senhaFaker)

     create_user_page.createUser()
    
     // Validação por texto/titulo 
     my_account_page.validateUserCreated()
     
     
})
