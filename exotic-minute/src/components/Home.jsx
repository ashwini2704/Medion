import React, { useState, useEffect } from "react";
import MedCard from "./medicineCart";
import { SimpleGrid, Box, Flex, Image,Text,Heading,Grid,Button } from "@chakra-ui/react";
import videoClip from "../video/taking.mp4";
import { Center } from "@chakra-ui/react";
import { Link } from "react-router-dom/dist";

function Home() {
    const [med, setMed] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await fetch("https://ash-medicine-api.onrender.com/medicines?_page=1&_limit=21");
                
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                
                let data = await res.json();
                setMed(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    const addToCart = (medicine) => {
        setCart([...cart, medicine]);
      };
    
    return (
      <>
            <div class="home">
                <video autoPlay muted loop style={{ width:"100%", height: "100vh" }}>
                <source src={videoClip} type="video/mp4" />
                </video>
            </div>
            <Grid templateColumns='repeat(3, 1fr)' gap={10} width="75%"  m="auto" mt={"100px"} mb={"100px"}>
                <Box boxShadow='outline' p='6' rounded='md' width="65%" display="flex" justifyContent="center" alignItems="center">
                    <Center flexDirection="column">
                        <Image src="https://www.medibuddy.in/assets/icons/services/genuine-meds.svg"/>
                        <Heading as='h5' size='sm'> Genuine Meds</Heading>
                        <Text fontSize='sm'>Be assured that you will always receive genuine brands and medicines from authorized distribution partners.</Text>
                    </Center>
                </Box>
                <Box boxShadow='outline' p='6' rounded='md'  width="65%" display="flex" justifyContent="center" alignItems="center">
                    <Center flexDirection="column">
                        <Image src="https://www.medibuddy.in/assets/icons/services/delivery.svg" />
                        <Heading as='h5' size='sm'> Door Delivery</Heading>
                        <Text fontSize='sm'>Get your prescription medicines conveniently delivered right at your doorstep.</Text>
                    </Center>
                </Box>
                <Box boxShadow='outline' p='6' rounded='md' width="65%" display="flex" justifyContent="center" alignItems="center">
                    <Center flexDirection="column">
                        <Image src="https://www.medibuddy.in/assets/icons/services/cashless.svg" />
                        <Heading as='h5' size='sm'> Cashless</Heading>
                        <Text fontSize='sm'>All medicine orders can be made cashless based on your domiciliary cover and as per the terms and conditions set out in your policy.</Text>
                    </Center>
                </Box>
            </Grid>
            <Heading color="blue.500" mb={5} boxShadow={"1px 3px 5px lightBlue"} >Medicines</Heading>
            <SimpleGrid columns={3} spacing={10} width={"80%"} m={"auto"}>
        {med.map((ele, i) => (
          <Box key={i} padding={"16px"} boxShadow={"1px 3px 5px lightBlue"} borderRadius={"8px"}>
            <MedCard {...ele} addToCart={() => addToCart(ele)} />
          </Box>
        ))}
      </SimpleGrid>

            <Box mt={20}>
                <Heading as="h3" size="lg">Order Medicines through Prescription</Heading>
                <Box>
                    <Flex flexDirection="column">
                        <Text fontSize="md">Upload Prescription to place order</Text> 
                        <Text fontSize="sm">Upload only .jpg .png or .pdf files, size limit is 15 MB</Text> 
                        <Button colorScheme='blue'>Order via Prescription</Button>
                        <Link color='teal.500' href='/'>How to Order</Link>
                    </Flex>
                </Box>
            </Box>

        </>
    );
}

export default Home;
