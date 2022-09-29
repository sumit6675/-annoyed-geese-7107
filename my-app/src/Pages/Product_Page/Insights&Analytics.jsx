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
function InsightsAnalytics () {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Link ref={btnRef} colorScheme="teal" onClick={onOpen}>
      Insights & Analytics
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
            <Heading> Insights & Analytics</Heading>
          </DrawerHeader>
          <DrawerBody>
            <VStack
              divider={<StackDivider borderColor="gray.200" />}
              spacing={4}
              align="stretch"
            >
              <Box w={"90%"} m="auto" p="auto" pt="5">
                <Heading mb="3" fontSize={"3xl"}>
                Reports
                </Heading>
                <Text fontSize={"xl"}>
                Track sales and campaign performance in easy-to-digest reports.
                </Text>
              </Box>
              <Box w={"90%"} m="auto" p="auto" pt="5">
                <Heading mb="3" fontSize={"3xl"}>
                Smart Recommendations
                </Heading>
                <Text fontSize={"xl"}>
                Get personalized recommendations to help you make your next move.
                </Text>
              </Box>
              <Box w={"90%"} m="auto" p="auto" pt="5">
                <Heading mb="3" fontSize={"3xl"}>
                Smart Recommendations
                </Heading>
                <Text fontSize={"xl"}>
                Get personalized recommendations to help you make your next move.
                </Text>
              </Box>
              <Box w={"90%"} m="auto" p="auto" pt="5">
                <Heading mb="3" fontSize={"3xl"}>
               A/B Testing
                </Heading>
                <Text fontSize={"xl"}>
                Test different versions of a single email to see how small changes can impact your results.
                </Text>
              </Box>
              <Box w={"90%"} m="auto" p="auto" pt="5">
                <Heading mb="3" fontSize={"3xl"}>
                Surveys
                </Heading>
                <Text fontSize={"xl"}>
                Gauge interest and customer satisfaction by gathering feedback.
                </Text>
              </Box>
              <Box w={"90%"} m="auto" p="auto" pt="5">
                <Heading mb="3" fontSize={"3xl"}>
                Content Optimizer
                </Heading>
                <Text fontSize={"xl"}>
                Make your email content more engaging with personalized suggestions for improvement.                </Text>
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
export default InsightsAnalytics;
