import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'; // Named import
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import { Detail } from './components/Detail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} /> {/* Fixed */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
