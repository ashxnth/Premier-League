import { Box, Center, Heading } from "@chakra-ui/react";
import React from "react";

export default function TeamCard(props) {
  return (
    <Box
      as="a"
      href="https://chakra-ui.com"
      mt={4}
      borderRadius="lg"
      bg="black"
      w="100%"
      color="white"
    >
      <Center>
        <Heading m={4}>{props.team}</Heading>
      </Center>
    </Box>
  );
};