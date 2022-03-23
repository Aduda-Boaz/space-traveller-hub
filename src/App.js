import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/Missions/" element={<Missions />} />
        <Route path="/Profile/" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
