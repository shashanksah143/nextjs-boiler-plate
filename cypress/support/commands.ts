// Custom Cypress commands and overrides

Cypress.Commands.add("dataCy", (value) => {
  return cy.get(`[data-cy=${value}]`);
});

// Add custom command for visiting pages with better error handling
Cypress.Commands.add("visitPage", (url: string) => {
  cy.visit(url, {
    failOnStatusCode: false,
    retryOnStatusCodeFailure: true,
    timeout: 10000,
  });
});
