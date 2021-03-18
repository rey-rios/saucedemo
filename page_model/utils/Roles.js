import { Role } from 'testcafe'
import LoginPage from '../pages/LoginPage'
import { CREDENTIALS } from '../data/Constants'


export const standardUser = Role('https://www.saucedemo.com/', async t => {
    await t
        .typeText(LoginPage.userNameField, CREDENTIALS.VALID_USER.USERNAME )
        .typeText(LoginPage.passwordField, CREDENTIALS.VALID_USER.PASSWORD )
        .click(LoginPage.loginButton)
}, { preserveUrl: true })