
import { tabs } from '../../public/data/TabContent';
import {
    Flex,
    Heading,
    Tabs, 
    Tab, 
} from '@chakra-ui/react';
import { Link } from "react-scroll/modules";

const MobileTabs = () => {
    return (
        <Flex
            justify={'flex-end'}>
                <Flex
                    w={'7.5em'}
                    pt={2}
                    direction={'column'}>
                        <Tabs
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
                        </Tabs>

                </Flex>
        </Flex>
    )
}

export default MobileTabs