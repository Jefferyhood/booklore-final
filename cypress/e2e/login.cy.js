describe('login → reach books', () => {
  it('logs into the demo and reaches All Books', () => {
    cy.visit('/login');               // session() will auto-login
    cy.location('pathname').should('not.match', /\/login$/i);

    cy.goToBooks();
    cy.expectBooksList();

    // Sanity: verify URL is /books and at least one item exists
    cy.location('pathname').should('match', /\/books(\/)?$/i);
  });
});
