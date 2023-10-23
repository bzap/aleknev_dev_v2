import {
    Flex,
    Box,
    Heading,
    Text,
    chakra,
    Image,
    Icon,
    Center,
    List, 
    ListIcon,
    ListItem,
    Spacer,
    shouldForwardProp,
	useBreakpoint
  } from '@chakra-ui/react';
import { MdOutlineSubdirectoryArrowRight } from 'react-icons/md';
import { motion, isValidMotionProp } from "framer-motion";
import { item } from '../styles/Variants';
import Title from './Title';
import aboutText from '../public/data/AboutText';
import { about, currentSkills, background, itemText, aboutItem } from '../styles/Variants';
import { CgSmile } from 'react-icons/cg';
import { forwardRef } from 'react';

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const About = forwardRef((props, ref) => {
	const bp = useBreakpoint()
    return(
		<Box
			ref={ref}
			position={'relative'}
			maxW={'100%'} 
			px={{
				base: '6.5%', 
				sm: '5%', 
				md: '10%', 
				lg:'12%'
			}}
			w={'100%'} 
			id='0' 
			pt={{ 
				base: '4em', 
				sm:'6em', 
				md: '6em', 
				lg: '6em'
			}}
			pb={{ 
				base: '7em', 
				sm: '10em', 
				md: '16em', 
				lg: '15em' 
			}}>
			<Flex
				justifyContent={'center'}
				direction={'column'}>
					<Flex
						position={'relative'}
						direction={'column'}
						alignItems={'start'}>
							<ChakraBox
								position={'relative'}
								pb={0}
								as={motion.div}
								variants={about}
								initial={'hidden'}
								whileInView={'visible'}
								viewport={{ once: true, amount: 0.5 }}>
									<Title
										title={'About Me.'}/>
							</ChakraBox>
					</Flex>
					<Flex
						position={'relative'}
						zIndex={10}
						w={'100%'}
						justifyContent={'center'}
						direction={'column'}
						gap={{
							base: '1em', 
							sm: '2em', 
							md: '4em', 
							lg:'5em'
						}}>
							<ChakraBox
								as={motion.div}
								variants={background}
								initial={'hidden'}
								whileInView={'visible'}
								viewport={
										bp == 'lg' || bp == 'xl' || bp == '2xl' ? ({ once: true, amount: 0.65 }) 
											: bp == 'md' ? ({ once: true, amount: 0.65 }) 
											: bp == 'sm' ? ({ once: true, amount: 0.5 }) 
											: bp == 'base' ? ({ once: true})
											: ({ once: true })
								}>
									<Flex		
										direction={{
											base: 'column', 
											sm: 'column', 
											md:'column',
											lg:'row'
										}}
										w={'100%'}
										zIndex={10}
										gap={{ 
											base: '0.5em', 
											sm: '0.5em', 
											md: '1em', 
											lg:'6.5%'
										}}
										position={'relative'}
										justifyContent={{ 
											base: 'center', 
											sm: 'center', 
											md: 'center', 
											lg: 'flex-end' 
										}}>		
											<ChakraBox
												zIndex={10}
												position={'relative'}
												whileHover={{ scale: 1.025 }}
												variants={aboutItem}>			
													<Flex
														flexDirection={{
															base: 'center', 
															sm: 'center', 
															md:'center', 
															lg:'flex-end'
														}}
														w={{
															base: '100%', 
															sm: '100%', 
															md:'100%', 
															lg:'45em'
														}}
														minW={'50%'}
														gap={'1em'}
														bg={'whiteAlpha.700'}
														backdropFilter='auto'
														backdropBlur='1px'
														boxShadow={'md'}
														borderRadius={'20px'}>         
															<ChakraBox
																w={'100%'}
																py={{ 
																	base: 6, 
																	sm: 8, 
																	md: 10, 
																	lg: 10 
																}}
																px={{ 
																	base: 6, 
																	sm: 8, 
																	md: 10, 
																	lg: 10
																}}>
																	<ChakraBox
																		variants={aboutItem}>
																			<Heading
																					pb={4}
																					borderBottomWidth={'2px'}
																					borderBottomColor={'blackAlpha.100'}
																					color='blackAlpha.800'
																					fontWeight={900}
																					fontSize={{ 
																						base: 25, 
																						sm: 30, 
																						md: 38, 
																						lg: 40 
																					}}>
																						BACKGROUND 
																			</Heading>
																	</ChakraBox>
																	{backgroundText()}
															</ChakraBox>
													</Flex>
											</ChakraBox>			
									</Flex>

							</ChakraBox>
							<ChakraBox
								as={motion.div}
								variants={background}
								initial={'hidden'}
								whileInView={'visible'}
								viewport={
										bp == 'lg' 
										|| bp == 'xl' 
										|| bp == '2xl' ? ({ once: true, amount: 0.80 })
											: bp == 'md' ? ({ once: true, amount: 0.75 })
											: bp == 'sm' ? ({ once: true, amount: 0.5 })
											: bp == 'base' ? ({ once: true, amount: 0.5 })
											: ({ once: true })
								}>
									<Flex
										direction={{ 
											base: 'column', 
											sm: 'column', 
											md: 'column', 
											lg: 'row' 
										}}
										w={'100%'}
										gap={{ 
											base: '0.5em', 
											sm: '0.5em', 
											md: '1em', 
											lg: '6.5%' 
										}}
										position={'relative'}
										justifyContent={{ 
											base: 'center', 
											sm: 'center', 
											md: 'center', 
											lg: 'flex-end' 
										}}>
											<ChakraBox
												whileHover={{ scale: 1.025 }}
												variants={aboutItem}>
													<Flex
														position={'relative'}
														flexDirection={{ 
															base: 'center', 
															sm: 'center', 
															md: 'center', 
															lg: 'flex-end' 
														}}
														w={{ 
															base: '100%', 
															sm: '100%', 
															md: '100%', 
															lg: '45em' 
														}}
														minW={'50%'}
														gap={'1em'}
														zIndex={10}
														bg={'whiteAlpha.700'}
														backdropFilter='auto'
														backdropBlur='2px'
														boxShadow={'md'}
														borderRadius={'20px'}>
															<Box
																position={'relative'}
																zIndex={10}			
																w={'100%'}>
																	{skillsInfo()}
															</Box>
													</Flex>
											</ChakraBox>	
									</Flex>
							</ChakraBox>
					</Flex>				
			</Flex>
		</Box>
)})

const backgroundText = () => { 
	return (
		<ChakraBox
			variants={itemText}>
				<Text
					lineHeight={'1.3em'}
					display={'inline-block'}
					wordBreak={{ 
						base: 'break-all', 
						sm: 'break-all', 
						md: 'normal', 
						lg: 'normal' 
					}}
					textAlign={'justify'}
					sx={{ hypens: 'auto' }}
					pt={8}
					pb={2}
					whiteSpace={'pre-line'}
					color={'gray.700'}
					fontSize={{ 
						base: 12, 
						sm: 13.5, 
						md: 14, 
						lg: 14 
					}}>
						<Image
							justifyContent={'center'}
							position={'relative'}
							boxShadow={'xl'}
							ml={8}
							mb={6}
							mt={'2px'}
							float={'right'}
							fit='cover'
							borderRadius={'22px'}
							opacity={0.9}
							h={{ 
								base: '16em', 
								sm: '18em', 
								md: '20em', 
								lg: '24em' 
							}}
							w={{ 
								base: '11em', 
								sm: '13em', 
								md: '15em', 
								lg: '16em' 
							}}
							src={'/portrait.png'} />
						{aboutText.background}
						<Icon
							boxShadow={'xl'}
							pl={'3px'}
							as={CgSmile}
							h={'1.3em'}
							w={'1.3em'}
							verticalAlign={'bottom'}
							color={'blackAlpha.800'} />
				</Text>
		</ChakraBox>
	)
}

const skillsInfo = () => { 
    return (
			<Flex
				direction={'column'}
				as={motion.div}
				position='relative'
				px={{
					base: 6, 
					sm: 8, 
					md: 12, 
					lg: 10
				}}
				pt={{ 
					base: 6, 
					sm: 8, 
					md: 12, 
					lg: 10 
				}}>
					<ChakraBox
						variants={aboutItem}>	
							<Heading
									pb={4}
									borderBottomWidth={'2px'}
									borderBottomColor={'blackAlpha.100'}
									color='blackAlpha.800'
									fontSize={{ 
										base: 25, 
										sm: 30, 
										md: 38, 
										lg: 40 
									}}>
									SKILLS
							</Heading>
					</ChakraBox>
					<ChakraBox
					variants={itemText}>
						{skillText()}
					</ChakraBox>
					<ChakraBox
						variants={currentSkills}>
							<Flex
								px={{
									base: '2em', 
									sm: '0.5em', 
									md: '1em', 
									lg: '1em', 
									xl: '2.5em'
								}}
								pt={{
									base: 0, 
									sm: 0, 
									md: '1em', 
									lg: '1em'
								}}
								pb={{ 
									base: 8, 
									sm: 10, 
									md: 14, 
									lg: 14 
								}}
								justify-content={'space-between'}
								direction='row'
								w={'100%'}>
									{skillList(1)}
									<Spacer/>
									{skillList(2)}
									<Spacer />
									{skillList(3)}
							</Flex>
					</ChakraBox> 
        	</Flex>
    )
}

const skillText = () => { 
    return ( 
            <Flex
				pt={8}
				pb={8}
				direction={'column'}>
					<ChakraBox
						variants={item}>
							<Text
								wordBreak={{ 
									base: 'break-all', 
									sm: 'break-all', 
									md: 'normal', 
									lg: 'normal' 
								}}
								textAlign={'justify'}
								as={'p'}
								lineHeight={'1.3em'}
								color={'gray.700'}
								fontSize={{ 
									base: 12, 
									sm: 13.5, 
									md: 14, 
									lg: 14 
								}}>
									{aboutText.skillBackground}
							</Text>
					</ChakraBox>
            </Flex>
    )
}

const skillList = (pos) => { 
    return( 
		<Flex>
			<List spacing={{base: 4, sm: 8, md: 8, lg: 8}}>
				{pos == 1 && [...Array(6)].map((item, idx) => (
					skillItem(aboutText.skills[idx][0], aboutText.skills[idx][1])))}
				{pos == 2 && [...Array(6)].map((item, idx) => (
					skillItem(aboutText.skills[idx + 6][0], aboutText.skills[idx + 6][1])))}
				{pos == 3 && [...Array(6)].map((item, idx) => (
					skillItem(aboutText.skills[idx + 12][0], aboutText.skills[idx + 12][1])))}
			</List>   
		</Flex>     
    )
}

const skillItem = (name, ic) => { 
	return(
        <ListItem
			key={name}>
				<Flex
					key={name}
					w={'100%'}
					alignItems={'center'}
					direction={'row'}>
						<ListIcon as={ic} color='black.800'/>
						<Text
							textAlign={'center'}
							color={'blackAlpha.800'}
							fontWeight={900}
							fontSize={{ 
								base: 0, 
								sm: 13.5, 
								md: 14, 
								lg: 15 
							}}>
								&thinsp;{name}
						</Text>
				</Flex>
        </ListItem>
    )
}

export default About