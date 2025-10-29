export function navegarParaLogin() {
    cy.get('a[href="/login"]').click();
}

export function efetuarLogout() {
    cy.get('a[href="/logout"]').click();
}

export function entrarNaPaginaInicial() {
    cy.visit('https://www.automationexercise.com/', { failOnStatusCode: false });
}