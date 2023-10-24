
import { useState } from "react";
import { tabs } from '../../public/data/TabContent';
import {
    Flex,
    Heading,
    Center,
    chakra,
    Button,
    Text,
    Tabs, 
    TabList, 
    TabPanels, 
    Tab, 
    TabPanel,
    shouldForwardProp
} from '@chakra-ui/react';
import { isValidMotionProp, motion } from "framer-motion";
import { Link } from "react-scroll/modules";

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const MobileTabs = () => {
    const [selectedTab, setSelectedTab] = useState(tabs[3])
    return (
        <Flex
            justify={'flex-end'}>
                <Flex
                    w={'7.5em'}
                    pt={2}
                    direction={'column'}>
                        <Tabs
                        mt={-1}
                        variant={'unstyled'}>
                        {tabs.map((item, idx) => (
                        <Link 
                        key={idx}
                        activeClass="active"
                        to={idx.toString()}
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={900}>
                            <Tab
                            mt={1.5}
                            w={'full'}
                            borderRadius={'lg'}
                            _hover={{'bg': '#efefef'}}
                            _active={{'bg': '#e0e0e0'}}
                            >
                                    <Heading
                                    fontSize={12}>
                                        {item.label}
                                    </Heading>
                
                            </Tab>
                            </Link>
                        ))}
                        </Tabs>

                </Flex>
        </Flex>
    )
}

export default MobileTabs