import React, { Component } from 'react';
import PropTypes from 'prop-types';


import { Segment } from 'semantic-ui-react'


export default class List extends Component {
  static propTypes = {
    tags: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    // do search
  }

  render() {
    const { tags } = this.props;

    const listItems = tags.map( (item, i) => {
      return <Segment
        inverted
        color='teal'
        compact
        key={i}>
        <a onClick={this.onClick}>
          {item}
        </a>
      </Segment>}
    );

    return (
      <Segment.Group horizontal>
        {listItems}
      </Segment.Group>

    )
  }
}


