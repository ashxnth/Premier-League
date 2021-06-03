import { Box, Center, Heading } from "@chakra-ui/react";
import React from "react";

export default function TeamCard(props) {
  return (
    <Box
      as="a"
      href={`/teams/${props.team}?season=2019-20`}
      mt={4}
      borderRadius="lg"
      bg="green.600"
      w="100%"
      color="white"
    >
      <Center>
        <Heading m={4}>{props.team}</Heading>
      </Center>
    </Box>
  );
};