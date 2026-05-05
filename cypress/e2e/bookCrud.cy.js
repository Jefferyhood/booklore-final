// The demo is read-only, so this spec is "CR" (create/update are skipped).
describe('Book CRUD (read-only on demo)', () => {
  beforeEach(() => {
    cy.goToBooks();
  });

  it('shows a list/grid of books and opens a detail view', () => {
    cy.expectBooksList();
    cy.openFirstBook();

    // Basic details sanity checks in the detail page
    cy.get('[data-testid="author"], [data-testid="authors"], [data-testid="series"], .author, .series')
      .should('exist');
  });

  it('returns back to All Books', () => {
    // Use a generic Back control; otherwise fall back to browser back
    cy.contains('button, a', /back/i).then($btn => {
      if ($btn.length) cy.wrap($btn).click({ force: true });
      else cy.go('back');
    });
    cy.expectBooksList();
  });
});
