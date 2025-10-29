/// <reference types="cypress" />

import { navegarParaLogin } from '../modules/menu';

import { efetuarLogout } from '../modules/menu';

import { entrarNaPaginaInicial} from '../modules/menu';


describe('Automation Exercise', () => {
    it('logout user', () => {
        const timestamp = new Date().getTime();
        
        entrarNaPaginaInicial();

       //cy.visit('https://www.automationexercise.com/');

       //cy.get('a[href="/login"]').click()

       navegarParaLogin();
       

       cy.get('[data-qa="login-email"]').type(`fmorais.cursos@gmail.com`)
       cy.get('[data-qa="login-password"]').type('teste123')
       cy.get('[data-qa="login-button"]').click()
       efetuarLogout();

       cy.url().should('include', '/login')
      
   })
})