
import { faker } from '@faker-js/faker';

import { getTimeStamp, 
         getRandomEmail, 
         getRandomName } from '../../support/helpers.js';
         
class Login {
    preencherFormularioDeLogin(username, password) {
        cy.get('[data-qa="login-email"]').type(`${username}`);
        cy.get('[data-qa="login-password"]').type(`${password}`);
        cy.get('[data-qa="login-button"]').click();
    }
}

export default new Login();