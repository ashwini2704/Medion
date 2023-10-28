import React, { useState, useEffect } from 'react';
import { Button, Flex, Box, SimpleGrid } from "@chakra-ui/react";
import MedCard from "./medicineCart";

function Department() {
  const [medicines, setMedicines] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('lowToHigh'); // Default sorting order
  const [sortedMedicines, setSortedMedicines] = useState([]); // State for sorted medicines

  useEffect(() => {
    // Fetch data from the API
    fetch('https://ash-medicine-api.onrender.com/medicines')
      .then((response) => response.json())
      .then((data) => {
        setMedicines(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    // When selectedCategory or medicines change, update sortedMedicines
    sortMedicines(sortBy);
  }, [selectedCategory, sortBy, medicines]);

  const filterMedicinesByCategory = (category) => {
    setSelectedCategory(category);
  };

  const sortMedicines = (order) => {
    let sorted = [...medicines]; // Sort from the original list
    if (order === 'lowToHigh') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (order === 'highToLow') {
      sorted.sort((a, b) => b.price - a.price);
    }
    setSortedMedicines(selectedCategory === 'All' ? sorted : sorted.filter((medicine) => medicine.category === selectedCategory));
  };

  const handleSortChange = (order) => {
    setSortBy(order);
  };

  return (
    <>
      <Flex>
        <Button onClick={() => filterMedicinesByCategory('All')} isActive={selectedCategory === 'All'}>
          View All
        </Button>
        {/* Add buttons for other categories if needed */}
        <Button onClick={() => filterMedicinesByCategory('Nuitrition')} isActive={selectedCategory === 'Nuitrition'}>
          Nutrition
        </Button>
        <Button
          onClick={() => filterMedicinesByCategory('Baby Care')}
          isActive={selectedCategory === 'Baby Care'}
        >
          Baby Care
        </Button>
        <Button onClick={() => filterMedicinesByCategory('Personal Care')} isActive={selectedCategory === 'Personal Care'}>
          Personal Care
        </Button>
        <Button onClick={() => filterMedicinesByCategory('Health')} isActive={selectedCategory === 'Health'}>
          Health Service
        </Button>
        <Button onClick={() => filterMedicinesByCategory('Skin Care')} isActive={selectedCategory === 'Skin Care'}>
          Skin Care
        </Button>
        <Button color={"red"} ml={"100px"} onClick={() => handleSortChange('lowToHigh')} isActive={sortBy === 'lowToHigh'}>
          Low to High Price
        </Button>
        <Button color={"red"} onClick={() => handleSortChange('highToLow')} isActive={sortBy === 'highToLow'}>
          High to Low Price
        </Button>
      </Flex>

      <div>
        <SimpleGrid columns={3} spacing={10} width={"80%"} m={"auto"}>
          {sortedMedicines.map((ele, i) => (
            <Box
              key={i}
              padding={"16px"}
              boxShadow={"1px 3px 5px lightBlue"}
              borderRadius={"8px"}
            >
              <MedCard {...ele} />
            </Box>
          ))}
        </SimpleGrid>
      </div>
    </>
  );
}

export { Department };
