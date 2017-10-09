import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Popup from './popup/popup'

import { Item, Button } from 'semantic-ui-react'


export default class Termino extends Component {

  static propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    removeTermino: PropTypes.func.isRequired,
  };

  handleDoubleClick = (ev) => {
    //this.setState({editing: true})
  };

  render() {

    const { _id, name, description, removeTermino } = this.props;
    const termino = { _id, name, description };

    return (
      <Item onDoubleClick={this.handleDoubleClick}>

        <Item.Content>
          <Item.Header as='p'>{name}</Item.Header>
          <Item.Description>
            <p>{description}</p>
          </Item.Description>
          
          {/*TODO: Make 2 icons EDIT and DELETE*/}

          <Popup
            class='edit'
            buttonName='Edit'
            componentName='EditTermino'
            termino={termino}
          />

         <Button
            content='Delete'
            onClick={() => removeTermino({ _id })}
          />

        </Item.Content>

      </Item>
    )
  }
}
