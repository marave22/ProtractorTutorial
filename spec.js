describe('angularjs homepage todo list', function() {
  it('Opens Angular JS website', function() {
    browser.get('https://angularjs.org');

    browser.get('http://juliemr.github.io/protractor-demo/');

    browser.sleep(5000);

    console.log("test complete");

  });
});