context("Order a pizza!", () => {
    beforeEach(() => {
        cy.visit('https://dominos.com')
    })

    it('Add a carryout order to the cart', () => {
        cy.findByText('Carryout').click()
        cy.findByLabelText('ZIP Code').type('10457')
        cy.findByText('Find a Store').click()
        cy.get('.js-orderCarryoutNow').eq(0).click()
        cy.get('.js-buildYourOwnPizza').eq(0).click()

        //Create pizza
        cy.get('.pizza-size').eq(0).click()
        cy.get('#sauce-topping-Xm').click()
        cy.get('input[value="H"]').click()
        cy.findByText('Add to Order').click()
        cy.get('button[title="Close modal"]').click()

        //Check to ensure item is in the cart
        cy.get('.site-nav__toggle--cart').click()
        cy.get('button[data-quid="mini-cart-product-1-name-button"').contains('Small (10") Hand Tossed Pizza')
    })
})