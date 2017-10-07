import React, { Component } from 'react'
import Boron from 'boron'
import AddNewTermino from '../AddNewTermino'
import EditTermino from '../EditTermino'

const styles = {
  btn: {
    //margin: '1em auto',
    //padding: '1em 2em',
    //outline: 'none',
    //fontSize: 16,
    //fontWeight: '600',
    //background: '#C94E50',
    //color: '#FFFFFF',
    //border: 'none'
  },
  container: {
    //padding: '2em',
    //textAlign: 'center'
  },
  title: {
    //margin: 0,
    //color: '#C94E50',
    //fontWeight: 400
  }
}

export default class Popup extends Component {

  constructor(){
    super()

    this.showModal = this.showModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
  }

  showModal(ref) {
    return () => this.refs[ref].show()
  }

  hideModal(ref) {
    this.refs[ref].hide();
  }

  render() {
    const modalName = 'ScaleModal'
    const Modal = Boron[modalName]
    const {buttonName, componentName, termino} = this.props
    var form = 'AddNewTermino'

    switch (componentName) {
      case 'AddNewTermino':
        form = <AddNewTermino/>
        break;
      case 'EditTermino':
        form =
          <EditTermino
            termino={termino}
            hideModal={this.hideModal}
            modalName={modalName}
          />
        break;
    }

    return (
      <div style={styles.container}>

        <button
          style={styles.btn}
          onClick={this.showModal(modalName)}
        >
          {this.props.buttonName}
        </button>

        <Modal ref={modalName}>
          {form}
        </Modal>

      </div>
    )
  }

}

