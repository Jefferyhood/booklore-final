describe('Search', () => {
  beforeEach(() => {
    cy.goToBooks();
    cy.expectBooksList();
  });

  it('finds a book by title', () => {
    // Try a title that is very likely to exist in public demos
    cy.searchTitle('the');
    cy.expectBooksList();

    // Optionally click the first result and ensure detail is visible
    cy.openFirstBook();
  });

  it('applies a filter if present (non-strict, optional)', () => {
    // If the UI exposes a filter (chips/dropdowns), try a generic one.
    const filterToggle = 'button[aria-label*="filter" i], button:contains("Filter"), mat-select';
    cy.get('body').then($b => {
      if ($b.find(filterToggle).length) {
        cy.get(filterToggle).first().click({ force: true });
        cy.contains('mat-option, [role="option"], button, a', /rated|read|shelved|missing/i)
          .first()
          .click({ force: true });
        cy.expectBooksList();
      }
    });
  });
});
