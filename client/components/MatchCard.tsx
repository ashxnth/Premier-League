import { Box, Center, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

export default function MatchCard(props) {
    return (
        <div>
            <Box mt={4} borderRadius="lg" bg={props.color} w="100%" color="white">
                <Center>
                    <VStack spacing={0}>
                        <Heading pt={2}>{props.teamOne + " vs. " + props.teamTwo}</Heading>
                        <Text fontSize="4xl">
                            <b>1 - 0</b>
                        </Text>
                        <Text fontSize="xl">{props.date}</Text>
                    </VStack>
                </Center>
            </Box>
        </div>
    );
};
