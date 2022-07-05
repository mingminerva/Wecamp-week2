describe("Test case 1", () => {
  it("Check payment flow (positive case)", () => {
    cy.visit("https://demo.guru99.com/payment-gateway/index.php").then(() => {
      // Select Quantity is 4
      cy.get("select[name='quantity']").select(3);

      // Click “Buy now” button
      cy.get("input[value='Buy Now']")
        .click()
        .then(() => {
          // Assert if Pay Amount is $80.00
          cy.get("font[color='red'").should("contain", "$80.00");

          // Assert if button Pay below now has $80.00 text
          cy.get("input[name='submit'").should("contain", "$80.00");

          // Type in Card Number: 1234567890123456
          cy.get("input[name='card_nmuber']").type("1234567890123456");

          // Select 11 in Expiration Month
          cy.get("select[name='month']").select("11");

          // Select 2026 in Expiration Year
          cy.get("select[name='year']").select("2026");

          // Type 766 in CVV Code
          cy.get("input[name='cvv_code']").type("766");

          // Click Pay $80.00
          cy.get("input[name='submit'")
            .click()
            .then(() => {
              // Assert if Payment successful! appeared.
              cy.get("h2").should("contain", "Payment successfull!");
            });
        });
    });
  });
});
