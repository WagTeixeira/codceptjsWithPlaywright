#Codeceptjs com Playwright:

Nesse projeto foram utilizados Codeceptjs e Playwright para testes em um site específico do curso da Qazando.

*Comandos utilizados para inciar o projeto:*

* npm init

* npm install codeceptjs playwright --save

*Plugin utilizado:*

* npm install -D @faker-js/faker

* const { faker } = require('@faker-js/faker');

*Page Objects:*

* npx codeceptjs gpo

* const { I, myPage, mySteps } = inject();

*Comando adicionados na pasta codecept.conf.js para adicionar screenshots de todo o processo de teste*

plugins:{
    stepByStepReport: {
      enabled: true,
      deleteSuccessful: false,
      fullPageScreenshots: true,
      screensghotsForAllureReport: true
    }
    
*Codigo para roda no terminal*

* npx codeceptjs run --plugins stepByStepReport

PS.: SE QUISER VER TESTE POR TESTE MUDE NO ARQUIVO codecept.conf.js EM tests: './steps/*_test.js' MUDE O * PARA O NOME DE UM DOS ARQUIVOS DA PASTA steps OU COLOQUE/ DEIXE O * PARA RODAR TODOS
