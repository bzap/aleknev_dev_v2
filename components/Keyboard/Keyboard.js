import {
  Flex,
  Image,
  chakra,
  shouldForwardProp,
  useBreakpoint,
} from '@chakra-ui/react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Bounds, Stage, OrbitControls, Environment, SpotLight } from "@react-three/drei";
import { motion, isValidMotionProp } from 'framer-motion';
import { heroKeyboard, keyboardContainer } from '../../styles/Variants';

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});


const Keyboard = ({ props }) => {
	const bp = useBreakpoint()
	return (
		<Flex
			h={'100%'}
			pb={'1em'}
			w={{ 
				base: '100%', 
				sm: '100%', 
				md: '100%', 
				lg: '100%', 
				xl: '65%', 
				'2xl': '65%' 
			}}
			justifyContent={'center'}
			alignItems={'center'}>
				<ChakraBox
					w={'100%'}
					h={'100%'}
					as={motion.div}
					variants={keyboardContainer}>
						<ChakraBox
							w={'100%'}
							h={'100%'}
							as={motion.div}
							variants={heroKeyboard}>
								<Flex
									position={'relative'}
									justifyContent={'center'}
									alignItems={'center'}
									zIndex={10}
									h={'100%'}
									w={'100%'}>
										<Canvas dpr={[1, 2]}>
										<pointLight position={[0, 0, 0]} intensity={2} color="#fff" />
												<Suspense fallback={null}>
													{props !== undefined && (
														<Environment path="/" files="rooitou_park_1k.hdr" />,
															props !== undefined && (
																<Bounds
																	fit
																	clip
																	observe
																	margin={
																		bp == 'xl' ? 0.40
																		: bp == '2xl' ? 0.55
																		: bp == 'md' || bp == 'lg' ? 1.1
																		: bp == 'sm' ? 1
																		: 0.7 }>
																			<Model innerLoading={props} />
																</Bounds>
															)
														
										
													)}
												</Suspense>
												<OrbitControls
													target={[0, 0, 0]}
													autoRotate
													makeDefault
													enableZoom={false} />
											</Canvas>
								</Flex>
						</ChakraBox>
				</ChakraBox>
		</Flex>
	)
}

const Model = (innerLoading) => {
	const loadingStates = innerLoading.innerLoading.outerLoading.states
	const gltf = useLoader(GLTFLoader, "/model/keyboard15.glb");
	loadingStates.setLoading(false)
	return (
		<mesh>
			<primitive object={gltf.scene} scale={1} />
		</mesh>
	)
}

export default Keyboard