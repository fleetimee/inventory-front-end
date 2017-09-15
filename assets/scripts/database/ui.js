'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const app = require('../store.js')

const drawInventoryTable = function (event) {
  event.preventDefault()
  console.log('first line inside function')
  const data = [{
      "id": 1,
      "product_name": "Apple",
      "sku_number": 123456,
      "department": "Produce",
      "quantity": {
        "number": 5,
        "unit": "bushels"
      },
  },
  {
      "id": 2,
      "product_name": "Pear",
      "sku_number": 123456,
      "department": "Produce",
      "quantity": {
        "number": 5,
        "unit": "bushels"
      },
  },
  {
      "id": 3,
      "product_name": "Orange",
      "sku_number": 123456,
      "department": "Produce",
      "quantity": {
        "number": 5,
        "unit": "bushels"
      },
  }]
  console.log(data)
  $(() => {
    const theTemplateScript = $('#product-inventory-template').html()
    // Compile the template
    const theTemplate = Handlebars.compile(theTemplateScript)
    // Define our data object
    const context = {
      fields: data
    }
    // Pass our data to the template
    const theCompiledHtml = theTemplate(context)
    // Add the compiled html to the page
    $('#table-holder').prepend(theCompiledHtml)
    console.log('last line within function')
  })
}

module.exports = {
  drawInventoryTable
}
