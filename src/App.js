import {Switch,Route,Link} from 'react-router-dom'
import Main from './components/Main';
import Basket from './components/Basket';
import data from './data';
import { useState } from 'react';
import TopBar from './components/TopBar/TopBar'
import CheckOut from './components/CheckOut/CheckOut';
import Home from './components/Home/Home';
function App() {
  
  return (
    <div className="App">
       <Route exact path="/" component={Home}/>
      <Route exact path="/checkOut" 
      
      />
    
    </div>
  );
}

export default App;
