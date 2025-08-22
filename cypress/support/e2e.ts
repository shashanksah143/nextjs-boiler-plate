// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select DOM element by data-cy attribute.
       * @example cy.dataCy('greeting')
       */
      dataCy(value: string): Chainable<JQuery<HTMLElement>>;
      /**
       * Custom command for visiting pages with better error handling
       * @example cy.visitPage('/home')
       */
      visitPage(url: string): Chainable<Window>;
    }
  }
}
