import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import { changeTermino } from '../actions/asyncActions';

class EditTerminoView extends Component {

  constructor(props) {
    super(props)

    this.state = {
      _id: props.termino._id,
      name: props.termino.name || '',
      description: props.termino.description || ''
    }

    //this.handleChangeName = this.handleChangeName.bind(this)
    //this.handleChangeDescription = this.handleChangeDescription.bind(this)
    //this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChangeName = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  
  handleChangeDescription = (event) => {
    this.setState({
      description: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.changeTermino(this.state);
    this.props.hideModal(this.props.modalName);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.name} onChange={this.handleChangeName} />
          <br/>
          <textarea value={this.state.description} onChange={this.handleChangeDescription} />
          <br/>
          <button type='submit'>Save</button>
        </form>
      </div>
    )
  }

}

export default EditTermino = connect(null, { changeTermino })(EditTerminoView);
