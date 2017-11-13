import React, { Component } from 'react';
import PropTypes from 'prop-types';


import { Label, Segment } from 'semantic-ui-react'


export default class List extends Component {
  static propTypes = {
    tags: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  _onClick = () => {
    // do search
  }

  render() {
    const { tags, section } = this.props;

    const listItems = tags.map( (item, i) => {
      return <Label key={i}>
        <a onClick={this.onClick}>
          {item}
        </a>
      </Label>}
    );


    return (
      <div>
        <Label as='a' color='olive' tag>{section}</Label>
        {listItems}
      </div>
    )
  }
}


