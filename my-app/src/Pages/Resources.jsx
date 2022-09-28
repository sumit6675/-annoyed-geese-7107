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
  SimpleGrid,
  Box,
  Heading,
  VStack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import {
  ChevronRightIcon,
  PhoneIcon,
  ExternalLinkIcon,
} from "@chakra-ui/icons";
function Resources() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Link ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Resources
      </Link>
      <Drawer
        w={600}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent w={200} maxW={"400"}>
          <DrawerCloseButton />
          <DrawerHeader>Resources</DrawerHeader>

          <DrawerBody>
            <VStack
              divider={<StackDivider borderColor="gray.200" />}
              spacing={4}
              align="stretch"
            >
              <SimpleGrid columns={1} spacingY="20px">
                <Box>LEARN —</Box>
                <Box>
                  <Heading as="h1" size={"md"}>
                    Mailchimp 101 <ChevronRightIcon />
                  </Heading>
                </Box>
                <Box>
                  <Heading as="h1" size={"md"}>
                    Help Cente <ChevronRightIcon />
                  </Heading>
                </Box>
                <Box>
                  <Heading as="h1" size={"md"}>
                    Marketing Library <ChevronRightIcon />
                  </Heading>
                </Box>
              </SimpleGrid>

              <SimpleGrid columns={1} spacingX="40px" spacingY="20px">
                <Box>COMMUNITY —</Box>
                <Box>
                  <Heading as="h1" size={"md"}>
                    For Freelancers & Agencies
                    <ChevronRightIcon />
                  </Heading>
                </Box>
                <Box>
                  <Heading as="h1" size={"md"}>
                    For Developers <ChevronRightIcon />
                  </Heading>
                </Box>
                <Box>
                  <Heading as="h1" size={"md"}>
                    Hire A Trusted Partn
                    <ChevronRightIcon />
                  </Heading>
                </Box>
              </SimpleGrid>

              <SimpleGrid columns={1} spacingY="20px">
                <Box>
                  <Heading as="h1" size={"md"}>
                    <PhoneIcon /> Talk to Sales: +1 (800) 315-5939
                  </Heading>
                </Box>
              </SimpleGrid>

              <Box>
                <Heading as="h3" size={"md"}>
                  Product Updates
                </Heading>
                <Text fontSize="md">
                  Get the latest on new features, product improvements, and
                  other announcements.
                </Text>
              </Box>
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <Link href="#" isExternal>
              See all integrations <ExternalLinkIcon mx="2px" />
            </Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default Resources;
