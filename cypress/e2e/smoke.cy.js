describe('Smoke (demo)', () => {
  it('logs in and sees books', () => {
    cy.uiLoginDemo()
    cy.goToBooks()
    cy.waitForBooksList()
  })
})
