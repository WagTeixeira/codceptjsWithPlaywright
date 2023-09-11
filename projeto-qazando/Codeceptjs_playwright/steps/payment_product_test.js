const { faker } = require('@faker-js/faker');
var validacao = require('assert');

const { I, home_page, payment_page} = inject();

Feature('Payment');

Scenario('Efetuar compra', async ({ I, home_page, payment_page}) => {

    let emailFaker = faker.internet.email();
    let senhaFaker = faker.internet.password();
    let nomeFaker = faker.person.firstName();
    let sobrenomeFaker = faker.person.lastName();
    let empresaFaker = faker.company.name();
    let cepFaker = faker.location.zipCode();
    let enderecoFaker = faker.location.street();

    let emailPagamento = emailFaker;
    
     I.amOnPage('/')
     
     home_page.accessLoginPage()

     payment_page.submitLoginAccount(emailFaker, senhaFaker)

     payment_page.chooseProduct()

     payment_page.checkoutProduct(nomeFaker, sobrenomeFaker, empresaFaker, emailPagamento, cepFaker, enderecoFaker, 'Comprando Produto')

    })
