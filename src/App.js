import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import { Routes} from 'react-router-dom';
import { Route } from 'react-router-dom';
import NavBar from './components/layout/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';

function App() {
  return (
    
    <Router>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/About' element={<About/>}/>
      </Routes>
      
      <Footer />
    </Router>
    
  );
}

export default App;
/*

<>
    <NavBar/>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> 
    <Image />   
*/