/// <reference types="cypress" />

import login from '../modules/login';
import { navegarParaLogin } from '../modules/menu';
import { entrarNaPaginaInicial} from '../modules/menu';


describe('Automation Exercise', () => {
    it('login invalido', () => {
        //const timestamp = new Date().getTime();

       entrarNaPaginaInicial();

       //cy.get('a[href="/login"]').click()

       navegarParaLogin();

       //cy.get('[data-qa="login-email"]').type(`f.morais.cursos@gmail.com`)
       //cy.get('[data-qa="login-password"]').type('teste123')
       //cy.get('[data-qa="login-button"]').click()

       login.preencherFormularioDeLogin('f.morais.cursos@gmail.com', 'teste1234');

       cy.contains('p', 'Your email or password is incorrect!', { timeout: 10000 })
         .should('be.visible')
   });
});