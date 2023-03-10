describe('Using Locators', function() {
    browser.waitForAngularEnabled(false);

    let el1 = element(by.model('first'));
    let el2 = element(by.model('second'));
    let btn = element(by.id('gobutton'));
    let btnOperator = element(by.model('operator'));
    let result = element(by.repeater('result in memory')).element(by.css('td:nth-child(3)'));
    let operatorTag = element(by.xpath('/html/body/div/div/form/select/option[3]'));



    let allOptions = element.all(by.options('value for (key, value) in operators'));
    allOptions.

    beforeEach(function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
    });

    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('Super Calculator');
    });

    it('First test of Locators', function() { 

        el1.click();
        el1.sendKeys('5');
        
        btnOperator.click();
        operatorTag.click();

        el2.click();
        el2.sendKeys('5');

        btn.click();
        browser.waitForAngularEnabled(true);
        expect(result.getText()).toEqual('0').then(function() {
            browser.sleep(3000);
        })
    })
})