describe("Test case 2", () => {
  it("check payment flow", () => {
    cy.visit("https://demo.guru99.com/payment-gateway/index.php");
    cy.wait(5000);
    cy.get("select[name='quantity']").select("4").should("have.value", "4");
    cy.get("input[value='Buy Now']").click();
    cy.get("input[id='card_nmuber']").click();
    cy.get("input[id='card_nmuber']").type("asfzxd");
    cy.get("label[id='message1']")
      .should("be.visible")
      .and("have.text", "Characters are not allowed");
    cy.get("label[id='message1']").contains("Characters are not allowed");
  });
});
