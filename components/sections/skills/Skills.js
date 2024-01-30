import { Flex } from "@chakra-ui/react";
import Title from "../../Title";
import aboutText from "../../../public/data/AboutText";
import {
    about,
    currentSkills,
    background,
    itemText,
    aboutItem,
} from "../../../styles/Variants";
import { forwardRef } from "react";
import ChakraBox from "../../common/ChakraBox";
import SkillsGrid from "./SkillsGrid";

const Skills = forwardRef((props, ref) => {
    return (
        <Flex position={"relative"} zIndex={50} justifyContent={"center"}>
            <Flex
                ref={ref}
                maxW={"60em"}
                w={"full"}
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
                    lg: "13em",
                }}
            >
                <Flex justifyContent={"center"} w={"full"} direction={"column"}>
                    <Flex
                        // position={"relative"}
                        direction={"column"}
                        alignItems={"start"}
                    >
                        <ChakraBox
                            pb={2}
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
                        <SkillsGrid data={aboutText.skills} />
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
});

export default Skills;
