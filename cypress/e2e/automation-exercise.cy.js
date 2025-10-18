/// <reference types="cypress" />


describe('Automation Exercise', () => {
    it('cadastrar um usuario', () => {
        const timestamp = new Date().getTime();

       cy.visit('https://www.automationexercise.com/');

       cy.get('a[href="/login"]').click()

       cy.get('[data-qa="signup-name"]').type('QA Tester') 
       cy.get('[data-qa="signup-email"]').type(`qa.tester-${timestamp}@example.com`)
       
       cy.contains('button', 'Signup').click()
       //cy.get('#id_gender1').check()
       cy.get('input[type=radio]').check('Mrs')

       cy.get('input#password').type('teste123'), {log: false}

       cy.get('[data-qa=days').select('10')
       cy.get('[data-qa=months').select('May')
       cy.get('[data-qa=years').select('1990')

       cy.get('input[type=checkbox]#newsletter').check()
       cy.get('input[type=checkbox]#optin').check()

       cy.get('input#first_name').type('QA')
       cy.get('input#last_name').type('Tester')
       cy.get('input#company').type('Automation')
       cy.get('input#address1').type('123 Main St')
       cy.get('input#address2').type('Apt 4B')
       cy.get('select#country').select('United States')
       cy.get('input#state').type('California')
       cy.get('input#city').type('Los Angeles')
       cy.get('[data-qa="zipcode"]').type('90001')
       cy.get('[data-qa="mobile_number"]').type('1234567890')

       cy.contains('button', 'Create Account').click()
       //cy.get('[data-qa="create-account"]').click()

       cy.url().should('include', '/account_created')
       cy.contains('b', 'Account Created!')
   })
})