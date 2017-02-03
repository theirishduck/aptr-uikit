'use strict';

var registerValidator = require('../helpers').registerValidator;

var required = function required(model, attribute, value) {
    if (value.length) {
        return false;
    } else {
        return "This field is required";
    }
};

registerValidator('required', required);

module.exports = required;