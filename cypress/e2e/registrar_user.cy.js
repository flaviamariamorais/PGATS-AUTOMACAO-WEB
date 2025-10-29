/// <reference types="cypress" />

import { getTimeStamp, 
         getRandomEmail, 
         getRandomName } from '../support/helpers.js';

import {faker } from '@faker-js/faker';

import { entrarNaPaginaInicial} from '../modules/menu';


import { navegarParaLogin } from '../modules/menu';
//import { preencherFormularioDeCadastroCompleto } from '../modules/cadastro';
import cadastro from '../modules/cadastro/index.js';
import login from '../modules/login';

describe('Automation Exercise', () => {
    it('registrar um usuario', () => {
        const timestamp = getTimeStamp();

       entrarNaPaginaInicial();

       //cy.get('a[href="/login"]').click()
       navegarParaLogin();

      //cadastro.preencherFormularioDePreCadastro();
      cadastro.preencherFormularioDePreCadastro();

      cadastro.preencherFormularioDeCadastroCompleto();

    // o método preencherFormularioDeCadastroCompleto() já clica em "Create Account",
    // por isso não é necessário clicar novamente aqui.

       cy.url().should('include', '/account_created')
       cy.contains('b', 'Account Created!')
       cy.get('h2[data-qa="account-created"]').should('have.text', 'Account Created!')
   })
})