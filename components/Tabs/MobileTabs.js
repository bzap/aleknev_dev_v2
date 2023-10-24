
import { useState } from "react";
import { tabs } from '../../public/data/TabContent';
import {
    Flex,
    Heading,
    Center,
    chakra,
    Button,
    Text,
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
                        {tabs.map((item, idx) => (
                            <Link
                        
                                key={idx}
                                activeClass="active"
                                to={idx.toString()}
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={2200}>
                                    <Center
                                        w={'100%'}
                                        className={item === selectedTab ? 'selected' : ''}
                                        onClick={() => {
                                            setSelectedTab(item)
                                        }}>
                                        <Button
                                            variant={'none'}
                                            size={'sm'}
                                            w={'100%'}
                                            borderRadius={'12px'}
                                            as={motion.div}
                                            py={'2'}
                                            
                                            borderWidth={'1px'}
                                            borderColor={'transparent'}
                                            cursor={'pointer'}
                                            _hover={{ 
                                                'background-color': '#e4e4e480',
                                            }}>
                                                <Flex>
                                                    <Heading
                                                            w={'100%'}
                                                            textAlign={'center'}
                                                            fontSize={12}
                                                            color='blackAlpha.800'>
                                                            {item.label}
                                                        </Heading>
                                                </Flex>
                                   

                                          
                                        </Button>
                                    </Center>
                            </Link>
                        ))}
                </Flex>
        </Flex>
    )
}

export default MobileTabs