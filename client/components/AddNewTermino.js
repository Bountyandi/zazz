import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
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
      tags: ''
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeTags = this.handleChangeTags.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChangeName(event){
    this.setState({
      name: event.target.value
    });
  }
  handleChangeDescription(event){
    this.setState({
      description: event.target.value
    });
  }
  handleChangeTags(event){
    this.setState({
      tags: event.target.value
    });
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.saveTermino(this.state);
  }

  render() {
    return (
      <Container>

        <Form onSubmit={this.handleSubmit}>

          <Form.Field>
            <label>Name</label>
            <Input
              placeholder='First Name'
              value={this.state.name}
              onChange={this.handleChangeName} />
          </Form.Field>

          <Form.Field>
            <label>Description</label>
            <TextArea
              rows={7}
              value={this.state.description}
              onChange={this.handleChangeDescription} />
          </Form.Field>

          <Form.Field>
            <label>Tags</label>
            <Input
              value={this.state.tags}
              onChange={this.handleChangeTags} />
          </Form.Field>


          <Button
            icon={'check'}
            content={'save'}
            floated={'right'}
            color={'green'}
            type='submit' />

        </Form>

      </Container>
    )
  }

}

const AddNewTermino = connect(null, { saveTermino })(AddNewTerminoView)
export default AddNewTermino
