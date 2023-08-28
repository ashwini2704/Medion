import React, { useState, useEffect } from "react";
import MedCard from "./medicineCart";
import { SimpleGrid, Box } from "@chakra-ui/react";

function Home() {
    const [med, setMed] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await fetch("https://ash-medicine-api.onrender.com/medicines?_page=1&_limit=20");
                
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
            <SimpleGrid columns={3} spacing={10}>
                {med.map((ele, i) => (
                    <Box key={i}> 
                        <MedCard {...ele} />
                    </Box>
                ))}
            </SimpleGrid>
        </>
    );
}

export default Home;
