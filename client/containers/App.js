import React, { PureComponent } from 'react';
import Router from '../components/router/Router';


import { Container } from 'semantic-ui-react';

export default class App extends PureComponent {
  render() {
    return (
      <Container>
        <Router/>
      </Container>
    );

  }
};
