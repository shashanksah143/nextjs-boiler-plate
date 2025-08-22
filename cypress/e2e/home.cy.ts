describe("Home Page E2E Tests", () => {
  beforeEach(() => {
    // Visit the home page before each test
    cy.visit("/");
  });

  it("displays the main heading", () => {
    cy.get("h1").should("contain.text", "Hello world");
  });

  it("page loads successfully", () => {
    cy.url().should("include", "localhost:3000");
    cy.get("body").should("be.visible");
  });
});
