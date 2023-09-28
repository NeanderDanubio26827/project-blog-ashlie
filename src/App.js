import React from "react";
//import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import NavBar from "./components/layout/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Footer from "./components/layout/Footer";
import Container from "./components/layout/Container";
import CardsAsh from "./components/pages/Cards";
import Posts from "./components/pages/Posts";
import PostForm from "./components/pages/PostForm";
import Cards from "./components/pages/Cards";
import SendPost from "./components/pages/SendPost";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Cards" element={<Cards />} />
        <Route path="/Posts" element={<Posts />} />
        <Route path="/PostForm" element={<PostForm />} />
        <Route path="/Send" element={<SendPost />} />
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
