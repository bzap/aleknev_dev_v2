import React, { useEffect, useState } from 'react';
import { 
	Center, 
	Collapse, 
	Icon,
	IconButton, 
	useDisclosure, 
	chakra, 
	shouldForwardProp,
	Heading, 
	Flex, 
	Container, 
	Text,
	Box, 
	Spacer,
	useBreakpoint 
} from '@chakra-ui/react';
import { Link } from "react-scroll/modules";
import AnimatedTabs from './Tabs/Tabs';
import { motion, isValidMotionProp } from "framer-motion";
import { CloseIcon } from '@chakra-ui/icons';
import { FaLessThan, FaGreaterThan } from 'react-icons/fa'
import { SiInstagram, SiGithub, SiLinkedin } from 'react-icons/si'
import { HiMenu } from 'react-icons/hi'
import { PiInstagramLogoFill, PiLinkedinLogoFill, PiGithubLogoFill, PiLink } from 'react-icons/pi'
import MobileTabs from './Tabs/MobileTabs';
import { navContainer } from '../styles/Variants';

const ChakraBox = chakra(motion.div, {
	shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Header = ({ pos }) => {
	const { isOpen, onToggle } = useDisclosure();
	return (
		<Container>
			<Flex
				justifyContent={'center'}
				pt={'4'}>
					<ChakraBox
						as={motion.div}
						initial={'hidden'}
						//={navContainer}
						whileInView={'visible'}
						viewport={{ once: true }}
						backdropFilter='auto'
						backdropBlur='8px'
						w={'100%'}
						maxW={'60em'}
						position='fixed'
						zIndex={200}
						boxShadow={'md'}
						borderRadius={'12px'}
						bg='whiteAlpha.700'
						justifyContent={'center'}>
							{/* <Box
								display={{ 
									base: 'none', 
									sm: 'none', 
									md: 'inline', 
									lg: 'inline' 
								}}>
									{desktopContent(pos)}
							</Box> */}
							<Box
								display={'inline'}>
									{content(isOpen, onToggle)}
							</Box>
					</ChakraBox>
			</Flex>
		</Container>
	)
}

// const desktopContent = (pos) => { 
// 	return ( 
// 		<Flex	
// 			px={5}
// 			py={'13px'}
// 			align={'center'}
// 			justifyContent={'space-between'}
// 			direction={'row'}>
// 				<Link
// 					to={'home'}
// 					spy={true}
// 					smooth={true}
// 					offset={0}
// 					duration={2500}>
// 						<Center
// 							cursor={'pointer'}
// 							as={motion.div}
// 							variants={'container'}
// 							initial="hidden">
// 								{logoHeader(30)}
// 						</Center>
// 				</Link>
// 				<Spacer />
// 				<AnimatedTabs pos={pos} />
// 		</Flex>
// 	)
// }

const content = (isOpen, onToggle) => {
	return (
		<Box
			px={4}
			py={'4px'}>
				<Flex
					align={'center'}
					justifyContent={'space-between'}
					direction={'row'}>
						{logoHeader()}
						<Spacer />
						<Center
						pr={5}
						gap={3}>
							<Icon 
							w={4}
							h={4}
							as={SiGithub}/>
							<Icon 
							w={4}
							h={4}
							as={SiInstagram}/>
							<Icon 
							w={4}
							h={4}
							as={SiLinkedin}/>
						</Center>
						<Flex>
							<IconButton
								borderRadius={'lg'}
								_hover={{'background-color': '#e4e4e4'}}
								_active={{'background-color': '#e4e4e4'}}
								onClick={onToggle}
								size={'md'}
								icon={
									isOpen ?
									<CloseIcon
										w={3}
										h={3} /> 
										:	<Icon
											as={HiMenu}
											w={5}
											h={5}
											fontWeight={'bold'}/>
										}
										variant={'ghost'}
										aria-label={'Toggle Navigation'}/>
						</Flex>
				</Flex>
				<Collapse
					in={isOpen}
					animateOpacity>
						<MobileTabs />
				</Collapse>
		</Box>
	)
}

const logoHeader = () => {
	const bp = useBreakpoint()
	return (
		<ChakraBox
			pl={2}
			as={motion.div}
			whileHover={{ scale: 1.02 }}
			whileTap={{ scale: 0.98 }}>
					<Center>
						<Icon 
						w={3}
						h={3}
						as={FaLessThan}/>
						<Heading
						fontSize={14.5}>
								&thinsp;aleknev&thinsp;
						</Heading>
						<Icon 
						w={3}
						h={3}
						as={FaGreaterThan}/>
					</Center>
		</ChakraBox>
	) 
}

export default Header