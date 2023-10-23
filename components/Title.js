import {
    Flex,
    Heading
} from '@chakra-ui/react';
import Wave from './Variants/Wave';

const Title = ({title}) => { 
    return ( 
        <Flex
            position={'relative'}
            zIndex={0}>
                <Heading
                    color={'blackAlpha.800'}
                    position={'relative'}
                    fontSize={{ 
                        base: '2.3em', 
                        sm: '3em', 
                        md: '5em', 
                        lg: '7em' }}>
                            <Wave text={title}/>
                </Heading>
        </Flex>
    )
}

export default Title