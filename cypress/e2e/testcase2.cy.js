describe("test case 2", () => {
  it("should visit", () => {
    cy.visit("https://demo.guru99.com/test/newtours/");
    cy.wait(10000);
    cy.get("input[name='userName']").click();
    cy.get("input[name='userName']").type("wrongUsermane");
    cy.get("input[name='password']").click();
    cy.get("input[name='password']").type("wrongPassword");
    cy.get("input[name='submit']").click();
    cy.wait(10000);
    cy.get(
      "tr:nth-child(4) > td > table > tbody > tr:nth-child(1) > td > font"
    ).should("be.visible");
    cy.get(
      "tr:nth-child(4) > td > table > tbody > tr:nth-child(1) > td > font"
    ).contains(
      "Registered users can sign-in here to find the lowest fare on participating airlines."
    );
  });
});
