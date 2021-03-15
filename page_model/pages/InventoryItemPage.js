import { Selector } from 'testcafe'

class InventoryItemPage{
    constructor(){
        this.itemName = Selector('.inventory_details_name')
        this.addToCartButton = Selector('.btn_primary.btn_inventory')
    }
}

export default new InventoryItemPage()