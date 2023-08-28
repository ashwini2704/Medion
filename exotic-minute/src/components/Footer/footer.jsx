import { Flex,Heading,VStack, Text, Image, HStack } from "@chakra-ui/react";
import style from "./footer.module.css";
import { BsFacebook, BsInstagram, BsTwitter,BsApple, BsLinkedin } from "react-icons/bs";
import { Icon } from '@chakra-ui/react'
import { BiLogoPlayStore } from "react-icons/bi"

function Footer() {
    return (
        <>
        <Flex className={style.footer} gap={10}>
            <VStack className={style.VFoot}>
                <Heading className={style.head} fontWeight={500}  as={"h5"} size={"md"}>Product Category</Heading>
                <Text>View All</Text>
                <Text>Baby Care</Text>
                <Text>Personal Care</Text>
                <Text>Health Service</Text>
                <Text>Nutrition</Text>
                <Text>Beauty Skin Care</Text>
                <Text>Immunity Boosters</Text>
            </VStack>
            <VStack className={style.VFoot}>
                <Heading className={style.head} fontWeight={500} as={"h5"} size={"md"}>About Medion Pharmacy</Heading>
                <Text>About Us</Text>
                <Text>FAQs</Text>
                <Text>Contact Us</Text>
                <Text>Terms and Conditions</Text>
                <Text>Privacy Policy</Text>
                <Text>Returns & Refunds</Text>
                <Text>Medicine Delivery & Cancellations</Text>
            </VStack>
            <VStack ml={"30%"} mt={"50px"} gap={5}>
                <VStack>
                    <Heading className={style.head} fontWeight={600} as={"h5"} size={"sm"} >GET MEDION APP ON</Heading>
                    <HStack>
                        <Icon color={"gray.700"} boxSize={7} as={BiLogoPlayStore} />
                        <Icon color={"gray.700"} boxSize={6} as={BsApple} />
                    </HStack>
                </VStack>
                <VStack>
                    <Heading className={style.head} fontWeight={600} as={"h5"} size={"sm"} >FOLLOW US ON</Heading>
                    <HStack gap={"9px"}>
                        <Icon color={"gray.700"} boxSize={6} as={BsFacebook} />
                        <Icon color={"gray.700"} boxSize={6} as={BsInstagram} />
                        <Icon color={"gray.700"} boxSize={6} as={BsTwitter} />
                        <Icon color={"gray.700"} boxSize={6} as={BsLinkedin} />
                    </HStack>
                </VStack>
                
            </VStack>
        </Flex>
        </>
    )
}

export { Footer }