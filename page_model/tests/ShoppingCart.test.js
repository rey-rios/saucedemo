import InventoryPage from '../pages/InventoryPage'
import RightHeaderMenu from '../pages/RightHeaderMenu'
import LoginPage from '../pages/LoginPage'
import { CREDENTIALS } from '../data/Constants'
import CartPage from '../pages/CartPage'
import { PRODUCTS } from '../data/Constants'
import InventoryItemPage from '../pages/InventoryItemPage'
import { randomItems } from '../utils/Helpers'
import LeftHeaderMenu from '../pages/LeftHeaderMenu'

fixture('Inventory feature testing')
    .page `https://www.saucedemo.com/`
    .beforeEach( async (t) => {
        await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    })

test('4. Navigate to the Shopping Cart', async t => {

    await t
        .expect(InventoryPage.pageTitle.exists).ok()
        .click(RightHeaderMenu.cartLink)
        .expect(CartPage.pageTitle.exists).ok()
        .expect(CartPage.pageTitle.innerText).eql('Your Cart')

})

test('5. Add a single item to the Shopping Cart', async t => {

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

})

test('6. Add multiple items to the Shopping Cart', async t => {

    var productsToSelect = new Array
    productsToSelect = randomItems(PRODUCTS, 3)
    console.log('Products to select:')
    console.log(productsToSelect)
    
    await t
        .expect(InventoryPage.pageTitle.exists).ok()
        .click(InventoryPage.inventoryItemLink.withText(productsToSelect[0]))
        .expect(InventoryItemPage.itemName.exists).ok()
        .expect(InventoryItemPage.itemName.innerText).eql(productsToSelect[0])
        .click(InventoryItemPage.addToCartButton)
        .expect(RightHeaderMenu.cartBadge.innerText).eql('1')
        .click(RightHeaderMenu.cartLink)
        .expect(CartPage.cartItemLink.withText(productsToSelect[0]).exists).ok()

        .click(LeftHeaderMenu.burgerMenuButton)
        .click(LeftHeaderMenu.allItemsLink)
        .expect(InventoryPage.pageTitle.exists).ok()
        .click(InventoryPage.inventoryItemLink.withText(productsToSelect[1]))
        .expect(InventoryItemPage.itemName.exists).ok()
        .expect(InventoryItemPage.itemName.innerText).eql(productsToSelect[1])
        .click(InventoryItemPage.addToCartButton)
        .expect(RightHeaderMenu.cartBadge.innerText).eql('2')
        .click(RightHeaderMenu.cartLink)
        .expect(CartPage.cartItemLink.withText(productsToSelect[1]).exists).ok()


        .click(LeftHeaderMenu.burgerMenuButton)
        .click(LeftHeaderMenu.allItemsLink)
        .expect(InventoryPage.pageTitle.exists).ok()
        .click(InventoryPage.inventoryItemLink.withText(productsToSelect[2]))
        .expect(InventoryItemPage.itemName.exists).ok()
        .expect(InventoryItemPage.itemName.innerText).eql(productsToSelect[2])
        .click(InventoryItemPage.addToCartButton)
        .expect(RightHeaderMenu.cartBadge.innerText).eql('3')
        .click(RightHeaderMenu.cartLink)
        .expect(CartPage.cartItemLink.withText(productsToSelect[2]).exists).ok()

})