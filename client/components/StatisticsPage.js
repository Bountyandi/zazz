import React, { Component } from 'react';
import { Header, Icon } from 'semantic-ui-react';

const StatisticsPage = ({  }) => (
  <div>
   <StatisticsHeader />


  </div>
);

const StatisticsHeader = () => (
  <Header
    as='h2'
    color='black'
    /*subheader='Magic stats of your terminos'*/
  >
    <Header.Content>
      <Icon name='bar chart' />
      Statistics
    </Header.Content>
  </Header>
);

export default StatisticsPage