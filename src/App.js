import React from 'react';
import './App.css';
import Description from './Movie/Description'

import Home from './Home'
// import {Modal} from 'react-bootstrap'
import {Route} from 'react-router-dom'


export default function App() {
  return (
    <div>
            <Route  exact path='/' component={Home}/>
            <Route exact path='/:_id' component={Description}/>


    </div>
  )
}
