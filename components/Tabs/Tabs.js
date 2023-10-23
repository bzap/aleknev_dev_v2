
import { useMemo, useEffect, useState } from "react";
import { tabs } from '../../public/data/TabContent';
import {
	Stack,
	Flex,
	Heading,
	Text,
	Center,
	chakra,
	shouldForwardProp
  } from '@chakra-ui/react';
import { isValidMotionProp, motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll/modules";

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });


const AnimatedTabs = ({pos}) => {
	const [selectedTab, setSelectedTab] = useState(tabs[3])
	const [pressed, setPressed] = useState(false)
	const [currItem, setCurrItem] = useState(tabs[3])
	useMemo(() => {
		if (currItem != undefined){
			if (currItem.label == 'ABOUT' && pos.views.aboutView){
				setSelectedTab(tabs[0])
				setPressed(false)
			}
			else if (currItem.label == 'PROJECTS' && pos.views.projView){
				setSelectedTab(tabs[1])
				setPressed(false)
			}
			else if (currItem.label == 'CONTACT' && pos.views.contactView){
				setSelectedTab(tabs[2])
				setPressed(false)
			}
		}
		if (!pressed){
			if (pos.views.aboutView) {
				setSelectedTab(tabs[0])
			}
			else if (pos.views.projView) {
				setSelectedTab(tabs[1])
			} 
			else if (pos.views.contactView) {
				setSelectedTab(tabs[2])
			} 
		}
	},[pos.views])
	return (
		<Stack
			direction={'row'}
			justify={'flex-end'}> 
				<Flex
					gap={'4em'}>
						{tabs.map((item, idx) => (
							<Link 
								key={idx} 
								activeClass="active" 
								to={idx.toString()} 
								spy={true} 
								smooth={true} 
								offset={0} 
								duration={2200}>
									<Center
										cursor={'pointer'}
										as={motion.div} 
										whileHover={{ scale: 1.03 }}
										whileTap={{ scale: 0.99, opacity: [1, 0.5, 0] }}
										className={item === selectedTab ? 'selected' : ''}
										onClick={() => 
													{setSelectedTab(item)
													setPressed(true)
													setCurrItem(item)}}>
											<ChakraBox
												cursor={'pointer'}
												position={'relative'}
												zIndex={16}>
													<Center>
														<Heading
														fontSize={{base: 14, sm: 15, md: 15, lg: 15.5}}
														color='blackAlpha.800'>
															{item.label}
														</Heading>	
													</Center>
											</ChakraBox>
											<AnimatePresence mode='wait'>
											{item === selectedTab && !pos.views.heroView ? (
												<ChakraBox
													as={motion.div}
													cursor={'pointer'}
													whileTap={{ scale: 0.9 }}
													zIndex={15}
													layout
													key='overlayBox'
													position={'absolute'}
													layoutId={'outline'}
													initial={{opacity:0}}
													animate={{opacity:1}}
													exit={{opacity:0}}	
													bg={'whiteAlpha.900'}
													px={4}
													py={'7px'}
													borderRadius={'12px'}
													boxShadow={'md'}>
													<ChakraBox 
														as={motion.div}>
															<Text 
															alignItems={'center'}
															opacity={0}>
																{item.label}
															</Text>
													</ChakraBox>
												</ChakraBox>
											) : (
													null
												)
											}
											</AnimatePresence>
									</Center>
								</Link>
							))}
				</Flex>
		</Stack>
	)
}

export default AnimatedTabs