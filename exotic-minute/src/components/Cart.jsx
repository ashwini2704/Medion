// Cart.js
import React from 'react';
import { Box, Button, Text, VStack } from '@chakra-ui/react';

const Cart = ({ cart, removeFromCart }) => {
  return (
    <Box p={4} border="1px" borderColor="gray.200" borderRadius="md">
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
              <Text>{item.name}</Text>
              <Text>${item.price.toFixed(2)}</Text>
              <Button size="sm" onClick={() => removeFromCart(item.id)}>
                Remove
              </Button>
            </Box>
          ))}
          <Button colorScheme="blue">Checkout</Button>
        </VStack>
      )}
    </Box>
  );
};

export default Cart;
