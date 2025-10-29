/// <reference types="cypress" />

import login from '../modules/login';
import { navegarParaLogin } from '../modules/menu';
import { entrarNaPaginaInicial} from '../modules/menu';


describe('Automation Exercise', () => {
    it('login invalido', () => {
        

       entrarNaPaginaInicial();
   

       navegarParaLogin();

       login.preencherFormularioDeLogin('f.morais.cursos@gmail.com', 'teste1234');

       cy.contains('p', 'Your email or password is incorrect!', { timeout: 10000 })
         .should('be.visible')
   });
});