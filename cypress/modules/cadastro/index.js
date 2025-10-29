import { faker } from '@faker-js/faker'
import { getRandomEmail } from '../../support/helpers.js';

class Cadastro {
    preencherFormularioDeCadastroCompleto() {
                // seleciona título (tenta id primeiro, senão usa o primeiro rádio disponível)
                cy.get('body').then(($body) => {
                    if ($body.find('#id_gender1').length) {
                        cy.get('#id_gender1').check();
                    } else {
                        cy.get('input[type=radio]').first().check();
                    }
                });

                cy.get('input#password').type('teste123', { log: false })

                cy.get('[data-qa="days"]').select('10')
                cy.get('[data-qa="months"]').select('May')
                cy.get('[data-qa="years"]').select('1990')

        cy.get('input[type=checkbox]#newsletter').check()
        cy.get('input[type=checkbox]#optin').check()

        cy.get('input#first_name').type(faker.person.firstName())
        cy.get('input#last_name').type(faker.person.lastName())
        cy.get('input#company').type(faker.company.name())
        cy.get('input#address1').type(faker.location.streetAddress())
        cy.get('input#address2').type(faker.location.secondaryAddress())
        cy.get('select#country').select('India');
        cy.get('input#state').type(faker.location.state())
        cy.get('input#city').type(faker.location.city())
        cy.get('[data-qa="zipcode"]').type(faker.location.zipCode())
        cy.get('[data-qa="mobile_number"]').type(faker.phone.number())

                // clica no botão usando o seletor data-qa (mais específico) e aguarda a página de sucesso
                cy.get('[data-qa="create-account"]', { timeout: 15000 })
                    .should('be.visible')
                    .click();

                // aguarda a navegação para /account_created (aumentado para 20s)
                cy.url({ timeout: 20000 }).should('include', '/account_created');
                cy.contains('Account Created!', { timeout: 10000 }).should('be.visible');
    }

    preencherFormularioDePreCadastro() {
        const firstname = faker.person.firstName()
        const lastname = faker.person.lastName()
        const email = getRandomEmail()

        // aguarda o formulário de pré-cadastro estar visível antes de preencher
        cy.get('[data-qa="signup-name"]', { timeout: 10000 }).should('be.visible')
        cy.get('[data-qa="signup-name"]').clear().type(`${firstname} ${lastname}`)
        cy.get('[data-qa="signup-email"]').clear().type(email)

        cy.contains('button', 'Signup').should('be.visible').click();
        // aguarda a navegação para a página de signup/formulário completo
        cy.url({ timeout: 15000 }).should('include', '/signup');
        
    }
}

export default new Cadastro();
