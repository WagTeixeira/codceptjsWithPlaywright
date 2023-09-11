const { I } = inject();
const { faker } = require('@faker-js/faker');
var validacao = require('assert');

module.exports = {
  
button: {
  titleMesseger: '.swal2-title'
},

async validateUserCreated(){
     var titleAtual = await I.grabTextFrom('.swal2-title')
     validacao.equal(titleAtual, 'Cadastro realizado!')


    }
  }