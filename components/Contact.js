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
		<Flex
		justifyContent={'center'}>
			<ChakraBox
				ref={ref}
				as={motion.div}
				variants={aboutItem}
				initial={'hidden'} 
				whileInView={'visible'}
				position={'relative'}
				zIndex={50}
				viewport={{once: true}}
				maxW={'60em'}
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
							lg: '2em' 
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
		</Flex>

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
		<ChakraBox
		as={motion.div}
		whileHover={{ scale: 1.01 }}>
			<Flex
				backdropFilter='auto'
				backdropBlur='5px'
				p={{ 
					base: '2em', 
					sm: '2.5em', 
					md: '4em', 
					lg: '2em' 
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
								lg: '2em' 
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
										gap={'2em'}>
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
																		lg: 18 
																	}}>
																		Email
																</Heading>
															</FormLabel>
															<ChakraBox
																as={motion.div}>
																	<Input
																		fontSize={{ 
																			base: 13, 
																			sm: 13.5, 
																			md: 12, 
																			lg: 12 
																		}}
																		borderRadius={'12px'}
																		color={'blackAlpha.800'}
																		bg={'#e4e4e480'}
																		borderColor={'blackAlpha.600'}
																		border={'none'}
																		placeholder={'Your email'}
																		_placeholder={{ 
																			opacity: 1, 
																			color: 'blackAlpha.600' 
																		}}
																		borderWidth={'0px'}
																		_hover={{ border: 'none' }}
																		focusBorderColor={'null'}
																		w={'100%'}
																		size={'md'}
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
																			lg: 18
																		}}>
																			Name
																	</Heading>
															</FormLabel>
															<ChakraBox
																as={motion.div}>
																	<Input
																		fontSize={{ 
																			base: 13, 
																			sm: 13.5, 
																			md: 12, 
																			lg: 12 
																		}}
																		borderRadius={'12px'}
																		color={'blackAlpha.800'}
																		bg={'#e4e4e480'}
																		border={'none'}
																		placeholder={'Your name'}
																		_placeholder={{ 
																			opacity: 1, 
																			color: 'blackAlpha.600' 
																		}}
																		borderWidth={'0px'}
																		_hover={{ border: 'none' }}
																		focusBorderColor={'null'}
																		name='name'
																		size={'md'}
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
																		lg: 18 
																	}}>
																		Message
																</Heading>
															</FormLabel>
															<ChakraBox
																h={'100%'}
																as={motion.div}>
																<Textarea
																	p={4}
																	h={'100%'}
																	fontSize={{ 
																		base: 13, 
																		sm: 13.5, 
																		md: 12, 
																		lg: 12 
																	}}
																	borderRadius={'14px'}
																	bg={'#e4e4e480'}
																	placeholder={'Your message'}
																	_placeholder={{ 
																		opacity: 1, 
																		color: 'blackAlpha.600' 
																	}}
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
									variants={itemText}
									borderRadius={'14px'}
									position={'relative'}>
										<Flex
										w={'100%'}
										justifyContent={'flex-end'}>
											<Button
												size={'sm'}
												variant={'unstyled'}
												_hover={{'bg': '#e1e1e1'}}
												_active={{'bg': '#cfcfcf'}}
												borderRadius={'lg'}
												disabled={state.submitting}
												type='submit'>
												<Heading
													px={3}
													color={'blackAlpha.800'}
													fontSize={{ 
														base: 16, 
														sm: 16, 
														md: 16, 
														lg: 12
												}}>
													Submit&#160;&gt;
												</Heading>
											</Button>
										</Flex>

								</ChakraBox>
						</Flex>
				</form>
			</Flex>
		</ChakraBox>
	)
}

export default Contact