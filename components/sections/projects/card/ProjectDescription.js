import { Text } from "@chakra-ui/react";

const ProjectDescription = ({ desc }) => {
    return (
        <Text
            py={{
                base: 2,
                sm: 2,
                md: 2,
                lg: 2,
            }}
            as="p"
            fontWeight={700}
            lineHeight={"1.3em"}
            fontSize={{
                base: 11,
                sm: 11,
                md: 12,
                lg: 11,
            }}
            color={"gray.600"}
        >
            {desc}
        </Text>
    );
};

export default ProjectDescription;
