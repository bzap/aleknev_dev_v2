import {
    Flex,
    chakra,
    Icon,
    shouldForwardProp,
} from '@chakra-ui/react';
import { AnimatePresence, motion, isValidMotionProp } from 'framer-motion';
import { arrowContainer, gitGT } from '../styles/Variants';
import { HiChevronDown } from 'react-icons/hi';

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const ScrollIndicator = () => { 
    return ( 
         <AnimatePresence mode='wait'>   
            <ChakraBox
                as={motion.div}
                initial={'hidden'}
                animate={'visible'}
                variants={arrowContainer}>
                    <Flex
                        alignItems={'center'}
                        direction={'row'}>
                            <ChakraBox
                                as={motion.div}
                                variants={gitGT}>
                                    <Icon
                                        w={'1.5em'}
                                        h={'1.5em'}
                                        as={HiChevronDown}
                                    />
                            </ChakraBox>
                            <ChakraBox
                                position={'relative'}
                                as={motion.div}
                                variants={gitGT}>
                                    <Icon
                                        w={'1.5em'}
                                        h={'1.5em'}
                                        as={HiChevronDown}
                                    />
                            </ChakraBox>
                            <ChakraBox
                                position={'relative'}
                                as={motion.div}
                                variants={gitGT}>
                                    <Icon
                                        w={'1.5em'}
                                        h={'1.5em'}
                                        as={HiChevronDown}
                                    />
                            </ChakraBox>
                    </Flex>
            </ChakraBox>
        </AnimatePresence>
    )
}

export default ScrollIndicator