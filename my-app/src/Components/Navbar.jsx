import React from "react";
import {
  Flex,
  Spacer,
  ButtonGroup,
  Button,
  Select,
  Image,
  Link,
} from "@chakra-ui/react";
import Products from "../Pages/Product";
import Resources from "../Pages/Resources";
import Inspiration from "../Pages/Inspiration";
function Navbar() {
  return (
    <div>
      <Flex minWidth="max-content" alignItems="center" px="10" gap="2">
        <Flex p="2" alignItems={"center"} gap="12">
          <Link>
            <Products />
          </Link>
          <Link>
            <Resources />
          </Link>
          <Link><Inspiration/></Link>
          <Link>Pricing</Link>
        </Flex>
        <Spacer />
        <Image
          src="https://logos-world.net/wp-content/uploads/2021/02/Mailchimp-Logo-2018-present.png"
          width={180}
          alt="logo"
        />
        <Spacer />
        <ButtonGroup gap="2">
          <Select w={130} placeholder="English">
            <option>Español</option>
            <option>Français</option>
            <option>Portuguesa</option>
            <option>Deutsch</option>
            <option>Italiano</option>
          </Select>
          <Button borderRadius={'full'} variant="outline" colorScheme="teal">
            Sign Up
          </Button>
          <Button borderRadius={'full'} bg="#ffe01b"  variant="outline" colorScheme="teal">
            Sign Up
          </Button>
        </ButtonGroup>
      </Flex>
    </div>
  );
}

export default Navbar;
