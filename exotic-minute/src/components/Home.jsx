import React, { useState, useEffect } from "react";
import MedCard from "./medicineCart";
import { SimpleGrid, Box } from "@chakra-ui/react";
import { TopHead } from "./TopHead/TopHead";
import Navbar from "./Navbar";
function Home() {
    const [med, setMed] = useState([]);

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
    
    
    return (
      <>
            <div class="home">
                <video autoplay muted loop>
                <source src="../video/taking.mp4" type="video/mp4" />
                </video>
            </div>

            <SimpleGrid columns={3} spacing={10} width={"80%"} m={"auto"}>
                {med.map((ele, i) => (
                    <Box key={i} padding= {"16px"}
                    boxShadow= {"1px 3px 5px lightBlue"}
                    borderRadius= {"8px"}> 
                        <MedCard {...ele} />
                    </Box>
                ))}
            </SimpleGrid>
        </>
    );
}

export default Home;
