import { Box, Center, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

interface Match {
    teamOne: string,
    teamTwo: string,
    teamOneScore: number,
    teamTwoScore: number,
    color: string,
    date: string
}

export const MatchCard: React.FC<Match> = ({teamOne, teamTwo, teamOneScore, teamTwoScore, color, date}) => {
    return (
        <div>
            <Box mt={4} borderRadius="lg" bg={color} w="100%" color="white">
                <Center>
                    <VStack spacing={0}>
                        <Heading pt={2}>{teamOne + " vs. " + teamTwo}</Heading>
                        <Text fontSize="4xl">
                            <b>{teamOneScore + ' - ' + teamTwoScore}</b>
                        </Text>
                        <Text fontSize="xl">{date}</Text>
                    </VStack>
                </Center>
            </Box>
        </div>
    );
};
