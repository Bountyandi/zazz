import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchTerminos, fetchTerminos } from '../actions/asyncActions';
import _ from 'underscore';

import { Input, Form } from 'semantic-ui-react';

class SearchBox extends Component {

  constructor(props) {
    super(props);

    this.search = this.search.bind(this);
    this.debouncedSearch =
      _.debounce( this.debouncedSearch.bind(this), 200)
  }

  debouncedSearch(event){
    var val = event.target.value;

    if (val) {
      this.props.searchTerminos(val);
    } else {
      this.props.fetchTerminos();
    }
  }

  search(event){
    event.persist();

    this.debouncedSearch(event)
  }

  render() {
    const { terminos } = this.props;

    return (
      <div>
        <br/>
        <Form.Field>
          {/*<label>Search</label>*/}
          <Input
            icon='search'
            placeholder='Search...'
            onChange={this.search} />
        </Form.Field>
        <br/>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    terminos: state.terminos
  }
}

export default connect(mapStateToProps, { searchTerminos, fetchTerminos })(SearchBox)
