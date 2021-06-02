import { Container } from "@chakra-ui/react";
import { useRouter } from 'next/router';
import React from 'react';
import MatchCard from '../../components/MatchCard';
import Navbar from '../../components/Navbar';

export default function MatchView() {
    const router = useRouter()
    const { teamName } = router.query
    const match1 = {
        id: 1,
        season: "2019-20",
        date: "2019-05-02",
        homeTeam: "Arsenal",
        awayTeam: "Chelsea",
        homeGoals: 2,
        awayGoals: 1,
        winningTeam: "H"
    }
    const match2 = {
        id: 2,
        season: "2019-20",
        date: "2019-05-03",
        homeTeam: "Arsenal",
        awayTeam: "Chelsea",
        homeGoals: 2,
        awayGoals: 2,
        winningTeam: "D"
    }
    const match3 = {
        id: 2,
        season: "2019-20",
        date: "2019-05-03",
        homeTeam: "Man City",
        awayTeam: "Man United",
        homeGoals: 1,
        awayGoals: 4,
        winningTeam: "A"
    }
    let matches = [match1, match2, match3];
    return (
        <div>
            <Navbar name="Premier League" />
            <Container maxW="container.xl">
                {
                    matches.map((match) => {
                        return <MatchCard
                            key={match.id}
                            teamOne={match.homeTeam}
                            teamTwo={match.awayTeam}
                            teamOneScore={match.homeGoals}
                            teamTwoScore={match.awayGoals}
                            date={match.date}
                            color={match.winningTeam == "H" ? "blue.500" : (match.winningTeam == "D" ? "purple.500" : "pink.500")}
                        />
                    })
                }
            </Container>
        </div>
    );
}
