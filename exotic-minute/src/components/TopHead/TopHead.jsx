import { HStack,VStack, Flex, Image,Icon,Text, Heading, Box, Button } from '@chakra-ui/react';
import { MdOutlineRoom,MdAccountCircle,MdKeyboardArrowDown, MdCall ,MdAddShoppingCart } from "react-icons/md";
import { useDisclosure, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, } from '@chakra-ui/react';
// import "./Top.css"

function TopHead() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
        <Flex justify={"space-between"} mt={5} mb={0}>
            <HStack gap={10} ml={40}>
                <Image src="exotic-minute/src/Images/medion-logo.PNG" />
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
            <HStack mr={40} gap={8}>
                <Icon color={"blue.500"} as={MdAccountCircle} boxSize={8}/>
                <Icon color={"blue.500"} as={MdAddShoppingCart} boxSize={8}/>                
                <Icon color={"blue.500"} as={MdCall} boxSize={8}/>                
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
        </>
        
    );
}
export {TopHead}