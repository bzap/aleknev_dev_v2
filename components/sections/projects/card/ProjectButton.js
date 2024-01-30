import { Link, Button, Heading } from "@chakra-ui/react";

const ProjectButton = ({ name, link }) => {
    return (
        <Link isExternal style={{ textDecoration: "none" }} href={link}>
            <Button
                variant={"unstyled"}
                _hover={{ bg: "blackAlpha.200" }}
                _active={{ bg: "blackAlpha.300" }}
                borderRadius={"lg"}
                size={"sm"}
            >
                <Heading
                    color={"blackAlpha.800"}
                    py={1}
                    px={3}
                    fontWeight={800}
                    fontSize={{
                        base: 11,
                        sm: 11,
                        md: 12,
                        lg: 12,
                    }}
                >
                    {name}&#160;&gt;
                </Heading>
            </Button>
        </Link>
    );
};

export default ProjectButton;
