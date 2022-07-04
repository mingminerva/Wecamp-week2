describe("Test case 3", () => {
  it("check payment flow", () => {
    cy.visit("https://demo.guru99.com/payment-gateway/index.php");
    cy.wait(5000);
    cy.get("select[name='quantity']").select("4").should("have.value", "4");
    cy.get("input[value='Buy Now']").click();
    cy.get("font:nth-child(2)").should("be.visible");
    cy.get("font:nth-child(2)").should("have.text", " $80.00");
    cy.get("input[name='submit']").should("be.visible");
    cy.get("input[name='submit']").should("have.value", "Pay $80.00");
    cy.get("input[id='card_nmuber']").click();
    cy.get("input[id='card_nmuber']").type("1234567890123456");
    cy.get("select[name='month']").select("11").should("have.value", "11");
    cy.get("select[name='year']").select("2026").should("have.value", "2026");
    cy.get("input[name='cvv_code']").click();
    cy.get("input[name='cvv_code']").type("766");
    cy.get("input[name='submit']").click();
    cy.get("h2").should("be.visible").and("have.text", "Payment successfull!");
    cy.get("h2").contains("Payment successfull!");
  });
});
