import logo from './logo.svg';
import './App.css';
import { useState } from "react"
import { TopHead } from './components/TopHead/TopHead';
import { Footer } from './components/Footer/footer';
import { AllRoutes } from './Pages/Allroutes';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const handleRemoveItem=()=>{
    
  }

  return (
    <div className="App">
       <TopHead/>
      <AllRoutes /> 
      {/* <Cart /> */}
      <Footer />
      {/* <Admin /> */}
    </div>
  );
}



export default App;
