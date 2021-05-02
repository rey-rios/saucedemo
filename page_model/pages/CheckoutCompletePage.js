import { Selector } from 'testcafe'

class CheckoutCompletePage{
    constructor(){
        this.pageTitle = Selector('.title').withText('COMPLETE')
    }
}

export default new CheckoutCompletePage()