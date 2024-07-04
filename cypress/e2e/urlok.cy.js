describe('url ok', () => {
  it('passes', () => {
    cy.visit('https://magento.softwaretestingboard.com/');
    cy.url().should('include', 'softwaretestingboard.com');
    cy.get('h2.title').should('have.text', 'Hot Sellers');
    cy.get('p.info').should('have.text', 'Here is what`s trending on Luma right now');
    cy.get('span.info').first().should('have.text', 'New Luma Yoga Collection');
    cy.get('span.action.more.button').first().should('have.text', 'Shop New Yoga');
    cy.get('footer div div div ul li a').first().contains('Notes');
  })
})