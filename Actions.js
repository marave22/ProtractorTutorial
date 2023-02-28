describe('Actions Demo', function () {
    it('Open the BRB staging3 website', function () {
        browser.get('https://k8s-staging3.synisys.com/brbmis-shell/brb-mis/login');
        browser.driver.manage().window().maximize();
        browser.sleep(2000);
    })
})