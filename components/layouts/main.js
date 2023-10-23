import React from 'react';
import { Container, Flex } from '@chakra-ui/react';

const Layout = ({ children }) => { 
    return (    
        <Flex
            w={'100%'}
            bg='#F2F2F2'>
                <Container
                    maxW='60em' 
                    width='100%' 
                    margin='auto' 
                    minH='120vh' 
                    userSelect={'none'}
                    left={0}
                    pl={0}
                    pr={0}> 
                        <main>{children}</main> 
                </Container> 
        </Flex>
    )   
}

export default Layout