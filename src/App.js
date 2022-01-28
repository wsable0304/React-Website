import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/service';
import Contact from './pages/Contact';

import {BrowserRouter as Router, Route, Routes ,Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" exact element = {<Home/>}/>
        <Route path="/About" exact element = {<About/>}/>
        <Route path="/service" exact element = {<Service/>}/>
        <Route path="/Contact" exact element = {<Contact/>}/>
        
        
      </Routes>
     
      <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
