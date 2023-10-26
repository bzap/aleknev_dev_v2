import {
	Flex,
	Heading,
	Text,
	chakra,
	shouldForwardProp,	
  } from '@chakra-ui/react';
import Keyboard from './Keyboard';
import { motion, isValidMotionProp } from 'framer-motion';
import { heroContainer, heroDesc, scrollArrows, keyboardContainer } from '../../../styles/Variants';
import ScrollIndicator from './ScrollIndicator';
import Wave from '../../Wave';
import { forwardRef } from 'react';

const ChakraBox = chakra(motion.div, {
	shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Hero = forwardRef((props, ref) => {
	return (
		<Flex
		id={'3'}
		ref={ref}
		w={'full'}
		justifyContent={'center'}>
			<Flex
				maxW={'60em'}
				position={'relative'}
				zIndex={10}
				w={'full'}
				direction={'column'}
				flex={1}
				pb={{ 
					base: '4em', 
					sm: '4em', 
					md: '8em', 
					lg: '8em' 
				}}>
					<Flex
						position={'relative'}
						zIndex={10}
						h={'90vh'}
						w={'100%'}
						pt={{
							base: '5em', 
							sm: '5em', 
							md: '5em', 
							lg: '0em'
						}}
						direction={'column'}>
							<ChakraBox	
								position={'relative'}
								zIndex={10}
								h={'100%'}
								w={'100%'}
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
								flexDir={'column'}
								viewport={{ once: true }}>
									{introText()}
									<ChakraBox
										variants={keyboardContainer}
										w={'100%'}
										h={'70%'}>
											{keyboard(props.loading)}		
									</ChakraBox>		
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
			</Flex>
		</Flex>

	)
})
	
const keyboard = (loading) => { 
	return (
		<Flex
			h={'100%'}
			zIndex={0}>	
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
			direction={'column'}
			justifyContent={'center'}
			w={'100%'}
			position={'absolute'}
			top={'10%'}
			h={'30%'}>
			<Flex
				position={'relative'}
				justifyContent={{
					base: 'center', 
					sm: 'center', 
					md: 'center', 
					lg: 'center', 
					xl: 'center'
				}}>	
					<ChakraBox
						as={motion.div}
						variants={heroDesc}> 		
							<Heading
								as={'span'}
								position={'relative'}
								color={'blackAlpha.800'}
								fontSize={{ 
									base: '6.5vw', 
									sm: '5.5vw', 
									md: '5vw', 
									lg: '4.5vw', 
									xl: '3.5vw', 
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
					xl: 'center'
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
									base: '0.8em', 
									sm: '0.8em', 
									md: '1em', 
									lg: '1em', 
									xl: '1em', 
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