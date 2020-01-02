import React, { Component } from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';

export default class NumberInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: String(props.value),
      numValue: props.value,
    };
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      textValue: String(nextProps.value),
      numValue: nextProps.value,
    })
  }

  cleanNonNumericChars(text) {
    if (!text || typeof text !== 'string') {
      text = String(text);
    }
    // Remove non numeric and non .- chars
    text = text.replace(/[^\d.,-]/g, '');

    // replace "," with "."
    text = text.replace(',', '.');

    // Remove extra periods ('.', only one, at most left allowed in the string)
    let splitText = text.split('.');
    text =
      splitText.shift() +
      (splitText.length
        ? '.' + splitText[0].slice(0, this.props.precision)
        : '');

    // Remove '-' signs if there is more than one, or if it is not most left char
    for (var i = 1; i < text.length; i++) {
      var char = text.substr(i, 1);
      if (char == '-') {
        text = text.substr(0, i) + text.substr(i + 1);
        // decrement value to avoid skipping character
        i--;
      }
    }

    // Remove leading zeros
    text = text.replace(/^(-)?0+(?=\d)/, '$1'); //?=\d is a positive lookahead, which matches any digit 0-9

    return text;
  }

  onChangeText = value => {
    const cleanStr = this.cleanNonNumericChars(value);
    this.setState({
      textValue: cleanStr,
      numValue: parseFloat(cleanStr)
    });
    this.props.onChangeText && this.props.onChangeText(parseFloat(cleanStr));
  };

  render() {
    const { value, ...props } = this.props;
    const { textValue } = this.state;
    return (
      <TextInput
        {...props}
        value={textValue}
        onChangeText={this.onChangeText}
      />
    );
  }
}

NumberInput.propTypes = {
  value: PropTypes.number.isRequired,
  onChangeText: PropTypes.func,
};
