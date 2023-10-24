import Layout from '../components/layouts/main';
import Hero from '../components/Hero';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Projects from '../components/Projects/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import { useState, useEffect, useRef } from 'react';
import { 
	AnimatePresence, 
	motion, 
	isValidMotionProp, 
	useInView 
} from 'framer-motion';
import LoadingWrapper from '../components/LoadingWrapper';
import { 
	disableBodyScroll, 
	clearAllBodyScrollLocks 
} from 'body-scroll-lock';
import {
  chakra,
  shouldForwardProp
} from '@chakra-ui/react';

const ChakraBox = chakra(motion.div, {
  	shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Home = () => {
	const [isLoading, setLoading] = useState(true)
	return ( 
		<Layout>
			<AnimatePresence 
				mode='wait'>
					{isLoading && (
						<ChakraBox
							initial={{ opacity: 1 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 1 }}>
								<LoadingWrapper/>
						</ChakraBox>
					)}
			</AnimatePresence>
			<Header/>
			<Hero 
				loading={{states: {isLoading, setLoading}}} />
			<About />
			<Projects/>
			<Contact />
			<Footer/>
		</Layout>
  )
}

export default Home
