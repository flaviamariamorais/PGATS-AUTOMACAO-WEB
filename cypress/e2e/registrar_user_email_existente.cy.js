/// <reference types="cypress" />

import { navegarParaLogin } from '../modules/menu';

import { entrarNaPaginaInicial} from '../modules/menu';


describe('Automation Exercise', () => {
    it('cadastrar um email ja existente', () => {
        const timestamp = new Date().getTime();

       entrarNaPaginaInicial();

       navegarParaLogin();

       cy.get('[data-qa="signup-name"]').type('Flavia') 
       cy.get('[data-qa="signup-email"]').type(`fmorais.cursos@gmail.com.com`)
       
       cy.contains('button', 'Signup').click()
       
       cy.contains('Email Address already exist!').should('be.visible');
   })
})