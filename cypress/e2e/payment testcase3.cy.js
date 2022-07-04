describe("Test case 3", () => {
  it("check payment flow", () => {
    cy.visit("https://demo.guru99.com/payment-gateway/index.php");
    cy.wait(5000);
    cy.get("select[name='quantity']").select("4").should("have.value", "4");
    cy.get("input[value='Buy Now']").click();
    cy.get("input[name='submit']").click();
    cy.get("alert").should("be.visible");
    cy.get("dialog").contains("Please select an item in the lists.");
  });
});
