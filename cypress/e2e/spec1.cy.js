it("Test for then", () => {
  cy.visit("https://example.cypress.io/todo");
  cy.get('[data-test="new-todo"]').type("test{enter}");
  cy.get('[data-test="new-todo"]').type("test{enter}");
  cy.get('[data-test="new-todo"]').type("test{enter}");
  cy.get(".todo-list li").then((number) => {
    cy.log(JSON.stringify(number));
  });
});
