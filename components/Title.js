import { Flex, Heading } from "@chakra-ui/react";
import Wave from "../components/Wave";

const Title = ({ title }) => {
    return (
        <Flex position={"relative"} zIndex={0}>
            <Heading
                fontWeight={900}
                color={"blackAlpha.800"}
                position={"relative"}
                fontSize={{
                    base: "1.7em",
                    sm: "1.7em",
                    md: "1.7em",
                    lg: "1.7em",
                }}
            >
                <Wave text={title} />
            </Heading>
        </Flex>
    );
};

export default Title;
