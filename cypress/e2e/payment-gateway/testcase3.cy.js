describe("Test case 2", () => {
  it("Check payment flow (negative case if leaves Expiration Month not selected)", () => {
    cy.visit("https://demo.guru99.com/payment-gateway/index.php").then(() => {
      //Click “Buy now” button
      cy.get("input[value='Buy Now']")
        .click()
        .then(() => {
          // Leave expiration month empty and Click “Pay”
          cy.get("input[name='submit']").click();

          // Assert if this error dialog appeared
          // FYI https://glebbahmutov.com/blog/form-validation-in-cypress/
          cy.get("select[name='month']:invalid").should("be.visible");
        });
    });
  });
});
