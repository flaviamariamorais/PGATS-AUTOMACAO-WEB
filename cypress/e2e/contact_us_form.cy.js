/// <reference types="cypress" />

import { getTimeStamp, 
    getRandomName,
    getRandomEmail
} from '../support/helpers.js';

import { entrarNaPaginaInicial} from '../modules/menu';


describe('Automation Exercise', () => {
    it('formulário de contato', () => {
        //

       entrarNaPaginaInicial();

       cy.get('a[href="/contact_us"]').click()
       

       cy.get('[data-qa="name"]', { timeout: 20000 })
            .should('be.visible')
            .type(getRandomName());
       cy.get('[data-qa="email"]').type(getRandomEmail())
       cy.get('[data-qa="subject"]').type('Teste de assunto')
       cy.get('[data-qa="message"]').type('Esta é uma mensagem de teste para o formulário de contato.')
       cy.get('input[type="file"]').selectFile('cypress/fixtures/teste.txt');
       cy.get('[data-qa="submit-button"]').click() 

       cy.contains('Success! Your details have been submitted successfully.').should('be.visible');

   })
})