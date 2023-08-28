import { Heading, Image, Text, Flex, Spacer } from "@chakra-ui/react";
import mg from "../Images/about.jpg"

function About() {
    return(
        <Flex flexDirection="column" textAlign={"left"} width={"80%"} margin="auto">
            <Heading color={"blue.500"} >About Us</Heading>
            <Text>know more about us, we are more than a pharmacy...</Text>
            <Image boxShadow='lg' p={2} bg='whiteSmoke' src={mg}  marginBottom={20} marginTop={10}/>
            <Spacer/>
            <Text>
                The Medion pharmacy is accredited with an International Quality Certification, which speaks to its commitment to providing authentic and reasonably priced medication round the clock. The 24-hour pharmacies and home delivery network are designed to ensure customers' convenience, while the customer care is available at any time of the day.
                <br/>
                Quality is the foundation of Medion Pharmacy's operations. Over the last two decades, the pharmacy has gained extensive experience in pharmacy operations management, and it is dedicated to offering the best services in the industry. The pharmacy is adequately stocked with a comprehensive range of medicines, over-the-counter (OTC), and fast-moving consumer goods (FMCG) products. The qualified and experienced staff are available to address all your needs.
                <br/>
                The delivery service covers over 19000+ pin codes, making it highly accessible to people throughout India.
                <br/>
                Medion.in is a one-stop online destination with a vast range of over 70,000 products in various categories such as vitamins and supplements, baby care, personal care, health, and nutritional foods, and OTC. In addition, the pharmacy has over 400 Medion Branded products available in categories like vitamins and supplements, health food, oral care, skincare, among others.
            </Text>
        </Flex>
    )
}

export { About }