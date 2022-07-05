describe("Test case 2", () => {
  it("Check payment flow (negative case if Card Number had shorter than 16 numbers)", () => {
    cy.visit("https://demo.guru99.com/payment-gateway/index.php").then(() => {
      //Click “Buy now” button
      cy.get("input[value='Buy Now']")
        .click()
        .then(() => {
          // Type in Card Number: 1234567890
          cy.get("input[name='card_nmuber']").type("1234567890");

          // Select 11 in Expiration Month
          cy.get("select[name='month']").select("11");

          // Select 2026 in Expiration Year
          cy.get("select[name='year']").select("2026");

          // Type 766 in CVV Code
          cy.get("input[name='cvv_code']").type("766");

          // Click Pay
          cy.get("input[name='submit'").click();

          // Assert if error dialog appeared
          cy.on("window:alert", (alert) => {
            expect(alert).to.equal("Check card number is 16 digits!");
          });
        });
    });
  });
});
