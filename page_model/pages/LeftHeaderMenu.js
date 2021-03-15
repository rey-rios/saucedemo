import { Selector, t } from 'testcafe'

class LeftHeaderMenu{
    constructor(){
        this.burgerMenuButton = Selector('#react-burger-menu-btn')
        this.allItemsLink = Selector('#inventory_sidebar_link')
        this.aboutLink = Selector('#about_sidebar_link')
        this.logoutLink = Selector('#logout_sidebar_link')
        this.resetAppStateLink = Selector('#reset_sidebar_link')

    }

    // Logout method
    async logOut(){
        await t
            .click(this.burgerMenuButton)
            .click(this.logoutLink)
    }
}

export default new LeftHeaderMenu()