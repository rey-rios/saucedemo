import { Selector } from 'testcafe'

class CheckoutStepOnePage{
    constructor(){
        this.pageTitle = Selector('.title').withText('YOUR INFORMATION')
        this.firstNameField = Selector('#first-name')
        this.lastNameField = Selector('#last-name')
        this.zipCodeField = Selector('#postal-code')
        this.continueButton = Selector('.btn_primary.cart_button')
        this.cancelLink = Selector('.cart_cancel_link.btn_secondary')
        this.errorMessage = Selector('h3[data-test="error"]')
    }
}

export default new CheckoutStepOnePage()