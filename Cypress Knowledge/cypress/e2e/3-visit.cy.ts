describe('basics', () => {
    beforeEach(() => {
        cy.visit("/textinput")
    })
    it('visit - explanation Text Input', () => {
        cy.url().then((url) => {
            cy.log(`Pinting url: ${url}`)
            expect(url).to.contains('/textinput')
        })
    });
    it('title validation', () => {
        cy.title().then((title) => {
            cy.log(`Title name is ${title}`)
            expect(title).to.equal("Text Input")
        })
    });
    it.only('Type and Check in TextInput PlayGround', () => {
        cy.get("input#newButtonName").type("I'm Here!")
        cy.get("#updatingButton").click().should('have.text', "I'm Here")
    });
})