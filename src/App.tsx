import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <h1>Heritage Boot Tracker</h1>
      <Footer />
    </div>
  );
}

export default App;
