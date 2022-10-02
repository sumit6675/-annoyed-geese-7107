import {
  Heading,
  VStack,
  Flex,
  Checkbox,
  Divider,
  Text,
  Input,
  Button,
  Box,
  Tr,
  Th,
  Td,
  Tbody,
  Thead,
  Table,
  TableContainer,
  Image,
  Link,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import {  TriangleDownIcon } from "@chakra-ui/icons";

import React from "react";

function TransactionalEmail() {
  return (
    <>
      <Heading my="10">
        Transactional email plans designed for developers
      </Heading>
      <Flex w="85%" m="auto" mt="10" gap="80px">
        <VStack border="1px solid black" gap="3" p="5">
          <Heading fontSize={"lg"}>
            Enter your estimated sends per month
          </Heading>
          <Input w="40%" type="email" placeholder="Enter Email Estimate" />
          <Checkbox defaultChecked>
            Dedicated IP for $29.95 / month (Optional)
          </Checkbox>
          <Divider />
          <Box>
            <Text>Your Plan</Text>
            <Heading fontSize={"lg"}>
              $0.00 /month | 0 blocks @ $20/block
            </Heading>
          </Box>
          <Divider />
          <Heading fontSize={"md"} w="50%">
            $0.00 Estimated Cost Per Month + your Mailchimp Monthly Plan
          </Heading>
          <Button
            borderRadius={"full"}
            bg="#ffe01b"
            variant="outline"
            colorScheme="teal"
          >
            Try For Free
          </Button>
        </VStack>
        <TableContainer border="1px solid black" p="10">
          <Heading fontSize={"2xl"} mb="4">
            Each block is a credit for 25,000 emails
          </Heading>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>TOTAL BLOCKS</Th>
                <Th>EMAILS PER MONTH</Th>
                <Th>PRICE PER BLOCK</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>1 to 20 blocks</Td>
                <Td>1 to 500k emails</Td>
                <Td>$20/block</Td>
              </Tr>
              <Tr>
                <Td>21 to 40 blocks</Td>
                <Td>500k to 1M emails</Td>
                <Td>$18/block</Td>
              </Tr>
              <Tr>
                <Td>41 to 80 blocks</Td>
                <Td>1M to 2M emails</Td>
                <Td>$16/block</Td>
              </Tr>
              <Tr>
                <Th>81 to 120 blocks</Th>
                <Th>2M to 3M emails</Th>
                <Th>$14/block</Th>
              </Tr>
              <Tr>
                <Th>121 to 160 blocks</Th>
                <Th>3M to 4M emails</Th>
                <Th>$12/block</Th>
              </Tr>
              <Tr>
                <Th>161+ blocks</Th>
                <Th>4M+ emails</Th>
                <Th>$10/block</Th>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
      <Heading fontSize={"lg"}>
        *New transactional email users can get up to 500 free email sends to
        their verified domain. Restrictions apply. Learn more
      </Heading>
      <Box w="60%" m="auto" my="10">
        <Heading my="2">Featured Product:</Heading>
        <Text my="2" w="55%" m="auto">Create unlimited one-on-one and group services with our new Advanced Scheduling add-on for $8/month.</Text>
        <Button
            my="2"
            borderRadius={"full"}
            bg="#ffe01b"
            variant="outline"
            colorScheme="teal"
          >
            Buy Now
          </Button>
      </Box>
      <Heading fontSize={"6xl"} w="80%" m="auto" my="10">Made for developers to send emails that reach inboxes</Heading>
       <Flex w="65%" m="auto" gap="5">
            <VStack gap="3">
                <Image src="https://eep.io/images/yzco4xsimv0y/3MxBEW35Fa5LYlcQw8IcYl/609f3cddcbb33458b3d54fc75b16081a/ILLO_MiniSpot_Transactional-Infrastructure-600.png?w=160&fm=webp&q=80"
                 alt="p1"/>
                 <Heading fontSize={"2xl"}>Global infrastructure</Heading>
                 <Text w="50%">Benefit from automatic SPAM loop registration and pre-warmed dedicated IPs.</Text>
                 <Link>Learn More</Link>
            </VStack>
            <VStack gap="3">
                <Image src="https://eep.io/images/yzco4xsimv0y/1aRGO6ynIJejUp1TJqYbfL/17ea7cefb6fd4efe00624cf98afd1d68/ILLO_MiniSpot_Transactional-Analytics-600.png?w=160&fm=webp&q=80"
                 alt="p1"/>
                 <Heading fontSize={"2xl"}>Scalable analytics</Heading>
                 <Text w="50%">Get transactional email analytics from your dashboard, export API or webhooks.</Text>
                 <Link>Learn More</Link>
            </VStack>
            <VStack gap="3">
                <Image src="https://eep.io/images/yzco4xsimv0y/5B6FRQrsBrk4dNgsFsSxAP/6de75bc8344aba2415386936e2815117/ILLO_MiniSpot_Transactional-Sending_Receiving-600.png?w=160&fm=webp&q=80"
                 alt="p1"/>
                 <Heading fontSize={"2xl"}>Email options</Heading>
                 <Text w="50%">Customize sending and receiving for your transactional emails.</Text>
                 <Link>Learn More</Link>
            </VStack>
       </Flex>
       <Flex  w="55%" m="auto" gap="5" my="10">
       <VStack gap="3">
                <Image src="https://eep.io/images/yzco4xsimv0y/3MxBEW35Fa5LYlcQw8IcYl/609f3cddcbb33458b3d54fc75b16081a/ILLO_MiniSpot_Transactional-Infrastructure-600.png?w=160&fm=webp&q=80"
                 alt="p1"/>
                 <Heading fontSize={"2xl"}>API reference</Heading>
                 <Text w="50%">Use API documentation with all calls, parameters, and sample code.</Text>
                 <Link>Learn More</Link>
            </VStack>
            <VStack gap="3">
                <Image src="https://eep.io/images/yzco4xsimv0y/76WKVx65xCora6N1GtnPii/8d846750ab775cc91a2305d44c3441cb/ILLO_Spot_Email_5_1080.png?w=160&fm=webp&q=80"
                 alt="p1"/>
                 <Heading fontSize={"2xl"}>Developer guides</Heading>
                 <Text w="50%">Get started with guides and a deep knowledge base.</Text>
                 <Link>Learn More</Link>
            </VStack>
       </Flex>

       <Heading mt="10">FAQ</Heading>
      <Accordion allowToggle w="85%" m="auto" p="10">
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading fontSize={"2xl"}>
                What is included in the Transactional Email demo?
                </Heading>
              </Box>
              <TriangleDownIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} w="60%" textAlign={"left"}>
            <Text fontSize={"xl"}>
            New transactional email users can send up to 500 transactional emails to any email address on a verified domain—without buying transactional email blocks or upgrading a plan. For new Transactional Email users only.
            </Text>
            <Link>Learn More</Link>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading fontSize={"2xl"}>
                What payment methods do you offer?
                </Heading>
              </Box>
              <TriangleDownIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} w="60%" textAlign={"left"}>
            <Text fontSize={"xl"}>
            We accept all major credit cards, PayPal, and (in select countries) direct debit. We also support transactions in a range of currencies.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading fontSize={"2xl"}>Is pricing different for API or SMTP?</Heading>
              </Box>
              <TriangleDownIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} w="60%" textAlign={"left"}>
            <Text fontSize={"xl"}>
            No—the price is the same for sending emails using APIs or SMTP service.
            </Text>
            <Link>See how it works</Link>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading fontSize={"2xl"}>
                Do I need a Mailchimp account to send transactional emails?
                </Heading>
              </Box>
              <TriangleDownIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} w="60%" textAlign={"left"}>
            <Text fontSize={"xl"}>
            Yes, you need a Mailchimp account. Transactional Email is available as an add-on to Standard and Premium plans, or the legacy Monthly Plan. However, new transactional email users can try our free demo with certain limits.
            </Text>
            <Link>Contact us for pricing</Link>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading fontSize={"2xl"}>
                Can I buy email blocks smaller than 25,000 emails?
                </Heading>
              </Box>
              <TriangleDownIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} w="60%" textAlign={"left"}>
            <Text fontSize={"xl"}>
            No, we only have blocks with 25,000 emails.
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading fontSize={"2xl"}>
                What happens to unused emails?
                </Heading>
              </Box>
              <TriangleDownIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} w="60%" textAlign={"left"}>
            <Text fontSize={"xl"}>
            Unused emails in a block don’t roll over month to month.
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading fontSize={"2xl"}>
                What if I need help?
                </Heading>
              </Box>
              <TriangleDownIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} w="60%" textAlign={"left"}>
            <Text fontSize={"xl"}>
            Contact our award winning Support team, and they can take care of you.
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Flex w="80%" m="auto" gap="10" my="80px">
        <Image
          src="https://eep.io/images/yzco4xsimv0y/6rMAO0ldN6imaGyWo68a04/835f8130a3279eb3c68a334f452ddd2f/ILLO_Spot_Mailchimp_Agencies_1080.png?w=540&fm=webp&q=80"
          w="600px"
          alt="p1"
        />
        <VStack w="80%" gap={"5"} mt="10">
          <Heading fontSize={"5xl"}>
            Need to help clients use Mailchimp?
          </Heading>
          <Text w="80%" fontSize={"2xl"}>
            Unlock the tools you need to get work done for clients when you sign
            up through Mailchimp & Co, our community for freelancers and
            agencies. It’s free to join with any Mailchimp plan.
          </Text>
          <Button
            borderRadius={"full"}
            bg="#teal"
            variant="outline"
            colorScheme="teal"
          >
            Get Started
          </Button>
        </VStack>
      </Flex>

      <Box my="10">
                  <Heading fontSize={"6xl"} mt="20">You’ll be in good company</Heading>
                  <Flex gap="10" w="70%" m='auto' my="5">
                    <Image mt="20" src="https://eep.io/images/yzco4xsimv0y/6EIjMFs2ZyQWsmOOYc4cGe/19d62aa558c8f5d4c4bf222e7e36571b/EastFork.png?w=260&fm=webp&q=70"
                     alt="p1" w="20%" h="28px"/>
                    <Image src="https://eep.io/images/yzco4xsimv0y/5Z9C7t0HDyyaWu60iWE00A/2e3d2eaa056d0d86c6712c88d239762f/chronicle-books-logo.jpg?w=260&fm=webp&q=70"
                     alt="p1" w="20%" />
                    <Image mt="20" src="https://eep.io/images/yzco4xsimv0y/vHWiUSlrS8sSQc0cCesGY/429d539471239d6ffcdb8be8767140cb/Fader-Logo-800px-144dpi.jpg?w=260&fm=webp&q=70"
                     alt="p1" w="17%" h="30px"/>
                    <Image mt="20" src="https://eep.io/images/yzco4xsimv0y/2fZXnWbDK8ugIaCW8Qus0i/1b8f1c4aa80dda874418e4bfa29b60e5/Sweat.png?w=260&fm=webp&q=70"
                     alt="p1" w="17%" h="28px"/>
                  </Flex>
                </Box>
    </>
  );
}

export default TransactionalEmail;
