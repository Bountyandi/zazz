import React from 'react';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';

import { Menu, Container, Header } from 'semantic-ui-react';

import MainPage from '../MainPage'
import StatisticsPage from '../StatisticsPage'
import AboutPage from '../AboutPage'

 const Router = () => (
  <BrowserRouter>
    <div>

      <Menu color={'blue'} inverted widths={1}>
        <ul className='ui four item menu'>
          <Menu.Item as={Link} to='/'>Main</Menu.Item>
          <Menu.Item as={Link}  to='/statistics'>Statistics</Menu.Item>
          <Menu.Item as={Link}  to='/about'>About</Menu.Item>
        </ul>
      </Menu>

      <Route exact path='/' component={MainPage}/>
      <Route path='/statistics' component={StatisticsPage}/>
      <Route path='/about' component={AboutPage}/>

      <hr/>

    </div>
  </BrowserRouter>
);

export default Router;
