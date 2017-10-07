import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchTerminos, removeTermino } from '../actions/asyncActions'
import Termino from '../components/Termino'

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

    return (
      <div>
        {terminos.map(item =>
          <Termino
            key={item._id}
            _id={item._id}
            name={item.name}
            description={item.description}
            removeTermino={this.props.removeTermino}
          />
        )}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    terminos: state.terminos
  }
}

export default connect(mapStateToProps, { fetchTerminos, removeTermino })(List)
