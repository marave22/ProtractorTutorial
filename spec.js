describe('angularjs homepage todo list', function() {
  it('Opens Angular JS website', function() {
    browser.waitForAngularEnabled(false);
    browser.get('https://angularjs.org');

    // browser.get('http://juliemr.github.io/protractor-demo/').then(function() {
    //   console.log("test complete")
    // });
  });
});