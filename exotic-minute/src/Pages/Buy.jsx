import { Flex } from "@chakra-ui/react";
import styled from "styled-components";
import { useToast } from '@chakra-ui/react';
import { useNavigate, useParams  } from 'react-router-dom';
import axios from "axios";



export const BuyProduct = () => {
    const toast = useToast();
    const navigate = useNavigate();
    const {id} = useParams();
  
    const handleclick = (e) => {
        e.preventDefault();
        axios.delete(`https://ash-medicine-api.onrender.com/cart/${id}`)
        toast({
            title: 'Payment Successfull',
            description: "Redirecting you to the Home page",
            status: 'success',
            duration: 6000,
            isClosable: true,
            onCloseComplete: () => {
                navigate('/');
              },
          })
    }

    return (
    <BUY>
        <div className="inputs">
        <form onSubmit={handleclick}>
        <div className="header">
                <div className="text">Payment</div>
                <div className="underline"></div>
            </div>
        <input type="text" placeholder="Name on Card*" required />
        <input type="number" placeholder="Card Number*" required />
        <input type="text" placeholder="Expiry date*" required />
        <input type="number" placeholder="CVV*" required />
        <button type="submit">Confirm Payment</button>
        </form>
        </div>
    </BUY>
    )
}

const BUY = styled.div`

    flex-direction: column;
    padding: 20px;
    margin: auto;
    border-radius: 3px;
    font-family: sans-serif;
    background-image: url("https://img.freepik.com/free-photo/young-asia-lady-show-credit-bank-card-with-positive-expression-smiles-broadly-dressed-casual-clothing-feeling-happiness-stand-isolated-blue-wall_7861-3543.jpg?w=1060&t=st=1698960910~exp=1698961510~hmac=85a50ad6a1cae487f49ce3bc63b1a2715fa28a4f9db5e7e443022a3c8e6f041e");
    background-position:top;
    background-size: cover;
    height: 95vh;
    padding: 70px;

    .header {
    display:flex;
    flex-direction: column;
    align-items: center;
    gap: 9px;
    width: 100%;
    margin-top: 30px;
    margin-bottom: 10px;
   }
   .text {
    color:#2884da;
    font-size: 40px;
    font-weight: 700;
   }

   .underline {
    width:61px;
    height:6px;
    background:#2884da;
    border-radius:9px;
    
   }

    .inputs {
        display: flex;
     flex-direction: column;
     margin:auto 50px;
     height: 500px;
     /* margin-top:200px; */
     background: #fff;
     padding-bottom: 30px;
     max-width: 400px; 
     width: 100%;
     /* border: 2px solid black; */
     box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
     border-radius: 15px;

   }

   input {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 330px;
    height: 50px;
    background: #d0cfcf;
    border-radius: 6px;
    color: #272626;
    border: none;
    outline: none;
    font-size: 19px;
    padding-left: 10px;
    margin: 15px auto;
   }
    /* button {
        background-color: #2884da;
        color: white;
        font-weight: 500;
        padding: 7px 10px;
        border-radius: 5px;
        margin-top: 7px;
    } */
    button {
    width: 50%;
    /* margin-left: 40px; */
    margin: auto;
    height:59px;
    color: #fff;
    background: #2884da;
    border-radius: 15px;
    font-size: 20px;
    font-weight:600;
    cursor: pointer;
    }
`