import {
    Flex,
    Box,
    Heading,
    Text,
    chakra,
    Image,
    Icon,
    ListIcon,
    List,
    ListItem,
    Grid,
    Center,
    GridItem,
    SimpleGrid,
    Wrap,
    WrapItem,
    Spacer,
    shouldForwardProp,
    useBreakpoint,
} from "@chakra-ui/react";

import { motion, isValidMotionProp } from "framer-motion";
import { item } from "../../styles/Variants";
import Title from "../Title";
import aboutText from "../../public/data/AboutText";
import {
    about,
    currentSkills,
    background,
    itemText,
    aboutItem,
} from "../../styles/Variants";
import { forwardRef } from "react";
import { StarFour } from "phosphor-react";

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) =>
        isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Background = ({ bp }) => {
    return (
        <ChakraBox
            as={motion.div}
            variants={background}
            initial={"hidden"}
            whileInView={"visible"}
            viewport={
                bp == "lg" || bp == "xl" || bp == "2xl"
                    ? { once: true, amount: 0.5 }
                    : bp == "md"
                    ? { once: true, amount: 0.5 }
                    : bp == "sm"
                    ? { once: true, amount: 0.5 }
                    : bp == "base"
                    ? { once: true }
                    : { once: true }
            }
        >
            {/* <Flex
                direction={{
                    base: "column",
                    sm: "column",
                    md: "column",
                    lg: "row",
                }}
                w={"100%"}
                zIndex={10}
                gap={{
                    base: "0.5em",
                    sm: "0.5em",
                    md: "1em",
                    lg: "6.5%",
                }}
                position={"relative"}
                justifyContent={{
                    base: "center",
                    sm: "center",
                    md: "center",
                    lg: "flex-end",
                }}
            >
                <ChakraBox
                    zIndex={10}
                    position={"relative"}
                    whileHover={{ scale: 1.01 }}
                    variants={aboutItem}
                >
                    <Flex
                        flexDirection={{
                            base: "center",
                            sm: "center",
                            md: "center",
                            lg: "flex-end",
                        }}
                        gap={"1em"}
                        bg={"whiteAlpha.500"}
                        borderWidth={"1px"}
                        borderColor={"blackAlpha.200"}
                        backdropFilter="auto"
                        backdropBlur="1px"
                        boxShadow={"md"}
                        borderRadius={"20px"}
                    >
                        <ChakraBox
                            w={"100%"}
                            py={{
                                base: 6,
                                sm: 8,
                                md: 8,
                                lg: 8,
                            }}
                            px={{
                                base: 6,
                                sm: 8,
                                md: 8,
                                lg: 8,
                            }}
                        >
                            <ChakraBox variants={aboutItem}>
                                <Heading
                                    pb={3}
                                    borderBottomWidth={"2px"}
                                    borderBottomColor={"blackAlpha.100"}
                                    color="blackAlpha.800"
                                    fontWeight={900}
                                    fontSize={{
                                        base: 18,
                                        sm: 18,
                                        md: 18,
                                        lg: 18,
                                    }}
                                >
                                    Background
                                </Heading>
                            </ChakraBox>
                            {backgroundText()}
                        </ChakraBox>
                    </Flex>
                </ChakraBox>
                {/* <ChakraBox
						zIndex={10}
						position={'relative'}
						whileHover={{ scale: 1.01 }}
						variants={aboutItem}>			
							<Flex
								backdropFilter='auto'
								backdropBlur='1px'
								boxShadow={'md'}
								borderRadius={'20px'}>         
								<Image
									justifyContent={'center'}
									position={'relative'}
									boxShadow={'xl'}
									mt={'2px'}

									borderRadius={'22px'}
									opacity={0.9}
									src={'/portrait.webp'} />							
						</Flex>
					</ChakraBox> */}
            {/* </Flex> */}
        </ChakraBox>
    );
};

const Experience = ({ bp }) => {
    return (
        <ChakraBox
            w={"100%"}
            as={motion.div}
            variants={background}
            initial={"hidden"}
            whileInView={"visible"}
            viewport={
                bp == "lg" || bp == "xl" || bp == "2xl"
                    ? { once: true, amount: 0.5 }
                    : bp == "md"
                    ? { once: true, amount: 0.5 }
                    : bp == "sm"
                    ? { once: true, amount: 0.5 }
                    : bp == "base"
                    ? { once: true }
                    : { once: true }
            }
        >
            <Flex
                minW={"100%"}
                direction={{
                    base: "column",
                    sm: "column",
                    md: "column",
                    lg: "row",
                }}
                w={"100%"}
                zIndex={10}
                position={"relative"}
                justifyContent={{
                    base: "center",
                    sm: "center",
                    md: "center",
                    lg: "flex-end",
                }}
            >
                <ChakraBox
                    w={"100%"}
                    zIndex={10}
                    position={"relative"}
                    whileHover={{ scale: 1.01 }}
                    variants={aboutItem}
                >
                    <Flex
                        flexDirection={{
                            base: "center",
                            sm: "center",
                            md: "center",
                            lg: "flex-end",
                        }}
                        minW={"50%"}
                        gap={"1em"}
                        bg={"whiteAlpha.500"}
                        backdropFilter="auto"
                        borderWidth={"1px"}
                        borderColor={"blackAlpha.200"}
                        backdropBlur="1px"
                        boxShadow={"md"}
                        borderRadius={"20px"}
                    >
                        <ChakraBox
                            w={"100%"}
                            py={{
                                base: 6,
                                sm: 8,
                                md: 8,
                                lg: 8,
                            }}
                            px={{
                                base: 6,
                                sm: 8,
                                md: 8,
                                lg: 8,
                            }}
                        >
                            <ChakraBox variants={aboutItem}>
                                <Heading
                                    pb={3}
                                    borderBottomWidth={"2px"}
                                    borderBottomColor={"blackAlpha.100"}
                                    color="blackAlpha.800"
                                    fontWeight={900}
                                    fontSize={{
                                        base: 18,
                                        sm: 18,
                                        md: 18,
                                        lg: 18,
                                    }}
                                >
                                    Experience
                                </Heading>
                            </ChakraBox>
                            {experienceText(bp)}
                        </ChakraBox>
                    </Flex>
                </ChakraBox>
            </Flex>
        </ChakraBox>
    );
};

const Skills = ({ bp }) => {
    return (
        <ChakraBox
            w={"100%"}
            as={motion.div}
            variants={background}
            initial={"hidden"}
            whileInView={"visible"}
            viewport={
                bp == "lg" || bp == "xl" || bp == "2xl"
                    ? { once: true, amount: 0.5 }
                    : bp == "md"
                    ? { once: true, amount: 0.5 }
                    : bp == "sm"
                    ? { once: true, amount: 0.5 }
                    : bp == "base"
                    ? { once: true, amount: 0.5 }
                    : { once: true }
            }
        >
            <Flex
                direction={{
                    base: "column",
                    sm: "column",
                    md: "column",
                    lg: "row",
                }}
                w={"100%"}
                zIndex={10}
                position={"relative"}
                justifyContent={{
                    base: "center",
                    sm: "center",
                    md: "center",
                    lg: "flex-end",
                }}
            >
                <ChakraBox
                    whileHover={{ scale: 1.1 }}
                    //</Flex>variants={aboutItem}
                >
                    <Flex
                        position={"relative"}
                        flexDirection={{
                            base: "center",
                            sm: "center",
                            md: "center",
                            lg: "flex-end",
                        }}
                        gap={"1em"}
                        zIndex={10}
                        bg={"whiteAlpha.500"}
                        borderWidth={"1px"}
                        borderColor={"blackAlpha.200"}
                        backdropFilter="auto"
                        backdropBlur="2px"
                        boxShadow={"md"}
                        borderRadius={"20px"}
                    >
                        <Box position={"relative"} zIndex={10} w={"100%"}>
                            {skillsInfo()}
                        </Box>
                    </Flex>
                </ChakraBox>
            </Flex>
        </ChakraBox>
    );
};

const Star = ({ top, bottom, left, right }) => {
    return (
        <Flex
            position={"absolute"}
            top={top}
            left={left}
            bottom={bottom}
            right={right}
            flexDir={"column"}
            gap={3}
        >
            <StarFour size={14} weight="fill" color="blackAlpha.700" />
        </Flex>
    );
};

const About = forwardRef((props, ref) => {
    return (
        <Flex position={"relative"} zIndex={50} justifyContent={"center"}>
            <Flex
                ref={ref}
                // position={"relative"}
                maxW={"60em"}
                w={"full"}
                // px={{
                // 	base: '6.5%',
                // 	sm: '5%',
                // 	md: '10%',
                // 	lg: 0
                // }}
                // w={'100%'}
                id="0"
                pt={{
                    base: "4em",
                    sm: "6em",
                    md: "6em",
                    lg: "6em",
                }}
                pb={{
                    base: "4em",
                    sm: "4em",
                    md: "10em",
                    lg: "15em",
                }}
            >
                <Flex justifyContent={"center"} w={"full"} direction={"column"}>
                    <Flex
                        // position={"relative"}
                        direction={"column"}
                        alignItems={"start"}
                    >
                        <ChakraBox
                            pb={0}
                            //variants={about}
                            w={"full"}
                            initial={"hidden"}
                            whileInView={"visible"}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <Title title={"A FEW SKILLS."} />
                        </ChakraBox>
                    </Flex>
                    <Flex
                        pt={"4em"}
                        w={"100%"}
                        gap={"2em"}
                        direction={"column"}
                    >
                        <SkillsContainer data={aboutText.skills} />
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
});

const SkillsContainer = ({ data }) => {
    // let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    // maxRows should be an integer for the pyramid to work
    let maxRows = Math.sqrt(data.length);
    console.log(maxRows);
    // NEED TO FIX THIS PART
    let topHalf = data.slice(0, Math.ceil(data.length / 3));
    let bottomHalf = data.slice(topHalf.length).reverse();

    let topCounter = 0;
    let bottomCounter = 0;

    return (
        <Flex
            w={"full"}
            justifyContent={"center"}
            h={"full"}
            flexDir={"column"}
            as={motion.div}
        >
            <Star top={"15em"} left={"19em"} />
            <Star top={"20em"} left={"10em"} />
            <Star top={"27em"} left={"5em"} />
            <Star bottom={"22em"} right={"7em"} />
            <Star bottom={"13em"} right={"13em"} />
            <Star bottom={"9em"} right={"3em"} />
            <Star bottom={"9em"} left={"9em"} />
            <Star bottom={"25em"} left={"5em"} />
            <Star bottom={"17em"} left={"15em"} />
            <Star top={"18em"} right={"5em"} />
            <Star top={"27em"} right={"8em"} />
            <Star top={"13em"} right={"18em"} />
            {/* <Star top={"35em"} right={"3em"} /> */}
            <Flex gap={"1.5em"} flexDir={"column"}>
                {[...Array(maxRows)].map((element, index) => {
                    topCounter += index;
                    let newSlice = topHalf.slice(
                        topCounter,
                        topCounter + index + 1
                    );
                    return (
                        <Flex
                            key={index.toString() + "toppyr"}
                            w={"full"}
                            gap={"2em"}
                            justifyContent={"center"}
                            as={motion.div}
                            // whileHover={{ scale: 2 }}
                        >
                            {newSlice.map((innerElement, innerIndex) => {
                                return (
                                    <SkillCard
                                        key={
                                            innerElement[0] +
                                            innerElement.toString() +
                                            "top"
                                        }
                                        item={innerElement}
                                    />
                                );
                            })}
                        </Flex>
                    );
                })}
            </Flex>
            <Flex gap={"1.5em"} flexDir={"column-reverse"}>
                {[...Array(maxRows)].map((element, index) => {
                    bottomCounter += index;
                    let newSlice = bottomHalf.slice(
                        bottomCounter,
                        bottomCounter + index + 1
                    );
                    return (
                        <Flex
                            key={index.toString() + "botpyr"}
                            w={"full"}
                            gap={"2em"}
                            justifyContent={"center"}
                            flexDir={"row-reverse"}
                        >
                            {newSlice.map((innerElement, innerIndex) => {
                                return (
                                    <SkillCard
                                        key={
                                            innerElement[0] +
                                            innerElement.toString() +
                                            "bot"
                                        }
                                        item={innerElement}
                                    />
                                );
                            })}
                        </Flex>
                    );
                })}
            </Flex>
        </Flex>
    );
};

const SkillCard = ({ item }) => {
    return (
        <Flex
            borderWidth={"1px"}
            borderColor={"blackAlpha.200"}
            backdropFilter="auto"
            backdropBlur="2px"
            boxShadow={"xl"}
            borderRadius={"30px"}
            w={"10em"}
            h={"6em"}
            // key={item + "pyr"}
            minW={"60px"}
            alignItems={"center"}
            justifyContent={"center"}
            minH={"60px"}
            position={"relative"}
            zIndex={50}
            whileHover={{ scale: 1.1 }}
            as={motion.div}
        >
            <ChakraBox
                zIndex={50}
                position={"relative"}
                // _hover={{ scale: 2 }}
                // variants={aboutItem}
            >
                <Flex
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    w={"full"}
                    gap={1}
                >
                    {item[1]}
                    <Heading fontSize={12} fontWeight={900}>
                        {item[0].toUpperCase()}
                    </Heading>
                </Flex>
            </ChakraBox>
        </Flex>
    );
};

const backgroundText = () => {
    return (
        <ChakraBox variants={itemText}>
            <Text
                lineHeight={"1.2em"}
                display={"inline-block"}
                wordBreak={{
                    base: "break-all",
                    sm: "break-all",
                    md: "normal",
                    lg: "normal",
                }}
                textAlign={"justify"}
                sx={{ hypens: "auto" }}
                pt={4}
                pb={2}
                whiteSpace={"pre-line"}
                color={"gray.700"}
                fontSize={{
                    base: 11,
                    sm: 11,
                    md: 12,
                    lg: 12,
                }}
            >
                {aboutText.background}
                <Icon
                    boxShadow={"xl"}
                    pl={"3px"}
                    as={CgSmile}
                    h={"1.3em"}
                    w={"1.3em"}
                    verticalAlign={"bottom"}
                    color={"blackAlpha.800"}
                />
            </Text>
        </ChakraBox>
    );
};

const experienceText = (bp) => {
    return (
        <ChakraBox w={"100%"} variants={itemText}>
            <Flex pt={6} w={"100%"} gap={2} flexDir={"row"}>
                <Flex
                    w={{ base: "40%", sm: "30%", md: "22%" }}
                    borderRightWidth={"2px"}
                    borderRightColor={"blackAlpha.200"}
                    flexDir={"column"}
                >
                    <Heading fontSize={{ base: 12, sm: 12, md: 14 }}>
                        {bp === "base" ? "2023 - Pres." : "2023 - Present."}
                    </Heading>
                    <Text
                        pr={2}
                        as={"i"}
                        color={"blackAlpha.700"}
                        fontSize={{ base: 11, sm: 11, md: 12 }}
                    >
                        Toronto, ON
                    </Text>
                </Flex>
                <Flex pl={4} w={"70%"} flexDir={"column"}>
                    <Heading fontSize={{ base: 12, sm: 12, md: 14 }}>
                        Software Developer
                    </Heading>
                    <Text
                        fontWeight={600}
                        as={"i"}
                        color={"blackAlpha.700"}
                        fontSize={{ base: 11, sm: 11, md: 12 }}
                    >
                        AviaPro Consulting Inc.
                    </Text>
                    <Text
                        pt={2}
                        color={"blackAlpha.700"}
                        fontSize={{ base: 11, sm: 11, md: 12 }}
                    >
                        {aboutText.avpExperience[0]}
                    </Text>
                </Flex>
                <Flex>
                    {/* <List 
					pt={2}
					spacing={1}>
								<ListItem>
									<Flex
									flexDir={'row'}>
										<ListIcon as={BiSubdirectoryRight}/>
										<Text
										fontSize={12}>
											Resume
										</Text>
									</Flex>
								</ListItem>
								

					</List> */}
                </Flex>
            </Flex>
        </ChakraBox>
    );
};

const skillsInfo = () => {
    return (
        <Flex
            direction={"column"}
            as={motion.div}
            position="relative"
            px={{
                base: 6,
                sm: 8,
                md: 8,
                lg: 8,
            }}
            pt={{
                base: 6,
                sm: 8,
                md: 8,
                lg: 8,
            }}
        >
            <ChakraBox variants={aboutItem}>
                <Heading
                    pb={3}
                    borderBottomWidth={"2px"}
                    borderBottomColor={"blackAlpha.100"}
                    color="blackAlpha.800"
                    fontSize={{
                        base: 18,
                        sm: 18,
                        md: 18,
                        lg: 18,
                    }}
                >
                    Technical Skills
                </Heading>
            </ChakraBox>
            <ChakraBox variants={itemText}>{skillText()}</ChakraBox>
            <ChakraBox variants={currentSkills}>
                <Flex
                    pb={{
                        base: 8,
                        sm: 10,
                        md: 10,
                        lg: 10,
                    }}
                    justify-content={"space-between"}
                    gap={5}
                    direction="column"
                    w={"100%"}
                >
                    <Flex w={"100%"} flexDir={"column"}>
                        <Heading
                            fontSize={{ base: 12, sm: 12, md: 14 }}
                            pb={1.5}
                            color="blackAlpha.800"
                        >
                            Languages
                        </Heading>
                        {/* {skillList(1)} */}
                    </Flex>
                    <Flex w={"100%"} flexDir={"column"}>
                        <Heading
                            fontSize={{ base: 12, sm: 12, md: 14 }}
                            pb={1.5}
                            color="blackAlpha.800"
                        >
                            Frameworks and Databases
                        </Heading>
                        {/* {skillList(2)} */}
                    </Flex>
                </Flex>
            </ChakraBox>
        </Flex>
    );
};

const skillText = () => {
    return (
        <Flex py={4} direction={"column"}>
            <ChakraBox variants={item}>
                <Text
                    wordBreak={{
                        base: "break-all",
                        sm: "break-all",
                        md: "normal",
                        lg: "normal",
                    }}
                    textAlign={"justify"}
                    as={"p"}
                    lineHeight={"1.3em"}
                    color={"gray.700"}
                    fontSize={{
                        base: 11,
                        sm: 11,
                        md: 12,
                        lg: 12,
                    }}
                >
                    {aboutText.skillBackground}
                </Text>
            </ChakraBox>
        </Flex>
    );
};

// add the arrow next to languages
// const skillList = (pos) => {
//     return (
//         <Flex ml={-1} gap={3}>
//             <Icon as={BiSubdirectoryRight} />
//             <Center w={"100%"} justifyContent={"space-between"}>
//                 {pos === 1 &&
//                     [...Array(8)].map((item, idx) =>
//                         skillItem(
//                             aboutText.languages[idx][0],
//                             aboutText.languages[idx][1]
//                         )
//                     )}
//                 {pos === 2 &&
//                     [...Array(8)].map((item, idx) =>
//                         skillItem(
//                             aboutText.frameworksDatabases[idx][0],
//                             aboutText.frameworksDatabases[idx][1]
//                         )
//                     )}
//             </Center>
//         </Flex>
//     );
// };

const skillItem = (name, ic) => {
    return (
        <GridItem key={name}>
            <Flex
                key={name}
                bg={"blackAlpha.200"}
                py={1}
                px={4}
                borderRadius={"lg"}
                w={"100%"}
                alignItems={"center"}
                gap={1}
                direction={"row"}
            >
                <Icon as={ic} w={2.5} h={2.5} color="blackAlpha.800" />
                <Text
                    textAlign={"center"}
                    color={"blackAlpha.800"}
                    fontSize={{
                        base: 0,
                        sm: 0,
                        md: 10,
                        lg: 12,
                    }}
                >
                    &thinsp;{name}
                </Text>
            </Flex>
        </GridItem>
    );
};

export default About;
