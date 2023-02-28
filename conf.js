exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['frames.js'],
  multiCapabilities: [
      // {
      //   'browserName': 'firefox',
      // },
    {
      'browserName': 'chrome'
    }
]
};