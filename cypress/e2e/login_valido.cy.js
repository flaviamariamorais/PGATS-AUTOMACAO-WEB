/// <reference types="cypress" />

import { navegarParaLogin } from '../modules/menu';
import login from '../modules/login';
import userData from '../fixtures/example.json';
import { entrarNaPaginaInicial} from '../modules/menu';


describe('Automation Exercise', () => {
    it('login valido', () => {
        const timestamp = new Date().getTime();

       entrarNaPaginaInicial();

       //cy.get('a[href="/login"]').click()
       navegarParaLogin();

       //cy.get('[data-qa="login-email"]').type(`fmorais.cursos@gmail.com`)
       //cy.get('[data-qa="login-password"]').type('teste123')

       //cy.get('[data-qa="login-button"]').click()

       login.preencherFormularioDeLogin(userData.user, userData.password)

       
       cy.contains('a', 'Logout').should('be.visible')
   })
})