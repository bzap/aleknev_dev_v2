import React from 'react';
import { 
    Icon, 
    Link, 
    chakra, 
    shouldForwardProp, 
    Flex, 
    Container, 
    Text 
} from '@chakra-ui/react';
import { motion, isValidMotionProp } from "framer-motion";
import { footerItem } from '../styles/Variants';
import { BsFillLightningChargeFill } from 'react-icons/bs';
import { FaGithubAlt } from 'react-icons/fa';

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Footer = () => {
    return (
        <Container
            w={'100%'}
            h={'100%'}
            p={0}
            position={'relative'}
            zIndex={50}
            maxW={'100%'}>
                <Flex
                    w={'100%'}
                    justifyContent={'center'}>
                        <ChakraBox
                            pt={'15px'}
                            as={motion.div}
                            variants={footerItem}
                            initial={'hidden'}
                            whileInView={'visible'}
                            viewport={{ once: true }}
                            pb={'1em'}
                            backdropFilter='auto'
                            backdropBlur='8px'
                            position='relative'
                            bottom={0}
                            borderRadius={'12px'}
                            justifyContent={'center'}>
                                <Flex
                                    justifyContent={'center'}
                                    direction={'row'}
                                    alignItems={'center'}>
                                        <Icon
                                            position={'relative'}
                                            alignItems={'center'}
                                            color={'blackAlpha.400'}
                                            as={BsFillLightningChargeFill} />
                                        <Text
                                            position={'relative'}
                                            color={'blackAlpha.400'}
                                            fontSize={{ 
                                                base: 13.5, 
                                                sm: 14, 
                                                md: 15, 
                                                lg: 16 
                                            }}>
                                                &nbsp;Designed and developed by Linas&nbsp;
                                        </Text>
                                        <Icon
                                            position={'relative'}
                                            alignItems={'center'}
                                            color={'blackAlpha.400'}
                                            as={BsFillLightningChargeFill} />
                                </Flex>
                                <Link 
                                    style={{ 'textDecoration': 'none' }}
                                    href={'https://github.com/bzap/aleknev-dev'}
                                    isExternal>
                                        <ChakraBox
                                            position={'relative'}
                                            as={motion.div}
                                            h={'container'}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.99 }}>
                                                <Flex
                                                    position={'relative'}
                                                    w={'auto'}
                                                    justifyContent={'center'}
                                                    direction={'row'}
                                                    alignItems={'center'}>
                                                        <Icon
                                                            position={'relative'}
                                                            alignItems={'center'}
                                                            color={'blackAlpha.400'}
                                                            as={FaGithubAlt} />
                                                        <Text
                                                            position={'relative'}
                                                            color={'blackAlpha.400'}
                                                            fontSize={{ 
                                                                base: 13.5, 
                                                                sm: 14, 
                                                                md: 15, 
                                                                lg: 16 
                                                            }}>
                                                            &nbsp;Site Repo&nbsp;
                                                        </Text>
                                                        <Icon
                                                            position={'relative'}
                                                            alignItems={'center'}
                                                            color={'blackAlpha.400'}
                                                            as={FaGithubAlt} />
                                                </Flex>
                                        </ChakraBox>
                                </Link>
                        </ChakraBox>
                </Flex>
        </Container>
    )
}

export default Footer