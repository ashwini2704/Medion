import React from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';

const ContactComponent = () => {
  return (
    <Box p={4} borderWidth="1px" borderRadius="lg">
      <VStack align="flex-start" spacing={2}>
        <Text fontWeight="bold" fontSize="xl">
          Contact Information
        </Text>
        <Text>
          <strong>Email:</strong> medion12@gmail.com
        </Text>
        <Text>
          <strong>Phone:</strong> +91 456-7890
        </Text>
        <Text>
          <strong>Address:</strong> 123 Main Street, Bengaluru,Karnataka
        </Text>
      </VStack>
    </Box>
  );
};

export default ContactComponent;
