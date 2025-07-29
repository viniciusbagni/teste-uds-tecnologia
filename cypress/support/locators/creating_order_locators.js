/// <reference types='Cypress' />

class CreatingOrderLocators {

    addToCartButton = () => { return '[data-test="add-to-cart-sauce-labs-backpack"]' }
    backHomeButton = () => { return '[data-test="back-to-products"]' }
    checkoutButton = () => { return '[data-test="checkout"]' }
    checkoutTitle = () => { return '[data-test="title"]' }
    classCheckoutInfo = () => { return '.checkout_info' }
    completeOrderHeader = () => { return '[data-test="complete-header"]' }
    continueButton = () => { return '[data-test="continue"]' }
    fillFormWithValues = () => { return '.form_group' }
    finishButton = () => { return '[data-test="finish"]' }
    productDescription = () => { return '[data-test="product-description"]' }
	productName = () => { return '[data-test="inventory-item-name"]:eq(0)' }
	productPrice = () => { return '[data-test="product-price"]' }
    removeButton = () => { return '[data-test="remove-sauce-labs-backpack"]' }
    shoppingCartLinkButton = () => { return '[data-test="shopping-cart-link"]' }
}

export default CreatingOrderLocators