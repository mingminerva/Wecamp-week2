describe("Test case 1", () => {
  it("Check Flight Finder flow", () => {
    cy.visit("https://demo.guru99.com/test/newtours/").then(() => {
      //Select “Flight” on the left conner
      cy.get("a[href='reservation.php']")
        .click()
        .then(() => {
          //Choose options as the image
          cy.get("select[name='fromMonth']").select("December");
          cy.get("select[name='fromDay']").select("5");
          cy.get("select[name='toMonth']").select("December");
          cy.get("select[name='toDay']").select("5");

          //Click Continue button
          cy.get("input[name='findFlights']").click();

          //Assert if “After flight finder - No Seats Avaialble“ appeared
          cy.get("font[size='4']").should(
            "contain",
            "After flight finder - No Seats Avaialble"
          );
        });
    });
  });
});
