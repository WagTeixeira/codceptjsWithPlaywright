const { I } = inject();

module.exports = {

  
  fields: {
    
    userField: '#user',
    passwordField: '#password',
    nameCheckoutField: '#fname',
    lastNameCheckoutField: '#lname',
    companyCheckoutField: '#cname',
    emailCheckoutField: '#email',
    zipCheckoutField: '#zip',
    addressCheckoutField: '#faddress',
    descriptionField: '#messages',

  },

  buttons: {

    loginButton: '#btnLogin',
    checkButton: 'OK',
    shopMenuButton: 'Shop',
    typeShopButton: 'Shop Four Grid',
    addButton: 'Add To Cart',
    iconBagButton: '.fa-shopping-bag',
    cartButton: 'View Cart',
    checkoutPageButton: 'Proceed to Checkout',
    saveAddressButton: '#materialUnchecked',
    finishShopButton: 'Save'

  },

  links: {

    linkTypeProduct: 'T-Shirt For Men'

  },

  options: {

    sizeProduct: '.customs_sel_box',
    colorProduct: '.product-color-green'

  },

  scrolls: {

    scrollProductPage: '.action wishlist',
    scrollBagFirst: '.theme-btn-one btn-black-overlay btn_md',
    scrollBagSecond: '#materialUnchecked'

  },

  messeges: {
    
  },

  submitLoginAccount(email, senha) {

    I.fillField(this.fields.userField, email )
    I.fillField(this.fields.passwordField, senha)
    I.click(this.buttons.loginButton)
    I.click(this.buttons.checkButton)

  },

  chooseProduct(){

     I.click(this.buttons.shopMenuButton)
     I.click(this.buttons.typeShopButton)
     I.click(this.links.linkTypeProduct)
     I.click(this.options.sizeProduct)
     I.checkOption(this.options.colorProduct)
     I.scrollPageToTop(this.scrolls.scrollProductPage)
     I.click(this.buttons.addButton)
     
  },

  checkoutProduct(nome, sobrenome, empresa, emailPagamento, cep, endereco, descricao){
    
     I.click(this.buttons.iconBagButton)
     I.click(this.buttons.cartButton)
     I.scrollPageToTop(this.scrolls.scrollBagSecond)
     I.click(this.buttons.checkoutPageButton)
     I.fillField(this.fields.nameCheckoutField, nome)
     I.fillField(this.fields.lastNameCheckoutField, sobrenome)
     I.fillField(this.fields.companyCheckoutField, empresa)
     I.fillField(this.fields.emailCheckoutField, emailPagamento)
     I.scrollTo(this.scrolls.scrollBagSecond)
     I.fillField(this.fields.zipCheckoutField, cep)
     I.fillField(this.fields.addressCheckoutField, endereco)
     I.fillField(this.fields.descriptionField, descricao )
     I.checkOption(this.buttons.saveAddressButton)
     I.click(this.buttons.finishShopButton)

  }

}
