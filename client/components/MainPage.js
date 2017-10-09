import React, { Component } from 'react';
import List from '../containers/List';
import Popup from '../components/popup/popup';
import SearchBox from '../containers/SearchBox';
import { Header, Icon } from 'semantic-ui-react';


const MainPage = () => (
  <div>
    <MainHeader />
    <Popup
      componentName='AddNewTermino'
      buttonName='New Termino'
    />

    <SearchBox />

    <List />

  </div>
);

const MainHeader = () => (
  <Header
    as='h2'
    color='black'
    /*subheader='Here U can work on your terminos'*/
  >
      <Header.Content>
          <Icon name='home' />
          Main Page
      </Header.Content>
  </Header>
);

export default MainPage
