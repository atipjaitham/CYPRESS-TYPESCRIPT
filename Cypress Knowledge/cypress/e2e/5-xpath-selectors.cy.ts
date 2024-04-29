describe('locators', () => {
    beforeEach(() => {
        cy.visit("/dynamicid");
    });
    it('How to find an element by it text', () => {
        cy.xpath(`//pre[@class=' languahe-html']`)
    });
});