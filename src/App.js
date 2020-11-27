import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Error from './components/Error/Error';
import TourList from './components/TourList/TourList';
function App() {
  const location = useLocation();
  return (
    <React.Fragment>
      <Navbar />
      <Switch location={location} key={location.pathname}>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/tour-list' component={TourList} />
        <Route path='/' component={Error} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
