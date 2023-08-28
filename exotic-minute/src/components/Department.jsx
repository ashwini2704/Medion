import { Button, Flex } from "@chakra-ui/react";


function Department() {
    return (
        <>
          <Flex>
            <Button>View All</Button>
            <Button>Nutrition</Button>
            <Button>Beauty Skin Care</Button>
            <Button>Personal Care</Button>
            <Button>Health Service</Button>
            <Button>Immunity Boosters</Button>
          </Flex>
        </>
    )
}

export { Department }