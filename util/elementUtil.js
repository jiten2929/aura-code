class ElementUtil{

    doClick(element){
        element.waitForDisplayed()
        element.click()
    }

    doSetValue(element, value){
        element.waitForDisplayed()
        element.setValue(value)
    }

    doGetText(element){
        element.waitForDisplayed()
        return element.getText()
    }

    doGetPageTitle(element){
        return browser.getTitle()
    }

    doIsDisplayed(element){
        element.waitForDisplayed()
        return element.isDisplayed()
    }

    doGetPageTitle(element){
        return browser.getTitle()
    }

}

module.exports = new ElementUtil();