const textData = require("../fixtures/todoItemsText.json");

describe.only("To do list", () => {
  it("Add items", () => {
    const inputField = '[data-test="new-todo"]';
    cy.visit("/todo");
    cy.log(textData[0].text);

    textData.forEach((item) => {
      cy.enterText(inputField, item.text).debug();
    });

    //cy.get('[data-test="new-todo"]').type("Find a job{enter}");
    //cy.enterText(inputField, textData[1].text);
    //cy.enterText(inputField, textData[2].text);
    // cy.get('[data-test="new-todo"]').type("Buy beer{enter}");
    // cy.get('[data-test="new-todo"]').type("Keep calm{enter}");
  });
});
