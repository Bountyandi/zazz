import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import { saveTermino } from '../actions/asyncActions';

class AddNewTerminoView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: ''
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
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


  handleSubmit(event){
    event.preventDefault();
    this.props.saveTermino(this.state);
  }


  render() {
    return (
      <div>

        <form onSubmit={this.handleSubmit}>

          <input type='text' value={this.state.name} onChange={this.handleChangeName} />
          <br/>
          <textarea value={this.state.description} onChange={this.handleChangeDescription} />
          <br/>
          <button type='submit'>
            Save
          </button>

        </form>
      </div>
    )
  }

}

const AddNewTermino = connect(null, { saveTermino })(AddNewTerminoView)
export default AddNewTermino
