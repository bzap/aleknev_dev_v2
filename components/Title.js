import {
    Flex,
    Heading
} from '@chakra-ui/react';
import Wave from './Variants/Wave';

const underLined = {
    About: 'About',
    Some: 'Projects.',
    Contact: 'Contact'
}

const Title = ({title}) => { 
    // console.log(titxe.split(' '))
    let splitTitle = title.split(' ')
    console.log(splitTitle, underLined[splitTitle[0]])
    if (splitTitle[0] === underLined[splitTitle[0]]){
        console.log('future')
    }
    return ( 
        <Flex
            position={'relative'}
            zIndex={0}>s
                <Heading
                    color={'blackAlpha.800'}
                    position={'relative'}
                    fontSize={{ 
                        base: '2.3em', 
                        sm: '3em', 
                        md: '5em', 
                        lg: '2.4em' }}>
                            <Wave text={title}/>
                </Heading>
        </Flex>
    )
}

export default Title