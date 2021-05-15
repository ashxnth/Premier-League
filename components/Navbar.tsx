import React from 'react'
import { HStack } from "@chakra-ui/react"
import Link from 'next/link'

export default function Navbar() {
    return(
        <HStack spacing={8} justify={["flex-start", "flex-start"]}>
            <Link href="/">Nasdash</Link>
            <Link href="/market-watch">MarketWatch</Link>
        </HStack>
    )
}
