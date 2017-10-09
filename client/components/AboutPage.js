import React, { Component } from 'react';
import { Header, Icon } from 'semantic-ui-react';

const AboutPage = () => (
  <div>
    <AboutHeader />


  </div>
);

const AboutHeader = () => (
  <Header
    as='h2'
    color='black'
    /*subheader='Little bit about ZZAZ'*/
  >
    <Header.Content>
      <Icon name='info' />
      About
    </Header.Content>
  </Header>
);

export default AboutPage