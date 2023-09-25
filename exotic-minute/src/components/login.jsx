import React, { useState } from 'react';
import {
  Button,
  Box,
  Center,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';

const AuthComponent = () => {
  const [showSignIn, setShowSignIn] = useState(true);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignInClick = () => {
    setShowSignIn(true);
    setShowSignUp(false);
  };

  const handleSignUpClick = () => {
    setShowSignIn(false);
    setShowSignUp(true);
  };

  const handleSignIn = () => {
    // Implement your sign-in logic here, e.g., validate user credentials
    // If sign-in is successful, store user data in local storage
    const user = { email: 'user@example.com' }; // Replace with actual user data
    localStorage.setItem('userData', JSON.stringify(user));
    // You can also set a flag in state to indicate that the user is signed in
    // Example: setIsLoggedIn(true);
  };

  const handleSignUp = () => {
    // Implement your sign-up logic here, e.g., create a new user account
    // If sign-up is successful, store user data in local storage
    const user = { email: 'user@example.com' }; // Replace with actual user data
    localStorage.setItem('userData', JSON.stringify(user));
    // You can also set a flag in state to indicate that the user is signed in
    // Example: setIsLoggedIn(true);
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
            <form onSubmit={(e) => e.preventDefault()}>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Button colorScheme="blue" onClick={handleSignIn}>
                Sign In
              </Button>
            </form>
          </VStack>
        )}
        {showSignUp && (
          <VStack mt={4} spacing={4}>
            <form onSubmit={(e) => e.preventDefault()}>
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
              <Button colorScheme="green" onClick={handleSignUp}>
                Sign Up
              </Button>
            </form>
          </VStack>
        )}
      </Box>
    </Center>
  );
};

export default AuthComponent;
