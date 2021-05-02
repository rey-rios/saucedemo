import LoginPage from '../pages/LoginPage'
import InventoryPage from '../pages/InventoryPage'
import { CREDENTIALS } from '../data/Constants'
import { standardUser } from '../utils/Roles'

fixture('Login feature testing')
    .page `https://www.saucedemo.com/`
   
test('1. Login with a valid user', async t => {

    await t
        .useRole(standardUser)
        // Validate navigation to Products page
        .expect(InventoryPage.pageTitle.exists).ok()
        .expect(InventoryPage.pageTitle.innerText).eql('PRODUCTS')

})

test('2. Login with an invalid user', async t => {

    LoginPage.submitLoginForm(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)

    await t
        // Validate error message
        .expect(LoginPage.errorMessage.exists).ok()
        .expect(LoginPage.errorMessage.innerText).eql('Epic sadface: Username and password do not match any user in this service')

})