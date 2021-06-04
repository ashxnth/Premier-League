import { Flex, Heading } from "@chakra-ui/react";
import Link from 'next/link';
import React from 'react';

export const Navbar: React.FC<{ name: string }> = ({ name }) => {
    return (
        <Flex bg="black" color="white" justify="space-between" padding={4} align="center" position="sticky">
            <Heading as="h1" size="lg" letterSpacing={"tighter"} mr={4}>
                <Link href="/">{name}</Link>
            </Heading>
        </Flex>
    );
}
