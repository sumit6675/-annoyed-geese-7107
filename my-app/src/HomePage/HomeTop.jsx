import {
  Container,
  Heading,
  Button,
  Text,
  Flex,
  Image,
  Box,
  AspectRatio,
} from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

function HomeTop() {
  return (
    <>
      <Container mt={12} maxW="3xl">
        <Heading as="h1" size={"2xl"}>
          Turn Emails into Revenue
        </Heading>
        <Text fontSize="2xl" mt={6}>
          Win new customers with the #1 email marketing and automations brand*
          that recommends ways to get more opens, clicks, and sales.
        </Text>
        <NavLink id="signup2" to="/signup">
        <Button
          borderRadius={"full"}
          size="lg"
          bg="#ffe01b"
          mt={8}
          variant="outline"
          colorScheme="teal"
        >
          Sign Up
        </Button>
        </NavLink>
      </Container>

      <Flex mt={12}>
        <Box bg={"#dfdcd4"} w="25%" p={10}>
          <Heading m="auto" fontSize={"2xl"}>
            Convert With Automotion
          </Heading>
        </Box>
        <Box bg={"#dbd9da"} w="25%" p={10}>
          <Heading m="auto" fontSize={"2xl"}>
            Optimize with AI & Analytics
          </Heading>
        </Box>
        <Box bg={"#e4d6ca"} w="25%" p={10}>
          <Heading m="auto" fontSize={"2xl"}>
            Target With Segmentation
          </Heading>
        </Box>
        <Box bg={"#c7b5a7"} w="25%" p={10}>
          <Heading m="auto" fontSize={"2xl"}>
            Sync With Integration
          </Heading>
        </Box>
      </Flex>

      <Flex>
        <Image
          src="https://eep.io/images/yzco4xsimv0y/33f3mgIWbzKjIpIRJi2f5v/6bd36bba38b7f6a94d587605ab9a7d75/Desktop_Feature_Cards_1_Automations.jpeg?w=630&fm=webp&q=80"
          width={"25%"}
          alt="p1"
        />
        <Image
          src="https://eep.io/images/yzco4xsimv0y/hBcOt3RZ5DOhMJD2Hi2Z2/96b28d17c45e9376731ad825b002b0ff/Desktop_Feature_Cards_2_Analytics.png?w=630&fm=webp&q=80"
          width={"25%"}
          alt="p1"
        />
        <Image
          src="https://eep.io/images/yzco4xsimv0y/5xqzo6y8Z7anw9VQXJarpj/5f91182af7bf16ecc34b487a619d0a54/Desktop_Feature_Cards_3_Segmentation.jpeg?w=630&fm=webp&q=80"
          width={"25%"}
          alt="p1"
        />
        <Image
          src="https://eep.io/images/yzco4xsimv0y/lsHRpmOI81ZcFS1Yld0Bs/1e2812587cd0f3089061bd4b513fd6d0/Desktop_Feature_Cards_4_Integrations.png?w=630&fm=webp&q=80"
          width={"25%"}
          alt="p1"
        />
      </Flex>
      <Flex>
        <Box bg={"rgb(217,149,54)"} w="25%" p={10}>
          <Text m="auto" mt={4} w={"90%"}>
            Send the right message at the right time to convert more customers.
          </Text>
          <Button
            borderRadius={"full"}
            mt={4}
            variant="outline"
            colorScheme="black"
          >
            Learn More
          </Button>
        </Box>
        <Box bg={"rgb(231,183,95)"} w="25%" p={10}>
          <Text m="auto" mt={4} w={"90%"}>
            Send the right message at the right time to convert more customers.
          </Text>
          <Button
            borderRadius={"full"}
            mt={4}
            variant="outline"
            colorScheme="black"
          >
            Learn More
          </Button>
        </Box>
        <Box bg={"rgb(253,248,234)"} w="25%" p={10}>
          <Text m="auto" mt={4} w={"90%"}>
            Send the right message at the right time to convert more customers.
          </Text>
          <Button
            borderRadius={"full"}
            mt={4}
            variant="outline"
            colorScheme="black"
          >
            Learn More
          </Button>
        </Box>
        <Box bg={"#fff"} w="25%" p={10}>
          <Text m="auto" mt={4} w={"90%"}>
            Send the right message at the right time to convert more customers.
          </Text>
          <Button
            borderRadius={"full"}
            mt={4}
            variant="outline"
            colorScheme="black"
          >
            Learn More
          </Button>
        </Box>
      </Flex>

      <Box bg={"#241c15"} h="900px">
        <Container  pt={20}>
          <AspectRatio ml={"-22rem"} w={"1200px"} ratio={2/1}>
            <iframe
              title="MailChimp"
              src="https://www.youtube.com/embed/fX1I-AHFxZo"
              allowFullScreen
            />
          </AspectRatio>
        </Container>
        <Container mt={5} maxW={"6xl"}>
        <Text  fontSize="3xl" color={'White'} >Most email marketing platforms tell you how your campaigns perform. We analyze the data from the billions of emails we send to give you personalized recommendations for improving your content, targeting, and automations.</Text>
        </Container>
      </Box>
    </>
  );
}

export default HomeTop;
