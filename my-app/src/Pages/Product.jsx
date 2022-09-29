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
import GetYourBusinessOnline from "./Product_Page/GetYourBusinessOnline";
import MarketYourBusiness from "./Product_Page/MarketYourBusiness";
import AudienceManagement from "./Product_Page/AudienceManagement";
import CreativeTools from "./Product_Page/CreativeTools";
import MarketingAutomation from "./Product_Page/MarketingAutomation";
import InsightsAnalytics from "./Product_Page/Insights&Analytics";
import WhatRight from "./Product_Page/WhatRight";
function Products() {
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
          <DrawerHeader>Products</DrawerHeader>

          <DrawerBody>
            <VStack
              divider={<StackDivider borderColor="gray.200" />}
              spacing={4}
              align="stretch"
            >
              <SimpleGrid columns={1} spacingY="20px">
                <Box>WE'LL HELP YOU--</Box>
                <Box>
                  <Heading as="h1" size={"md"}>
                   <GetYourBusinessOnline/> <ChevronRightIcon />
                  </Heading>
                </Box>
                <Box>
                  <Heading as="h1" size={"md"}>
                    <MarketYourBusiness/> <ChevronRightIcon />
                  </Heading>
                </Box>
              </SimpleGrid>

              <SimpleGrid columns={1} spacingX="40px" spacingY="20px">
                <Box>PLATFORM FEATURES --</Box>
                <Box>
                  <Heading as="h1" size={"md"}>
                    <AudienceManagement/> <ChevronRightIcon />
                  </Heading>
                </Box>
                <Box>
                  <Heading as="h1" size={"md"}>
                   <CreativeTools/> <ChevronRightIcon />
                  </Heading>
                </Box>
                <Box>
                  <Heading as="h1" size={"md"}>
                  <MarketingAutomation/>
                    <ChevronRightIcon />
                  </Heading>
                </Box>
                <Box>
                  <Heading as="h1" size={"md"}>
                    <InsightsAnalytics/> <ChevronRightIcon />
                  </Heading>
                </Box>
              </SimpleGrid>

              <SimpleGrid columns={1} spacingY="20px">
                <Box>NOT SURE WHERE TO START? —</Box>
                <Box>
                  <Heading as="h1" size={"md"}>
                   <WhatRight/> <ChevronRightIcon />
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
export default Products;
