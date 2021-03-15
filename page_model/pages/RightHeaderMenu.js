import { Selector } from 'testcafe'

class RightHeaderMenu{
    constructor(){
        this.cartLink = Selector('.shopping_cart_link.fa-layers.fa-fw')
        this.cartBadge = Selector('.fa-layers-counter.shopping_cart_badge')
    }
}

export default new RightHeaderMenu()