// Ignora erros de JavaScript do site
import { entrarNaPaginaInicial} from '../modules/menu';

Cypress.on('uncaught:exception', () => false);

describe('Fazer pedido após registrar-se', () => {

  it.only('Deve registrar, adicionar produto e finalizar pedido com sucesso', () => {

    // 1. Abrir o site
    entrarNaPaginaInicial();
    cy.contains('Home').should('be.visible'); 

    // 2. Clicar em “Signup / Login”
    cy.contains('Signup / Login').click();

    // 3. Criar nova conta
    cy.get('[data-qa="signup-name"]').type('Teste Cypress');
    cy.get('[data-qa="signup-email"]').type(`teste${Date.now()}@exemplo.com`);
    cy.get('[data-qa="signup-button"]').click();

    // Preenche apenas campos obrigatórios
    cy.get('#id_gender1').check();
    cy.get('#password').type('123456');
    cy.get('#days').select('10');
    cy.get('#months').select('May');
    cy.get('#years').select('1995');
    cy.get('#first_name').type('Teste');
    cy.get('#last_name').type('Cypress');
    cy.get('#address1').type('Rua de Teste 123');
    cy.get('#country').select('Canada');
    cy.get('#state').type('Ontario');
    cy.get('#city').type('Toronto');
    cy.get('#zipcode').type('A1B2C3');
    cy.get('#mobile_number').type('999999999');
    cy.get('[data-qa="create-account"]').click();

    // Confirma criação da conta
    cy.contains('Account Created!').should('be.visible');
    cy.get('[data-qa="continue-button"]').click();

    // 4. Adicionar produto ao carrinho
   //cy.get('.features_items .product')
//.first() 
//.find('.add-to-cart') 
//.click({ force: true }) 
    //.contains('Continue Shopping').click();

    // Espera o conteúdo principal aparecer
    cy.get('.features_items', { timeout: 10000 }).should('be.visible')

    // Verifica se existe pelo menos 1 produto
    cy.get('.features_items .col-sm-4', { timeout: 10000 }).should('exist')

    // Clica no botão "Add to cart" do primeiro produto
    cy.get('.features_items .col-sm-4').first().within(() => {
      cy.contains('Add to cart', { matchCase: false }).click({ force: true })
    })



    // 5. Ir para o carrinho
    cy.contains('Cart').click();
    cy.contains('Proceed To Checkout').click();

    // 6. Finalizar pedido
    cy.contains('Place Order').click();
    cy.get('[data-qa="name-on-card"]').type('Teste Cypress');
    cy.get('[data-qa="card-number"]').type('4111111111111111');
    cy.get('[data-qa="cvc"]').type('123');
    cy.get('[data-qa="expiry-month"]').type('12');
    cy.get('[data-qa="expiry-year"]').type('2030');
    cy.get('[data-qa="pay-button"]').click({ force: true });

    // 7. Verifica mensagem de sucesso — texto real do site
    cy.contains('Order Placed!', { timeout: 60000 }).should('be.visible');
    cy.contains('Congratulations! Your order has been confirmed!', { timeout: 60000 })
      .should('be.visible');
   
  });
});



 
