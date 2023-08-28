import logo from './logo.svg';
import './App.css';
import { useState } from "react"
import { TopHead } from './components/TopHead/TopHead';
import { Footer } from './components/Footer/footer';
import { About } from './components/About';
import Cart from './components/Cart'; 

import { Department } from './components/Department';
import { AllRoutes } from './components/Allroutes';
import Navbar from './components/Navbar';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const handleRemoveItem=()=>{
    
  }

  return (
    <div className="App">
      <TopHead/>
      <Navbar/>
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
