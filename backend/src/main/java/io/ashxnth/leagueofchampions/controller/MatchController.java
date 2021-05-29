package io.ashxnth.leagueofchampions.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import io.ashxnth.leagueofchampions.model.Match;
import io.ashxnth.leagueofchampions.repository.MatchRepository;

@RestController
public class MatchController {

    private MatchRepository matchRepository;

    public MatchController(MatchRepository matchRepository) {
        this.matchRepository = matchRepository;
    }

    @GetMapping("/teams")
    public List<String> getTeams() {
        return this.matchRepository.getDistinctTeams();
    }

    @GetMapping("/teams/{teamName}/matches/{season}")
    public List<Match> getMatchesForTeam(@PathVariable String teamName, @PathVariable String season) {
        return this.matchRepository.getMatchesBySeason(teamName, season);
    }
    
}
