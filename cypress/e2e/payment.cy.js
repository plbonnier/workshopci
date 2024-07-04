describe('payment the cart', () => {
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
        cy.wait(5000);
        cy.contains('Estimate Shipping and Tax').click();
        cy.get('[name="country_id"]').select('France');
        cy.get('[name="region_id"]').select('Rhône');
        cy.get('[name="postcode"]').type('69160');
        cy.get('[data-role="proceed-to-checkout').click();
        cy.url().should('include', 'checkout/#shipping');
        cy.get('#customer-email').type('plbonnier@test.com');
        cy.get('[name="firstname"]').type('Pierre-Louis');
        cy.get('[name="lastname"]').type('Bonnier');
        cy.get('[name="street[0]"]').type('1 rue de la paix');
        cy.get('[name="city"]').type('Tassin la demi-lune');
        cy.get('[name="telephone"]').type('0606060606');
        cy.get('[data-role="opc-continue"]').click();
        cy.url().should('include', 'checkout/#payment');
        cy.get('button.checkout').click();
    })
})