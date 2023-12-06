// Cart.js
import React, { useEffect, useState } from 'react';
import { Box, Button,Heading, Flex, Text, VStack } from '@chakra-ui/react';
import axios from 'axios';
import { BuyProduct } from './Buy';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  let sum=0;
  for(let i=0; i<cart.length; i++) {
    sum+=cart[i].price
  }

 useEffect(() => {
  axios.get("https://ash-medicine-api.onrender.com/cart")
  .then((res) => {
    setCart(res.data);
  })
 },[])

 const removeFromCart = (id) => {
  axios.delete(`https://ash-medicine-api.onrender.com/cart/${id}`)
    .then((res) => {
      console.log("Successfully Deleted");
      setCart((prevCart) => prevCart.filter(item => item.id !== id));
    })
    .catch((err) => {
      console.log(err);
    });
}

const buyProduct = (id) => {
  navigate(`/buy/${id}`)
}

  return (
    <CART>
    <Box className='Box' p={4} border="1px" borderColor="gray.200" borderRadius="md">
      <Text fontSize="xl" fontWeight="semibold" mb={3}>
        Shopping Cart
      </Text>
      {cart.length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
        <VStack align="start" spacing={2}>
          {cart.map((item) => (
            <Box
              key={item.id}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              w="100%"
              p={2}
              border="1px"
              borderColor="gray.200"
              borderRadius="md"
            >
              <Text fontWeight={"500"}>{item.name}</Text>
              <Text fontWeight={"500"}>₹{item.price.toFixed(2)}</Text>
              <Flex gap={3}>

              <Button size="sm" onClick={() => buyProduct(item.id)}>
                Buy
              </Button>
              <Button size="sm" onClick={() => removeFromCart(item.id)}>
                Remove
              </Button>
              </Flex>
            </Box>
          ))}
          <Flex className='checkout-button'>
          <Text fontSize={"20px"} fontWeight={"bold"}>Total Amount: ₹{sum.toFixed(2)}</Text>
          <Button className='checkout-btn' colorScheme="blue" onClick={()=> navigate("/buy")}>Checkout</Button>
        </Flex>
        </VStack>
      )}
    </Box>
    </CART>
  );
};

export default Cart;

const CART = styled.div`
   background-image: url("https://img.freepik.com/premium-photo/pharmaceutical-tablets-blister-pack-mini-shopping-cart-blue-background_326533-1449.jpg?size=626&ext=jpg&ga=GA1.1.367971166.1686936671&semt=sph");
background-size: cover;
background-position: top;
  /* background: #e6e6e6; */
  height: 95vh;
  
  width: 100%;
    margin-top: 0px;
    padding: 50px 70px;

    .Box {
      display: flex;
     flex-direction: column;
     position: absolute;
     right: 5%;
     /* margin:auto 50px; */
     height: 600px;
     /* margin-top:200px; */
     background: #fff;
     padding-bottom: 30px;
     max-width: 500px; 
     width: 100%;
     /* border: 2px solid black; */
     box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
     border-radius: 15px;
    }

    .checkout-button {
      position: absolute;
      bottom:5%;
      gap: 50px;
    }
`
