import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchTerminos, fetchTerminos } from '../actions/asyncActions';
import _ from 'underscore';

import { Input,
  Label,
  Form,
  Responsive,
  Icon, Button
} from 'semantic-ui-react';


class SearchBox extends Component {

  constructor(props) {
    super(props);

    this.scrollPagesCounter = 0;

    this.search = this.search.bind(this);
    this.debouncedSearch = _.debounce( this.debouncedSearch.bind(this), 200 );

    this.removeSearch = this.removeSearch.bind(this);
  }

  search(event){
    event.persist();

    this.debouncedSearch(event);
  }
  debouncedSearch(event){
    let searchValue = event.target.value;
    if (searchValue) {
      this.props.searchTerminos(searchValue);
    }
    else {
      //TODO: fix it
      // now it can't scrolling after remove searchValue
      // if length of searched array was > 20
      this.props.fetchTerminos(0, true);
    }
  }

  removeSearch(){
    if (this.input.inputRef.value) {
      this.input.inputRef.value = '';

      this.props.fetchTerminos();
    }
  }

  render() {
    const { terminos } = this.props;

    return (
      <div>

        <br />

        <Form.Field>

          <Input
            fluid
            labelPosition='right'
            type='text'
            size='huge'
            placeholder='Search...'
            onChange={this.search}
            ref={(input) => { this.input = input; }}
          >
            <Label basic icon='search' />
            <input/>
            <Button
              icon='remove'
              onClick={this.removeSearch}/>

          </Input>
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
