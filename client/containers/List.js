import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTerminos, removeTermino } from '../actions/asyncActions';
import Termino from '../components/Termino';
import InfiniteScroll from 'react-infinite-scroller';

import { Item } from 'semantic-ui-react';

let style = {
  /* We need to limit the height and show a scrollbar */
  width: '100%',
  height: window.outerHeight, //'500px',
  overflow: 'auto',


  border: '1px solid black',
}


class List extends Component {
  //static propTypes = {
  //  posts: PropTypes.array.isRequired,
  //  actions: PropTypes.object.isRequired
  //}



  constructor(props) {
    super(props);

    this.scrollPagesCounter = 0;
    //this.onUICount = 0;

    this.loadMore = this.loadMore.bind(this);
  }


  loadMore(ev) {

    this.props.fetchTerminos(++this.scrollPagesCounter);
    //let el = ev.target;
    //debugger
    //if (el.scrollTop + el.clientHeight >= el.scrollHeight) {
    //  console.log(1)
    //  this.props.fetchTerminos(++this.scrollPagesCounter);
    //}

  }

  componentDidMount() {
    this.props.fetchTerminos(this.scrollPagesCounter);
  }

  render() {
    const { terminos, totalCount } = this.props;
    //this.onUICount += terminos.length;
    //console.log(this.onUICount)

    const listItems = terminos.map( item =>
      <Termino
        key={item._id}
        _id={item._id}
        name={item.name}
        description={item.description}
        removeTermino={this.props.removeTermino}
      />
    );

    debugger

    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={this.loadMore}
        hasMore={totalCount > terminos.length}
        loader={<div className='loader'>Loading ...</div>}
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
