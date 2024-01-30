import { Flex, Button, Heading, Link, Center } from "@chakra-ui/react";
import ChakraBox from "../../common/ChakraBox";
import { motion } from "framer-motion";

const GitButton = () => {
    return (
        <Flex
            position={"relative"}
            zIndex={50}
            pt={{
                base: "6em",
                sm: "6em",
                md: "7em",
                lg: "5em",
            }}
            justifyContent={{
                base: "center",
                sm: "center",
                md: "center",
                lg: "flex-end",
            }}
        >
            <ChakraBox as={motion.div}>
                <Center>
                    <Link
                        style={{ textDecoration: "none" }}
                        href={"https://github.com/bzap"}
                        isExternal
                    >
                        <Button
                            variant={"unstyled"}
                            _hover={{ bg: "blackAlpha.200" }}
                            _active={{ bg: "blackAlpha.300" }}
                            borderRadius={"lg"}
                            size={"sm"}
                        >
                            <Heading
                                px={3}
                                color={"blackAlpha.800"}
                                fontWeight={800}
                                fontSize={{ base: 12, sm: 12, md: 12, lg: 12 }}
                            >
                                ... And more &gt;
                            </Heading>
                        </Button>
                    </Link>
                </Center>
            </ChakraBox>
        </Flex>
    );
};

export default GitButton;
