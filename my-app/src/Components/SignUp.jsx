import React from "react";
import {
  Flex,
  Heading,
  Image,
  VStack,
  Link,
  Text,
  Input,
  FormControl,
  FormLabel,
  Button,
  Checkbox,
  Highlight,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";


function SignUp() {
  return (
    <>
      <Flex>
        <VStack textAlign={"left"} width={"40%"} p="5">
          {/* <Image
            src="https://www.dexigner.com/images/news/xxi/31385.jpg"
            alt="p2"
            w="20%"
          /> */}
          <Heading fontSize={"4xl"}>Sign up for Mailchimp</Heading>
          <Flex gap="2" pt="25">
            <Text fontSize={"lg"}>Create an account </Text>
            <NavLink id="login" to={"/login"}>
              <Link color={"blue.500"} fontSize={"lg"}>
                log in
              </Link>
            </NavLink>
          </Flex>
          <FormControl width={"80%"} m="auto" mb="20">
            <FormLabel mt="5">Email</FormLabel>
            <Input  type="email" name="email"  placeholder="Email" />
            <FormLabel mt="5">Username</FormLabel>
            <Input type="text" name="username"  placeholder="Username" />
            <FormLabel my="3">Password</FormLabel>
            <Input mb="5" type="Password" name="password"  placeholder="Password" />
            <Checkbox mb="5" defaultChecked>
              I don't want to receive emails about Mailchimp and related Intuit
              product and feature updates, marketing best practices, and
              promotions from Mailchimp.
            </Checkbox>
            <Text fontSize={"sm"}>
              By creating an account, you agree to our Terms and have read and
              acknowledge the Global Privacy Statement.
            </Text>
            <Button m="auto" my="4" w="80%" colorScheme="blue"  >
              Sign Up
            </Button>
            <Text fontSize={"sm"}>
              Invisible reCAPTCHA by Google Privacy Policy and Terms of Use.
            </Text>
          </FormControl>
          <Text fontSize={"sm"} w="90%">
            <Highlight
              query={["Privacy", "Terms", "Cookie", "Preferences"]}
              styles={{ py: "1", fontWeight: "bold" }}
            >
              ©2001–2022 All Rights Reserved. Mailchimp® is a registered
              trademark of The Rocket Science Group, LLC. Cookie Preferences,
              Privacy, and Terms.
            </Highlight>
          </Text>{" "}
        </VStack>
        <Image
          src="https://login.mailchimp.com/release/1.1.13a426548ed05051befe5f7109a6ee107b573dece/images/brand_assets/illos/art-hero-flowers.png"
          alt="p1"
          w="70%"
        />
      </Flex>
    </>
  );
}

export default SignUp;
