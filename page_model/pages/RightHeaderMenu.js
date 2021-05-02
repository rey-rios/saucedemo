import { Selector } from 'testcafe'

class RightHeaderMenu{
    constructor(){
        this.cartLink = Selector('.shopping_cart_link')
        this.cartBadge = Selector('.shopping_cart_badge')
    }
}

export default new RightHeaderMenu()