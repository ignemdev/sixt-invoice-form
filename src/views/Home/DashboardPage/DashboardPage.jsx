import {
    Box,
    Divider,
    Flex,
    Heading,
    Stat,
    StatArrow,
    StatGroup,
    StatHelpText,
    StatLabel,
    StatNumber
} from '@chakra-ui/react';

export const DashboardPage = () => {
    return (
        <>
            <Box>
                <Flex
                    gap={ 5 }
                    flexWrap={ 'wrap' }
                    justifyContent={ [ 'center', 'space-evenly', 'space-evenly', 'start' ] }
                    alignItems={ 'start' }>
                    <Heading as={ 'h5' } size={ 'sm' }>Dashboard</Heading>
                    <Divider/>
                    <Box
                        shadow='md' p={ 6 }
                        rounded='sm'
                    >
                        <StatGroup gap={ 6 }>
                            <Stat>
                                <StatLabel>Sent</StatLabel>
                                <StatNumber>345,670</StatNumber>
                                <StatHelpText>
                                    <StatArrow type='increase'/>
                                    23.36%
                                </StatHelpText>
                            </Stat>
                        </StatGroup>
                    </Box>
                </Flex>
            </Box>
        </>
    );
}