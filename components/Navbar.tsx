import React from 'react'
import Link from 'next/link'
import { Heading, Flex, Text, Input, Spacer, Box } from "@chakra-ui/react"

export default function Navbar() {
    return (
        <Flex bg="teal.500" color="white" justify="space-between" padding={4} align="center" position="sticky">
            <Heading as="h1" size="lg" letterSpacing={"tighter"} mr={4}>
                <Link href="/">Nasdash</Link>
            </Heading>
            <Text><Link href="/market-watch">MarketWatch</Link></Text>
            <Spacer />
            <Box>
                <Input variant="outline" color="black" bg="white" placeholder="Search" />
            </Box>
        </Flex>
    );
}
