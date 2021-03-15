import InventoryPage from '../pages/InventoryPage'
import RightHeaderMenu from '../pages/RightHeaderMenu'
import LoginPage from '../pages/LoginPage'
import { CREDENTIALS } from '../data/Constants'
import CartPage from '../pages/CartPage'
import { PRODUCTS } from '../data/Constants'
import InventoryItemPage from '../pages/InventoryItemPage'
import CheckoutStepOnePage from '../pages/CheckoutStepOnePage'
import CheckoutStepTwoPage from '../pages/CheckoutStepTwoPage'
import CheckoutCompletePage from '../pages/CheckoutCompletePage'

fixture('Inventory feature testing')
    .page `https://www.saucedemo.com/`
    .beforeEach( async (t) => {
        await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    })

test('7.1 Continue with missing First Name information', async t => {

        const random = Math.floor(Math.random() * PRODUCTS.length)
        const productToSelect = PRODUCTS[random]
        console.log('Product to Select: ' + productToSelect)
        
        await t
            .expect(InventoryPage.pageTitle.exists).ok()
            .click(InventoryPage.inventoryItemLink.withText(productToSelect))
            .expect(InventoryItemPage.itemName.exists).ok()
            .expect(InventoryItemPage.itemName.innerText).eql(productToSelect)
            .click(InventoryItemPage.addToCartButton)
            .expect(RightHeaderMenu.cartBadge.innerText).eql('1')
            .click(RightHeaderMenu.cartLink)
            .expect(CartPage.cartItemLink.withText(productToSelect).exists).ok()
            .click(CartPage.checkoutButton)
            .expect(CheckoutStepOnePage.pageTitle.exists).ok()
            .typeText(CheckoutStepOnePage.lastNameField, "Smith")
            .typeText(CheckoutStepOnePage.zipCodeField, "90210")
            .click(CheckoutStepOnePage.continueButton)
            .expect(CheckoutStepOnePage.errorMessage.withText('Error: First Name is required').exists).ok()
    
})

test('7.2 Continue with missing Last Name information', async t => {

    const random = Math.floor(Math.random() * PRODUCTS.length)
    const productToSelect = PRODUCTS[random]
    console.log('Product to Select: ' + productToSelect)
    
    await t
        .expect(InventoryPage.pageTitle.exists).ok()
        .click(InventoryPage.inventoryItemLink.withText(productToSelect))
        .expect(InventoryItemPage.itemName.exists).ok()
        .expect(InventoryItemPage.itemName.innerText).eql(productToSelect)
        .click(InventoryItemPage.addToCartButton)
        .expect(RightHeaderMenu.cartBadge.innerText).eql('1')
        .click(RightHeaderMenu.cartLink)
        .expect(CartPage.cartItemLink.withText(productToSelect).exists).ok()
        .click(CartPage.checkoutButton)
        .expect(CheckoutStepOnePage.pageTitle.exists).ok()
        .typeText(CheckoutStepOnePage.firstNameField, "John")
        .typeText(CheckoutStepOnePage.zipCodeField, "90210")
        .click(CheckoutStepOnePage.continueButton)
        .expect(CheckoutStepOnePage.errorMessage.withText('Error: Last Name is required').exists).ok()

})

test('7.3 Continue with missing Postal Code information', async t => {

    const random = Math.floor(Math.random() * PRODUCTS.length)
    const productToSelect = PRODUCTS[random]
    console.log('Product to Select: ' + productToSelect)
    
    await t
        .expect(InventoryPage.pageTitle.exists).ok()
        .click(InventoryPage.inventoryItemLink.withText(productToSelect))
        .expect(InventoryItemPage.itemName.exists).ok()
        .expect(InventoryItemPage.itemName.innerText).eql(productToSelect)
        .click(InventoryItemPage.addToCartButton)
        .expect(RightHeaderMenu.cartBadge.innerText).eql('1')
        .click(RightHeaderMenu.cartLink)
        .expect(CartPage.cartItemLink.withText(productToSelect).exists).ok()
        .click(CartPage.checkoutButton)
        .expect(CheckoutStepOnePage.pageTitle.exists).ok()
        .typeText(CheckoutStepOnePage.firstNameField, "John")
        .typeText(CheckoutStepOnePage.lastNameField, "Smith")
        .click(CheckoutStepOnePage.continueButton)
        .expect(CheckoutStepOnePage.errorMessage.withText('Error: Postal Code is required').exists).ok()

})

test('8. Fill user\'s informartion', async t => {

    const random = Math.floor(Math.random() * PRODUCTS.length)
    const productToSelect = PRODUCTS[random]
    console.log('Product to Select: ' + productToSelect)
    
    await t
        .expect(InventoryPage.pageTitle.exists).ok()
        .click(InventoryPage.inventoryItemLink.withText(productToSelect))
        .expect(InventoryItemPage.itemName.exists).ok()
        .expect(InventoryItemPage.itemName.innerText).eql(productToSelect)
        .click(InventoryItemPage.addToCartButton)
        .expect(RightHeaderMenu.cartBadge.innerText).eql('1')
        .click(RightHeaderMenu.cartLink)
        .expect(CartPage.cartItemLink.withText(productToSelect).exists).ok()
        .click(CartPage.checkoutButton)
        .expect(CheckoutStepOnePage.pageTitle.exists).ok()
        .typeText(CheckoutStepOnePage.firstNameField, "John")
        .typeText(CheckoutStepOnePage.lastNameField, "Smith")
        .typeText(CheckoutStepOnePage.zipCodeField, "90210")
        .click(CheckoutStepOnePage.continueButton)
        .expect(CheckoutStepTwoPage.pageTitle.exists).ok()

})

test('9. Final Order Items', async t => {

    const random = Math.floor(Math.random() * PRODUCTS.length)
    const productToSelect = PRODUCTS[random]
    console.log('Product to Select: ' + productToSelect)
    
    await t
        .expect(InventoryPage.pageTitle.exists).ok()
        .click(InventoryPage.inventoryItemLink.withText(productToSelect))
        .expect(InventoryItemPage.itemName.exists).ok()
        .expect(InventoryItemPage.itemName.innerText).eql(productToSelect)
        .click(InventoryItemPage.addToCartButton)
        .expect(RightHeaderMenu.cartBadge.innerText).eql('1')
        .click(RightHeaderMenu.cartLink)
        .expect(CartPage.cartItemLink.withText(productToSelect).exists).ok()
        .click(CartPage.checkoutButton)
        .expect(CheckoutStepOnePage.pageTitle.exists).ok()
        .typeText(CheckoutStepOnePage.firstNameField, "John")
        .typeText(CheckoutStepOnePage.lastNameField, "Smith")
        .typeText(CheckoutStepOnePage.zipCodeField, "90210")
        .click(CheckoutStepOnePage.continueButton)
        .expect(CheckoutStepTwoPage.pageTitle.exists).ok()
        .click(CheckoutStepTwoPage.finishButton)
        .expect(CheckoutCompletePage.pageTitle.exists).ok()

})