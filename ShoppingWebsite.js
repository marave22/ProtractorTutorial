describe('Practice with shopping website', function () {
    browser.waitForAngularEnabled(false);
    it('Adding Product into the Cart', function () {
        browser.get('https://rahulshettyacademy.com/seleniumPractise/#/');
        browser.driver.manage().window().maximize();

        element.all(by.css('products')).each(function (items) {
            items.element(by.css("div:nth-child(4) h4")).getText().then(function (text_title) {
                console.log(text_title);
                browser.sleep(2000);
                if (text_title === 'Beetroot - 1 Kg') {
                    items.element(by.css('div:nth-child(4) div:nth-child(5) button:nth-child(1)')).click().then(function () {
                        element(by.css('td:nth-child(3) strong')).getText().then(function (text_count) {
                            if (text_count !== 0) {
                                console.log('item addition success, count is: ' + text_count);
                            }
                            else {
                                console.log('the cart is empty');
                            }
                        })
                    })
                }
            })
        })
    })
})