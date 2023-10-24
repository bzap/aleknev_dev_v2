
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
            pb={'0.5em'}
            justify={'flex-end'}>
                <Flex
                    w={'7.5em'}
                    mr={3}
                    pt={1}
                    direction={'column'}>
                        <Tabs
                        mt={-1}
                        variant={'unstyled'}>
                        {tabs.map((item, idx) => (
                            <Tab
                            mt={1.5}
                            w={'full'}
                            borderRadius={'lg'}
                            _hover={{'bg': '#efefef'}}
                            _active={{'bg': '#e0e0e0'}}
                            >
                                <Link 
                                key={idx}
                                activeClass="active"
                                to={idx.toString()}
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={2200}>
                                    <Heading
                                    fontSize={12}>
                                        {item.label}
                                    </Heading>
                                </Link>

                            </Tab>

                        ))}
                        </Tabs>

                </Flex>
        </Flex>
    )
}

export default MobileTabs