/// <reference types="cypress" />
import { entrarNaPaginaInicial} from '../modules/menu';

describe('Visualizar detalhes do produto', () => {
  it('Deve exibir os detalhes do primeiro produto', () => {

    entrarNaPaginaInicial();

    // 2. Clica em 'Products'
    cy.get('a[href="/products"]').should('be.visible').click();

    // 3. Verifica que está na página ALL PRODUCTS
    cy.url().should('include', '/products');
    cy.contains('All Products').should('be.visible');

    // 4. Verifica se lista de produtos está visível
    cy.get('.features_items .product-image-wrapper').should('have.length.greaterThan', 0);

    // 5. Clica no primeiro 'View Product'
    cy.get('.features_items .product-image-wrapper')
      .first()
      .contains('View Product')
      .click();

    // 6. Verifica que abriu página de detalhes
    cy.url().should('include', '/product_details');

    // 7. Valida detalhes do produto
    cy.get('.product-information').within(() => {
      cy.get('h2').should('be.visible'); // Nome
      cy.contains('Category:').should('be.visible');
      cy.contains('Rs.').should('be.visible');
      cy.contains('Availability:').should('be.visible');
      cy.contains('Condition:').should('be.visible');
      cy.contains('Brand:').should('be.visible');
    });
  });
});