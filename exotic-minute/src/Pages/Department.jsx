import React, { useState, useEffect } from 'react';
import { Button, Flex, Box, SimpleGrid } from "@chakra-ui/react";
import MedCard from "../components/medicineCart";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { MdKeyboardArrowDown } from "react-icons/md";
import styled from 'styled-components';

function Department() {
  const [medicines, setMedicines] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState(''); 
  const [sortedMedicines, setSortedMedicines] = useState([]); 


 

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
    <DEPARTMENT>
    <Flex display={'flex'} width={'80%'} m={'auto'} gap={10}>
    <Menu>
      <MenuButton className="menu-button" as={Button} rightIcon={<MdKeyboardArrowDown />}>
        Filter By Category
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => filterMedicinesByCategory('All')} isActive={selectedCategory === 'All'}>
          View All
        </MenuItem>
        {/* Add MenuItems for other categories if needed */}
        <MenuItem onClick={() => filterMedicinesByCategory('Nuitrition')} isActive={selectedCategory === 'Nuitrition'}>
          Nutrition
        </MenuItem>
        <MenuItem
          onClick={() => filterMedicinesByCategory('Baby Care')}
          isActive={selectedCategory === 'Baby Care'}
        >
          Baby Care
        </MenuItem>
        <MenuItem onClick={() => filterMedicinesByCategory('Personal Care')} isActive={selectedCategory === 'Personal Care'}>
          Personal Care
        </MenuItem>
        <MenuItem onClick={() => filterMedicinesByCategory('Health')} isActive={selectedCategory === 'Health'}>
          Health Service
        </MenuItem>
        <MenuItem onClick={() => filterMedicinesByCategory('Skin Care')} isActive={selectedCategory === 'Skin Care'}>
          Skin Care
        </MenuItem>
      </MenuList>
    </Menu>

    <Menu >
      <MenuButton className="menu-button" as={Button} rightIcon={<MdKeyboardArrowDown />}>
        Sort By Price
      </MenuButton>
        <MenuList>
            <MenuItem onClick={() => handleSortChange('lowToHigh')} isActive={sortBy === 'lowToHigh'}>
              Low to High Price
            </MenuItem>
             <MenuItem onClick={() => handleSortChange('highToLow')} isActive={sortBy === 'highToLow'}>
              High to Low Price
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>

      <div className='medicine'>
        <SimpleGrid columns={3} spacing={8} width={"90%"} m={"auto"} mt={10}>
          {sortedMedicines.map((ele, i) => (
              <MedCard key={i} {...ele} />
          ))}
        </SimpleGrid>
      </div>
    </DEPARTMENT>
  );
}

export { Department };

const DEPARTMENT = styled.div`
  background-color: #e6e4e4;
  padding-top: 20px;

  .medicine {
    background-color: #fffdfd;
    width: 80%;
    margin: 15px auto;
    padding: 10px 25px;
    border-radius: 25px;
  }

  .menu-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 170px;
    margin-left: 40px;
    height:45px;
    color: #fff;
    background: #2884da;
    border-radius: 50px;
    font-size: 15px;
    font-weight:600;
    cursor: pointer;
    }
    .menu-button:hover {
      color: #343333;
    }
`;
