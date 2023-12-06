import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "./Login.jsx";
import Cart from "./Cart";
import ContactComponent from "./Contact";
import { Department } from "./Department";
import { About } from "./About";
import Home from "./Home.jsx";
import { BuyProduct } from "./Buy";
import { Admin } from "./Admin";
import { Users } from "../components/Users.jsx";
import { EditProduct } from "./EditProd.jsx";
import { AllProduct } from "./AllProduct.jsx";

function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/department" element={<Department />} />
            <Route path="/contact" element={<ContactComponent />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/allusers" element={<Users />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/edit/:id" element={<EditProduct />} />
            <Route path="/buy" element={<BuyProduct />} />
            <Route path="/login" element={<Login />} />
            <Route path="/allprod" element={<AllProduct />} />
        </Routes>
    );
}

export { AllRoutes };
