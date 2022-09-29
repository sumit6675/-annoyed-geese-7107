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
function GetYourBusinessOnline() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Link ref={btnRef} colorScheme="teal" onClick={onOpen}>
      Get Your Business Online
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
            <Heading>Get Your Business Online</Heading>
          </DrawerHeader>

          <DrawerBody>
            <VStack
              divider={<StackDivider borderColor="gray.200" />}
              spacing={4}
              align="stretch"
            >

                <Box w={"90%"} m="auto" p="auto" pt="5">
                    <Heading mb="3" fontSize={"3xl"}>Websites</Heading>
                    <Text fontSize={"xl"}>Create a free website that comes with built-in marketing tools.</Text>
                </Box>
                

                <Box w={"90%"} m="auto" p="auto" pt="5">
                    <Heading mb="3" fontSize={"3xl"}>Online Stores</Heading>
                    <Text fontSize={"xl"}>Launch a store that comes with everything you need to start selling, including marketing tools.</Text>
                </Box>

                <Box w={"90%"} m="auto" p="auto" pt="5">
                    <Heading mb="3" fontSize={"3xl"}>Appointment Scheduling</Heading>
                    <Text fontSize={"xl"}>Add online scheduling to your website so people book appointments with you.</Text>
                </Box>

                <Box w={"90%"} m="auto" p="auto" pt="5">
                    <Heading mb="3" fontSize={"3xl"}>Domains</Heading>
                    <Text fontSize={"xl"}>Claim a custom domain to make it easy for people to find your brand on the web.</Text>
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
export default GetYourBusinessOnline;
