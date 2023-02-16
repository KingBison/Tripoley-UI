import './Styles/App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from 'react';
import Main from "./Components/Main"
import Admin from './Components/Admin';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main/>}/>
        <Route exact path="/admin" element={<Admin/>}/>
      </Routes>
    </Router>
  );
}

export default App;
