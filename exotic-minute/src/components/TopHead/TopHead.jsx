import { HStack,VStack,Link, Flex,Icon,Text, Heading, Box, Button } from '@chakra-ui/react';
import { MdOutlineRoom,MdAccountCircle,MdKeyboardArrowDown, MdCall ,MdAddShoppingCart } from "react-icons/md";
import { useDisclosure, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, } from '@chakra-ui/react';
// import "./Top.css"
import medionlogo from '../../Images/medionlogo.PNG';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import { store } from '../Redux/AuthRedux/store';

function TopHead() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    let navigate= useNavigate();
    const {getState} = store;
    console.log(getState)
  const isAuth = getState().isAuth;
  console.log(isAuth)

    return (
        <div>
        <Flex justify={"space-between"} mt={0} mb={0}>
            <HStack gap={10} ml={20}>
                <Heading color={"blue.500"}>Medion</Heading>
                <img src={medionlogo} width={1} height={0.1} alt="" />
                {/* <Image src="exotic-minute/src/Images/medion-logo.PNG" /> */}
                    <HStack >
                        <Icon color={"blue.500"} as={MdOutlineRoom} boxSize={8}/>
                        <VStack gap={0} >
                            <Text  color={"gray"}>Delivery Address</Text>
                            <Flex >
                                <Heading as={"h5"} size={"sm"}>Select Address</Heading>
                                <Icon onClick={onOpen} boxSize={5} as={MdKeyboardArrowDown} />
                            </Flex>
                        </VStack>
                    </HStack>
            </HStack>
            <Navbar />
            <HStack mr={40} gap={8}>
                <Link href='/cart'>
                <Icon color={"blue.500"} as={MdAddShoppingCart} onClick={()=> navigate("/cart") } boxSize={8}/>                
                </Link>
                <Link href='/contact'>
                <Icon color={"blue.500"} as={MdCall} onClick={()=> navigate("/contact") }  boxSize={8}/>                
                </Link>
                {
                    isAuth ? 
                    <Link href='/'>
                     <Text color={"blue.500"} fontSize={"20px"} fontWeight={"bold"}>Logout</Text>
                    </Link>
                    :

                    <Link href='/login'>
                    <Icon color={"blue.500"} as={MdAccountCircle} boxSize={8}/>
                    </Link>
                }
            </HStack>
        </Flex>
        <Box boxShadow='md' p='0.5' rounded='md' bg='white'></Box>   
        
        <Modal className="modal" isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader></ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6} textAlign={"center"}>
                <Button colorScheme="white" bg={'blue.600'} > Use Current Location </Button>
                <Text color={"gray"}>or</Text>
                <Heading as={"h4"} size={"sm"} >Enter Delivery Pincode</Heading>
            </ModalBody>
            <ModalFooter></ModalFooter>
            </ModalContent>
        </Modal>   
        </div>
        
    );
}
export {TopHead}