import { StarFour } from "phosphor-react";
import { Flex } from "@chakra-ui/react";

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

export default Star;
