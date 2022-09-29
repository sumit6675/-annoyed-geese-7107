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
function AudienceManagement() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Link ref={btnRef} colorScheme="teal" onClick={onOpen}>
      Audience Management
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
            <Heading> Audience Management</Heading>
          </DrawerHeader>

          <DrawerBody>
            <VStack
              divider={<StackDivider borderColor="gray.200" />}
              spacing={4}
              align="stretch"
            >

                <Box w={"90%"} m="auto" p="auto" pt="5">
                    <Heading mb="3" fontSize={"3xl"}>Marketing CRM</Heading>
                    <Text fontSize={"xl"}>Get to know your audience and find new ways to market to them.</Text>
                </Box>
                

                <Box w={"90%"} m="auto" p="auto" pt="5">
                    <Heading mb="3" fontSize={"3xl"}>Signup Forms</Heading>
                    <Text fontSize={"xl"}>Grow your audience with a pop-up or embedded form.</Text>
                </Box>

                <Box w={"90%"} m="auto" p="auto" pt="5">
                    <Heading mb="3" fontSize={"3xl"}>Segmentation</Heading>
                    <Text fontSize={"xl"}>Segment your audience based on shared traits.</Text>
                </Box>

                <Box w={"90%"} m="auto" p="auto" pt="5">
                    <Heading mb="3" fontSize={"3xl"}>Behavioral Targeting</Heading>
                    <Text fontSize={"xl"}>Target your messages based on people's purchase behavior, app activity, and more</Text>
                </Box>

                <Box w={"90%"} m="auto" p="auto" pt="5">
                    <Heading mb="3" fontSize={"3xl"}>Predicted Demographics</Heading>
                    <Text fontSize={"xl"}>Get predictive insights about your contacts so you can personalize your marketing.</Text>
                </Box>

                <Box w={"90%"} m="auto" p="auto" pt="5">
                    <Heading mb="3" fontSize={"3xl"}>Tags & Contact Profiles</Heading>
                    <Text fontSize={"xl"}>Keep track of what you know about your people with customizable tags..</Text>
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
export default AudienceManagement;
