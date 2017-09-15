'use strict'


const userApi = require('./api.js')
const userUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const onCreateAccount = function(event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log("passing through event js")
  console.log(data)
  userApi.create(data)
    .then(userUi.onCreateSuccess)
    .catch(userUi.onError)
}

const onSignIn = function(event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  userApi.signIn(data)
   .then(userUi.onSignInSuccess)
   .catch(userUi.onSignOutError)
}

const onChangePassword = function(event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  userApi.changePassword(data)
    .then(userUi.onChangePasswordSuccess)
    .catch(userUi.onChangePasswordError)
}
module.exports = {
  onCreateAccount,
  onSignIn,
  onChangePassword
}
