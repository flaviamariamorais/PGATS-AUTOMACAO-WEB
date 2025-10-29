/// <reference types="cypress" />

import { entrarNaPaginaInicial} from '../modules/menu';

describe(' Verifica subscription na home', () => {

  it('verifica a funcionalidade de subscription', () => {
    // 1. Launch browser & 2. Navigate to URL
    entrarNaPaginaInicial();

    // 3. Verifica que a home page é visivel
    cy.url().should('eq', 'https://www.automationexercise.com/');
    cy.get('body').should('contain.text', 'Home');

    // 4. Scroll down na página para ver o elemento de subscription
    cy.scrollTo('bottom');

    // 5. Verifica que o texto 'SUBSCRIPTION' é visivel
    cy.contains('Subscription', { matchCase: false }).should('be.visible');

    // 6. Insira um endereço de email no input e clique no botão de seta
    cy.get('#susbscribe_email').type('testemail@example.com');
    cy.get('#subscribe').click();

    // 7. Verifica a mensagem de sucesso
    cy.contains('You have been successfully subscribed!').should('be.visible');
  });

});