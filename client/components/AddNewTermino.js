import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import RichTextBox from './RichTextBox/RichTextBox'

import {
  Modal,
  Container,
  Button,
  Input,
  TextArea,
  Form } from 'semantic-ui-react';

import { saveTermino } from '../actions/asyncActions';

class AddNewTerminoView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      tags: '',
      section: 'JavaScript'
    };
  }

  handleChangeName = (event) => {
    this.setState({
      name: event.target.value
    });
  }
  handleChangeDescription = (event) => {
    this.setState({
      description: event.target.value
    });
  }
  handleChangeTags = (event) => {
    this.setState({
      tags: event.target.value
    });
  }
  handleChangeSection = (event) => {
    this.setState({
      section: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.saveTermino(this.state);
  }

  _onChangeRichTextBox = (htmlText) => {
    this.setState({
      description: htmlText
    });
  };

  render() {

    const Header = <Modal.Header key='Header'>
      Add New Termino
    </Modal.Header>;

    const Content = <Modal.Content key='Content'>
        <Form>
          <Form.Field>
            <label>Name</label>
            <Input
              placeholder='Name'
              value={this.state.name}
              onChange={this.handleChangeName}/>
          </Form.Field>

          <Form.Field>
            <label>Description</label>

            <RichTextBox
              onChange={this._onChangeRichTextBox}
            />



          </Form.Field>

          {/* In future must be dropdown */}
          <Form.Field>
            <label>Section</label>
            <Input
              placeholder='Choose Your Section'
              value={this.state.section}
              onChange={this.handleChangeSection}/>
          </Form.Field>

          <Form.Field>
            <label>Tags</label>
            <Input
              value={this.state.tags}
              onChange={this.handleChangeTags}/>
          </Form.Field>

        </Form>

    </Modal.Content> ;

    const Actions = <Modal.Actions key='Actions'>
        <Button
          compact
          basic
          negative
          floated={'right'}>Esc</Button>

        <Button
          compact
          onClick={this.handleSubmit}
          icon={'checkmark'}
          content={'save'}
          labelPosition='left'
          floated={'right'}
          color={'green'}/>
      </Modal.Actions>;

   return [
      Header,
      Content,
      Actions
    ]
  }

}

const AddNewTermino = connect(null, { saveTermino })(AddNewTerminoView);
export default AddNewTermino
