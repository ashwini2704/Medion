import React from 'react';
import { Box, Flex, Spacer, Link } from '@chakra-ui/react';

function Navbar() {
  return (
    <Box bg="blue.500" p={4}>
      <Flex align="center" ml={"10%"} >
        <Link fontSize={"25px"} href="/" color="white" mr={10}>
          Home
        </Link>
        <Link fontSize={"25px"} href="/login" color="white" mr={10}>
          Login
        </Link>
        <Link fontSize={"25px"} href="/contact" color="white" mr={10}>
          Contact
        </Link>
        <Link fontSize={"25px"} href="/about" color="white" mr={10}>
          About
        </Link>
        <Link fontSize={"25px"} href="/department" color="white">
          Department
        </Link>
        <Spacer />
      </Flex>
    </Box>
  );
}

export default Navbar;
