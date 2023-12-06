import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const initialState = {
    name:"",
    price:0,
    discount:0,
    category:"",
    image:""
}
export const Admin = () => {
    const [data, setData] = useState(initialState);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const{value, name,type} = e.target;
        let val = type == "number" ? +value : value;

        setData(prev => {
            return {...prev, [name] : val}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post("https://ash-medicine-api.onrender.com/medicines", data)
        .then((res) => {
            console.log(res);
            console.log("Product Added Successfully..")
        })
        .catch((err) => {
            console.log(err);
        })
    }
    return (
        <ADMIN>
            <form onSubmit={handleSubmit}>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img src="https://www.medibuddy.in/assets/icons/services/medicine.svg" style={{ width: "70px" }} />
                </div>                
                <input type="text" name="name" value={data.name} onChange={handleChange} placeholder="Name" />            
                <input type="number" name="price" value={data.price} onChange={handleChange} placeholder="Price" />            
                <input type="number" name="discount" value={data.discount} onChange={handleChange} placeholder="Discount" />            
                <input type="text" name="category" value={data.category} onChange={handleChange} placeholder="Category" />            
                <input type="text" name="image" value={data.image} onChange={handleChange} placeholder="Image" />            
                <button className="form-button" type="submit">Add Product</button>
            </form>
            <div className="buttons">
               <button onClick={() => navigate("/allusers")}>All Users</button>
               <button onClick={() => navigate("/allprod")}>All Products</button>
            </div>
        </ADMIN>
    )
}

const ADMIN = styled.div`
width: 100%;
height: 600px;
padding-top: 30px;
background-image: url("https://www.medibuddy.in/assets/images/aboutus/overview.png") ;
background-size: cover;
background-position: top;
    form {
        width: 470px;
        height: 500px;
        margin: 50px;
        display: flex;
        flex-direction: column;
        /* border: 1px solid red; */
        border-radius: 10px;
        padding: 30px 20px;
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    }
    input {
        width: 80%;
        border:2px solid lightgray;
        margin: 7px auto;
        padding: 8px;
        border-radius: 10px;
    }
    .form-button {
        width: 30%;
        background-color: #2884da;
        color: white;
        font-weight: 500;
        padding: 7px 10px;
        border-radius: 5px;
        margin: 7px auto;
    }

    .buttons {
        width: 220px;
        position: absolute;
        top:10%;
        right: 10%;
        display: flex;
        gap: 20px;
    }
    .buttons button:first-child {
        width: 40%;
        background-color: #2884da;
        color: white;
        font-weight: 500;
        padding: 7px 10px;
        border-radius: 5px;
        margin: 7px auto;
    }
    .buttons button {
        background-color: #2884da;
        color: white;
        font-weight: 500;
        padding: 7px 10px;
        border-radius: 5px;
        margin: 7px auto;
    }

`