
describe('empty spec', () => {
  before(() => {
    cy.log('Hello from the before Hook!')
  });
  after(() => {
    cy.log('Hello from the after Hook!')
  });
  beforeEach(() => {
    cy.log('Hello from beforeeach Hook!')
  })
  afterEach(() => {
    cy.log('Hello from aftereach Hook!')
  })
  it('testcase #1', () => {
    cy.log("Hello! World!");
  });
  it('testcase #2', () => {
    cy.log("Hello! World!");
  });
  it.only('testcase #3', () => {
    cy.log("Hello! World!");
  });
  it('testcase #3', () => {
    cy.log("Hello! World!");
  });

})