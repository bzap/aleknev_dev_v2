import React, { useState } from 'react';
import { 
	Center, 
	Collapse, 
	IconButton, 
	useDisclosure, 
	chakra, 
	shouldForwardProp,
	Heading, 
	Flex, 
	Container, 
	Box, 
	Spacer,
	useBreakpoint 
} from '@chakra-ui/react';
import { Link } from "react-scroll/modules";
import AnimatedTabs from './Tabs/Tabs';
import { motion, isValidMotionProp } from "framer-motion";
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
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
				pt={'2'}>
					<ChakraBox
						as={motion.div}
						initial={'hidden'}
						variants={navContainer}
						whileInView={'visible'}
						viewport={{ once: true }}
						backdropFilter='auto'
						backdropBlur='8px'
						maxW={{ 
							base: '88%', 
							sm: '90%', 
							md: '80%', 
							lg: '76%' 
						}}
						position='fixed'
						w={'100%'}
						zIndex={200}
						boxShadow={'md'}
						borderRadius={'12px'}
						bg='whiteAlpha.700'
						justifyContent={'center'}>
							<Box
								display={{ 
									base: 'none', 
									sm: 'none', 
									md: 'inline', 
									lg: 'inline' 
								}}>
									{desktopContent(pos)}
							</Box>
							<Box
								display={{ 
									base: 'inline', 
									sm: 'inline', 
									md: 'none', 
									lg: 'none' 
								}}>
									{mobileContent(isOpen, onToggle)}
							</Box>
					</ChakraBox>
			</Flex>
		</Container>
	)
}

const desktopContent = (pos) => { 
	return ( 
		<Flex	
			px={8}
			py={'15px'}
			align={'center'}
			justifyContent={'space-between'}
			direction={'row'}>
				<Link
					to={'home'}
					spy={true}
					smooth={true}
					offset={0}
					duration={2500}>
						<Center
							cursor={'pointer'}
							as={motion.div}
							variants={'container'}
							initial="hidden">
								{logoHeader(30)}
						</Center>
				</Link>
				<Spacer />
				<AnimatedTabs pos={pos} />
		</Flex>
	)
}

const mobileContent = (isOpen, onToggle) => {
	return (
		<Box
			px={4}
			py={'6px'}>
				<Flex
					align={'center'}
					justifyContent={'space-between'}
					direction={'row'}>
						{logoHeader()}
						<Spacer />
						<Flex>
							<IconButton
								onClick={onToggle}
								icon={
									isOpen ?
									<CloseIcon
										w={3}
										h={3} /> 
										:	<HamburgerIcon
												w={5}
												h={5} />
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
			as={motion.div}
			whileHover={{ scale: 1.02 }}
			whileTap={{ scale: 0.98 }}>
				{bp == 'base' 
				|| bp == 'sm' 
				|| bp == 'md' 
				|| bp == 'lg' ? (
					<Heading
						fontSize={19}
						color={'blackAlpha.800'}>
							&lt;LINAS&gt;
					</Heading>
				) : (
					<Heading
						fontSize={19}
						color={'blackAlpha.800'}>
							&lt;&thinsp;LINAS&thinsp;ALEKNEVICIUS&thinsp;&gt;
					</Heading>
				)}
		</ChakraBox>
	) 
}

export default Header