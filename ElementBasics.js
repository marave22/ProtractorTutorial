describe('Using Locators', function() {
    it('First test of Locators', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');

        let el1 = element(by.model('first'));
        let el2 = element(by.model('second'));
        let btn = element(by.id('gobutton'));
        let btnOperator = element(by.model('operator'));
        let result = element(by.xpath('/html/body/div/div/form/h2'))
        let operatorTag = element(by.xpath('/html/body/div/div/form/select/option[4]'))

        el1.click();
        el1.sendKeys('5');
        
        btnOperator.click();
        operatorTag.click();

        el2.click();
        el2.sendKeys('5');

        btn.click();

        expect(result.getText()).toEqual('25');

        // console.log(result.getText());
        browser.sleep(5000);
    })
})

// /html/body/div/div/form/select/option[1]
// /html/body/div/div/form/select/option[2]