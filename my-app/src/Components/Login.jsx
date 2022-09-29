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
import React from "react";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <>
      <Flex>
        <VStack textAlign={"left"} width={"40%"} bg="#ffe200" p="5">
          {/* <Image
            src="https://www.dexigner.com/images/news/xxi/31385.jpg"
            alt="p2"
            w="20%"
          /> */}
          <Heading fontSize={"5xl"}>Log In</Heading>
          <Flex gap="2" pt="25">
            <Text fontSize={"lg"}>Need a Mailchimp account?</Text>
            <NavLink to={"/signup"}>
              <Link color={"blue.500"} fontSize={"lg"}>
                Create an account
              </Link>
            </NavLink>
          </Flex>
          <FormControl width={"80%"} m="auto">
            <FormLabel mt="5">Email</FormLabel>
            <Input type="email" placeholder="Email" />
            <FormLabel my="3">Password</FormLabel>
            <Input type="Password" placeholder="Password" />
            <Button m="auto" mt="10" w="80%" colorScheme="blue">
              LogIn
            </Button>
          </FormControl>
          <Checkbox defaultChecked>Keeped Me Logged In</Checkbox>
          <Flex gap="3">
            <Link color={"blue.700"}>Forgot Username?</Link>
            <Link color={"blue.700"}>Forgot Password?</Link>
          </Flex>
          <Link  color={"blue.700"}>Can't Login?</Link>
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
          src="https://cdn-images.mailchimp.com/billboards/phpza0iJx.jpeg"
          alt="p1"
          w="70%"
        />
      </Flex>
    </>
  );
}

export default Login;
