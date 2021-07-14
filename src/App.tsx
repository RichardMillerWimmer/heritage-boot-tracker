import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import routes from './route';

import './sass/main.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      {/* <h1>Heritage Boot Tracker</h1> */}
      {routes}
      <Footer />
    </div>
  );
}

export default App;
