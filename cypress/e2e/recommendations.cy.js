describe('Recommendations / Magic Shelves', () => {
  it('shows a set of recommended books', () => {
    cy.visit('/dashboard'); // land anywhere authenticated

    // Open the left menu if needed and go to Magic Shelves → Highly Rated
    cy.get('button[aria-label*="menu" i], button[aria-label*="navigation" i]').then($btn => {
      if ($btn.length) cy.wrap($btn).first().click({ force: true });
    });

    cy.contains('aside', /magic shelves/i, { timeout: 15000 }).click({ force: true });
    cy.contains('aside a, aside button', /highly rated|i loved|short reads/i, { timeout: 15000 })
      .first()
      .click({ force: true });

    cy.expectBooksList();       // confirm we render book cards/items
  });
});
