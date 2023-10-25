import {
    Center,
    Divider,
    Stack,
    Flex,
    Heading,
    Button,
    Text,
    useDisclosure,
    Image,
    Icon,
    ModalOverlay,
    Link,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Modal,
    ModalFooter,
    Spacer,
    chakra,
    shouldForwardProp
  } from '@chakra-ui/react';
import { pskillsItem, item, pillItem } from '../../styles/Variants';
import { motion, isValidMotionProp } from "framer-motion";
import { useRef } from 'react';
import projects from '../../public/data/ProjectText';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from './MDXComponents';
import dynamic from 'next/dynamic';

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });


const Preview = ({index}) => {
    return (
        <Stack>
            <Flex
                justifyContent={'center'}
                overflow='hidden'>
                    {projectImages(projects[index].image)}
            </Flex>
            <Flex
                direction={'column'}
                px={{
                    base: 6, 
                    sm: 9, 
                    md: 9, 
                    lg: '9%'
                }}
                pt={{
                    base: 4, 
                    sm: 4, 
                    md: '2em', 
                    lg: 2
                }}
                spacing={-1}>
                    <ChakraBox
                        pb={1}
                      //  variants={item}
                        >
                            {projectTitle(projects[index].name)}
                    </ChakraBox>
                    <Flex
                        w={'100%'}
                        position={'relative'}
                        justifyContent={'space-between'}>
                            {projects[index].tech.map((x, idx) => (
                                projectSkill(x, projects[index].icons[idx])
                            ))}
                    </Flex> 
            </Flex> 
            <Stack
                px={{ 
                    base: 6, 
                    sm: 9, 
                    md: 9, 
                    lg: '9%' 
                }}>
                    <ChakraBox
                     //   variants={item}
                        >
                            <Center>
                                {projectDesc(projects[index].desc)}
                            </Center>
                    </ChakraBox>
            </Stack>
            <ChakraBox
            pb={{
                base: 8, 
                sm: 8, 
                md: '0em', 
                lg: 4
            }}
            px={{ 
                base: 6, 
                sm: 9, 
                md: 9, 
                lg: '6%' 
            }}>
                <Flex>
                    {modalButton(projects[index].buttons[0], index)}
                    <Spacer />
                    {projectButton(projects[index].buttons[1], projects[index].link)}
                </Flex>
            </ChakraBox>
        </Stack>
    )
}

const projectImages = (props) => { 
    return (
        <Image
            opacity={0.8}
            align={'center'}
            borderTopRadius={'10px'}
            h={'12em'}
            w={'full'}
            fit={'background'}
            src={props} />
    )
}

const projectTitle = (props) => { 
    return ( 
        <Heading
            color={'blackAlpha.800'}
            fontSize={{ 
                base: 30, 
                sm: 40, 
                md: 40, 
                lg: 20
            }}> 
                {props} 
        </Heading> 
    )
}

const projectSkill = (props, icon) => {
    return (
        <ChakraBox
            pt={'1'}
            key={props}
           // variants={pskillsItem}
            >
                <Center
                    bg={'#e4e4e480'}
                    py={1}
                    px={2.5}
                    borderRadius={'lg'}
                    direction={'row'}>
                        <Icon 
                            w={2.5}
                            h={2.5}
                            as={icon} 
                            color='black.500'/>
                        <Text
                            color={'blackAlpha.800'}
                            fontSize={{ 
                                base: 10, 
                                sm: 12, 
                                md: 12, 
                                lg: 12 
                            }}>
                                &thinsp;{props}
                        </Text>
                </Center>
        </ChakraBox>   
    )
}

const projectDesc = (props) => { 
    return ( 
        <Text 
            py={{ 
                base: 2, 
                sm: 2, 
                md: 5, 
                lg: 2 
            }}
            as='p'
            lineHeight={'1.3em'}
            fontSize={{ 
                base: 12, 
                sm: 14, 
                md: 14, 
                lg: 12
            }}
            color={'gray.600'}>  
                {props}
        </Text>
    )
}

const modalButton = (name, link) => { 
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef([])
    return (
        <Button
        variant={'unstyled'}
        _hover={{'bg': '#e1e1e1'}}
        _active={{'bg': '#cfcfcf'}}
        borderRadius={'lg'}
        size={'sm'}
        ref={btnRef}
        onClick={onOpen}
        >
                <Heading
                    py={1}
                    px={3}
                    color={'blackAlpha.800'}
                    fontSize={{ 
                        base: 14, 
                        sm: 16, 
                        md: 16, 
                        lg: 12
                    }}>
                        {name}&#160;&gt;
                </Heading>
                {contentModal(btnRef, isOpen, onOpen, onClose, link )}
        </Button>
    )
}

const projectButton = (name, link) => {
    return (
        <Link
            isExternal
            style={{ 'textDecoration': 'none' }}
            href={link}>
            <Button
            variant={'unstyled'}
            _hover={{'bg': '#e1e1e1'}}
            _active={{'bg': '#cfcfcf'}}
            borderRadius={'lg'}
            size={'sm'}
            >
                <Heading
                    color={'blackAlpha.800'}
                    py={1}
                    px={3}
                    fontSize={{ 
                        base: 14, 
                        sm: 16, 
                        md: 16, 
                        lg: 12
                    }}>
                        {name}&#160;&gt;
                        </Heading>
                </Button>
        </Link>
    )
}

const contentModal = (ref, io, oo, oc, link) => { 
    const Content = dynamic(import(`../../projects/${'Proj' + link}.mdx`))
    const title = projects[link].name
    return ( 
        <Modal
            preserveScrollBarGap
            blockScrollOnMount 
            motionPreset='slideInBottom'
            isCentered
            size={'xl'}
            onClose={oc}
            finalFocusRef={ref}
            isOpen={io}
            scrollBehavior={'inside'}>
                <ModalOverlay/>
                <ModalContent 
                    borderRadius={'12px'}
                    maxW={{
                        base: '90%', 
                        sm: '90%', 
                        md: '70%', 
                        lg: '70%', 
                        xl: '50%'
                    }}>
                        <ModalHeader
                            px={{ 
                                base: '1.9em', 
                                sm: '1.9em', 
                                md: '1.9em', 
                                lg: '18' 
                            }}>    
                                <Heading
                                    pt={{ 
                                        base: 0, 
                                        sm: 0, 
                                        md: 1, 
                                        lg: 2
                                    }}
                                    fontSize={{ 
                                        base: 30, 
                                        sm: 38, 
                                        md: 40, 
                                        lg: 22 
                                    }}
                                    px={{ 
                                        base: '1.9em', 
                                        sm: '1.9em', 
                                        md: '1.9em', 
                                        lg: '1.7em' 
                                    }}>
                                        {title}
                                </Heading>
                        </ModalHeader>
                        <Flex
                            px={{ 
                                base: '1.9em', 
                                sm: '1.9em', 
                                md: '1.9em', 
                                lg: '3.6em' 
                            }}>
                                <Divider />
                        </Flex>
                        <ModalCloseButton />
                        <ModalBody
                            userSelect={'none'}
                            pt={3}>
                                <MDXProvider components={MDXComponents}>
                                    <Content />
                                </MDXProvider>
                        </ModalBody>
                        <ModalFooter>
                        </ModalFooter>
                </ModalContent>
        </Modal>
    )
}

export default Preview