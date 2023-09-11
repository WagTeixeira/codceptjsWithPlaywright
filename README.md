Codeceptjs com Playwright:

Nesse projeto foram utilizados Codeceptjs e Playwright para testes em um site específico do curso da Qazando.

Comandos utilizados para inciar o projeto:

npm init

npm install codeceptjs playwright --save

Plugin utilizado:

npm install -D @faker-js/faker

const { faker } = require('@faker-js/faker');

Page Objects:

npx codeceptjs gpo

const { I, myPage, mySteps } = inject();
