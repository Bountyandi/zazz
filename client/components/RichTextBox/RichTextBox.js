import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RichTextEditor from 'react-rte';
import { config } from './config'

export default class RichTextBox extends Component {
  static propTypes = {
    onChange: PropTypes.func
  };

  state = {
    value: RichTextEditor.createEmptyValue()
  };

  onChange = (value) => {
    this.setState({value});
    if (this.props.onChange) {
      this.props.onChange(
        value.toString('html')
      );
    }
  };

  render () {


    return (
      <RichTextEditor
        toolbarConfig={config}
        value={this.state.value}
        onChange={this.onChange}
      />
    );
  }
}