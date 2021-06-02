import React from 'react'
import Link from 'next/link'
import { Heading, Flex, Box, Button, Menu, MenuButton, MenuItemOption, MenuList, MenuOptionGroup } from "@chakra-ui/react"

export default function Navbar(props) {
    return (
        <Flex bg="black" color="white" justify="space-between" padding={4} align="center" position="sticky">
            <Heading as="h1" size="lg" letterSpacing={"tighter"} mr={4}>
                <Link href="/">{props.name}</Link>
            </Heading>
        </Flex>
    );
}
