import { useCycle, motion } from "framer-motion";
import { Spacer, Flex, Box, Center, Link, Collapse } from "@chakra-ui/react";

import { InstagramLogo, GithubLogo, LinkedinLogo } from "phosphor-react";
import HamburgerIcon from "./Hamburger";
import CustomTabs from "./CustomTabs";
import Logo from "./Logo";

const Content = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    return (
        <Box px={4} py={"4px"}>
            <Flex
                align={"center"}
                justifyContent={"space-between"}
                direction={"row"}
                gap={2.5}
            >
                <Logo />
                <Spacer />
                <Link
                    style={{ textDecoration: "none" }}
                    href={"https://instagram.com/l.aleknev"}
                    isExternal
                >
                    <Center>
                        <Flex
                            id={"siinstagram"}
                            key={""}
                            className="translate-hover"
                        >
                            <InstagramLogo size={20} weight="fill" />
                        </Flex>
                    </Center>
                </Link>
                <Link
                    style={{ textDecoration: "none" }}
                    href={"https://github.com/bzap/"}
                    isExternal
                >
                    <Center>
                        <Flex
                            id={"siinstagram"}
                            key={""}
                            className="translate-hover"
                        >
                            <GithubLogo size={20} weight="fill" />
                        </Flex>
                    </Center>
                </Link>
                <Link
                    style={{ textDecoration: "none" }}
                    href={"https://github.com/bzap/"}
                    isExternal
                >
                    <Center pr={3}>
                        <Flex
                            id={"siinstagram"}
                            key={""}
                            className="translate-hover"
                        >
                            <LinkedinLogo size={20} weight="fill" />
                        </Flex>
                    </Center>
                </Link>
                <Flex>
                    <motion.nav
                        initial={false}
                        animate={isOpen ? "open" : "closed"}
                        custom="100%"
                    >
                        <HamburgerIcon toggle={toggleOpen} />
                    </motion.nav>
                </Flex>
            </Flex>
            <Collapse in={isOpen} animateOpacity>
                <CustomTabs toggle={toggleOpen} />
            </Collapse>
        </Box>
    );
};

export default Content;
