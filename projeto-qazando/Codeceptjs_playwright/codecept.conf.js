const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './steps/login_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://automationpratice.com.br',
      show: true,
      waitForTimeout: 7000,
      fullPageScreenshots: true

    }
  },
  

  include: {
    I: './steps_file.js',
    create_user_page: "./pages/create_user_page.js",
    home_page: "./pages/home_page.js",
    my_account_page: "./pages/my_account_page.js",
    login_page: "./pages/login_page.js",
    payment_page: "./pages/payment_page.js",
  },
  name: 'Codeceptjs_playwright'
}