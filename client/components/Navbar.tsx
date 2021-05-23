import React from 'react'
import Link from 'next/link'
import { Heading, Flex, Box, Button, Menu, MenuButton, MenuItemOption, MenuList, MenuOptionGroup } from "@chakra-ui/react"

export default function Navbar() {
    return (
        <Flex bg="teal.500" color="white" justify="space-between" padding={4} align="center" position="sticky">
            <Heading as="h1" size="lg" letterSpacing={"tighter"} mr={4}>
                <Link href="/">League of Champions</Link>
            </Heading>
            <Box>
                <Menu closeOnSelect={false}>
                    <MenuButton as={Button} bgColor="white" color="black">
                        Add to WatchList
                    </MenuButton>
                    <MenuList color="black" minWidth="240px">
                        <MenuOptionGroup title="Tickers" type="checkbox">
                            <MenuItemOption onClick={() => console.log("selected")} value="AAPL">Apple</MenuItemOption>
                            <MenuItemOption value="GOOG">Google</MenuItemOption>
                            <MenuItemOption value="MSFT">Microsoft</MenuItemOption>
                        </MenuOptionGroup>
                    </MenuList>
                </Menu>
            </Box>
        </Flex>
    );
}
