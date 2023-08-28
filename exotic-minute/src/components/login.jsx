import React, { useState } from 'react';
import { Button, Box, Center, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';

const AuthComponent = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignInClick = () => {
    setShowSignIn(true);
    setShowSignUp(false);
  };

  const handleSignUpClick = () => {
    setShowSignIn(false);
    setShowSignUp(true);
  };

  return (
    <Center height="100vh">
      <Box>
        <Button colorScheme="blue" size="lg" mr={4} onClick={handleSignInClick}>
          Sign In
        </Button>
        <Button colorScheme="green" size="lg" onClick={handleSignUpClick}>
          Sign Up
        </Button>
        {showSignIn && (
          <VStack mt={4} spacing={4}>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Button colorScheme="blue">Sign In</Button>
          </VStack>
        )}
        {showSignUp && (
          <VStack mt={4} spacing={4}>
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Button colorScheme="green">Sign Up</Button>
          </VStack>
        )}
      </Box>
    </Center>
  );
};

export default AuthComponent;

