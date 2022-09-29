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
import { ChevronRightIcon } from "@chakra-ui/icons";
function WhatRight() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Link ref={btnRef} colorScheme="teal" onClick={onOpen}>
        What's Right for Me?
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
            <Heading> What's Right for Me?</Heading>
          </DrawerHeader>
          <DrawerBody>
            <VStack
              divider={<StackDivider borderColor="gray.200" />}
              spacing={4}
              align="stretch"
            >
              <Box w={"90%"} m="auto" p="auto" pt="5">
                <Heading mb="3" fontSize={"3xl"}>
                  E-Commerce and Retail
                </Heading>
                <Text fontSize={"xl"}>
                  Drive traffic and boost sales with a marketing platform that
                  seamlessly integrates with your store.
                </Text>
              </Box>
              <Box w={"90%"} m="auto" p="auto" pt="5">
                <Heading mb="3" fontSize={"3xl"}>
                  Mobile and Web Apps
                </Heading>
                <Text fontSize={"xl"}>
                  Reach new customers, send behavior‑based campaigns, and
                  increase engagement with your app.
                </Text>
              </Box>
              <Box w={"90%"} m="auto" p="auto" pt="5">
                <Heading mb="3" fontSize={"3xl"}>
                  Startups
                </Heading>
                <Text fontSize={"xl"}>
                  Find product‑market fit, learn from user feedback, and launch
                  your first marketing campaigns.
                </Text>
              </Box>
              <Box w={"90%"} m="auto" p="auto" pt="5">
                <Heading mb="3" fontSize={"3xl"}>
                  Agencies & Freelancers
                </Heading>
                <Text fontSize={"xl"}>
                  Get perks and tools for managing clients when you join our
                  free community, Mailchimp & Co.
                </Text>
              </Box>
              <Box w={"90%"} m="auto" p="auto" pt="5">
                <Heading mb="3" fontSize={"3xl"}>
                  Developers
                </Heading>
                <Text fontSize={"xl"}>
                  Integrate marketing data, send transactional emails, and build
                  integrations using our APIs and documentation.{" "}
                </Text>
              </Box>
            </VStack>
          </DrawerBody>
          <DrawerFooter>
            <Link href="#" isExternal>
              See OverView <ChevronRightIcon />
            </Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default WhatRight;
