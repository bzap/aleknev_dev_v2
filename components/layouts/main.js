import React from "react";
import { Container, Flex, Box, Heading } from "@chakra-ui/react";
import { Columns, FirstAid, StarFour } from "phosphor-react";

const Layout = ({ children }) => {
    const containerRef = React.useRef(null);
    function mouseMoveEvent(e) {
        const { x, y } = containerRef.current.getBoundingClientRect();
        containerRef.current.style.setProperty("--x", e.clientX - x);
        containerRef.current.style.setProperty("--y", e.clientY - y);
    }

    React.useEffect(() => {
        // need to add a scrollevent here for the cursor glow
        if (containerRef) {
            containerRef.current.addEventListener("mousemove", mouseMoveEvent);
        }
        return () =>
            containerRef.current.removeEventListener(
                "mousemove",
                mouseMoveEvent
            );
    }, [containerRef]);
    return (
        <Box
            className={"grad"}
            ref={containerRef}
            maxH={"max-content"}
            overflow={"hidden"}
            px={{ base: "5%", sm: "5%", md: "5%", lg: "0" }}
            bg="#F2F2F2"
        >
            <Container
                maxW="65em"
                width="100%"
                margin="auto"
                minH="120%"
                maxH={"100%"}
                userSelect={"none"}
                left={0}
                pl={0}
                pr={0}
            >
                {/* <Flex
                    position={"fixed"}
                    left={10}
                    py={8}
                    h={"100%"}
                    flexDir={"column"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                >
                    <StarFour size={12} weight="fill" />
                    <Flex h={"90%"} py={8} w={"25%"} borderRadius={"22px"} />
                    <StarFour size={12} weight="fill" />
                </Flex> */}
                {/* <Flex
                    position={"fixed"}
                    bottom={9}
                    left={12}
                    flexDir={"column"}
                    gap={3}
                >
                    <StarFour size={12} weight="fill" color="blackAlpha.700" />
                </Flex>
                <Flex
                    position={"fixed"}
                    top={9}
                    right={12}
                    flexDir={"column"}
                    gap={3}
                >
                    <StarFour size={12} weight="fill" color="blackAlpha.700" />
                </Flex> */}
                <main>{children}</main>
            </Container>
        </Box>
    );
};

export default Layout;
