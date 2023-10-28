import React from 'react';
import { Box, Flex, Spacer, Link } from '@chakra-ui/react';

function Navbar() {
  return (
    <Box p={4}>
      <Flex align="center" ml={"10%"} >
        <Link color="blue.500" fontSize={"25px"} fontWeight={500} href="/" mr={10} >
          Home
        </Link>
        <Link color="blue.500" fontSize={"25px"} fontWeight={500} href="/login" mr={10}>
          Login
        </Link>
        <Link color="blue.500" fontSize={"25px"} fontWeight={500} href="/contact" mr={10}>
          Contact
        </Link>
        <Link color="blue.500" fontSize={"25px"} fontWeight={500} href="/about" mr={10}>
          About
        </Link>
        <Link color="blue.500" fontSize={"25px"} fontWeight={500} href="/department">
          Department
        </Link>
        <Spacer />
      </Flex>
    </Box>
  );
}

export default Navbar;
