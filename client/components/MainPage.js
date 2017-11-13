import React, { Component } from 'react';
import List from '../containers/List';
import Popup from './popup/popup';
import SearchBox from '../containers/SearchBox';
import AddNewTermino from './AddNewTermino';

import { Header, Icon } from 'semantic-ui-react';

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <MainHeader />

        <hr />
        <br />

        <Popup
          modalView={ <AddNewTermino /> }
          buttonName={ 'Add New Termino' }
        />

        <br />
        <br />

        <SearchBox />

        <List />

      </div>

    )
  }
}

const MainHeader = () => (
  <Header
    as='h2'
    color='black'
    /*subheader='Here U can work on your terminos'*/
  >
    <Header.Content>
      <Icon name='home' />
      Main
    </Header.Content>
  </Header>
);

export default MainPage
