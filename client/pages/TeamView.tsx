import { Container, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from 'react';
import TeamCard from '../components/TeamCard';

export default function TeamView() {
    const [teams, setTeams] = useState(["Arsenal", "Chelsea"]);
    useEffect(() => {
        fetch('http://localhost:8080/teams/')
        .then((response) => response.json())
        .then((responseJSON) => {
            setTeams(responseJSON);
        });
    }, []);
    return (
        <Container maxW="container.xl">
            <SimpleGrid columns={2} spacingX={4}>{
                teams.map(team => {
                    return <TeamCard key={team} team={team}></TeamCard>
                })
            }</SimpleGrid>
        </Container>
    );
}
