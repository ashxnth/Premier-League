import { Container, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from 'react';
import TeamCard from '../components/TeamCard';

export default function TeamView({ data }) {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        const getTeams = async () => {
            const response = await fetch('http://localhost:8080/teams');
            const teamList = await response.json();
            setTeams(teamList);
        }
        getTeams();
    });
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
