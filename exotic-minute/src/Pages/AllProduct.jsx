import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const AllProduct = () => {
    const [prod, setProd] =useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("https://ash-medicine-api.onrender.com/medicines")
        .then((res) => {
            console.log("All Products", res.data);
            setProd(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    },[])

    const editProd = (id) => {
        navigate(`/edit/${id}`)
    }

    return(
        <DIV>
            <div className="grid">
                {
                    prod.length > 0 && prod.map((el,i) => (
                        <ProductCard key={el.id} {...el} editProduct={()=>editProd(el.id)}/> 
                    ))
                }
            </div>
        </DIV>
    )
}

const DIV = styled.div`
    background-color: whitesmoke;
    padding: 50px;
    .grid {
        width: 80%;
        display: grid;
        grid-template-columns: repeat(3,1fr);
        gap: 20px;
        justify-content: space-around;
        background-color: white;
        border-radius: 15px;
        margin: auto;
        padding: 50px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
`