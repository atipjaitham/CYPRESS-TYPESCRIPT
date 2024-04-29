Cypress.config("defaultCommandTimeout", 16000);
describe('Retry ability Demo', () => {
    it('visit with delay', () => {
        cy.visit("/loaddelay", { timeout: 30000 });
    });
    it('visit with delay', () => {
        cy.visit("/clientdelay");
        cy.get("#ajaxButton").click()
        cy.get(".bg-success").should('have.text', "Data calculated on the client side.")
    });
    it.only('Progress Bar Senerio', () => {
        cy.visit("/progressbar");
        cy.get("#startButton").click()
        cy.get("#progressBar", { timeout: 30000 }).should("have.text", "75%")
        cy.get("#stopButton").click()
    });
});