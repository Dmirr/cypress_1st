beforeEach(() => {
  cy.visit("/todo");
});
describe("1-st cypress test spec", () => {
  before(() => {
    cy.log("runs once before all tests");
  });

  after(() => {
    cy.log("runs once after all tests in the block");
  });

  it("Test for then", () => {
    cy.get('[data-test="new-todo"]').type("test{enter}");
    cy.get('[data-test="new-todo"]').type("test{enter}");
    cy.get('[data-test="new-todo"]').type("test{enter}");
    cy.get(".todo-list li").then((number) => {
      //cy.log(JSON.stringify(number)); выводим строковое значение
      //cy.log(number.lengh)
      //expect(number.length).to.equal(5);
      assert.equal(number.length, 5, "Array number is");
    });
  });
});

describe("1-st cypress test spec", () => {
  before(() => {
    cy.log("2 runs once before all tests");
  });

  it("Test for then", () => {
    cy.get('[data-test="new-todo"]').type("test{enter}");
    cy.get('[data-test="new-todo"]').type("test{enter}");
    cy.get('[data-test="new-todo"]').type("test{enter}");
    cy.get(".todo-list li").then((number) => {
      //cy.log(JSON.stringify(number)); выводим строковое значение
      cy.log(number.lengh);
      //expect(number.length).to.equal(5);
      //assert.equal(number.length, 5, "Array number is");
    });
  });
});
