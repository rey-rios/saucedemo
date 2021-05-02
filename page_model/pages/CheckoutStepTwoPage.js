import { Selector } from 'testcafe'

class CheckoutStepTwoPage{
    constructor(){
        this.pageTitle = Selector('.title').withText('OVERVIEW')
        this.cancelLink = Selector('.cart_cancel_link.btn_secondary')
        this.finishButton = Selector('.btn_action.cart_button')
        this.cartItemLink = Selector('.inventory_item_name')
    }
}

export default new CheckoutStepTwoPage()