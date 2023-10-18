// MedCard.js
import React from 'react';
import { Box, Image, Text, Badge, Button } from '@chakra-ui/react';

function MedCard({ name, image, category, price, addToCart }) {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={image} />

      <Box p="6">
        <Text fontSize="xl" fontWeight="semibold">
          {name}
        </Text>
        <Text mt="1" fontSize="md">
          Price: {price}
        </Text>
        <Text mt="1" fontSize="md">
          Category: {category}
        </Text>
        <Badge mt="2" colorScheme="green">
          Available
        </Badge>
        <br />
        <Button mt="5" onClick={addToCart}>Add to Cart</Button>
      </Box>
    </Box>
  );
}

export default MedCard;
