import { Badge, Box, Container, Slider, SliderFilledTrack, SliderThumb, SliderTrack } from "@chakra-ui/react";
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { MatchCard } from '../../components/MatchCard';
import { Navbar } from '../../components/Navbar';

interface Match {
    id: string,
    season: string,
    date: string,
    homeTeam: string,
    awayTeam: string,
    homeGoals: number,
    awayGoals: number,
    winningTeam: string
}

export default function MatchView() {
    const router = useRouter()
    const { teamName }= router.query
    const [match, setMatches] = useState<Array<Match>>([]);
    const [currentSeason, setCurrentSeason] = useState<string>("2019-20");
    useEffect(() => {
        fetch(`http://localhost:8080/teams/${teamName}/matches/${currentSeason}`)
        .then((response) => response.json())
        .then((responseJSON) => {
            setMatches(responseJSON);
        });
    }, []);
    function convertValueToSeason(value) {
        switch (value) {
            case 0:
                return "2000-01"
            case 10:
                return "2001-02"
            case 20:
                return "2002-03"
            case 30:
                return "2003-04"
            case 40:
                return "2004-05"
            case 50:
                return "2005-06"
            case 60:
                return "2006-07"
            case 70:
                return "2007-08"
            case 80:
                return "2008-09"
            case 90:
                return "2009-10"
            case 100:
                return "2010-11"
            case 110:
                return "2011-12"
            case 120:
                return "2012-13"
            case 130:
                return "2013-14"
            case 140:
                return "2014-15"
            case 150:
                return "2015-16"
            case 160:
                return "2016-17"
            case 170:
                return "2017-18"
            case 180:
                return "2018-19"
            case 190:
                return "2019-20"
            case 200:
                return "2020-21"
        }
    }
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
        id: 3,
        season: "2019-20",
        date: "2019-05-03",
        homeTeam: "Man City",
        awayTeam: "Man United",
        homeGoals: 1,
        awayGoals: 4,
        winningTeam: "A"
    }
    //let match = [match1, match2, match3];
    return (
        <div>
            <Navbar name="Premier League" />
            <Container maxW="container.xl">
                <Badge mt={4} fontSize="2em" colorScheme="pink">
                    Season: {currentSeason}
                </Badge>
                <Slider
                    defaultValue={180}
                    min={0}
                    max={200}
                    step={10}
                    colorScheme="pink"
                    onChange={(value) => setCurrentSeason(convertValueToSeason(value))}
                >
                    <SliderTrack bg="purple.200">
                        <Box position="relative" right={10} />
                        <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb boxSize={6} />
                </Slider>
                {
                    match.map((match) => {
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
