import React from 'react';
import { Box, Image, Text, VStack } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import {MdEdit} from "react-icons/md";
import {MdCheckCircleOutline} from "react-icons/md";
import {MdOutlineLocationOn} from "react-icons/md";
import {MdCall} from "react-icons/md";
import { TopHead } from '../components/TopHead/TopHead';

const ContactComponent = () => {
  return (
    <div style={{backgroundColor:"#d8e6ef", padding:"5px", height:"600px", display:"flex", justifyContent:"center", alignItems:"center",marginBottom:"25px"}} >
     
      <Box>
        <Text textAlign={"left"} fontWeight={700} fontSize={"xxx-large"} color={"blue.500"}>Contact Us</Text>
        <Image src="https://static2.medplusmart.com/live/webpwa/assets/contact-us-img.57f0b4ae0eff12278377.svg" />
      </Box>
      <div style={{borderLeft: "3px solid lightgray",marginLeft:"50px",height:"90%"}}></div>
    <Box p={4} width={"30%"} h={"80%"} m={"auto"} boxShadow= {"rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"} backgroundColor={"white"} pt={"70px"} pb={"70px"} borderWidth="1px" borderRadius="lg">
      <VStack align="flex-start" textAlign={"left"} spacing={2}>
        <Text fontWeight="bold" fontSize="xl" color={"#3cd57c"}>
          Corporate Details
        </Text>
        <Text>
        <Icon as={MdEdit} color={"#9B2C2C"} fontWeight={700} /><strong> Mail us at :</strong> medion12@gmail.com
        </Text>
        <Text>
        <Icon as={MdCall} color={"#9B2C2C"} fontWeight={700} /><strong> Just call :</strong> 040 - 6700 6700
        </Text>
        <Text>
        <Icon as={MdCheckCircleOutline} color={"#9B2C2C"} fontWeight={700} /><strong>CIN :</strong> U24290DL2016PTC302634
        </Text>
        <Text>
        <Icon as={MdOutlineLocationOn} color={"#9B2C2C"} fontWeight={700} /> <strong>Our location:</strong> <br/>
          Registered Address:
          Level 3, Vasant Square Mall, Pocket V, Sector B,
          Vasant Kunj New Delhi South Delhi DL 110070.
          Postal Address:
          Corporate Address:
          5th Floor Tower - B of The Presidency Building,
          46/4 Mehrauli Gurgaon Road, Sector 14,
          Gurugram, Haryana-122001, India
        </Text>
      </VStack>
    </Box>
         
    </div>
  );
};

export default ContactComponent;
