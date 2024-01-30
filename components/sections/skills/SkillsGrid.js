import { Flex } from "@chakra-ui/react";
import SkillsCard from "./SkillsCard";
import { motion } from "framer-motion";
import Star from "./Star";

const SkillsGrid = ({ data }) => {
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
                                    <SkillsCard
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
                                    <SkillsCard
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

export default SkillsGrid;
