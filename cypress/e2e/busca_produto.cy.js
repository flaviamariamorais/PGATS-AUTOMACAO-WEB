/// <reference types="cypress" />
import { entrarNaPaginaInicial} from '../modules/menu';

describe('Buscar produto', () => {
  it('deve retornar produto', () => {
    entrarNaPaginaInicial();

    // 2. Clica em 'Products'
    cy.get('a[href="/products"]').should('be.visible').click();

     // 3. Verifica que a home page é visivel
   
    cy.get('body').should('contain.text', 'Home');

    // 4. Verifica que está na página ALL PRODUCTS
    cy.url().should('include', '/products');
    cy.contains('All Products').should('be.visible');

    // 5. entre com o nome do produto e click procurar
    cy.get('#search_product').type('Top');
    cy.get('#submit_search').click();

    // 6. Verifica que 'SEARCHED PRODUCTS' é visivel
    cy.contains('Searched Products').should('be.visible');

    // 7. Verifica se todos os produtos da busca são visiveis
    cy.get('.product-image-wrapper').should('have.length.greaterThan', 0);
  });
});