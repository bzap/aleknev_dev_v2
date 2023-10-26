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
import { Bounds, Stage, OrbitControls } from "@react-three/drei";
import { motion, isValidMotionProp } from 'framer-motion';
import { heroKeyboard, keyboardContainer } from '../../../styles/Variants';

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
									justifyContent={'center'}
									alignItems={'center'}
									zIndex={50}
									h={'100%'}
									position={'absolute'}
									w={'100%'}>
										<Canvas 
										shadows
										camera={{ position: [9, 4, 5], fov: 50 }}
										dpr={[1, 2]}>
										<ambientLight 
										intensity={1}/>
										<Light/>
												<Suspense fallback={null}>
													{props !== undefined && (
															props !== undefined && (
																<Bounds
																	fit
																	
																	observe
																	margin={
																		bp == 'xl' ? 1.3
																		: bp == '2xl' ? 1.4
																		: bp == 'md' || bp == 'lg' ? 1.2
																		: bp == 'sm' ? 1.2
																		: 1.2 }>
																			<Model innerLoading={props} />
																			<mesh 
																			receiveShadow
																			position={[0, -0.08, 0]}>
																			<cylinderGeometry 
																			receiveShadow
																			attach="geometry" args={[0.11, 0.11, 0.005, 64]} 
																			/>
																				<meshStandardMaterial attach="material" color="#373737" />
																			</mesh>
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

const Light = () => {
	// const directionalLightRef = useRef(null);
	// useHelper(directionalLightRef, DirectionalLightHelper, 1, 'red')
  
	return (
		<directionalLight
        castShadow
		intensity={5}
		position={[2, 10, 5]}
		// ref={directionalLightRef} />
		/>
	);
  };

const Model = (innerLoading) => {
	const loadingStates = innerLoading.innerLoading.outerLoading.states
	const gltf = useLoader(GLTFLoader, "/model/keyboard30.glb");

	gltf.scene.traverse(function(node) {
		if (node.isMesh){
			node.castShadow = true;
			node.receiveShadow = true;
		}
	})

	loadingStates.setLoading(false)
	return (
		<mesh castShadow>
			<primitive object={gltf.scene} scale={1} />
		</mesh>
	)
}

export default Keyboard