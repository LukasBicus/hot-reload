import React, { useCallback } from 'react';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'

import logo from './logo.svg';
import './App.css';

function Rect ({ background = 'red' }) {
  const dispatch = useDispatch()
  const onClick = useCallback(() => {
    dispatch({
      type: 'INCREMENT'
    })
  }, [dispatch])
  return (
    <div style={{ background }} onClick={onClick}>Click on me</div>
  )
}

function App () {
  console.log('App rendered')
  const counter = useSelector(state => state.counter)
  return (
    <div className="App">
      <header className="App-header">
        <ul style={{
          width: '50%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around'
        }}>
          <li>
            <Link to="/">Red</Link>
          </li>
          <li>
            <Link to="/green">Green</Link>
          </li>
          <li>
            <Link to="/blue">Blue</Link>
          </li>
        </ul>
        <img src={logo} className="App-logo" alt="logo"/>

        <Switch>
          <Route path="/blue">
            <Rect background="blue"/>
          </Route>
          <Route path="/green">
            <Rect background="green"/>
          </Route>
          <Route path="/">
            <Rect background="red"/>
          </Route>
        </Switch>
        <div>Clicked count: {counter}</div>
      </header>
    </div>
  );
}

export default App;
