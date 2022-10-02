import React from "react";
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import MarketingPlatform from "../Pricinng Components/MarketingPlatform";
import WebsitesAndCommerce from "../Pricinng Components/WebsitesAndCommerce";
import TransactionalEmail from "../Pricinng Components/TransactionalEmail";
function Pricing() {
  return (
    <>
      <Tabs>
        <TabList justifyContent={"space-around"}>
          <Tab>Marketing Platform</Tab>
          <Tab>Websites and Commerce</Tab>
          <Tab>Transactional Email</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
          <MarketingPlatform/>
          </TabPanel>
          <TabPanel>
           <WebsitesAndCommerce/>
          </TabPanel>
          <TabPanel>
            <TransactionalEmail/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}

export default Pricing;
