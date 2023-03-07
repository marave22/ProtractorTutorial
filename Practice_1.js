describe('Protractor Practice on website', function () {
    it('Entering simple credentials', function () {

        browser.get('https://rahulshettyacademy.com/angularpractice/');
        browser.driver.manage().window().maximize();

        element(by.name("name")).sendKeys("Mystudents");
        element(by.css("input[name='email']")).sendKeys("mystudents@gmail.com");
        element(by.id("exampleInputPassword1")).sendKeys("password2");
        element(by.css("input[type='checkbox']")).click();
        element(by.cssContainingText("[id='exampleFormControlSelect1'] option", "Female")).click();
        element(by.buttonText("Submit")).click().then(function () {
            element(by.css('.alert-success')).getText().then(function (text) {
                console.log(text);
            })
        });
    })

    it('Handling the Name field error message', function () {

        browser.get('https://rahulshettyacademy.com/angularpractice/');
        browser.driver.manage().window().maximize();

        // element(by.name("name")).clear();
        element(by.name("name")).sendKeys("M");
        browser.driver.findElement(by.xpath("//html")).click();
        element(by.className("alert-danger")).getText().then(function (text_danger) {
            console.log(text_danger);
        })
    })
})