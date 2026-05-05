// -------- Robust, reusable selectors
const SEL = {
  user: 'input[placeholder*="username" i], input[name="username"], input#username',
  pass: 'input[placeholder*="password" i], input[name="password"], input#password',
  signIn: 'button:contains("Sign In"), button[type="submit"]',
  // "All Books" on the left nav (MatSidenav). Allow both link and button roles.
  allBooks: 'aside a:contains("All Books"), aside button:contains("All Books"), nav a:contains("All Books")',
  // Any list of books (grid or list); fall back to Material card
  anyBookItem: '[data-testid="book-card"], [data-testid="books-list"] li, [role="list"] li, mat-card, .mat-card',
  // Book title inside a detail view
  bookTitle: '[data-testid="book-title"], h1, h2'
};

// -------- Login once per spec (Cypress v12+)
// in cypress/support/commands.js
Cypress.Commands.add('loginDemo', () => {
  cy.session(['demo-login'], () => {
    const SEL = {
      user: 'input[placeholder*="username" i], input[name="username"], input#username',
      pass: 'input[placeholder*="password" i], input[name="password"], input#password',
      signIn: 'button:contains("Sign In"), button[type="submit"]',
    };

    cy.visit('/login');
    cy.get(SEL.user).should('be.visible').clear().type(Cypress.env('DEMO_USER'));
    cy.get(SEL.pass).should('be.visible').clear().type(Cypress.env('DEMO_PASS'), { log: false });
    cy.contains(SEL.signIn, /sign in/i).click();
    cy.location('pathname', { timeout: 20000 }).should('not.match', /\/login$/i);
    cy.request('/api/v1/users/me').its('status').should('eq', 200);
  }, { cacheAcrossSpecs: true });
});


// -------- Go to All Books from anywhere
Cypress.Commands.add('goToBooks', () => {
  // If already on /books, keep it moving
  cy.location('pathname').then((p) => {
    if (!/\/books(\/)?$/i.test(p)) {
      // Try left-nav link; if not visible yet, open the menu (hamburger)
      cy.get('button[aria-label*="menu" i], button[aria-label*="navigation" i]').then($btn => {
        if ($btn.length) cy.wrap($btn).first().click({ force: true });
      });
      cy.contains(SEL.allBooks, /all\s*books/i, { timeout: 10000 }).click({ force: true });
      cy.location('pathname', { timeout: 20000 }).should('match', /\/books(\/)?$/i);
    }
  });
});

// -------- Wait for the list/grid to render at least one item
Cypress.Commands.add('expectBooksList', () => {
  cy.get(SEL.anyBookItem, { timeout: 20000 }).its('length').should('be.greaterThan', 0);
});

// -------- Open the first book card / list item
Cypress.Commands.add('openFirstBook', () => {
  cy.get(SEL.anyBookItem, { timeout: 20000 }).first().click({ force: true });
  cy.get(SEL.bookTitle, { timeout: 20000 }).should('be.visible');
});

// -------- Quick search via the global header search box
Cypress.Commands.add('searchTitle', (q) => {
  const search = 'input[type="search"], input[placeholder*="title" i], input[aria-label*="search" i]';
  cy.get(search, { timeout: 15000 }).clear().type(q + '{enter}');
  cy.expectBooksList();
});

export { SEL };
