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
function MarketingAutomation() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Link ref={btnRef} colorScheme="teal" onClick={onOpen}>
      Marketing Automation
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
            <Heading>Marketing Automation</Heading>
          </DrawerHeader>

          <DrawerBody>
            <VStack
              divider={<StackDivider borderColor="gray.200" />}
              spacing={4}
              align="stretch"
            >
              <Box w={"90%"} m="auto" p="auto" pt="5">
                <Heading mb="3" fontSize={"3xl"}>
                Customer Journeys

                </Heading>
                <Text fontSize={"xl"}>
                Design personalized journeys using conditional logic and branching points.

                </Text>
              </Box>

              <Box w={"90%"} m="auto" p="auto" pt="5">
                <Heading mb="3" fontSize={"3xl"}>
                Integrations
                </Heading>
                <Text fontSize={"xl"}>
                Sync your store data and connect other tools to unlock more automation features.
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
export default MarketingAutomation;
