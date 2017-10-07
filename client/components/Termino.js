import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Popup from './popup/popup'


export default class Termino extends Component {

/*
  {
    propTypes: {
    myObject: React.PropTypes.shape({
      text: React.PropTypes.string,
      numbers: React.PropTypes.arrayOf(React.PropTypes.number),
    })
  }
  */

  static propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    changeTermino: PropTypes.func.isRequired,
    removeTermino: PropTypes.func.isRequired,
  }

  handleDoubleClick = () => {
    //this.setState({editing: true})
  }

  render() {

    const { _id, name, description, changeTermino, removeTermino } = this.props
    const termino = { _id, name, description }

    return (
      <div onDoubleClick={this.handleDoubleClick}>
        <p><strong>{name}</strong> - {description}</p>


        <Popup
          buttonName='Edit'
          componentName='EditTermino'
          termino ={termino}
        />


        {/*<button onClick={() => changeTermino({ _id })}>Edit</button>*/}
        <button onClick={() => removeTermino({ _id })}>Delete</button>
      </div>
    )
  }
}
