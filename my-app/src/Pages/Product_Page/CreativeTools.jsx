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
function CreativeTools() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Link ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Creative Tools
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
            <Heading> Creative Tools</Heading>
          </DrawerHeader>

          <DrawerBody>
            <VStack
              divider={<StackDivider borderColor="gray.200" />}
              spacing={4}
              align="stretch"
            >
              <Box w={"90%"} m="auto" p="auto" pt="5">
                <Heading mb="3" fontSize={"3xl"}>
                  Content Studio
                </Heading>
                <Text fontSize={"xl"}>
                  Sync, store, and edit all your images and files in one place.
                </Text>
              </Box>

              <Box w={"90%"} m="auto" p="auto" pt="5">
                <Heading mb="3" fontSize={"3xl"}>
                  Creative Assistant
                </Heading>
                <Text fontSize={"xl"}>
                  Get beautiful, on-brand designs made for you with the power of
                  AI.
                </Text>
              </Box>

              <Box w={"90%"} m="auto" p="auto" pt="5">
                <Heading mb="3" fontSize={"3xl"}>
                  Dynamic Content
                </Heading>
                <Text fontSize={"xl"}>
                  Personalize individual content blocks within your emails.
                </Text>
              </Box>

              <Box w={"90%"} m="auto" p="auto" pt="5">
                <Heading mb="3" fontSize={"3xl"}>
                  Subject Line Helper
                </Heading>
                <Text fontSize={"xl"}>
                  Get real-time feedback on how to refine your subject lines.
                </Text>
              </Box>

              <Box w={"90%"} m="auto" p="auto" pt="5">
                <Heading mb="3" fontSize={"3xl"}>
                  Campaign Templates
                </Heading>
                <Text fontSize={"xl"}>
                  100+ pre-designed email and landing page templates that fit
                  any message.
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
export default CreativeTools;
