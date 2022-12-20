import logo from './logo.svg';
import './bootstrap.min.css'
import Nav1 from './components/Nav/Nav1';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import Footer from './components/Footer/Footer'
import Carousel1 from './components/Carousels/Carousel1';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import AboveNav from './components/Nav/AboveNav';
import ProductsScreen from './screens/ProductsScreen';
import DetergentScreen from './screens/DetergentScreen';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Navv from './components/Nav/Navv';

function App() {
  return (
    <div className="App">
     <Router>
       <Nav1/>
       <Routes>
         <Route path = "/" element= {<HomeScreen/>}/>
         <Route path = "/about" element= {<AboutScreen/>}/>
         <Route path = "/products" element= {<ProductsScreen/>}/>
         <Route path = "/contact" element= {<ContactScreen/>}/>
       </Routes>
     </Router>
      
     <Footer/>
    </div>
  );
}

export default App;
