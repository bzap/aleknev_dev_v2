import { Center, Flex } from "@chakra-ui/react";
import { Link } from "react-scroll";
import { Cactus } from "phosphor-react";

const Logo = () => {
    return (
        <Center
            position={"relative"}
            zIndex={40}
            color={"blackAlpha.800"}
            cursor={"pointer"}
            _hover={{
                transitionDuration: "0.1s",
                color: "#5c5c5c",
            }}
        >
            <Flex className="logo-hover" _active={{ transform: "scale(0.93)" }}>
                <Link
                    key={3}
                    to={"3"}
                    style={{ textDecoration: "none" }}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={800}
                >
                    <Cactus size={20} weight={"fill"} />
                </Link>
            </Flex>
        </Center>
    );
};
export default Logo;
