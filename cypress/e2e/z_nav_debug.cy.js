describe('Nav debug', () => {
  it('prints candidate links and tries to go to Books', () => {
    cy.visit('/');

    // Log anchors/buttons to Cypress Console to see what exists
    cy.get('a, button, [role="link"], [role="button"]').then($els => {
      const info = [...$els].slice(0, 50).map(el => ({
        text: (el.textContent || '').trim(),
        href: el.getAttribute('href') || '',
        routerLink: el.getAttribute('routerLink') || el.getAttribute('routerlink') || '',
        aria: el.getAttribute('aria-label') || ''
      }));
      cy.log('CANDIDATES:', JSON.stringify(info, null, 2));
      // also dump to devtools console
      // (open DevTools in the runner: Ctrl+Shift+I)
      // eslint-disable-next-line no-console
      console.table(info);
    });

    // Then try the robust navigator
    cy.goToBooks();
  });
});
