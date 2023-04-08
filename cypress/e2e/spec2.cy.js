describe("2-st cypress test spec", () => {
  beforeEach(() => {
    cy.visit("");
  });
  it("displays text", () => {
    cy.get(
      "#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > span"
    ).should(
      "have.text",
      "Организуй тайный обмен подарками между друзьями или коллегами"
    );
  });
});
