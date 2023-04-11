import React, { Component } from 'react'
import './App.css';
import NavBar from './components/NavBar'
import ItemsContainer from './containers/ItemsContainer';
import CartItemsContainer from './containers/CartItemsContainer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Item from './components/Item';

class App extends Component {

  render(){
    return (
      <Router>
      <div className="App">
        <h1>Game Shop</h1>
          <NavBar />
          <Routes>
            <Route path='/products' component={(routerInfo) => <ItemsContainer routerInfo={routerInfo}/>} />
            <Route path='/cart' component={(routerInfo) => <CartItemsContainer routerInfo={routerInfo}/>} />
            <Route path={Item.id + '/cart'}  component={(routerInfo) => <CartItemsContainer routerInfo={routerInfo}/>} />
            </Routes>
      </div>
      </Router>
    );
  }
}

export default(App);