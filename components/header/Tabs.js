
import { tabs } from '../../public/data/TabContent';
import {
    Flex,
    Heading,
    Tabs as ChakraTabs, 
    Tab, 
} from '@chakra-ui/react';
import { Link } from "react-scroll/modules";

const Tabs = ({ toggle }) => {
    return (
        <Flex
            justify={'flex-end'}>
                <Flex
                    w={'7.5em'}
                    pt={2}
                    direction={'column'}>
                        <ChakraTabs
                        mt={-1}
                        variant={'unstyled'}>
                        {tabs.slice(0,-1).map((item, idx) => (
                        <Link 
                        key={idx}
                        activeClass="active"
                        to={idx.toString()}
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={900}>
                            <Tab
                            onClick={toggle}
                            mt={1.5}
                            w={'full'}
                            borderRadius={'lg'}
                            _hover={{'bg': '#e4e4e480'}}
                            _active={{'bg': '#e0e0e0'}}
                            >
                                    <Heading
                                    fontSize={12}>
                                        {item.label}
                                    </Heading>
                
                            </Tab>
                            </Link>
                        ))}
                        </ChakraTabs>

                </Flex>
        </Flex>
    )
}

export default Tabs