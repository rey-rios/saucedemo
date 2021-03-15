import { Selector, t } from 'testcafe'

class LoginPage{
    constructor() {
        this.userNameField = Selector('#user-name')
        this.passwordField = Selector('#password')
        this.loginButton = Selector('#login-button')
        this.errorMessage = Selector('h3[data-test="error"]')
    }

    // login method
    async submitLoginForm(userName, password){
        await t
            .typeText(this.userNameField, userName)
            .typeText(this.passwordField, password)
            .click(this.loginButton)      
    }
}

export default new LoginPage()