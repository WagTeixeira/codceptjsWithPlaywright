const { faker } = require('@faker-js/faker');
var validacao = require('assert')

const { I, home_page, login_page} = inject();

Feature('login');

Before(() => {

I.amOnPage('/')

})
Scenario('Verificar campo email vazio', ({ I, home_page, login_page}) => {


    let emailFaker = faker.internet.email();
    let senhaFaker = faker.internet.password();

    home_page.accessLoginPage()

    login_page.submitLoginAccount(emailFaker, senhaFaker)

    login_page.loginUser()

    login_page.validateLogin()
    
})


