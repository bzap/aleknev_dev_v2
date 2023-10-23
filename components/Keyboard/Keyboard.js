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
			position={'relative'}
			zIndex={10}
			h={'100%'}
			w={'100%'}
			justifyContent={'center'}
			alignItems={'center'}>
				<ChakraBox
							position={'relative'}
							zIndex={10}
					w={'100%'}
					h={'100%'}
					as={motion.div}
					//</Flex>variants={keyboardContainer}>
					>
						<ChakraBox
									position={'relative'}
									zIndex={10}
							w={'100%'}
							h={'100%'}
							as={motion.div}
							//variants={heroKeyboard}>
							>
								<Flex
									justifyContent={'center'}
									alignItems={'center'}
									zIndex={50}
									position={'absolute'}
									h={'150%'}
									top={'-30%'}
									w={'100%'}>
										<Canvas 
										zIndex={50}
										camera={{ position: [0, 5, 50], fov: 50 }}
										dpr={[1, 2]}>
										<ambientLight />
										<pointLight  
											color={'fff'} 
											distance={5}
											angle={0.15}
											attenuation={5}
											anglePower={5} />
												<Suspense fallback={null}>
													{props !== undefined && (
														<Environment path="/" files="rooitou_park_1k.hdr" />,
															props !== undefined && (
																<Bounds
																	fit
																	
																	observe
																	margin={
																		bp == 'xl' ? 1
																		: bp == '2xl' ? 1
																		: bp == 'md' || bp == 'lg' ? 1.1
																		: bp == 'sm' ? 1
																		: 1.2 }>
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
	const gltf = useLoader(GLTFLoader, "/model/keyboard.glb");
	loadingStates.setLoading(false)
	return (
		<mesh>
			<primitive object={gltf.scene} scale={1} />
		</mesh>
	)
}

export default Keyboard