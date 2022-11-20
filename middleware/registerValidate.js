const Validator = require("validator");
const isEmpty = require("is-empty");
const validatePhoneNumber = require('validate-phone-number-node-js');

module.exports = function validateRegisterInput(data,password) {
  let errors = {};
  
// Convert empty fields to an empty string so we can use validator functions
  data.username = !isEmpty(data.username) ? data.username : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  
  password = !isEmpty(password) ? password : "";
//   data.password = !isEmpty(data.password) ? data.password : "";
  data.phone = !isEmpty(data.phone) ? data.phone : '';

// Name checks
  if (Validator.isEmpty(data.username)) {
    errors.name = "Name field is required";
  }

// Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

// Password checks
  if (Validator.isEmpty(password)) {
    errors.password = "Password field is required";
  }
  if (!Validator.isLength(password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }

//phone number check
if (!validatePhoneNumber.validate(data.phone)){
    errors.phone = "Phone number is invalid";
}
return {
    errors,
    isValid: isEmpty(errors)
  };
};