// MedCard.js
import React from 'react';
import { Box,Flex, Image, Text, Badge, Button } from '@chakra-ui/react';
import styled from 'styled-components';

function ProductCard({ id,name, image,category, discount, price, editProduct }) {
  const mrp = price - ( price * discount ) / 100;
  return (
    <BOX maxW="sm" overflow="hidden" >
      <p className='green-bagde'>{discount}% OFF</p>
      <Image className='image' src={image} h={"50%"} />
      <Box >
        <Badge  className='badge' mb="2" colorScheme="green">
          Available
        </Badge>
        <Text className='name' fontSize="xl" fontWeight="semibold">
          {name}
        </Text>
        <Flex gap={10}>
          <Text fontWeight= "bold" className='best-price' fontSize="lg">
            ₹{mrp.toFixed(2)} 
          </Text>
          <Text className='MRP'>
            MRP ₹<span style={{textDecoration: "line-through"}}>{price}</span>
          </Text>
        </Flex>
          <Text className='discount' fontSize="s">
             ({category})
          </Text>
        <br />
        <Button className='btn' onClick={editProduct}>Edit</Button>
      </Box>
    </BOX>
  );
}

export default ProductCard;

const BOX = styled.div`
  display:flex;
  flex-direction: column;
  border: 1px solid lightgray;
  height: 400px;
  border-radius:10px;
  text-align: left;
  padding: 20px;
  position: relative;
  background-color: white;

  .image {
    margin: auto;
    border-radius:8px;
  }
  .name {
    color: #474646;
  }
  .MRP {
    color: gray;
  }
  .discount {
    color: #2884da;
  }
  .best-price {
    color: #f46a81;
  }
  .green-bagde {
    color:white;
    margin-left:15px;
    position:absolute;
    left: 0px;
    top:5%;
    padding:2px 12px 3px 3px;
    background-color:#2ddd6e; 
    font-weight: bold;
    clip-path: polygon(0% 0%, 98% 1%, 85% 51%, 99% 99%, 0% 99%);
  }
  .btn {
        width: 90%;
        background-color: #2884da;
        color: white;
        font-weight: 500;
        padding: 7px 10px;
        border-radius: 5px;
        margin: 10px auto;
    }
  .btn:hover {
    color: #413e3e;
  }
`
