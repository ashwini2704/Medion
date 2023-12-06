import React, { useState, useEffect } from "react";
import MedCard from "../components/medicineCart";
import { SimpleGrid, Box, Image,Text,Heading,Grid,Button } from "@chakra-ui/react";
import videoClip from "../video/taking.mp4";
import { Center,Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom/dist";
import axios from "axios";
import styled from "styled-components";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from"react-icons/md"
import { Articles } from "../components/Article";

function Home() {
    const [med, setMed] = useState([]);
    const [currentItem, setCurrentItem] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await fetch("https://ash-medicine-api.onrender.com/medicines?_page=1&_limit=4");
                
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
        axios
        .post("https://ash-medicine-api.onrender.com/cart",medicine)
        .then((res) => {
            console.log(res);
        })
        .catch((err) =>{
            console.log(err)
        })
    };

    const handleLeft = () => {
        // Decrease the currentItem to move left (if not already at the beginning)
        setCurrentItem((prevItem) => (prevItem > 0 ? prevItem - 1 : prevItem));
    };

    const handleRight = () => {
        // Increase the currentItem to move right (if not already at the end)
        setCurrentItem((prevItem) =>
            prevItem < med.length - 1 ? prevItem + 1 : prevItem
        );
    }
    
    return (
      <HOMEWRAPPER>
        <div className="image">
           <img src="https://www.medibuddy.in/assets/images/aboutus/mission.png" alt="" />
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
            <div className="wrapper">
                <Icon className="icon-left icon" onClick={handleLeft} as={MdKeyboardArrowLeft} fontSize={"4xl"} />
                <ul className="carousel">
                    {
                        med.length>0 && med.map((ele) => (
                            <li className="card" key={ele.id}>
                                <MedCard  {...ele} addToCart={() => addToCart(ele)}  />
                            </li>
                        ))
                    }
                </ul>
                <Icon className="icon-right icon" onClick={handleRight} as={MdKeyboardArrowRight} fontSize={"4xl"} />
            </div>
            {/* <SimpleGrid  columns={4} spacing={10} width={"80%"} m={"auto"} >
                {med.map((ele, i) => (
                    <MedCard  key={i} {...ele} addToCart={() => addToCart(ele)} />
                ))}
            </SimpleGrid> */}

      <Articles />

      <hr style={{ width: "60%",height:"3px", margin: "50px auto 0px auto",boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px", borderColor: "lightgray" }} />
            <Box className="presciption"> 
                <Heading as="h3" size="lg">Order Medicines through Prescription</Heading>
                <Box className="Box">
                    <Box className="presc-box">
                        <Text fontSize="lg" fontWeight={600} mb={5}>Upload Prescription to place order</Text> 
                        <Text fontSize="sm" mb={5} style={{ color:"#2C7A7B" }}>( Upload only .jpg .png or .pdf files, size limit is 15 MB )</Text> 
                        <Button colorScheme='blue' mb={5} style={{minWidth:"5px"}}>Order via Prescription</Button><br/>
                        <Link color='teal.500' href='/' style={{ fontWeight:"500", textDecoration:"underline"  }}>How to Order</Link>
                        <Image style={{height:"100px", marginLeft:"auto", marginRight:"auto",width:"50%"}} src="https://www.truemeds.in/_next/static/media/H1wWeb.354c7e71.svg" />                   
                    </Box>
                    <Box className="img-pres">
                        <Image src="https://www.medibuddy.in/assets/icons/medicine/rx.svg"/>
                    </Box>
                </Box>
            </Box>


        </HOMEWRAPPER>
    );
}

export default Home;

const HOMEWRAPPER = styled.div`
font-family: sans-serif;

.image {
    width: 100%;
}
.image img {
    width: 100%;
    height: 100vh;
}

.heading-div {
    position: absolute;
    height: 150px;
    top: 4%;
    right: 5%;
}

.Heading {
    color: #57a3e9;
    font-family: sans-serif;
    font-size: 35px;
    font-weight: 700;
}
.giving {
    position: absolute;
    left: 2%;
    top: 16%;
    color: #57a3e9;
    font-size: 30px;
    font-weight: 700;
}

.presciption {
    width: 50%;
    font-family: sans-serif;
    margin: 10px auto;
    padding: 20px;
    text-align: left;
    
}
.Box {
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;    border-radius: 15px;
    padding: 25px 20px;
    display: flex;
    justify-content: space-between;
    margin: 15px 0px;
}
.img-pres {
    width: 25%;
    margin-right: 0px;
}
.img-pres  Image {
    width: 100%;
    height: 70%;
}

.wrapper {
    max-width: 1200px;
    width: 95%;
    margin: auto;
    display: flex;
    justify-content: space-around;
    position: relative;
}

.wrapper .carousel {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 25px;
    overflow: hidden;
    overflow-x: auto;
}

.carousel .card {
    list-style: none;
    /* background-color: #57a3e9; */
    display: flex;
    padding-bottom: 15px;
    align-items: center;
    justify-content: center;
}

.wrapper .icon {
    height:50px;
    width: 50px;
    background-color: #237bf7;
    text-align: center;
    line-height: 50px;
    border-radius: 50%;
    color:white;
    cursor: pointer;
    position: absolute;
    top: 38%;
    font-size: 1.25rem;
    /* transform: translateY(-50%); */
    box-shadow: 0 3px 6px rgba(0,0,0,0.23);
}

.wrapper .icon:hover {
    background-color: #a5c2eb ;
    color:gray;
}

.wrapper .icon-left {
    left: -50px;
}
.wrapper .icon-right {
    right: -30px;
}

@media screen and (max-width: 900px) {
    .wrapper .carousel {
    display: grid;
    grid-column: 2;
    gap: 25px;
    overflow: hidden;
    overflow-x: auto;
}

    
.wrapper .icon-left {
    left: -50px;
}
.wrapper .icon-right {
    right: -30px;
}
}

@media screen and (max-width: 600px) {
    .wrapper .carousel {
    display: grid;
    grid-column: 2;
    gap: 25px;
    overflow: hidden;
    overflow-x: auto;
}
    
.wrapper .icon-left {
    left: -50px;
}
.wrapper .icon-right {
    right: -30px;
}
}


`
