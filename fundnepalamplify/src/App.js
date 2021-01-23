import React from 'react';
import './App.css';
import "./statics/style.css"
import Menu from './components/Menu'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
      </header>

      <Footer />
    </div>
  );

}

export default App;
