describe('Protrator Frame steps', function () {
    browser.waitForAngularEnabled(false);
    it('Open the NonAngular js website frames', function () {
        browser.driver.manage().window().maximize();
        browser.get("https://www.rahulshettyacademy.com/AutomationPractice/");

        browser.switchTo().frame('courses-iframe');
        element(by.css("a[href*='sign_in']")).getText().then(function (text) {
            console.log(text);
        })
    });
})