describe('consult and patch the cart', () => {

    it('consult the cart', () => {
        cy.visit('https://magento.softwaretestingboard.com/');
        cy.get('#ui-id-4').trigger('mouseover');
        cy.get('#ui-id-9').click();
        cy.get('img.product-image-photo').first().click();
        cy.get('#option-label-size-143-item-166').click();
        cy.get('#option-label-color-93-item-57').click();
        cy.get('#product-addtocart-button').click();
        cy.wait(2000);
        cy.get('.action.showcart').click();
    })

    it('consult the cart', () => {
        cy.visit('https://magento.softwaretestingboard.com/');
        cy.get('#ui-id-4').trigger('mouseover');
        cy.get('#ui-id-9').click();
        cy.get('img.product-image-photo').first().click();
        cy.get('#option-label-size-143-item-166').click();
        cy.get('#option-label-color-93-item-57').click();
        cy.get('#product-addtocart-button').click();
        cy.wait(5000);
        cy.get('.action.showcart').click();
        cy.get('.action.viewcart').click();
        cy.url().should('include', 'checkout/cart/');
        cy.get('[data-role="cart-item-qty"]').clear().type('3');
        cy.get('.action.update').click();
    })
})