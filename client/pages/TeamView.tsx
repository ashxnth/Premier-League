import { Container, SimpleGrid } from "@chakra-ui/react";
import React from 'react';
import TeamCard from '../components/TeamCard';

export default function TeamView() {
    const teams = ["Arsenal", "Chelsea", "Manchester"];
    return (
        <Container maxW="container.xl">
            <SimpleGrid columns={2} spacing={4}>{
                teams.map(team => {
                    return <TeamCard key={team} team={team}></TeamCard>
                })
            }</SimpleGrid>
        </Container>
    );
}