import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './navbar.jsx';
import Hero from './hero.jsx';
import Services from './services.jsx';
import AuthHandler from './auth.jsx';
import Reviews from './reviews.jsx';
import './index.css';
import './navbar.css';



export default class App extends Component {
  render() {
    return (
      <div className='main-container'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={[<Navbar />, <Hero />, <Services />]} />
            <Route path='/services' element={[<Navbar />, <Services />]} />
            <Route path='/reviews' element={[<Navbar />, <Reviews />]}/>
            <Route path='/auth' element={[<Navbar />, <AuthHandler />]} />
          </Routes>
        </BrowserRouter>

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

