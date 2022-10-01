import React from 'react'
import {
    Flex,
    Heading,
    Box,
    Text,
    List,
    ListIcon,
    Divider,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverArrow,
    PopoverHeader,
    PopoverBody,
    PopoverCloseButton,
    Button,
    Grid,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Accordion,
    Link,
    Image,
  } from "@chakra-ui/react";
  import { CheckIcon, CloseIcon, TriangleDownIcon } from "@chakra-ui/icons";
  import { NavLink } from "react-router-dom";
function MarketingPlatform() {
  return (
    <>
                <Flex w={"90%"} m="auto">
              <Box
                w={"25%"}
                h="auto"
                p={5}
                border="1px"
                borderColor="blue.800"
                textAlign={"left"}
              >
                <Heading>Premium</Heading>
                <Text>
                  Our most advanced tools, unlimited contacts, and priority
                  support; built for teams.
                </Text>
                <Text mt={4}>Starts at</Text>
                <Heading>₹ 23,000</Heading>
                <Text>/month based on 10,000 contacts*</Text>
                <NavLink id="signup" to="/signup">
                  <Button
                    borderRadius={"full"}
                    bg="#ffe01b"
                    variant="outline"
                    colorScheme="teal"
                  >
                    Buy Now
                  </Button>
                </NavLink>
                <List mt={5} spacing={3}>
                  <Flex>
                    <ListIcon as={CheckIcon} color="teal.500" />
                    <Popover>
                      <PopoverTrigger>
                        <Text color="teal.500">Phone and Priority Support</Text>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Phone & Priority Support</PopoverHeader>
                        <PopoverBody>
                          Priority email and chat support 24/7. Phone support
                          available during business hours.
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Flex>
                  <Divider color={"#d99536"} />

                  <Flex>
                    <ListIcon as={CheckIcon} color="teal.500" />
                    <Popover>
                      <PopoverTrigger>
                        <Text color="teal.500"> Max Contacts:Unlimited</Text>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Max Contacts:Unlimited</PopoverHeader>
                        <PopoverBody>
                          The maximum number of email addresses you can store in
                          Mailchimp.
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Flex>
                  <Divider color={"#d99536"} />

                  <Flex>
                    <ListIcon as={CheckIcon} color="teal.500" />
                    <Popover>
                      <PopoverTrigger>
                        <Text color="teal.500">
                          {" "}
                          Custom-Coded and Pre-built Email Templates
                        </Text>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>
                          Custom-Coded and Pre-built Email Templates
                        </PopoverHeader>
                        <PopoverBody>
                          Custom-Coded Templates Take control of your email
                          design by using your own custom-coded HTML templates.
                        </PopoverBody>
                        <PopoverBody>
                          Pre-Built Email Templates Enhance your emails with
                          customizeable templates for any occassion. Additional
                          Marketplace templates available as add-ons for
                          Standard and Premium plans."
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Flex>
                  <Divider color={"#d99536"} />

                  <Flex>
                    <ListIcon as={CheckIcon} color="teal.500" />
                    <Popover>
                      <PopoverTrigger>
                        <Text color="teal.500">Multivariate & A/B Testing</Text>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>
                          Multivariate & A/B Testing
                        </PopoverHeader>
                        <PopoverBody>
                          Multivariate Testing Test up to eight campaign
                          variations to see what changes make the biggest impact
                          on engagement and conversion.
                        </PopoverBody>
                        <PopoverBody>
                          A/B Testing Test different subject lines, design,
                          content, and send-times so you can learn what works
                          best for your audience
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Flex>
                  <Divider color={"#d99536"} />

                  <Flex>
                    <ListIcon as={CheckIcon} color="teal.500" />
                    <Popover>
                      <PopoverTrigger>
                        <Text color="teal.500">
                          Enhanced Automated Customer Journeys
                        </Text>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>
                          Enhanced Automated Customer Journeys
                        </PopoverHeader>
                        <PopoverBody>
                          Essentials: Customer Journey Builder Build automated
                          workflows to send relevant messages based on how your
                          customers interact with your brand.
                        </PopoverBody>
                        <PopoverBody>
                          Standard & Premium: Customer Journey Builder Branching
                          Points Create and automate unique, adaptable journeys
                          for any customer scenario with full functionality of
                          our Customer Journey Builder.{" "}
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Flex>
                  <Divider color={"#d99536"} />

                  <Flex>
                    <ListIcon as={CheckIcon} color="teal.500" />
                    <Popover>
                      <PopoverTrigger>
                        <Text color="teal.500">Predictive Segmentation</Text>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Predictive Segmentation</PopoverHeader>
                        <PopoverBody>
                          Target the right customers to win more repeat-business
                          with our predictive analytics tools that can estimate
                          future the buying behavior of your customers.
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Flex>
                  <Divider color={"#d99536"} />

                  <Flex>
                    <ListIcon as={CheckIcon} color="teal.500" />
                    <Popover>
                      <PopoverTrigger>
                        <Text color="teal.500">
                          Dedicated Onboarding Specialist
                        </Text>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>
                          Dedicated Onboarding Specialist
                        </PopoverHeader>
                        <PopoverBody>
                          Get a discovery consultation, personalized action plan
                          based on your business goals, and 30 days of on-demand
                          access to our onboarding team.
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Flex>
                  <Divider color={"#d99536"} />
                </List>
              </Box>

              <Box
                w={"25%"}
                h="auto"
                p={5}
                border="1px"
                borderColor="blue.800"
                textAlign={"left"}
              >
                <Heading>Standard</Heading>
                <Text>
                  Sell even more with personalization, optimization tools, and
                  enhanced automations.
                </Text>
                <Text mt={4}>Starts at</Text>
                <Heading>₹ 1,150</Heading>
                <Text>/month based on 500 contacts*</Text>
                <NavLink id="signup" to="/signup">
                  <Button
                    borderRadius={"full"}
                    bg="#ffe01b"
                    variant="outline"
                    colorScheme="teal"
                  >
                    Buy Now
                  </Button>
                </NavLink>
                <List mt={5} spacing={3}>
                  <Flex>
                    <ListIcon as={CheckIcon} color="teal.500" />
                    <Popover>
                      <PopoverTrigger>
                        <Text color="teal.500">24/7 Email & Chat Support</Text>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>24/7 Email & Chat Support</PopoverHeader>
                        <PopoverBody>
                          Priority email and chat support 24/7. Phone support
                          available during business hours.
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Flex>
                  <Divider color={"#d99536"} />

                  <Flex>
                    <ListIcon as={CheckIcon} color="teal.500" />
                    <Popover>
                      <PopoverTrigger>
                        <Text color="teal.500"> Max Contacts: 100,000</Text>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Max Contacts: 100,000</PopoverHeader>
                        <PopoverBody>
                          The maximum number of email addresses you can store in
                          Mailchimp.
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Flex>
                  <Divider color={"#d99536"} />

                  <Flex>
                    <ListIcon as={CheckIcon} color="teal.500" />
                    <Popover>
                      <PopoverTrigger>
                        <Text color="teal.500">
                          {" "}
                          Custom-Coded and Pre-built Email Templates
                        </Text>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>
                          Custom-Coded and Pre-built Email Templates
                        </PopoverHeader>
                        <PopoverBody>
                          Custom-Coded Templates Take control of your email
                          design by using your own custom-coded HTML templates.
                        </PopoverBody>
                        <PopoverBody>
                          Pre-Built Email Templates Enhance your emails with
                          customizeable templates for any occassion. Additional
                          Marketplace templates available as add-ons for
                          Standard and Premium plans."
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Flex>
                  <Divider color={"#d99536"} />

                  <Flex>
                    <ListIcon as={CheckIcon} color="teal.500" />
                    <Popover>
                      <PopoverTrigger>
                        <Text color="teal.500">A/B Testing</Text>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader> A/B Testing</PopoverHeader>
                        <PopoverBody>
                          A/B Testing Test different subject lines, design,
                          content, and send-times so you can learn what works
                          best for your audience
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Flex>
                  <Divider color={"#d99536"} />

                  <Flex>
                    <ListIcon as={CheckIcon} color="teal.500" />
                    <Popover>
                      <PopoverTrigger>
                        <Text color="teal.500">
                          Enhanced Automated Customer Journeys
                        </Text>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>
                          Enhanced Automated Customer Journeys
                        </PopoverHeader>
                        <PopoverBody>
                          Essentials: Customer Journey Builder Build automated
                          workflows to send relevant messages based on how your
                          customers interact with your brand.
                        </PopoverBody>
                        <PopoverBody>
                          Standard & Premium: Customer Journey Builder Branching
                          Points Create and automate unique, adaptable journeys
                          for any customer scenario with full functionality of
                          our Customer Journey Builder.{" "}
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Flex>
                  <Divider color={"#d99536"} />

                  <Flex>
                    <ListIcon as={CheckIcon} color="teal.500" />
                    <Popover>
                      <PopoverTrigger>
                        <Text color="teal.500">Predictive Segmentation</Text>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Predictive Segmentation</PopoverHeader>
                        <PopoverBody>
                          Target the right customers to win more repeat-business
                          with our predictive analytics tools that can estimate
                          future the buying behavior of your customers.
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Flex>
                  <Divider color={"#d99536"} />

                  <Flex>
                    <ListIcon as={CloseIcon} color="teal.500" />
                    <Popover>
                      <PopoverTrigger>
                        <Text color="#dfdddc">
                          Dedicated Onboarding Specialist
                        </Text>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>
                          Dedicated Onboarding Specialist
                        </PopoverHeader>
                        <PopoverBody>
                          Get a discovery consultation, personalized action plan
                          based on your business goals, and 30 days of on-demand
                          access to our onboarding team.
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Flex>
                  <Divider color={"#d99536"} />
                </List>
              </Box>

              <Box
                w={"25%"}
                h="auto"
                p={5}
                border="1px"
                borderColor="blue.800"
                textAlign={"left"}
              >
                <Heading>Essentials</Heading>
                <Text>
                  Send the right content at the right time with testing and
                  scheduling features.
                </Text>
                <Text mt={4}>Starts at</Text>
                <Heading>₹ 770</Heading>
                <Text>/month based on 500 contacts*</Text>
                <NavLink id="signup" to="/signup">
                  <Button
                    borderRadius={"full"}
                    bg="#ffe01b"
                    variant="outline"
                    colorScheme="teal"
                  >
                    Buy Now
                  </Button>
                </NavLink>
                <List mt={5} spacing={3}>
                  <Flex>
                    <ListIcon as={CheckIcon} color="teal.500" />
                    <Popover>
                      <PopoverTrigger>
                        <Text color="teal.500">24/7 Email & Chat Support</Text>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>24/7 Email & Chat Support</PopoverHeader>
                        <PopoverBody>
                          Priority email and chat support 24/7. Phone support
                          available during business hours.
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Flex>
                  <Divider color={"#d99536"} />

                  <Flex>
                    <ListIcon as={CheckIcon} color="teal.500" />
                    <Popover>
                      <PopoverTrigger>
                        <Text color="teal.500"> Max Contacts:50,000</Text>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Max Contacts:50,000</PopoverHeader>
                        <PopoverBody>
                          The maximum number of email addresses you can store in
                          Mailchimp.
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Flex>
                  <Divider color={"#d99536"} />

                  <Flex>
                    <ListIcon as={CheckIcon} color="teal.500" />
                    <Popover>
                      <PopoverTrigger>
                        <Text color="teal.500">Pre built Email Templates</Text>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Pre built Email Templates</PopoverHeader>
                        <PopoverBody>
                          Custom-Coded Templates Take control of your email
                          design by using your own custom-coded HTML templates.
                        </PopoverBody>
                        <PopoverBody>
                          Pre-Built Email Templates Enhance your emails with
                          customizeable templates for any occassion. Additional
                          Marketplace templates available as add-ons for
                          Standard and Premium plans."
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Flex>
                  <Divider color={"#d99536"} />

                  <Flex>
                    <ListIcon as={CheckIcon} color="teal.500" />
                    <Popover>
                      <PopoverTrigger>
                        <Text color="teal.500">A/B Testing</Text>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>A/B Testing</PopoverHeader>
                        <PopoverBody>
                          A/B Testing Test different subject lines, design,
                          content, and send-times so you can learn what works
                          best for your audience
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Flex>
                  <Divider color={"#d99536"} />

                  <Flex>
                    <ListIcon as={CheckIcon} color="teal.500" />
                    <Popover>
                      <PopoverTrigger>
                        <Text color="teal.500">
                          Basic Automated Customer Journeys
                        </Text>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>
                          Basic Automated Customer Journeys
                        </PopoverHeader>
                        <PopoverBody>
                          Essentials: Customer Journey Builder Build automated
                          workflows to send relevant messages based on how your
                          customers interact with your brand.
                        </PopoverBody>
                        <PopoverBody>
                          Standard & Premium: Customer Journey Builder Branching
                          Points Create and automate unique, adaptable journeys
                          for any customer scenario with full functionality of
                          our Customer Journey Builder.{" "}
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Flex>
                  <Divider color={"#d99536"} />

                  <Flex>
                    <ListIcon as={CloseIcon} color="teal.500" />
                    <Popover>
                      <PopoverTrigger>
                        <Text color="#dfdddc">Predictive Segmentation</Text>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Predictive Segmentation</PopoverHeader>
                        <PopoverBody>
                          Target the right customers to win more repeat-business
                          with our predictive analytics tools that can estimate
                          future the buying behavior of your customers.
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Flex>
                  <Divider color={"#d99536"} />

                  <Flex>
                    <ListIcon as={CloseIcon} color="teal.500" />
                    <Popover>
                      <PopoverTrigger>
                        <Text color="#dfdddc">
                          Dedicated Onboarding Specialist
                        </Text>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>
                          Dedicated Onboarding Specialist
                        </PopoverHeader>
                        <PopoverBody>
                          Get a discovery consultation, personalized action plan
                          based on your business goals, and 30 days of on-demand
                          access to our onboarding team.
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Flex>
                  <Divider color={"#d99536"} />
                </List>
              </Box>

              <Box
                w={"25%"}
                h="auto"
                p={5}
                border="1px"
                borderColor="blue.800"
                textAlign={"left"}
              >
                <Heading>Free</Heading>
                <Text>
                  Easily create email campaigns and learn more about your
                  customers
                </Text>
                <Text mt={4}></Text>
                <Heading>₹ 0</Heading>
                <Text>/month based on 500 contacts*</Text>
                <NavLink id="signup" to="/signup">
                  <Button
                    borderRadius={"full"}
                    bg="#ffe01b"
                    variant="outline"
                    colorScheme="teal"
                  >
                    Sign Up For Free
                  </Button>
                </NavLink>
                <List mt={5} spacing={3}>
                  <Flex>
                    <ListIcon as={CheckIcon} color="teal.500" />
                    <Popover>
                      <PopoverTrigger>
                        <Text color="teal.500">
                          Email support for first 30 days
                        </Text>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>
                          Email support for first 30 days
                        </PopoverHeader>
                        <PopoverBody>
                          Priority email and chat support 24/7. Phone support
                          available during business hours.
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Flex>
                  <Divider color={"#d99536"} />

                  <Flex>
                    <ListIcon as={CheckIcon} color="teal.500" />
                    <Popover>
                      <PopoverTrigger>
                        <Text color="teal.500"> Max Contacts: 500</Text>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Max Contacts: 500</PopoverHeader>
                        <PopoverBody>
                          The maximum number of email addresses you can store in
                          Mailchimp.
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Flex>
                  <Divider color={"#d99536"} />

                  <Flex>
                    <ListIcon as={CheckIcon} color="teal.500" />
                    <Popover>
                      <PopoverTrigger>
                        <Text color="teal.500">Pre-built Email Templates</Text>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Pre-built Email Templates</PopoverHeader>
                        <PopoverBody>
                          Custom-Coded Templates Take control of your email
                          design by using your own custom-coded HTML templates.
                        </PopoverBody>
                        <PopoverBody>
                          Pre-Built Email Templates Enhance your emails with
                          customizeable templates for any occassion. Additional
                          Marketplace templates available as add-ons for
                          Standard and Premium plans."
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Flex>
                  <Divider color={"#d99536"} />

                  <Flex>
                    <ListIcon as={CloseIcon} color="teal.500" />
                    <Popover>
                      <PopoverTrigger>
                        <Text color="#dfdddc">Multivariate & A/B Testing</Text>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>
                          Multivariate & A/B Testing
                        </PopoverHeader>
                        <PopoverBody>
                          Multivariate Testing Test up to eight campaign
                          variations to see what changes make the biggest impact
                          on engagement and conversion.
                        </PopoverBody>
                        <PopoverBody>
                          A/B Testing Test different subject lines, design,
                          content, and send-times so you can learn what works
                          best for your audience
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Flex>
                  <Divider color={"#d99536"} />

                  <Flex>
                    <ListIcon as={CloseIcon} color="teal.500" />
                    <Popover>
                      <PopoverTrigger>
                        <Text color="#dfdddc">
                          Enhanced Automated Customer Journeys
                        </Text>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>
                          Enhanced Automated Customer Journeys
                        </PopoverHeader>
                        <PopoverBody>
                          Essentials: Customer Journey Builder Build automated
                          workflows to send relevant messages based on how your
                          customers interact with your brand.
                        </PopoverBody>
                        <PopoverBody>
                          Standard & Premium: Customer Journey Builder Branching
                          Points Create and automate unique, adaptable journeys
                          for any customer scenario with full functionality of
                          our Customer Journey Builder.{" "}
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Flex>
                  <Divider color={"#d99536"} />

                  <Flex>
                    <ListIcon as={CloseIcon} color="teal.500" />
                    <Popover>
                      <PopoverTrigger>
                        <Text color="#dfdddc">Predictive Segmentation</Text>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Predictive Segmentation</PopoverHeader>
                        <PopoverBody>
                          Target the right customers to win more repeat-business
                          with our predictive analytics tools that can estimate
                          future the buying behavior of your customers.
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Flex>
                  <Divider color={"#d99536"} />

                  <Flex>
                    <ListIcon as={CloseIcon} color="teal.500" />
                    <Popover>
                      <PopoverTrigger>
                        <Text color="#dfdddc">
                          Dedicated Onboarding Specialist
                        </Text>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>
                          Dedicated Onboarding Specialist
                        </PopoverHeader>
                        <PopoverBody>
                          Get a discovery consultation, personalized action plan
                          based on your business goals, and 30 days of on-demand
                          access to our onboarding team.
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Flex>
                  <Divider color={"#d99536"} />
                </List>
              </Box>
            </Flex>

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
            Also included: Free tools for getting your business online
          </Heading>
          <Text fontSize={"lg"} my="5" w="80%">
            All Marketing plans come with Free website and commerce features, so
            you can build your dream online presence. But if you want more
            advanced tools for selling and scheduling, try combining your
            Marketing plan with a paid Websites & Commerce plan.
          </Text>
          <Button
            borderRadius={"full"}
            bg="#ffe01b"
            variant="outline"
            colorScheme="teal"
          >
            See Websites & Commerce plans
          </Button>
        </Box>

        <Box textAlign={"left"}>
          <Heading w="90%" my="5">
            Prefer to pay as you go?
          </Heading>
          <Text fontSize={"lg"} my="5" w="80%" mb="20">
            Instead of paying a monthly recurring charge, you can buy email
            credits as needed through our Pay As You Go plan. It's best for
            infrequent senders.
          </Text>
          <Button
            borderRadius={"full"}
            bg="#ffe01b"
            variant="outline"
            colorScheme="teal"
          >
            Learn More
          </Button>
        </Box>

        <Box textAlign={"left"}>
          <Heading w="90%" my="5">
            Two-factor authentication discount
          </Heading>
          <Text fontSize={"lg"} my="5" w="80%">
            All Marketing plans come with Free website and commerce features, so
            you can build your dream online presence. But if you want more
            advanced tools for selling and scheduling, try combining your
            Marketing plan with a paid Websites & Commerce plan. See Websites &
            Commerce plans{" "}
          </Text>
          <Button
            borderRadius={"full"}
            bg="#ffe01b"
            variant="outline"
            colorScheme="teal"
          >
            See Websites & Commerce plans
          </Button>
        </Box>

        <Box textAlign={"left"}>
          <Heading w="90%" my="5">
          Rates for nonprofits and charities
          </Heading>
          <Text fontSize={"lg"} my="5" w="80%" mb="100px">
          Mailchimp offers a 15% discount to nonprofits and charities. To request the discount, sign up for a free account, and contact our Billing team with your username and a link to your organization’s website.
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

      <Heading mt="10">FAQ</Heading>
      <Accordion allowToggle w="85%" m="auto" p="10">
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading fontSize={"2xl"}>
                  {" "}
                  What payment methods do you offer?
                </Heading>
              </Box>
              <TriangleDownIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} w="60%" textAlign={"left"}>
            <Text fontSize={"xl"}>
              {" "}
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
                  How do I switch to a different plan?
                </Heading>
              </Box>
              <TriangleDownIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} w="60%" textAlign={"left"}>
            <Text fontSize={"xl"}>
              {" "}
              You can switch to a new plan at any time by going to the Billing
              page in your account. Select the plan you’d like to switch to and
              immediately start using new features.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading fontSize={"2xl"}>Can I buy credits instead?</Heading>
              </Box>
              <TriangleDownIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} w="60%" textAlign={"left"}>
            <Text fontSize={"xl"}>
              Yes. If you send emails infrequently and prefer to pay as you go,
              you can buy email credits as an alternative to a monthly plan.
            </Text>
            <Link>See how it works</Link>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading fontSize={"2xl"}>
                  Do you have pricing for high-volume email senders?
                </Heading>
              </Box>
              <TriangleDownIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} w="60%" textAlign={"left"}>
            <Text fontSize={"xl"}>
              We do indeed. If you have more than 200,000 contacts, we have a
              high-volume plan that can meet your needs.
            </Text>
            <Link>Contact us for pricing</Link>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading fontSize={"2xl"}>
                  What happens if I hit my contact or sending limit?
                </Heading>
              </Box>
              <TriangleDownIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} w="60%" textAlign={"left"}>
            <Text fontSize={"xl"}>
              Mailchimp will automatically bill you for your overages. As long
              as you pay for your overages on time, we will not stop your
              campaigns or pause your account.{" "}
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

                <Box>
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
  )
}

export default MarketingPlatform