var Forms = {};

Forms.Form = require('./components/form.jsx');
Forms.FormField = require('./components/formField.jsx');
Forms.FormSortable = require('./components/formSortable.jsx');

// Fields
require('./fields/formFieldArray.jsx');
require('./fields/formFieldBoolean.jsx');
require('./fields/formFieldBorder.jsx');
require('./fields/formFieldButton.jsx');
require('./fields/formFieldColorPicker.jsx');
require('./fields/formFieldCssValue.jsx');
require('./fields/formFieldNumber.jsx');
require('./fields/formFieldObject.jsx');
require('./fields/formFieldPassword.jsx');
require('./fields/formFieldPicker.jsx');
require('./fields/formFieldSelect.jsx');
require('./fields/formFieldSpacing.jsx');
require('./fields/formFieldText.jsx');
require('./fields/formFieldTextArea.jsx');
require('./fields/formFieldTextAreaPlain.jsx');
require('./fields/formFieldTextAlign.jsx');

// Validators
require('./validators/required');

module.exports = Forms;