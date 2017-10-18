import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTerminos, removeTermino } from '../actions/asyncActions';
import Termino from '../components/Termino';
import InfiniteScroll from 'react-infinite-scroller';

import { Item, Loader } from 'semantic-ui-react';


class List extends Component {
  //static propTypes = {
  //  posts: PropTypes.array.isRequired,
  //  actions: PropTypes.object.isRequired
  //}



  constructor(props) {
    super(props);

    this.scrollPagesCounter = 0;

    this.loadMore = this.loadMore.bind(this);
  }


  loadMore(ev) {
    this.props.fetchTerminos(++this.scrollPagesCounter);
  }

  componentDidMount() {
    //need to rewrite it
    if (!this.props.terminos.length) {
      this.props.fetchTerminos(this.scrollPagesCounter);
    }
  }

  render() {
    const { terminos, totalCount } = this.props;

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
      <InfiniteScroll
        pageStart={0}
        loadMore={this.loadMore}
        hasMore={totalCount > terminos.length}
        loader={<Loader active inline='centered'> Loading </Loader>}
      >
        <Item.Group>
          {listItems}
        </Item.Group>
      </InfiniteScroll>
    )
  }
}

function mapStateToProps(state) {
  return {
    terminos: state.terminos,
    totalCount: state.totalCount
  }
}

export default connect(mapStateToProps, { fetchTerminos, removeTermino })(List)
