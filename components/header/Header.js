import React, { useEffect, useState } from "react";
import {
    Center,
    Collapse,
    Icon,
    IconButton,
    useDisclosure,
    chakra,
    shouldForwardProp,
    Heading,
    Link,
    Flex,
    Container,
    Text,
    Box,
    Spacer,
    useBreakpoint,
} from "@chakra-ui/react";
import { motion, isValidMotionProp, useCycle } from "framer-motion";
import { FaLessThan, FaGreaterThan } from "react-icons/fa";
import { SiInstagram, SiGithub, SiLinkedin, cactus } from "react-icons/si";
import { LinkedinLogo, GithubLogo, InstagramLogo } from "phosphor-react";
import { GrInstagram } from "react-icons/gr";
import MobileTabs from "./Tabs";
import { Link as ScrollLink } from "react-scroll/modules";
import { navContainer } from "../../styles/Variants";
import { Cactus } from "@phosphor-icons/react";

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) =>
        isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Header = ({ ref }) => {
    return (
        <Flex justifyContent={"center"} pt={"4"}>
            <ChakraBox
                py={2}
                px={2}
                as={motion.div}
                initial={"hidden"}
                variants={navContainer}
                whileInView={"visible"}
                viewport={{ once: true }}
                backdropFilter="auto"
                backdropBlur="8px"
                w={"100%"}
                maxW={{ base: "90%", lg: "60em" }}
                position="fixed"
                zIndex={200}
                boxShadow={"lg"}
                borderRadius={"12px"}
                borderWidth={"1px"}
                borderColor={"blackAlpha.200"}
                bg="whiteAlpha.500"
                justifyContent={"center"}
            >
                {/* <Box
								display={{ 
									base: 'none', 
									sm: 'none', 
									md: 'inline', 
									lg: 'inline' 
								}}>
									{desktopContent(pos)}
							</Box> */}
                <Box display={"inline"}>{content()}</Box>
            </ChakraBox>
        </Flex>
    );
};

// const desktopContent = (pos) => {
// 	return (
// 		<Flex
// 			px={5}
// 			py={'13px'}
// 			align={'center'}
// 			justifyContent={'space-between'}
// 			direction={'row'}>
// 				<Link
// 					to={'home'}
// 					spy={true}
// 					smooth={true}
// 					offset={0}
// 					duration={2500}>
// 						<Center
// 							cursor={'pointer'}
// 							as={motion.div}
// 							variants={'container'}
// 							initial="hidden">
// 								{logoHeader(30)}
// 						</Center>
// 				</Link>
// 				<Spacer />
// 				<AnimatedTabs pos={pos} />
// 		</Flex>
// 	)
// }

const Path = (props) => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="hsl(0, 0%, 18%)"
        strokeLinecap="round"
        {...props}
    />
);

const HamburgerIcon = ({ toggle }) => (
    <Flex pt={1} pl={2} alignContent={"center"}>
        <button tabIndex="-1" className="simple-hover" onClick={toggle}>
            <svg width="18" height="18" viewBox="0 0 23 23">
                <Path
                    strokeWidth={4}
                    variants={{
                        closed: { d: "M 2 2.5 L 20 2.5" },
                        open: { d: "M 3 16.5 L 17 2.5" },
                    }}
                />
                <Path
                    strokeWidth={4}
                    d="M 2 9.423 L 20 9.423"
                    variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 },
                    }}
                    transition={{
                        duration: 0.1,
                        ease: "linear",
                    }}
                />
                <Path
                    strokeWidth={4}
                    variants={{
                        closed: { d: "M 2 16.346 L 20 16.346" },
                        open: { d: "M 3 2.5 L 17 16.346" },
                    }}
                />
            </svg>
        </button>
    </Flex>
);

const content = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    return (
        <Box px={4} py={"4px"}>
            <Flex
                align={"center"}
                justifyContent={"space-between"}
                direction={"row"}
                gap={2.5}
            >
                {logoHeader()}
                <Spacer />
                <Link
                    style={{ textDecoration: "none" }}
                    href={"https://instagram.com/l.aleknev"}
                    isExternal
                >
                    <Center>
                        <Flex
                            id={"siinstagram"}
                            key={""}
                            className="translate-hover"
                        >
                            <InstagramLogo size={20} weight="fill" />
                        </Flex>
                    </Center>
                </Link>
                <Link
                    style={{ textDecoration: "none" }}
                    href={"https://github.com/bzap/"}
                    isExternal
                >
                    <Center>
                        <Flex
                            id={"siinstagram"}
                            key={""}
                            className="translate-hover"
                        >
                            <GithubLogo size={20} weight="fill" />
                        </Flex>
                    </Center>
                </Link>
                <Link
                    style={{ textDecoration: "none" }}
                    href={"https://github.com/bzap/"}
                    isExternal
                >
                    <Center pr={3}>
                        <Flex
                            id={"siinstagram"}
                            key={""}
                            className="translate-hover"
                        >
                            <LinkedinLogo size={20} weight="fill" />
                        </Flex>
                    </Center>
                </Link>
                <Flex>
                    <motion.nav
                        initial={false}
                        animate={isOpen ? "open" : "closed"}
                        custom="100%"
                    >
                        <HamburgerIcon toggle={() => toggleOpen()} />
                    </motion.nav>
                </Flex>
            </Flex>
            <Collapse in={isOpen} animateOpacity>
                <MobileTabs toggle={() => toggleOpen()} />
            </Collapse>
        </Box>
    );
};

const logoHeader = () => {
    return (
        <Center
            color={"blackAlpha.800"}
            cursor={"pointer"}
            _hover={{
                // transform: 'translateY(-1px)',
                // transitionTimingFunction: "ease-in-out",
                transitionDuration: "0.1s",
                color: "#5c5c5c",
            }}
        >
            {/* <Icon w={3} h={3} as={FaLessThan} /> */}
            <Flex className="logo-hover" _active={{ transform: "scale(0.93)" }}>
                <ScrollLink
                    key={3}
                    to={"3"}
                    style={{ textDecoration: "none" }}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={800}
                >
                    <Cactus size={20} weight={"fill"} />
                </ScrollLink>
            </Flex>
            {/* <Icon w={3} h={3} as={FaGreaterThan} /> */}
        </Center>
    );
};

export default Header;
