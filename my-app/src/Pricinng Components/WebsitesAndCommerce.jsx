import {
  Heading,
  VStack,
  Flex,
  Text,
  Button,
  Box,
  Image,
  Input,
  Grid,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Accordion,
  Link,
} from "@chakra-ui/react";
import { TriangleDownIcon  } from "@chakra-ui/icons";
import React from "react";

function WebsitesAndCommerce() {
  return (
    <>
      <Heading mt="15">Websites & Commerce</Heading>
      <Flex w="80%" m="auto" my="20">
        <VStack border={"1px solid black"} p="5">
          <Heading>Plus</Heading>
          <Text w="80%">
            All websites & commerce features and our lowest transaction fees for
            scaling businesses.
          </Text>
          <Text>Start at</Text>
          <Heading fontSize={"3xl"}>₹2,381</Heading>
          <Text>/Month</Text>
          <Text w="80%" m="auto">
            + .5% transaction fee and Stripe processing fees*
          </Text>
          <Button
            borderRadius={"full"}
            bg="#ffe01b"
            variant="outline"
            colorScheme="teal"
          >
            Buy Now
          </Button>
        </VStack>
        <VStack border={"1px solid black"} p="5">
          <Heading>Plus</Heading>
          <Text w="80%">
            All websites & commerce features and our lowest transaction fees for
            scaling businesses.
          </Text>
          <Text>Start at</Text>
          <Heading fontSize={"3xl"}>₹2,381</Heading>
          <Text>/Month</Text>
          <Text w="80%" m="auto">
            + .5% transaction fee and Stripe processing fees*
          </Text>
          <Button
            borderRadius={"full"}
            bg="#ffe01b"
            variant="outline"
            colorScheme="teal"
          >
            Buy Now
          </Button>
        </VStack>
        <VStack border={"1px solid black"} p="5">
          <Heading>Plus</Heading>
          <Text w="80%">
            All websites & commerce features and our lowest transaction fees for
            scaling businesses.
          </Text>
          <Text>Start at</Text>
          <Heading fontSize={"3xl"}>₹2,381</Heading>
          <Text>/Month</Text>
          <Text w="80%" m="auto">
            + .5% transaction fee and Stripe processing fees*
          </Text>
          <Button
            borderRadius={"full"}
            bg="#ffe01b"
            variant="outline"
            colorScheme="teal"
          >
            Buy Now
          </Button>
        </VStack>
      </Flex>
      <Button
        borderRadius={"full"}
        bg="#teal"
        variant="outline"
        colorScheme="teal"
      >
        compare our Plans
      </Button>
      <Text fontSize={"md"} w="65%" m="auto" my="5">
        *All Websites & Commerce plans include access to our Mailchimp stores
        product. If you create and publish a store, transaction fees will be
        charged to you on a per transaction basis based on the total order value
        (minus promotions and discounts, plus tax and shipping ) for each
        transaction. These transaction fees are non-refundable. You will also be
        charged fees by Stripe. See Stripe.com for details about Stripe fees.
      </Text>

      <VStack w="40%" m="auto" my="100px" gap={"3"}>
        <Heading fontSize={"2xl"}>Featured Product:</Heading>
        <Text>
          Create unlimited one-on-one and group services with our new Advanced
          Scheduling add-on for $8/month.
        </Text>
        <Button
          borderRadius={"full"}
          bg="yellow"
          variant="outline"
          colorScheme="teal"
        >
          Buy Now
        </Button>
      </VStack>

      <Flex w="80%" m="auto" gap="10">
        <Image
          src="https://eep.io/images/yzco4xsimv0y/3PN7I87VPcAzVXe6iMYLct/5a1300742c23f2e01ad572273285c143/pricing.png?w=760&fm=webp&q=80"
          w="600px"
          alt="p1"
        />
        <VStack w="80%" gap={"5"} mt="10">
          <Heading>Also included: Free, built-in marketing tools</Heading>
          <Text w="80%">
            All Websites & Commerce plans come with Free marketing features like
            email and social posting, so you can find new customers and drive
            sales. But if you want more advanced marketing tools, like our
            Customer Journey Builder, try a paid Marketing plan.
          </Text>
          <Button
            borderRadius={"full"}
            bg="#teal"
            variant="outline"
            colorScheme="teal"
          >
            Explore Marketing Plans
          </Button>
        </VStack>
      </Flex>

      <Box bg="#c5dbf2" h="800px" my="20">
        <Heading py="40px" fontSize={"5xl"}>
          Add on powerful features
        </Heading>
        <Box bg="white" h="600px" w="80%" m="auto">
          <Flex>
            <VStack gap="3" pt="150px">
              <Heading fontSize={"5xl"}>Add on a domain</Heading>
              <Text w="80%" textAlign={"left"}>
                Buy a custom domain to help people find you on the web. Plus, a
                consistently branded online presence builds trust across email
                and other channels. Choose from over 200 domain extensions,
                including .com, .org, and .net.
              </Text>
              <Input w="40%" type="text" placeholder="Start Your Search Here" />
              <Button
                borderRadius={"full"}
                bg="Yellow"
                variant="outline"
                colorScheme="teal"
              >
                Find Your Domain
              </Button>
            </VStack>
            <Image
              mt="140px"
              mr="50px"
              src="https://eep.io/images/yzco4xsimv0y/4yOflc1XUIZF81NnLz05jC/685616b38b9b5e24d9b15f1461409f80/AUI_Custom-Domains_Eyewear_v2_1520.png"
              w="400px"
              alt="p1"
            />
          </Flex>
        </Box>
      </Box>

      <Grid
        templateColumns="repeat(2, 1fr)"
        w="85%"
        gap={6}
        mt="90"
        p="10"
        m="auto"
      >
        <Box textAlign={"left"}>
          <Heading w="90%" my="5">
            Two-factor authentication discount
          </Heading>
          <Text fontSize={"lg"} my="5" w="80%">
            At Mailchimp, we’re serious about security. We offer a 10% discount
            for 1 month when you add two-factor authentication to your Mailchimp
            account with an app like Google Authenticator or SMS two-factor
            authentication. Restrictions apply. See our full terms and
            conditions.
          </Text>
          <Button
            borderRadius={"full"}
            bg="#ffe01b"
            variant="outline"
            colorScheme="teal"
          >
            Get Started
          </Button>
        </Box>

        <Box textAlign={"left"}>
          <Heading w="90%" my="5">
            Rates for nonprofits and charities
          </Heading>
          <Text fontSize={"lg"} my="5" w="80%">
            Mailchimp offers a 15% discount to nonprofits and charities. To
            request the discount, sign up for a free account, and contact our
            Billing team with your username and a link to your organization’s
            website.
          </Text>
          <Button
            borderRadius={"full"}
            bg="#ffe01b"
            variant="outline"
            colorScheme="teal"
          >
            Get Started
          </Button>
        </Box>
      </Grid>

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

      <Heading mt="10">FAQ</Heading>
      <Accordion allowToggle w="85%" m="auto" p="10">
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading fontSize={"2xl"}>
                  {" "}
                  What payment methods does Mailchimp accept?
                </Heading>
              </Box>
              <TriangleDownIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text fontSize={"xl"} w="60%" textAlign={"left"}>
              We accept all major credit cards, PayPal, and (in select
              countries) direct debit. We also support transactions in a range
              of currencies.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading fontSize={"2xl"}>
                  How much does it cost to sell from a Mailchimp online store?
                </Heading>
              </Box>
              <TriangleDownIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} w="60%" textAlign={"left"}>
            <Text fontSize={"xl"}>
              There are 2 types of fees for transactions on stores. First, each
              transaction includes a %-based transaction fee, based on your
              monthly plan and total order value. We also partner with Stripe to
              process payments; Stripe charges fees based on your location.
            </Text>
            <Link>About Your Store in Mailchimp</Link>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading fontSize={"2xl"}>
                  Can I connect my existing domain to a Mailchimp website?
                </Heading>
              </Box>
              <TriangleDownIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} w="60%" textAlign={"left"}>
            <Text fontSize={"xl"}>
              Yes. If you own a domain through Mailchimp or a third-party
              service, you can connect it to your online store with a Core or
              Plus Websites & Commerce plan.
            </Text>
            <Link>Connect a Domain or Subdomain</Link>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading fontSize={"2xl"}>
                  Are Mailchimp online stores available in my country?
                </Heading>
              </Box>
              <TriangleDownIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} w="60%" textAlign={"left"}>
            <Text fontSize={"xl"}>
              Stores are currently only supported in the United States and
              United Kingdom. Any Mailchimp user can explore the feature and set
              up a Store, but only users who have businesses based in the UK and
              the US can publish a store and sell products.
            </Text>
            <Link>Contact us for pricing</Link>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading fontSize={"2xl"}>
                  How do I switch to a different plan?
                </Heading>
              </Box>
              <TriangleDownIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} w="60%" textAlign={"left"}>
            <Text fontSize={"xl"}>
              You can switch to a new plan at any time by going to the Billing
              page in your account. Select the plan you’d like to switch to and
              immediately start using new features.
            </Text>
            <Link>Change Your Pricing Plan</Link>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default WebsitesAndCommerce;
