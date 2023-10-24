import React from 'react';
import { Container, Flex, Box } from '@chakra-ui/react';

const Layout = ({ children }) => { 
    return (    
        <Box
            height={'120vh'}
            bg='#F2F2F2'>
                <Container
                    maxW='60em' 
                    width='100%' 
                    margin='auto' 
                    minH='120%' 
                    bg='#F2F2F2'
                    userSelect={'none'}
                    left={0}
                    pl={0}
                    pr={0}> 
                        <main>{children}</main> 
                </Container> 
        </Box>
    )   
}

export default Layout