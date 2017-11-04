import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
const modalSize = 'large';

class Popup extends Component {

  constructor(props) {
    super(props);
    this.state = { open: false }
  }

  /*
    show(){
      return this.setState({ open: true })
    }

    close(){
      return this.setState({ open: false });
    }
  */

  show = size => () => this.setState({ size, open: true });
  close = () => this.setState({ open: false });

  render() {
    const { open, size } = this.state;
    const { modalView, buttonName } = this.props;


    return (
      <div>
        <Button onClick={this.show()} color={'green'}>{buttonName}</Button>

        <Modal size={modalSize} open={open} onClose={this.close}>
          {/*<AddNewTermino />*/}
          {modalView}
        </Modal>
      </div>
    )
  }
}

export default Popup
