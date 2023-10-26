import {
    Flex,
    Heading,
    Text,
} from '@chakra-ui/react';
import LazyImageAnimator from '../projects/LazyImageAnimator';

const MDXComponents = {
    h1: (props) => <Heading fontSize={18} {...props} />,
    h2: (props) =>
        <Flex
            py={2}
            px={{ 
                base: '0.5em', 
                sm: '0.5em', 
                md: '1em', 
                lg: '2em' 
            }}>
                <Heading
                    fontSize={{
                        base: 23, 
                        sm: 26, 
                        md: 28, 
                        lg: 18 
                    }}
                        {...props} />
        </Flex>,
    p: (props) =>
        <Flex
            px={{ 
                base: '0.5em', 
                sm: '0.5em', 
                md: '1em', 
                lg: '2em' 
            }}>
                <Text
                    fontSize={{ 
                        base: 12, 
                        sm: 14, 
                        md: 14, 
                        lg: 12 
                    }}
                    as={'span'}
                    lineHeight={'1.3em'}
                    color={'blackAlpha.800'}
                        {...props} />
        </Flex>,
    img: (props) => <LazyImageAnimator props={props} />
}

export default MDXComponents