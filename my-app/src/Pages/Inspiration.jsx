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
  Image,
  Flex,
} from "@chakra-ui/react";
import {
  ChevronRightIcon,
  PhoneIcon,
  ExternalLinkIcon,
} from "@chakra-ui/icons";
function Inspiration() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Link ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Product
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
          <DrawerHeader>
           <Flex gap={5}>
           <Image src="https://eep.io/images/yzco4xsimv0y/MGifxiLMDNEBfuw4CfE2z/d83e5d33c23840148e6f1c9669d11a34/MCP.svg?w=520&fm=webp&q=80" width={"80%"} alt="logo"/> 
            <ExternalLinkIcon mt={"10px"} mx="2px" />
           </Flex>
          </DrawerHeader>

          <DrawerBody>
            <VStack
              divider={<StackDivider borderColor="gray.200" />}
              spacing={10}
              align="stretch"
            >
              <SimpleGrid columns={1} spacingY="30px">
                <Box>
                  <Heading as="h3" size={"lg"}>
                    Prodcast  <ChevronRightIcon />
                  </Heading>
                </Box>
                <Box>
                  <Heading as="h3" size={"lg"}>
                   Series <ChevronRightIcon />
                  </Heading>
                </Box>
                <Box>
                  <Heading as="h3" size={"lg"}>
                   Film <ChevronRightIcon />
                  </Heading>
                </Box>
              </SimpleGrid>

              <SimpleGrid columns={1} spacingY="30px">
              <Flex gap={5}>
           <Image src="https://eep.io/images/yzco4xsimv0y/6dAj3Qwts7baFYveSjoNtu/d2f0f010176f132356c978fa96073835/Courier.svg?w=520&fm=webp&q=80" width={"80%"} alt="logo"/> 
            <ExternalLinkIcon mt={"10px"} mx="2px" />
           </Flex>
                <Box>
                  <Heading as="h3" size={"lg"}>
                  Expert Insights     <ChevronRightIcon />
                  </Heading>
                </Box>
                <Box>
                  <Heading as="h3" size={"lg"}>
                  Industry Trends<ChevronRightIcon />
                  </Heading>
                </Box>
                <Box>
                  <Heading as="h3" size={"lg"}>
                  Smart Living <ChevronRightIcon />
                  </Heading>
                </Box>
              </SimpleGrid>


              <SimpleGrid columns={1} spacingY="20px">
                <Box>
                  <Heading as="h3" size={"md"}>
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
export default Inspiration;
