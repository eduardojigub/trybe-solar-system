import React from 'react';
import './App.css';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';

class App extends React.Component {
  render() {
    return (
      <section id="container">
        <Header />
        <SolarSystem />
        <Missions />
      </section>
    );
  }
}
export default App;
