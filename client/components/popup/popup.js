import React, { Component } from 'react'
import Boron from 'boron'
import AddNewTermino from '../AddNewTermino'
import EditTermino from '../EditTermino'
import { Button } from 'semantic-ui-react';

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
    const modalName = 'ScaleModal';
    const Modal = Boron[modalName];
    const {
      buttonName,
      buttonColor,
      componentName,
      termino,
      floated,
      icon
    } = this.props;
    let form = 'AddNewTermino';

    switch (componentName) {
      case 'AddNewTermino':
        form = <AddNewTermino/>;
        break;
      case 'EditTermino':
        form =
          <EditTermino
            termino={termino}
            hideModal={this.hideModal}
            modalName={modalName}
          />;
        break;
    }

    return (
      <div>

        <Button compact
          icon={icon}
          content={buttonName}
          floated={floated}
          color={buttonColor}
          onClick={this.showModal(modalName)}
        />


        <Modal ref={modalName}>
          {form}
        </Modal>

      </div>
    )
  }

}

