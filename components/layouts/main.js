import React from 'react';
import { Container, Flex, Box } from '@chakra-ui/react';

const Layout = ({ children }) => { 
    const containerRef = React.useRef(null)
    function mouseMoveEvent(e) {
        const { x, y } = containerRef.current.getBoundingClientRect();
        containerRef.current.style.setProperty('--x', e.clientX - x);
        containerRef.current.style.setProperty('--y', e.clientY - y);
      }
    
    React.useEffect(() => {
            if (containerRef) {
            containerRef.current.addEventListener('mousemove', mouseMoveEvent)
            }
        return () => containerRef.current.removeEventListener('mousemove', mouseMoveEvent)
    }, [containerRef])
    return (    
        <Box
            className={'grad'}
            ref={containerRef}
            maxH={'max-content'}
            overflow={'hidden'}
            px={{ base: '5%', sm: '5%', md: '5%', lg: '0'}}
            bg='#F2F2F2'>
                <Container
                    overflow={'scroll'}
                    maxW='65em' 
                    width='100%' 
                    margin='auto' 
                    minH='120%' 
                    
                    maxH={'100%'}
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