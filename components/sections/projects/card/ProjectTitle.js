import { Heading } from "@chakra-ui/react";

const ProjectTitle = ({ title }) => {
    return (
        <Heading
            color={"blackAlpha.800"}
            fontWeight={900}
            fontSize={{
                base: 20,
                sm: 20,
                md: 20,
                lg: 24,
            }}
        >
            {title}
        </Heading>
    );
};

export default ProjectTitle;
