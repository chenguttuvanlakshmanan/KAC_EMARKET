import './App.css';
import React from 'react'
import { Route,Switch } from 'react-router-dom';
import ProductTwo from './pages/productTwo';
import ProductOne from './pages/productOne';
import HomePage from '../src/pages/homePage';

function App() {
  return (
    <div className="App">
      <h6 style={{color:'Blue',textAlign:"center"}}>KAC Market Place</h6>    
      <Switch>
              <Route path="/"  exact component={() => <HomePage/>} />
              <Route path="/about" component={() => <ProductTwo/>} />
              <Route path="/contact" component= {() => <ProductOne />} />                               
      </Switch>
    </div>
  );
}

export default App;
