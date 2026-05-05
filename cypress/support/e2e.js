// cypress/support/e2e.js
import './commands';

// If the app throws an exception we don't control, don't fail the test run.
// (Remove this if you want the test to fail on any app error.)
Cypress.on('uncaught:exception', () => false);
