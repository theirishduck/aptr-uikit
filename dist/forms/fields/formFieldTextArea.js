'use strict';

var React = require('react');
var _ = require('lodash');
var ReactDOM = require('react-dom');
var classnames = require('classnames');
var registerType = require('../helpers').registerType;

var FormFieldTextArea = React.createClass({
    displayName: 'FormFieldTextArea',


    propTypes: {
        label: React.PropTypes.string,
        help: React.PropTypes.string,
        value: React.PropTypes.string
    },

    // Lifecycle
    // =========

    componentDidMount: function componentDidMount() {
        var el = ReactDOM.findDOMNode(this.refs.mediumEditor);
        var toolBar = ReactDOM.findDOMNode(this.refs.mediumToolbar);

        el.innerHTML = this.props.value || '';

        this.editor = new MediumEditor(el, {
            anchorInputPlaceholder: 'Type a link',
            targetBlank: true,
            placeholder: false,
            showWhenToolbarIsVisible: true,
            toolbar: {
                relativeContainer: toolBar,
                buttons: [{
                    name: 'bold',
                    contentDefault: '',
                    classList: ['icon', 'icon-bold']
                }, {
                    name: 'italic',
                    contentDefault: '',
                    classList: ['icon', 'icon-italic']
                }, {
                    name: 'underline',
                    contentDefault: '',
                    classList: ['icon', 'icon-underline']
                }, {
                    name: 'subscript',
                    contentDefault: 'x<sub>1</sub>'
                }, {
                    name: 'superscript',
                    contentDefault: 'x<sup>1</sup>'
                }, {
                    name: 'justifyLeft',
                    contentDefault: '',
                    classList: ['icon', 'icon-text-align-left']
                }, {
                    name: 'justifyCenter',
                    contentDefault: '',
                    classList: ['icon', 'icon-text-align-center']
                }, {
                    name: 'justifyRight',
                    contentDefault: '',
                    classList: ['icon', 'icon-text-align-right']
                }, {
                    name: 'justifyFull',
                    contentDefault: '',
                    classList: ['icon', 'icon-text-align-justify']
                }, {
                    name: 'anchor',
                    contentDefault: '',
                    classList: ['icon', 'icon-link']
                }, {
                    name: 'unorderedlist',
                    contentDefault: '',
                    classList: ['icon', 'icon-list']
                }, {
                    name: 'orderedlist',
                    contentDefault: '',
                    classList: ['icon', 'icon-list2']
                }, {
                    name: 'indent',
                    contentDefault: '',
                    classList: ['icon', 'icon-indent-increase']
                }, {
                    name: 'outdent',
                    contentDefault: '',
                    classList: ['icon', 'icon-indent-decrease']
                }, {
                    name: 'removeFormat',
                    contentDefault: '',
                    classList: ['icon', 'icon-text-format-remove']
                }],
                static: true,
                align: 'left',
                updateOnEmptySelection: true
            },
            imageDragging: false,
            anchorPreview: {
                customClassOption: null,
                customClassOptionText: 'Button',
                linkValidation: true,
                placeholderText: 'Paste or type a link',
                targetCheckbox: true,
                targetCheckboxText: 'Open in new window'
            }
        });

        this.editor.subscribe('editableInput', this.onEditorChange);
    },

    shouldComponentUpdate: function shouldComponentUpdate() {
        return false;
    },

    componentWillUnmount: function componentWillUnmount() {
        this.editor.destroy();
    },

    // Instance Methods
    // ================

    onEditorChange: function onEditorChange(event) {
        var el = ReactDOM.findDOMNode(this.refs.mediumEditor);
        var value = el.innerHTML;
        if (value === '<p><br></p>') {
            value = '';
        }
        this.updateField(value);
    },

    updateField: _.debounce(function (value) {
        this.props.updateField(value);
    }, 600, { leading: false }),

    // Render
    // ======

    render: function render() {
        return React.createElement(
            'div',
            { className: 'form-field' },
            React.createElement(
                'div',
                { className: 'form-field-label' },
                this.props.label
            ),
            React.createElement(
                'div',
                { className: 'form-field-help' },
                this.props.help
            ),
            React.createElement('div', {
                className: 'form-field-text-area-toolbar',
                ref: 'mediumToolbar',
                style: {
                    position: 'relative',
                    transform: 'translateY(-32px)'
                } }),
            React.createElement('div', { className: 'form-field-text-area', ref: 'mediumEditor' }),
            React.createElement(
                'div',
                { className: 'form-field-error' },
                this.props.error
            )
        );
    }

});

registerType('TextArea', FormFieldTextArea);

module.exports = FormFieldTextArea;