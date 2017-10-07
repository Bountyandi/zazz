import React, { Component } from 'react'
import List from '../containers/List'
import Popup from '../components/popup/popup'
import SearchBox from '../containers/SearchBox'

const MainPage = ({  }) => (
  <div>
    <h3>Main Page</h3>

    <Popup
      buttonName='New Termino'
      componentName='AddNewTermino'
    />


    <SearchBox />

    <List />

  </div>
)

export default MainPage
