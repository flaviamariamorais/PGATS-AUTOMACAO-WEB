/// <reference types="cypress" />

import { navegarParaLogin } from '../modules/menu';
import login from '../modules/login';
import userData from '../fixtures/example.json';
import { entrarNaPaginaInicial} from '../modules/menu';


describe('Automation Exercise', () => {
    it('login valido', () => {
        const timestamp = new Date().getTime();

       entrarNaPaginaInicial();

       navegarParaLogin();

       
       login.preencherFormularioDeLogin(userData.user, userData.password)

       
       cy.contains('a', 'Logout').should('be.visible')
   })
})