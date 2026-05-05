describe.skip('Initial setup (one-time)', () => {
  it('completes setup wizard', () => {
    cy.visit('/setup');
    cy.completeSetupIfNeeded();
  });
});
