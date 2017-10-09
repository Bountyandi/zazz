import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTerminos, removeTermino } from '../actions/asyncActions';
import Termino from '../components/Termino';

import { Item } from 'semantic-ui-react';

class List extends Component {
  //static propTypes = {
  //  posts: PropTypes.array.isRequired,
  //  actions: PropTypes.object.isRequired
  //}

  componentDidMount(){
    this.props.fetchTerminos();
  }

  render() {
    const { terminos } = this.props;
    const listItems = terminos.map( item =>
      <Termino
        key={item._id}
        _id={item._id}
        name={item.name}
        description={item.description}
        removeTermino={this.props.removeTermino}
      />
    );

    return (
      <Item.Group>
        {listItems}
      </Item.Group>
    )
  }
}

function mapStateToProps(state) {
  return {
    terminos: state.terminos
  }
}

export default connect(mapStateToProps, { fetchTerminos, removeTermino })(List)
