import InventoryPage from '../pages/InventoryPage'
import RightHeaderMenu from '../pages/RightHeaderMenu'
import CartPage from '../pages/CartPage'
import { PRODUCTS } from '../data/Constants'
import InventoryItemPage from '../pages/InventoryItemPage'
import CheckoutStepOnePage from '../pages/CheckoutStepOnePage'
import CheckoutStepTwoPage from '../pages/CheckoutStepTwoPage'
import CheckoutCompletePage from '../pages/CheckoutCompletePage'
import { standardUser } from '../utils/Roles'

fixture('Inventory feature testing')
    .page `https://www.saucedemo.com/`
    .beforeEach( async (t) => {
        await t
            .useRole(standardUser)
            // Validate navigation to Products page
            .expect(InventoryPage.pageTitle.exists).ok()
    })

test('7.1 Continue with missing First Name information', async t => {

    // Get a random Product to select
    const random = Math.floor(Math.random() * PRODUCTS.length)
    const productToSelect = PRODUCTS[random]
    console.log('Product to Select: ' + productToSelect)
    
    await t
        .click(InventoryPage.inventoryItemLink.withText(productToSelect))
        .expect(InventoryItemPage.itemName.exists).ok()
        // Validate Inventory Item Summary page for selected product
        .expect(InventoryItemPage.itemName.innerText).eql(productToSelect)
        .click(InventoryItemPage.addToCartButton)
        // Validate Cart badge counter is updated
        .expect(RightHeaderMenu.cartBadge.innerText).eql('1')
        .click(RightHeaderMenu.cartLink)
        // Validate product is present in Cart page
        .expect(CartPage.cartItemLink.withText(productToSelect).exists).ok()
        .click(CartPage.checkoutButton)
        .expect(CheckoutStepOnePage.pageTitle.exists).ok()
        .typeText(CheckoutStepOnePage.lastNameField, "Smith")
        .typeText(CheckoutStepOnePage.zipCodeField, "90210")
        .click(CheckoutStepOnePage.continueButton)
        // Validate error
        .expect(CheckoutStepOnePage.errorMessage.withText('Error: First Name is required').exists).ok()
    
})

test('7.2 Continue with missing Last Name information', async t => {

    // Get a random Product to select
    const random = Math.floor(Math.random() * PRODUCTS.length)
    const productToSelect = PRODUCTS[random]
    console.log('Product to Select: ' + productToSelect)
    
    await t
        .click(InventoryPage.inventoryItemLink.withText(productToSelect))
        .expect(InventoryItemPage.itemName.exists).ok()
        // Validate Inventory Item Summary page for selected product
        .expect(InventoryItemPage.itemName.innerText).eql(productToSelect)
        .click(InventoryItemPage.addToCartButton)
        // Validate Cart badge counter is updated
        .expect(RightHeaderMenu.cartBadge.innerText).eql('1')
        .click(RightHeaderMenu.cartLink)
        // Validate product is present in Cart page
        .expect(CartPage.cartItemLink.withText(productToSelect).exists).ok()
        .click(CartPage.checkoutButton)
        .expect(CheckoutStepOnePage.pageTitle.exists).ok()
        .typeText(CheckoutStepOnePage.firstNameField, "John")
        .typeText(CheckoutStepOnePage.zipCodeField, "90210")
        .click(CheckoutStepOnePage.continueButton)
        // Validate error
        .expect(CheckoutStepOnePage.errorMessage.withText('Error: Last Name is required').exists).ok()

})

test('7.3 Continue with missing Postal Code information', async t => {

    // Get a random Product to select
    const random = Math.floor(Math.random() * PRODUCTS.length)
    const productToSelect = PRODUCTS[random]
    console.log('Product to Select: ' + productToSelect)
    
    await t
        .click(InventoryPage.inventoryItemLink.withText(productToSelect))
        .expect(InventoryItemPage.itemName.exists).ok()
        // Validate Inventory Item Summary page for selected product
        .expect(InventoryItemPage.itemName.innerText).eql(productToSelect)
        .click(InventoryItemPage.addToCartButton)
        // Validate Cart badge counter is updated
        .expect(RightHeaderMenu.cartBadge.innerText).eql('1')
        .click(RightHeaderMenu.cartLink)
        // Validate product is present in Cart page
        .expect(CartPage.cartItemLink.withText(productToSelect).exists).ok()
        .click(CartPage.checkoutButton)
        .expect(CheckoutStepOnePage.pageTitle.exists).ok()
        .typeText(CheckoutStepOnePage.firstNameField, "John")
        .typeText(CheckoutStepOnePage.lastNameField, "Smith")
        .click(CheckoutStepOnePage.continueButton)
        // Validate error
        .expect(CheckoutStepOnePage.errorMessage.withText('Error: Postal Code is required').exists).ok()

})

test('8. Fill user\'s informartion', async t => {

    // Get a random Product to select
    const random = Math.floor(Math.random() * PRODUCTS.length)
    const productToSelect = PRODUCTS[random]
    console.log('Product to Select: ' + productToSelect)
    
    await t
        .click(InventoryPage.inventoryItemLink.withText(productToSelect))
        .expect(InventoryItemPage.itemName.exists).ok()
        // Validate Inventory Item Summary page for selected product
        .expect(InventoryItemPage.itemName.innerText).eql(productToSelect)
        .click(InventoryItemPage.addToCartButton)
        // Validate Cart badge counter is updated
        .expect(RightHeaderMenu.cartBadge.innerText).eql('1')
        .click(RightHeaderMenu.cartLink)
        // Validate product is present in Cart page
        .expect(CartPage.cartItemLink.withText(productToSelect).exists).ok()
        .click(CartPage.checkoutButton)
        .expect(CheckoutStepOnePage.pageTitle.exists).ok()
        .typeText(CheckoutStepOnePage.firstNameField, "John")
        .typeText(CheckoutStepOnePage.lastNameField, "Smith")
        .typeText(CheckoutStepOnePage.zipCodeField, "90210")
        .click(CheckoutStepOnePage.continueButton)
        // Validate navigation to Checkout Overview page
        .expect(CheckoutStepTwoPage.pageTitle.exists).ok()

})

test('9. Final Order Items', async t => {

    // Get a random Product to select
    const random = Math.floor(Math.random() * PRODUCTS.length)
    const productToSelect = PRODUCTS[random]
    console.log('Product to Select: ' + productToSelect)
    
    await t
        .click(InventoryPage.inventoryItemLink.withText(productToSelect))
        .expect(InventoryItemPage.itemName.exists).ok()
        // Validate Inventory Item Summary page for selected product
        .expect(InventoryItemPage.itemName.innerText).eql(productToSelect)
        .click(InventoryItemPage.addToCartButton)
        // Validate Cart badge counter is updated
        .expect(RightHeaderMenu.cartBadge.innerText).eql('1')
        .click(RightHeaderMenu.cartLink)
        // Validate product is present in Cart page
        .expect(CartPage.cartItemLink.withText(productToSelect).exists).ok()
        .click(CartPage.checkoutButton)
        .expect(CheckoutStepOnePage.pageTitle.exists).ok()
        .typeText(CheckoutStepOnePage.firstNameField, "John")
        .typeText(CheckoutStepOnePage.lastNameField, "Smith")
        .typeText(CheckoutStepOnePage.zipCodeField, "90210")
        .click(CheckoutStepOnePage.continueButton)
        // Validate navigation to Checkout Overview page
        .expect(CheckoutStepTwoPage.pageTitle.exists).ok()
        // Validate selected product is present in Overview page
        .expect(CheckoutStepTwoPage.cartItemLink.withText(productToSelect).exists).ok()

})

test('10. Complete a purchase', async t => {

    // Get a random Product to select
    const random = Math.floor(Math.random() * PRODUCTS.length)
    const productToSelect = PRODUCTS[random]
    console.log('Product to Select: ' + productToSelect)
    
    await t
        .click(InventoryPage.inventoryItemLink.withText(productToSelect))
        .expect(InventoryItemPage.itemName.exists).ok()
        // Validate Inventory Item Summary page for selected product
        .expect(InventoryItemPage.itemName.innerText).eql(productToSelect)
        .click(InventoryItemPage.addToCartButton)
        // Validate Cart badge counter is updated
        .expect(RightHeaderMenu.cartBadge.innerText).eql('1')
        .click(RightHeaderMenu.cartLink)
        // Validate product is present in Cart page
        .expect(CartPage.cartItemLink.withText(productToSelect).exists).ok()
        .click(CartPage.checkoutButton)
        .expect(CheckoutStepOnePage.pageTitle.exists).ok()
        .typeText(CheckoutStepOnePage.firstNameField, "John")
        .typeText(CheckoutStepOnePage.lastNameField, "Smith")
        .typeText(CheckoutStepOnePage.zipCodeField, "90210")
        .click(CheckoutStepOnePage.continueButton)
        // Validate navigation to Checkout Overview page
        .expect(CheckoutStepTwoPage.pageTitle.exists).ok()
        // Validate selected product is present in Overview page
        .expect(CheckoutStepTwoPage.cartItemLink.withText(productToSelect).exists).ok()
        .click(CheckoutStepTwoPage.finishButton)
        // Validate navigation to Checkout Complete page
        .expect(CheckoutCompletePage.pageTitle.exists).ok()

})