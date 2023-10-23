import {
	Flex,
	Heading,
	Button,
	Image,
	Center,
	Input,
	FormControl,
	FormLabel,
	Textarea,
	chakra,
	shouldForwardProp,
	useToast
} from '@chakra-ui/react';
import Title from './Title';
import { useEffect, forwardRef } from 'react';
import { useForm } from "@formspree/react";
import { isValidMotionProp, motion } from "framer-motion";
import { about, itemText, aboutItem } from '../styles/Variants';

const ChakraBox = chakra(motion.div, {
	shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});


const Contact = forwardRef((props, ref) => {
	return (
		<ChakraBox
			ref={ref}
			as={motion.div}
			variants={aboutItem}
			initial={'hidden'} 
			whileInView={'visible'}
			position={'relative'}
			zIndex={50}
			viewport={{once: true}}
			maxW={'100%'}
			px={{ 
				base: '6.5%', 
				sm: '5%', 
				md: '10%', 
				lg: '12%' 
			}}
			w={'100%'}
			id='2'
			pt={{ 
				base: '4em', 
				sm: '6em', 
				md: '6em', 
				lg: '6%' 
			}}
			pb={'4em'}>
				<Flex
					direction={'column'}
					gap={{ 
						base: '2em', 
						sm: '2em', 
						md: '3em', 
						lg: '7em' 
					}}>
						<Flex
							position={'relative'}
							alignItems={'start'}>
								<ChakraBox
									as={motion.div}
									variants={about}
									initial={'hidden'}
									whileInView={'visible'}
									viewport={{ once: true, amount: 0.8 }}>
									<Title
										title={'Contact me!'}/>
								</ChakraBox>
						</Flex>
						<ChakraBox
							as={motion.div}
							variants={aboutItem}
							initial={'hidden'}
							whileInView={'visible'}
							viewport={{ once: true, amount: 0.8 }}>
								{formBox()}
						</ChakraBox>
				</Flex>
		</ChakraBox>
	)
})

const formBox = () => { 
	const [state, handleSubmit] = useForm('xlevlwkn');
	const toast = useToast()
	useEffect(() => {
		if (state.succeeded && !toast.isActive('good')) {
			toast({
				id: 'good',
				title: 'Submitted.',
				variant: 'subtle',
				description: "Thanks for reaching out!",
				status: 'success',
				duration: 3000,
				isClosable: true,
			})
		}
	}, [state.submitting])
	return ( 
		<Flex
			backdropFilter='auto'
			backdropBlur='5px'
			p={{ 
				base: '2em', 
				sm: '2.5em', 
				md: '4em', 
				lg: '3em' 
			}}
			w={'100%'}
			position={'relative'}
			zIndex={5}
			bg={'whiteAlpha.700'}
			boxShadow={'md'}
			direction={'column'}
			borderRadius={'22px'}
			h={'100%'}
			gap={'5em'}>
			<form
				style={{ flex: 1, width: "100%" }}
				onSubmit={handleSubmit}>
					<Flex
						gap={{ 
							base: '2em', 
							sm: '2.5em', 
							md: '4em', 
							lg: '4em' 
						}}
						direction={'column'}>
							<FormControl isRequired>
								<Flex
									h={'100%'}
									w={'100%'}
									direction={{ 
										base: 'column', 
										sm: 'column', 
										md: 'column', 
										lg: 'row' 
									}}
									gap={'3em'}>
										<Flex
											h={'100%'}
											w={'100%'}
											direction={'column'}>
												<ChakraBox
													as={motion.div}
													variants={itemText}>
														<FormLabel requiredIndicator>
															<Heading
																pb={2}
																color={'blackAlpha.800'}
																fontSize={{ 
																	base: 18, 
																	sm: 20, 
																	md: 25, 
																	lg: 25 
																}}>
																	EMAIL
															</Heading>
														</FormLabel>
														<ChakraBox
															as={motion.div}
															whileHover={{ scale: 1.01 }}>
																<Input
																	fontSize={{ 
																		base: 13, 
																		sm: 13.5, 
																		md: 14, 
																		lg: 14 
																	}}
																	borderRadius={'12px'}
																	color={'blackAlpha.800'}
																	bg={'whiteAlpha.800'}
																	borderColor={'blackAlpha.600'}
																	boxShadow={'md'}
																	border={'none'}
																	placeholder={'Your email'}
																	_placeholder={{ 
																		opacity: 1, 
																		color: 'blackAlpha.300' 
																	}}
																	borderWidth={'0px'}
																	_hover={{ border: 'none' }}
																	focusBorderColor={'null'}
																	w={'100%'}
																	size={'lg'}
																	id='email'
																	type='email'
																	name='email' />
														</ChakraBox>
												</ChakraBox>
												<ChakraBox
													as={motion.div}
													variants={itemText}>
														<FormLabel
															pt={9}
															requiredIndicator>
																<Heading
																	pb={2}
																	color={'blackAlpha.800'}
																	fontSize={{ 
																		base: 18, 
																		sm: 20, 
																		md: 25, 
																		lg: 25 
																	}}>
																		NAME
																</Heading>
														</FormLabel>
														<ChakraBox
															as={motion.div}
															whileHover={{ scale: 1.01 }}>
																<Input
																	fontSize={{ 
																		base: 13, 
																		sm: 13.5, 
																		md: 14, 
																		lg: 14 
																	}}
																	borderRadius={'12px'}
																	color={'blackAlpha.800'}
																	bg={'whiteAlpha.800'}
																	boxShadow={'md'}
																	border={'none'}
																	placeholder={'Your name'}
																	_placeholder={{ 
																		opacity: 1, 
																		color: 'blackAlpha.300' 
																	}}
																	borderWidth={'0px'}
																	_hover={{ border: 'none' }}
																	focusBorderColor={'null'}
																	name='name'
																	size={'lg'}
																	id='name' />
														</ChakraBox>
												</ChakraBox>
										</Flex>
										<ChakraBox
											w={'100%'}
											h={'container'}
											as={motion.div}
											variants={itemText}>
												<Flex
													direction={'column'}
													h={'100%'}
													w={'100%'}>
														<FormLabel requiredIndicator>
															<Heading
																pb={2}
																color={'blackAlpha.800'}
																fontSize={{ 
																	base: 18, 
																	sm: 20, 
																	md: 25, 
																	lg: 25 
																}}>
																	MESSAGE
															</Heading>
														</FormLabel>
														<ChakraBox
															h={'100%'}
															as={motion.div}
															whileHover={{ scale: 1.01 }}>
															<Textarea
																p={4}
																h={'100%'}
																fontSize={{ 
																	base: 13, 
																	sm: 13.5, 
																	md: 14, 
																	lg: 14 
																}}
																borderRadius={'14px'}
																color={'blackAlpha.800'}
																bg={'whiteAlpha.800'}
																placeholder={'Your message'}
																_placeholder={{ 
																	opacity: 1, 
																	color: 'blackAlpha.300' 
																}}
																boxShadow={'md'}
																border={'none'}
																borderWidth={'0px'}
																_hover={{ border: 'none' }}
																focusBorderColor={'null'}
																name='message'
																resize={'none'}
																id='message' />
														</ChakraBox>
												</Flex>
										</ChakraBox>
								</Flex>
							</FormControl>
							<ChakraBox
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.99 }}
								boxShadow={'md'}
								bg={'whiteAlpha.800'}
								variants={itemText}
								py={1.5}
								h={'100%'}
								borderRadius={'14px'}
								position={'relative'}
								alignItems={'center'}>
									<Button
										position={'relative'}
										w={'100%'}
										maxH={'full'}
										borderRadius={'12px'}
										variant={'none'}
										textColor={'blackAlpha.800'}
										disabled={state.submitting}
										type='submit'>
										<Heading
											color={'blackAlpha.800'}
											fontSize={{ 
												base: 16, 
												sm: 16, 
												md: 16, 
												lg: 18 
										}}>
											SUBMIT
										</Heading>
									</Button>
							</ChakraBox>
					</Flex>
			</form>
		</Flex>
	)
}

export default Contact