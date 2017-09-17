'use strict'

const app = require('../store.js')

const onCreateProductSuccess = function () {
  console.log('You successfully created a product')
}

const onCreateproductError = function () {
  console.error(error)
}

const onUpdateProductSuccess = function () {
  console.log('You edit it good!!!')
}

const onUpdateproductError = function () {
  console.log('Your edit fails')
}

const onGetAllProductsSuccess = function (data) {
  console.log('first line inside function')
  console.log(data.products)
  $(() => {
    const theTemplateScript = $('#product-inventory-template').html()
    // Compile the template
    const theTemplate = Handlebars.compile(theTemplateScript)
    // Define our data object
    const context = {
      fields: data.products
    }
    // Pass our data to the template
    const theCompiledHtml = theTemplate(context)
    // Add the compiled html to the page
    $('#table-holder').prepend(theCompiledHtml)
    console.log('last line within function')
  })
}

const onGetAllProductsError = function (response) {
  console.error(response)
}

const onDeleteProductSuccess = function (data) {
  console.log(data)
}

const onDeleteProductError = function (error) {
  console.error(error)
}

module.exports = {
  onCreateProductSuccess,
  onCreateproductError,
  onUpdateProductSuccess,
  onUpdateproductError,
  onGetAllProductsSuccess,
  onGetAllProductsError
  onDeleteProductSuccess,
  onDeleteProductError
}
