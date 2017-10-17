import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Popup from './popup/popup'

import { Item, Button } from 'semantic-ui-react'


export default class Termino extends Component {

  static propTypes = {
    _id: PropTypes.string.isRequired,
    //name: PropTypes.string.isRequired,
    //description: PropTypes.string.isRequired,
    removeTermino: PropTypes.func.isRequired,
  };

  constructor(props){
    super(props);
    this.removeTermino = this.removeTermino.bind(this);
  }

  removeTermino () {
    this.props.removeTermino({ _id: this.props._id });
  }


  handleDoubleClick = (ev) => {
    //this.setState({editing: true})
  };

  render() {

    const { _id, name, description } = this.props;
    const termino = { _id, name, description };

    return (
      <Item onDoubleClick={this.handleDoubleClick}>

        <Item.Content>
          <Item.Header as='p'>{name}</Item.Header>
          <Item.Description>
            <p>{description}</p>
          </Item.Description>

          {/*TODO: Make 2 icons EDIT and DELETE*/}
          <Button compact
            icon={'close'}
            content={'Delete'}
            floated={'right'}
            color={'red'}
            onClick={this.removeTermino}
          />

          <Popup
            icon={'edit'}
            buttonName={'Edit'}
            floated={'right'}
            buttonColor={'green'}
            componentName={'EditTermino'}
            termino={termino}
          />

        </Item.Content>

      </Item>
    )
  }
}
