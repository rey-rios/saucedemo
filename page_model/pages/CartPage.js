import { Selector } from 'testcafe'

class CartPage{
    constructor(){
        this.pageTitle = Selector('.subheader').withExactText('Your Cart')
        this.removeButton = Selector('.btn_secondary.cart_button')
        this.continueShoppingButton = Selector('.btn_secondary').withExactText('Continue Shopping')
        this.checkoutButton = Selector('.btn_action.checkout_button')
        this.cartItemLink = Selector('.inventory_item_name')
    }
}

export default new CartPage()