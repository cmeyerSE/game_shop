import React, { Component } from 'react'
import './App.css';
import NavBar from './components/NavBar'
import { connect } from 'react-redux';
import ItemsContainer from './containers/ItemsContainer';
import CartItems from './containers/CartItems';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends Component {

  state= {
    carted: []
  }

  render(){
    return (
      <Router>
      <div className="App">
        <h1>Game Shop</h1>
          <NavBar />
          <Routes>
            <Route path='/products' component={(routerInfo) => <ItemsContainer routerInfo={routerInfo}/>} />
          </Routes>
          <Routes>
            <Route path='/cart' component={(routerInfo) => <CartItems routerInfo={routerInfo}/>} />
          </Routes>
      </div>
      </Router>
    );
  }
}

const MSTP = (state) => {
  return { carted: state.items }
}

export default connect(MSTP)(App);
