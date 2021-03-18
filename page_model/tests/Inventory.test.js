import InventoryPage from '../pages/InventoryPage'
import LeftHeaderMenu from '../pages/LeftHeaderMenu'
import LoginPage from '../pages/LoginPage'
import { standardUser } from '../utils/Roles'

fixture('Inventory feature testing')
    .page `https://www.saucedemo.com/`
    .beforeEach( async (t) => {
        await t
            .useRole(standardUser)
    })

test('3. Logout from Products page', async t => {

    await t
        // Validate navigation to Products page
        .expect(InventoryPage.pageTitle.exists).ok()
        .click(LeftHeaderMenu.burgerMenuButton)
        .click(LeftHeaderMenu.logoutLink)
        // Validate user is logged out
        .expect(LoginPage.loginButton.exists).ok()

})