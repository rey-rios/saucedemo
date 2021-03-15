import InventoryPage from '../pages/InventoryPage'
import LeftHeaderMenu from '../pages/LeftHeaderMenu'
import LoginPage from '../pages/LoginPage'
import { CREDENTIALS } from '../data/Constants'

fixture('Inventory feature testing')
    .page `https://www.saucedemo.com/`
    .beforeEach( async (t) => {
        await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    })

test('3. Logout from Products page', async t => {

    await t
        .expect(InventoryPage.pageTitle.exists).ok()
        .click(LeftHeaderMenu.burgerMenuButton)
        .click(LeftHeaderMenu.logoutLink)
        .expect(LoginPage.loginButton.exists).ok()

})