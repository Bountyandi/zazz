// from  https://reacttraining.com/react-router/web/example/basic

import React from 'react'
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'

import MainPage from '../components/MainPage'
import StatisticsPage from '../components/StatisticsPage'
import AboutPage from '../components/AboutPage'

const Router = () => (
  <BrowserRouter>
    <div className='ui containers'>

      <ul className='ui four item menu'>
        <li><Link to='/'>Main</Link></li>
        <li><Link to='/statistics'>Statistics</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>

      <Route exact path='/' component={MainPage}/>
      <Route path='/statistics' component={StatisticsPage}/>
      <Route path='/about' component={AboutPage}/>

      <hr/>

    </div>
  </BrowserRouter>
)

export default Router

