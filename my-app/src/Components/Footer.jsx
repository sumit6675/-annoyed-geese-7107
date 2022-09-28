import { Box, Flex, Heading, Link, Divider, VStack, Image, Text, Grid, GridItem,Select, Highlight } from "@chakra-ui/react";
import {ArrowForwardIcon} from "@chakra-ui/icons"
import React from "react";

function Footer() {
  return (
    <>
      <Box h={1000} bg={"#e7b75f"} pb="50" >
        <Flex w={"70%"} m="auto" justifyContent="space-between" py={"70"}>
          <Heading fontSize={"md"}>Related Links:</Heading>
          <Link>How to Build a Great Website</Link>
          <Link>How To Start an E‑Commerce Business—a Complete Guide</Link>
          <Link>How To Sell to Any Audience</Link>
        </Flex>
        <Divider colorScheme={"#975A16"} />

        <Grid templateColumns='repeat(7, 1fr)'  w={"90%"} m="auto" my={"50"}>

          <VStack  gap={3}>
            <Heading fontSize={"lg"}>Products</Heading>
            <Link>Why Mailchimp?</Link>
            <Link>Product Updates</Link>
            <Link>Email Marketing</Link>
            <Link>Websites</Link>
            <Link>Transactional Email</Link>
            <Link>How We Compare</Link>
            <Link>GDPR Compliance</Link>
            <Link>Security</Link>
            <Link>Status</Link>
            <Link>Mobile App</Link>
          </VStack>
          

          <VStack gap={3}>
            <Heading fontSize={"lg"}>Resources</Heading>
            <Link>Marketing Library</Link>
            <Link>Free Marketing Tools</Link>
            <Link>Marketing Glossary</Link>
            <Link>Integrations Directory</Link>
          </VStack>

          <VStack gap={3}>
            <Heading fontSize={"lg"}>Community</Heading>
            <Link>Agencies & Freelancers</Link>
            <Link>Developers</Link>
            <Link>Events</Link>
          </VStack>

          <VStack gap={3}>
            <Heading fontSize={"lg"}>Company</Heading>
            <Link>Our Story</Link>
            <Link>Newsroom</Link>
            <Link>Annual Report</Link>
            <Link>Careers</Link>
            <Link>Accessibility</Link>
          </VStack>

          <VStack gap={3}>
            <Heading fontSize={"lg"}>Help</Heading>
            <Link>Contact Us</Link>
            <Link>Hire an Expert</Link>
            <Link>Help Center</Link>
            <Link>Talk to Sales</Link>
          </VStack>

          <GridItem colSpan={2} >
           <VStack>
           <Image src="https://eep.io/images/yzco4xsimv0y/73ZAoe8O3Y7SXQLeCNTq5u/8ddf1f63b4abdf7f67149d3a9d74a0bd/MCP.svg?w=260&fm=webp&q=80" w="60%" alt="p3"/>
            <Text w="45%" fontSize={"sm"}>Films, podcasts, and original series that celebrate the entrepreneurial spirit.</Text>
            <Link >Check Out <ArrowForwardIcon/></Link>
           </VStack>
           <VStack mt="100">
           <Image src="https://eep.io/images/yzco4xsimv0y/5itQmdXHB6vMuAcvyWp5MR/ef5cd2cecd4c92b7029a22ec67585c65/Courier.svg?w=260&fm=webp&q=80" w="60%" alt="p3"/>
            <Text w="45%" fontSize={"sm"}>Expert insights, industry trends, and inspiring stories that help you live and work on your own terms.</Text>
            <Link >Learn More <ArrowForwardIcon/></Link>
           </VStack>
          </GridItem>

        </Grid>
        <Divider colorScheme={"#975A16"} />

    
        <Grid templateColumns="repeat(3, 1fr)" w={"70%"} m="auto" my={"50"}>
        <Flex gap={5} mt="100">
          <Image src="https://eep.io/images/yzco4xsimv0y/1u3hha7FE0Q402e2qsMu6a/5e403548149c1618b64034284f692ff1/icon-ios.svg?w=320&fm=webp&q=80" w="30%" h="10" alt="p4"/>
          <Image src="https://eep.io/images/yzco4xsimv0y/64EpnI4RsQI66c2y2O60G2/4c34d7bc4dd7a4362c7e19a06c109e21/icon-android.svg?w=320&fm=webp&q=80" w="30%" h="10" alt="p4"/>
        </Flex>
        <Flex gap={5} mt="100">
          <Image src="https://eep.io/images/yzco4xsimv0y/5daYAeMRSgIUUiSquGwsgI/1904e3f818575ec9625fa15dab193243/icon-facebook.svg?w=320&fm=webp&q=80" w="6" h="6" alt="p4"/>
          <Image src="https://eep.io/images/yzco4xsimv0y/3VjJhbqftKuok6gqYuUQKy/328d56c5d13ad50b9679b11e716bb218/icon-twitter.svg?w=320&fm=webp&q=80"  w="6" h="6" alt="p4"/>
          <Image src="https://eep.io/images/yzco4xsimv0y/RlNw7Xkw8uKYAUoYU4aQw/ff3eada8736da9e63fbd9f929c6a677c/icon-instagram.svg?w=320&fm=webp&q=80" w="6" h="6" alt="p4"/>
          <Image src="https://eep.io/images/yzco4xsimv0y/n5saFR4miW4U4ygUIQo0A/8f9c60cb133b80fda2fe9bdb825b4a5f/icon-linkedin.svg?w=320&fm=webp&q=80"  w="6" h="6" alt="p4"/>
          <Image src="https://eep.io/images/yzco4xsimv0y/2z1ra9BrgQewIqMQckMasg/58e3e8ec04acd60f0642f89dfbd71218/icon-youtube.svg?w=320&fm=webp&q=80"  w="6" h="6" alt="p4"/>
          <Image src="https://eep.io/images/yzco4xsimv0y/7nawBEArBKpxRukK66OZtN/af9879112b20982e13748d47b24c8681/pinterest-logo.svg?w=320&fm=webp&q=80"  w="6" h="6" alt="p4"/>
        </Flex>
        <VStack>
        <Select textAlign={"left"} w={130} placeholder="English">
            <option>Español</option>
            <option>Français</option>
            <option>Portuguesa</option>
            <option>Deutsch</option>
            <option>Italiano</option>
          </Select>
          <Text fontSize={"sm"} w="90%">
            <Highlight  query={['Privacy',"Terms","Cookie","Preferences"]} styles={{ py: '1', fontWeight: 'bold' }}>
            ©2001-2022 All Rights Reserved. Mailchimp® is a registered trademark of The Rocket Science Group.
             Apple and the Apple logo are trademarks of Apple Inc. Mac App Store is a service mark of Apple Inc. 
             Google Play and the Google Play logo are trademarks of Google Inc. 
             Privacy | Terms | Cookie  Preferences
            </Highlight>
             </Text>
        </VStack>
      </Grid>

      </Box>

    </>
  );
}

export default Footer;
