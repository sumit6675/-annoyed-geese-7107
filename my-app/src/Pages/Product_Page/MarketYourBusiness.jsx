import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Link,
  useDisclosure,
  Box,
  Heading,
  VStack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import {
  ChevronRightIcon,
} from "@chakra-ui/icons";
function MarketYourBusiness() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Link ref={btnRef} colorScheme="teal" onClick={onOpen}>
      Market Your Busines
      </Link>
      <Drawer
        w={600}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent w={200} maxW={"600"}>
          <DrawerCloseButton />
          <DrawerHeader>
            <Heading>Market Your Busines</Heading>
          </DrawerHeader>

          <DrawerBody>
            <VStack
              divider={<StackDivider borderColor="gray.200" />}
              spacing={4}
              align="stretch"
            >

                <Box w={"90%"} m="auto" p="auto" pt="5">
                    <Heading mb="3" fontSize={"3xl"}>Email</Heading>
                    <Text fontSize={"xl"}>Engage your audience with beautiful, branded emails.</Text>
                </Box>
                

                <Box w={"90%"} m="auto" p="auto" pt="5">
                    <Heading mb="3" fontSize={"3xl"}>Landing Pages</Heading>
                    <Text fontSize={"xl"}>Design landing pages that grow your audience and help you sell more stuff.</Text>
                </Box>

                <Box w={"90%"} m="auto" p="auto" pt="5">
                    <Heading mb="3" fontSize={"3xl"}>Digital Ads</Heading>
                    <Text fontSize={"xl"}>Reach people on Facebook, Instagram, and across the web.</Text>
                </Box>

                <Box w={"90%"} m="auto" p="auto" pt="5">
                    <Heading mb="3" fontSize={"3xl"}>Social Media</Heading>
                    <Text fontSize={"xl"}>Build your following with targeted ads and organic posting on Facebook, Instagram, and Twitter.</Text>
                </Box>

                <Box w={"90%"} m="auto" p="auto" pt="5">
                    <Heading mb="3" fontSize={"3xl"}>Postcards</Heading>
                    <Text fontSize={"xl"}>Send printed postcards around the world with the help: of our address finder.</Text>
                </Box>

            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <Link href="#" isExternal>
              See OverView  <ChevronRightIcon  />
            </Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default MarketYourBusiness;
