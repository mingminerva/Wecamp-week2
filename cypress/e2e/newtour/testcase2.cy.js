describe("Test case 2", () => {
  it("Check the login flow (negative case)", () => {
    cy.visit("https://demo.guru99.com/test/newtours/").then(() => {
      // Click on “User Name” on the right conner, in the Find a Flight box. Type “wrongUsername”
      cy.get("input[name='userName']").type("wrongUsername");

      // Type “wrongPassword” on the “Password” box below
      cy.get("input[name='password']").type("Password");

      // Click Submit button
      cy.get("input[name='submit']")
        .click()
        .then(() => {
          // Assert if "Enter your userName and password correct" appeared
          cy.get("span").should(
            "contain",
            "Enter your userName and password correct"
          );
        });
    });
  });
});
