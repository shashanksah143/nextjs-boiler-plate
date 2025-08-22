describe("Basic App Tests E2E", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders the page correctly", () => {
    cy.get("body").should("be.visible");
    cy.get("div").should("exist");
  });

  it("handles responsive design", () => {
    // Test mobile view
    cy.viewport(375, 667);
    cy.get("h1").should("be.visible");

    // Test desktop view
    cy.viewport(1280, 720);
    cy.get("h1").should("be.visible");
  });
});
