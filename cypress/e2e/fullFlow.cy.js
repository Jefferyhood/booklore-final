describe('runs a read-only flow on the demo', () => {
  it('login → books → open detail → recommendations → logout', () => {
    cy.visit('/');            // session() ensures we’re logged in
    cy.goToBooks();
    cy.expectBooksList();

    // Open first book and assert a title appears
    cy.openFirstBook();

    // Go to a recommendation shelf (use "Highly Rated" under Magic Shelves)
    cy.contains('aside', /magic shelves/i, { timeout: 15000 }).click({ force: true });
    cy.contains('aside a, aside button', /highly rated/i, { timeout: 15000 }).click({ force: true });

    // We should see a list of books again
    cy.expectBooksList();

    // "Logout" (if the demo exposes it). If not present, no-op.
    cy.get('button[aria-label*="account" i], button[aria-label*="profile" i], img[alt*="avatar" i]')
      .first()
      .click({ force: true })
      .then(() => {
        const logoutSel = 'button:contains("Log out"), a:contains("Log out")';
        cy.get('body').then($b => {
          if ($b.find(logoutSel).length) cy.contains(logoutSel, /log\s*out/i).click({ force: true });
        });
      });
  });
});
