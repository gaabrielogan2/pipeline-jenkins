import { faker } from '@faker-js/faker'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
const cadastro = require('../../../support/pages/register.page')
const { confirmScreen } = require('../../../support/pages/confirmscreen.page')


const user = {
    email: faker.internet.email(),
    password: faker.internet.password(),
    name: faker.internet.userName(),
    lastName: faker.internet.userName()
}


Given('Eu visite a loja EBAC Store', () => {
    cy.visit('/minha-conta')
})

When('Eu insira o e-mail, senha, nome e sobrenome', () => {
   

    cadastro.cadastroPre(user.email, user.password, user.name, user.lastName)


})

When('Eu clicar no botão "Cadastrar"', () => {
confirmScreen.minhaConta.should("be.visible")


})


Then('O painel da Minha Conta deve ser exibido', () => {
    confirmScreen.minhaConta.should('contain', 'Detalhes da conta modificados com sucesso.')
})
