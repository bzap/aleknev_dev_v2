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
	Link, 
	Flex, 
	Container, 
	Text,
	Box, 
	Spacer,
	useBreakpoint 
} from '@chakra-ui/react';
import { motion, isValidMotionProp, useCycle } from "framer-motion";
import { CloseIcon } from '@chakra-ui/icons';
import { FaLessThan, FaGreaterThan } from 'react-icons/fa'
import { SiInstagram, SiGithub, SiLinkedin } from 'react-icons/si'
import { HiMenu } from 'react-icons/hi'
import MobileTabs from './Tabs/MobileTabs';
import { Link as ScrollLink } from "react-scroll/modules"

const ChakraBox = chakra(motion.div, {
	shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Header = ({ ref }) => {
	return (
			<Flex
				justifyContent={'center'}
				pt={'4'}>
					<ChakraBox
						py={1.5}
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
									{content()}
							</Box>
					</ChakraBox>
			</Flex>
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

	const Path = (props) => (
		<motion.path
			fill="transparent"
			strokeWidth="3"
			stroke="hsl(0, 0%, 18%)"
			strokeLinecap="round"
			{...props}
		/>
  	);
  
  	const HamburgerIcon = ({ toggle }) => (
		<Flex
		
		pt={1}
		pl={2}
		alignContent={'center'}>
			<button 
			tabIndex="-1"
			className='simple-hover'
			onClick={toggle}>
				<svg width="18" height="18" viewBox="0 0 23 23">
					<Path
					variants={{
						closed: { d: "M 2 2.5 L 20 2.5" },
						open: { d: "M 3 16.5 L 17 2.5" }
					}}/>
					<Path
					d="M 2 9.423 L 20 9.423"
					variants={{
						closed: { opacity: 1 },
						open: { opacity: 0 }
					}}
					transition={{ 
						duration: 0.1,
						ease: "linear"}}/>
					<Path
					variants={{
						closed: { d: "M 2 16.346 L 20 16.346" },
						open: { d: "M 3 2.5 L 17 16.346" }
					}}/>
				</svg>
			</button>
		</Flex>
  	);


const content = () => {
	const [isOpen, toggleOpen] = useCycle(false, true);
	return (
		<Box
			px={4}
			py={'4px'}>
				<Flex
					align={'center'}
					justifyContent={'space-between'}
					direction={'row'}
					gap={2.5}>
						{logoHeader()}
						<Spacer />
						<Link 
						style={{ 'textDecoration': 'none' }}
						href={'https://instagram.com/l.aleknev'}
						isExternal>
							<Center>
								<Flex
								id={'siinstagram'}
								key={''}
								className='translate-hover'>
									<Icon 
									cursor={'pointer'}
									_active={{'color': '#787779'}}
									w={4}
									h={4}
									as={SiInstagram}/>
								</Flex>
							</Center>
						</Link>
						<Link 
						style={{ 'textDecoration': 'none' }}
						href={'https://github.com/bzap/'}
						isExternal>
							<Center>
								<Icon 
                                _active={{'color': '#787779'}}
								className='translate-hover'
								id={'silinkedin'}
								cursor={'pointer'}
								w={4}
								h={4}
								as={SiGithub}/>
							</Center>
						</Link>
						<Link 
						style={{ 'textDecoration': 'none' }}
						href={'https://github.com/bzap/'}
						isExternal>
							<Center
							pr={3}>
								<Icon 
								_active={{'color': '#787779'}}
								className='translate-hover'
								id={'silinkedin'}
								cursor={'pointer'}
								w={4}
								h={4}
								as={SiLinkedin}/>
							</Center>
						</Link>
						<Flex>
							<motion.nav
									initial={false}
									animate={isOpen ? "open" : "closed"}
									custom="100%">
							<HamburgerIcon toggle={() => toggleOpen()} />
						</motion.nav>
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
	return (
					<Center
						color={'blackAlpha.800'}
						cursor={'pointer'}
						_hover={{ 
							// transform: 'translateY(-1px)',
							// transitionTimingFunction: "ease-in-out",
							transitionDuration: '0.1s',
							color: '#5c5c5c' }}
						>
						<Icon 
						w={3}
						h={3}
						as={FaLessThan}/>
						<Flex
						className='logo-hover'
						_active={{'transform': 'scale(0.93)'}}>
							<ScrollLink 						
							key={3}
							to={'3'}
							style={{ 'textDecoration': 'none' }}
							spy={true}
							smooth={true}
							offset={0}
							duration={900}>
								<Heading
								fontSize={14.5}>
										&thinsp;aleknev&thinsp;
								</Heading>
							</ScrollLink>
						</Flex>
						<Icon 
						w={3}
						h={3}
						as={FaGreaterThan}/>
					</Center>
	) 
}

export default Header