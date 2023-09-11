/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type create_user_page = typeof import('./pages/create_user_page.js');
type home_page = typeof import('./pages/home_page.js');
type my_account_page = typeof import('./pages/my_account_page.js');
type login_page = typeof import('./pages/login_page.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, create_user_page: create_user_page, home_page: home_page, my_account_page: my_account_page, login_page: login_page }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
