This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextj### Test Structure

Tests are co-located with their source files for better organization:

- `src/pages/page.tsx` → `src/pages/page.test.tsx`
- `src/test-utils.tsx` - Custom render function and testing utilities

For E2E tests:

- `cypress/e2e/` - End-to-end test files
- `cypress/support/` - Supporting Cypress files and utilities

This approach keeps tests close to the code they're testing, making it easier to maintain and discover relevant tests.

**Benefits of Co-located Tests:**

- **Easy Discovery**: Tests are right next to the code they test
- **Better Maintenance**: When you modify a component, its test is immediately visible
- **Simpler Imports**: Use relative imports (`./Component`) instead of complex paths/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Testing

This project uses Jest and React Testing Library for unit/integration testing, and Cypress for end-to-end testing.

### Unit & Integration Tests

```bash
# Run all tests once
npm test

# Run tests in watch mode (re-runs tests when files change)
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

### End-to-End Tests

```bash
# Open Cypress Test Runner (interactive mode)
npm run cypress:open

# Run Cypress tests in headless mode
npm run cypress:run

# Run E2E tests against development server
npm run test:e2e

# Open E2E tests against development server
npm run test:e2e:open

# Run all tests (unit + E2E)
npm run test:all
```

### Writing E2E Tests

E2E tests are located in the `cypress/e2e/` directory:

```typescript
describe("Feature Name", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should perform user action", () => {
    cy.get("[data-cy=button]").click();
    cy.url().should("include", "/next-page");
    cy.get("h1").should("contain.text", "Expected Text");
  });

  it("should handle form submission", () => {
    cy.get('input[name="email"]').type("user@example.com");
    cy.get('button[type="submit"]').click();
    cy.get(".success-message").should("be.visible");
  });
});
```

### Cypress Configuration

- `cypress.config.ts` - Main Cypress configuration
- `cypress/support/e2e.ts` - Global E2E test setup
- `cypress/support/commands.ts` - Custom Cypress commands
- `cypress/fixtures/` - Test data and mock files

### Testing Setup

- **Jest**: JavaScript testing framework for unit tests
- **React Testing Library**: Testing utilities for React components
- **Cypress**: End-to-end testing framework
- **jest-environment-jsdom**: DOM environment for testing React components
- **@testing-library/jest-dom**: Custom Jest matchers for DOM elements
- **@cypress/code-coverage**: Code coverage for Cypress tests

### Test Structure

Tests are co-located with their source files for better organization:

- `src/components/Component.tsx` → `src/components/Component.test.tsx`
- `src/pages/page.tsx` → `src/pages/page.test.tsx`
- `src/test-utils.tsx` - Custom render function and testing utilities

This approach keeps tests close to the code they're testing, making it easier to maintain and discover relevant tests.

**Benefits of Co-located Tests:**

- **Easy Discovery**: Tests are right next to the code they test
- **Better Maintenance**: When you modify a component, its test is immediately visible
- **Simpler Imports**: Use relative imports (`./Component`) instead of complex paths
- **Atomic Changes**: Component and test changes happen together in the same directory

### Writing Tests

Example test file structure:

```
src/
  pages/
    index.tsx
    index.test.tsx      ← Unit test adjacent to page
cypress/
  e2e/
    home.cy.ts          ← E2E test for home page
```

Example unit test file:

```typescript
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./index"; // ← Relative import

describe("Home Page", () => {
  it("renders the main heading", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", { name: /hello world/i });
    expect(heading).toBeInTheDocument();
  });
});
```

Example E2E test file:

```typescript
describe("Home Page E2E Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays the main heading", () => {
    cy.get("h1").should("contain.text", "Hello world");
  });
});
```

### Configuration Files

- `jest.config.js` - Jest configuration
- `jest.setup.js` - Test setup file with global configurations
- `__tests__/test-utils.tsx` - Custom render function for consistent testing

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
