import Path from "./Path";
import { Flex } from "@chakra-ui/react";

const HamburgerIcon = ({ toggle }) => (
    <Flex pt={1} pl={2} alignContent={"center"}>
        <button tabIndex="-1" className="simple-hover" onClick={toggle}>
            <svg width="18" height="18" viewBox="0 0 23 23" fill="red">
                <Path
                    strokeWidth={3.5}
                    fill={"red.100"}
                    variants={{
                        closed: { d: "M 2 2.5 L 20 2.5" },
                        open: { d: "M 3 16.5 L 17 2.5" },
                    }}
                />
                <Path
                    strokeWidth={3.5}
                    d="M 2 9.423 L 20 9.423"
                    variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 },
                    }}
                    transition={{
                        duration: 0.1,
                        ease: "linear",
                    }}
                />
                <Path
                    strokeWidth={3.5}
                    variants={{
                        closed: { d: "M 2 16.346 L 20 16.346" },
                        open: { d: "M 3 2.5 L 17 16.346" },
                    }}
                />
            </svg>
        </button>
    </Flex>
);

export default HamburgerIcon;
