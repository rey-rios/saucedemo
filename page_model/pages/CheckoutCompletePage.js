import { Selector } from 'testcafe'

class CheckoutCompletePage{
    constructor(){
        this.pageTitle = Selector('.subheader').withExactText('Finish')
    }
}

export default new CheckoutCompletePage()