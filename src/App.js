import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import TourList from './components/TourList';
import { Switch, Route } from 'react-router-dom';
import About from './components/About/About';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path="/" exact>
      <TourList />
      </Route>
        <Route path="/about" exact>
      <About />
      </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
