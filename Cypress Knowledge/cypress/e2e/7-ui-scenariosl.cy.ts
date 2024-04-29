describe.skip('Click Challenge', () => {
    beforeEach(() => {
        cy.visit("/click")
    })
    it('Checking assertions ', () => {
        cy.get("#badButton").click().should("have.class", "btn-success");
    });
    it('backgroud check assertions', () => {
        cy.get("#badButton").click().should("have.css", "background-color", "rgb(40, 167, 69)");
    });
});

describe.skip('Hover challenge', () => {
    beforeEach(() => {
        cy.visit("/mouseover")
    })
    it('Hover with cypress work around', () => {
        cy.get('.text-primary').trigger('mouseover')
    });
    it('Hover with real hover element', () => {
        cy.get('.text-primary').realHover
    });


});
describe('Dynamic Table challenge', () => {
    beforeEach(() => {
        cy.visit("/dynamictable");
    })
    it('Chrome CPU Test', () => {
        cy.get(`div[role="row"] span`).each(($cell) => {
            if ($cell.text().includes('Chrome')) {
                cy.log(`I have found the ${$cell.text()} row on Website`)
                let chromeRowValue: string[] = [];
                chromeRowValue.push($cell.next().text())
                chromeRowValue.push($cell.next().next().text())
                chromeRowValue.push($cell.next().next().next().text())
                chromeRowValue.push($cell.next().next().next().next().text())
                cy.log("chrome row value", chromeRowValue)
                chromeRowValue.forEach((chromeValue) => {
                    if (chromeValue.includes("%")) {
                        cy.log(chromeValue);
                        cy.get(".bg-warning").should("have.text", `Chrome CPU: ${chromeValue}`)
                    }
                })
            }

        })
    });
});