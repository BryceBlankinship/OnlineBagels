import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './navbar.jsx';
import Hero from './hero.jsx';
import Services from './services.jsx';
import './index.css';
import './navbar.css';



export default class App extends Component {
  render(){
    return(
      <div className='main-container'>
        <Navbar/>
        <Hero/>
        <Services/>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

