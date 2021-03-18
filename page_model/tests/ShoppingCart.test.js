import InventoryPage from '../pages/InventoryPage'
import RightHeaderMenu from '../pages/RightHeaderMenu'
import CartPage from '../pages/CartPage'
import { PRODUCTS } from '../data/Constants'
import InventoryItemPage from '../pages/InventoryItemPage'
import { randomItems } from '../utils/Helpers'
import LeftHeaderMenu from '../pages/LeftHeaderMenu'
import { standardUser } from '../utils/Roles'

const dataSet = require('../data/TestData.json');

fixture('Inventory feature testing')
    .page `https://www.saucedemo.com/`
    .beforeEach( async (t) => {
        await t
            .useRole(standardUser)
            // Validate navigation to Products page
            .expect(InventoryPage.pageTitle.exists).ok()
    })

test('4. Navigate to the Shopping Cart', async t => {

    await t
        .click(RightHeaderMenu.cartLink)
        .expect(CartPage.pageTitle.exists).ok()
        .expect(CartPage.pageTitle.innerText).eql('Your Cart')

})

test('5. Add a single item to the Shopping Cart', async t => {

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

})

test('6. Add multiple items to the Shopping Cart', async t => {

    // Get 3 random Product to select
    var productsToSelect = new Array
    productsToSelect = randomItems(PRODUCTS, 3)
    console.log('Products to select:')
    console.log(productsToSelect)
    
    await t
        .click(InventoryPage.inventoryItemLink.withText(productsToSelect[0]))
        .expect(InventoryItemPage.itemName.exists).ok()
        // Validate Inventory Item Summary page for selected product
        .expect(InventoryItemPage.itemName.innerText).eql(productsToSelect[0])
        .click(InventoryItemPage.addToCartButton)
        // Validate Cart badge counter is updated
        .expect(RightHeaderMenu.cartBadge.innerText).eql('1')
        .click(RightHeaderMenu.cartLink)
        // Validate product is present in Cart page
        .expect(CartPage.cartItemLink.withText(productsToSelect[0]).exists).ok()

        .click(LeftHeaderMenu.burgerMenuButton)
        .click(LeftHeaderMenu.allItemsLink)
        // Validate navigation to Products page
        .expect(InventoryPage.pageTitle.exists).ok()
        .click(InventoryPage.inventoryItemLink.withText(productsToSelect[1]))
        .expect(InventoryItemPage.itemName.exists).ok()
        // Validate Inventory Item Summary page for selected product
        .expect(InventoryItemPage.itemName.innerText).eql(productsToSelect[1])
        .click(InventoryItemPage.addToCartButton)
        // Validate Cart badge counter is updated
        .expect(RightHeaderMenu.cartBadge.innerText).eql('2')
        .click(RightHeaderMenu.cartLink)
        // Validate product is present in Cart page
        .expect(CartPage.cartItemLink.withText(productsToSelect[1]).exists).ok()

        .click(LeftHeaderMenu.burgerMenuButton)
        .click(LeftHeaderMenu.allItemsLink)
        // Validate navigation to Products page
        .expect(InventoryPage.pageTitle.exists).ok()
        .click(InventoryPage.inventoryItemLink.withText(productsToSelect[2]))
        .expect(InventoryItemPage.itemName.exists).ok()
        // Validate Inventory Item Summary page for selected product
        .expect(InventoryItemPage.itemName.innerText).eql(productsToSelect[2])
        .click(InventoryItemPage.addToCartButton)
        // Validate Cart badge counter is updated
        .expect(RightHeaderMenu.cartBadge.innerText).eql('3')
        .click(RightHeaderMenu.cartLink)
        // Validate product is present in Cart page
        .expect(CartPage.cartItemLink.withText(productsToSelect[2]).exists).ok()

})

dataSet.forEach(dataSet => {
    test(`Bonus test (Data Provider). Enter '${dataSet.product}'`, async t => {

        console.log('Product to Select: ' + dataSet.product)
        
        await t
            .click(InventoryPage.inventoryItemLink.withText(dataSet.product))
            .expect(InventoryItemPage.itemName.exists).ok()
            // Validate Inventory Item Summary page for selected product
            .expect(InventoryItemPage.itemName.innerText).eql(dataSet.product)
            .click(InventoryItemPage.addToCartButton)
            // Validate Cart badge counter is updated
            .expect(RightHeaderMenu.cartBadge.innerText).eql('1')
            .click(RightHeaderMenu.cartLink)
            // Validate product is present in Cart page
            .expect(CartPage.cartItemLink.withText(dataSet.product).exists).ok()

    })
})