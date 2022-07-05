describe("Test case 2", () => {
  it("Check payment flow (negative case if Card Number had characters)", () => {
    cy.visit("https://demo.guru99.com/payment-gateway/index.php").then(() => {
      //Click “Buy now” button
      cy.get("input[value='Buy Now']")
        .click()
        .then(() => {
          //Type some characters in Card Number
          cy.get("input[name='card_nmuber']").type("z");

          //Assert if warning “Characters are not allowed” appeared
          cy.get('label[id="message1"]').should(
            "contain",
            "Characters are not allowed"
          );
        });
    });
  });
});
