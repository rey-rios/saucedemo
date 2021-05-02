import { Selector } from 'testcafe'

class InventoryPage{
    constructor(){
        this.pageTitle = Selector('.title')
        this.inventoryItemLink = Selector('.inventory_item_name')
    }
}

export default new InventoryPage()