import logo from './logo.svg';
import './App.css';
import Navbar from './components/Nabar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Products from './components/Products';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App position-relative">
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/products" element={<Products/>}></Route>        
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
