import { Routes, Route } from "react-router-dom"

import AuthComponent from "./login";
import Cart from "./Cart";
import ContactComponent from "./Contact";
import { Department } from "./Department";
import { About } from "./About";
import Home from "./Home.jsx"

function AllRoutes() {
    <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/about" element={ <About/> }/>
        <Route path="/department" element={ <Department/> }/>
        <Route path="/contact" element={ <ContactComponent/> }/>
        <Route path="/cart" element={ <Cart/> }/>
        <Route path="/login" element={ <AuthComponent/> }/>
    </Routes>
}
export {AllRoutes}