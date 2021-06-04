import { Box, Center, Heading } from "@chakra-ui/react";
import React from "react";

export const TeamCard: React.FC<{ team: string }> = ({ team }) => {
  return (
    <Box
      as="a"
      href={`/teams/${team}?season=2019-20`}
      mt={4}
      borderRadius="lg"
      bg="green.600"
      w="100%"
      color="white"
    >
      <Center>
        <Heading m={4}>{team}</Heading>
      </Center>
    </Box>
  );
};