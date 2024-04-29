describe('template spec', () => {
  it('passes', () => {
    cy.log("Hello! World!")
  })
  it('Typescript Introduction', () => {
    let stringVariable: string = '9';
    let numberVariable: number = 29;
    let booleanVariable: boolean = true;
    let anyVariable: any = false;
    function addTwoNumbers(a: number, b: number): number {
      return a + b;
    }
    interface User {
      username: string;
      password: string;

    }
    function retunrUserInfomation(user: User): void {
      console.log(`This is a username : ${user.username}`);
      console.log(`This is a password : ${user.password}`);
    }
  });
})