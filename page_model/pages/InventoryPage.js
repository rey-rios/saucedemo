import { Selector } from 'testcafe'

class InventoryPage{
    constructor(){
        this.pageTitle = Selector('.product_label')
        this.inventoryItemLink = Selector('.inventory_item_name')
    }
}

export default new InventoryPage()