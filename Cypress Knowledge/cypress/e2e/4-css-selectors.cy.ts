describe('locators', () => {
    beforeEach(() => {
        cy.visit("/dynamicid");
    });
    it('Cy.contains example', () => {
        cy.contains("Button with Dynamic ID").should('have.text', 'Button with Dynamic ID')
    });
    it('Cy.get and Cy.find element', () => {
        cy.get('div').find('button')
    });
    it('Css selector using an attribute I', () => {
        cy.get(`button[class="btn btn-primary"]`).should("have.text", "Button with Dynamic ID")
    });
    it('Css selector using an attribut II', () => {
        cy.get(`.btn-primary`).should("have.text", "Button with Dynamic ID")
    });
})  