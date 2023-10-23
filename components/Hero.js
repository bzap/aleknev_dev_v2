import {
	Container,
	Flex,
	Heading,
	Text,
	chakra,
	useBreakpoint,
	shouldForwardProp,	
	Spacer,
  } from '@chakra-ui/react';
import Keyboard from './Keyboard/Keyboard';
import { motion, isValidMotionProp } from 'framer-motion';
import { heroContainer, heroDesc, scrollArrows } from '../styles/Variants';
import ScrollIndicator from './ScrollIndicator';
import Wave from './Variants/Wave';
import { forwardRef } from 'react';

const ChakraBox = chakra(motion.div, {
	shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Hero = forwardRef((props, ref) => {
	return (
		<Container
			ref={ref}
			id={'home'}
			maxW={'80em'}
			direction={'column'}
			flex={1}
			pb={{ 
				base: '7em', 
				sm: '10em', 
				md: '16em', 
				lg: '15em' 
			}}>
				<Flex
					h={'90vh'}
					pt={{
						base: '5em', 
						sm: '5em', 
						md: '5em', 
						lg: '7em'
					}}
					direction={'column'}>
						<ChakraBox	
							h={'40em'}
							as={motion.div}
							variants={heroContainer}
							display={'flex'}
							alignItems={{
								base: null, 
								sm: null, 
								md: 'center', 
								lg: 'center' 
							}}
							justifyContent={'center'}
							initial={'hidden'}
							whileInView={'visible'}
							viewport={{ once: true }}>
								<Flex
									h={'100%'}
									w={'100%'}
									position={'relative'}
									justifyContent={'space-between'}
									alignItems={'center'}
									direction={{ 
										base: 'column', 
										sm: 'column', 
										md: 'column', 
										lg: 'column', 
										xl: 'row', 
										'2xl': 'row' 
									}}>
										<Flex
											justifyContent={'center'}
											w={{ 
												base: '100%', 
												sm: '100%', 
												md: '100%', 
												lg: '100%', 
												'xl': '65%', 
												'2xl': '65%' 
											}}
											position={'relative'}
											alignItems={'center'}>
												{introText()}
										</Flex>
										<Spacer />
										{keyboard(props.loading)}
								</Flex>
						</ChakraBox>							
					</Flex>
					<ChakraBox
						position={'relative'}
						as={motion.div}
						variants={scrollArrows}
						initial={'hidden'}
						whileInView={'visible'}>
							<Flex
								pt={'2em'}
								justifyContent={'center'}>
									<ScrollIndicator />
							</Flex>
					</ChakraBox>
		</Container>
	)
})
	
const keyboard = (loading) => { 
	return (
		<Flex
			w={{
				base: '100%', 
				sm: '100%', 
				md: '100%', 
				lg: '100%', 
				xl: '35%', 
				'2xl': '35%'
			}}
			h={'100%'}
			zIndex={0}
			justifyContent={'flex-end'}>	
				<Keyboard 
					props={{ 
						newFov: 30, 
						outerLoading: loading 
				}}/>
		</Flex>		
	) 
}

const introText = () => { 
	return ( 
		<Flex
			position={'relative'}
			zIndex={1}
			direction={'column'}
			justifyContent={'center'}
			w={'100%'}
			h={'100%'}>
			<Flex
				position={'relative'}
				justifyContent={{
					base: 'center', 
					sm: 'center', 
					md: 'center', 
					lg: 'center', 
					xl: 'flex-start'
				}}>	
					<ChakraBox
						as={motion.div}
						variants={heroDesc}> 		
							<Heading
								as={'span'}
								position={'relative'}
								color={'blackAlpha.800'}
								fontSize={{ 
									base: '9vw', 
									sm: '9vw', 
									md: '8vw', 
									lg: '7vw', 
									xl: '3.9vw', 
									'2xl': '3.5vw' 
								}}>
									<Wave text={'Hey! I\'m Linas.'} />
							</Heading>
					</ChakraBox>
			</Flex>
			<Flex
				position={'relative'}
				justifyContent={{
					base: 'center', 
					sm: 'center', 
					md: 'center', 
					lg: 'center', 
					xl: 'flex-start'
				}}	
				textAlign={{
					base: 'center', 
					sm: 'center', 
					md: 'center', 
					lg: 'start'
				}}>
					<ChakraBox
						pt={'3'}
						px={{
							base: 0, 
							sm: 0, 
							md: 6, 
							lg: 0
						}}
						as={motion.div}
						variants={heroDesc}> 	
							<Text
								as={'span'}
								position={'relative'}
								textAlign={'center'}
								color={'blackAlpha.700'}
								fontSize={{ 
									base: '1em', 
									sm: '1.2em', 
									md: '1.3em', 
									lg: '1.3em', 
									xl: '1.5em', 
									'2xl': '0.9vw' 
								}}>
									I'm a full-stack software developer based in Toronto.
							</Text>
					</ChakraBox>
			</Flex>
		</Flex>
	)
}

export default Hero