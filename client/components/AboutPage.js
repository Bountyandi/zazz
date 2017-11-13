import React, { PureComponent } from 'react';
import { Header, Icon } from 'semantic-ui-react';

export default class AboutPage extends PureComponent {
  render() {
    return(
      <div>
        <AboutHeader />


      </div>
    )
  }
}

const AboutHeader = () => (
  <Header
    as='h2'
    color='black'
    /*subheader='Little bit about ZAZZ'*/
  >
    <Header.Content>
      <Icon name='info' />
      About
    </Header.Content>
  </Header>
);

export default AboutPage