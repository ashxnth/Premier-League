package io.ashxnth.leagueofchampions.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import io.ashxnth.leagueofchampions.model.Match;

public interface MatchRepository extends CrudRepository<Match, String> {

    @Query(value = "SELECT DISTINCT m.homeTeam FROM Match m")
    List<String> getDistinctTeams();

    @Query(value = "SELECT m FROM Match m WHERE (m.homeTeam = :teamName AND m.season = :season) order by date desc")
    List<Match> getMatchesBySeason(
        @Param("teamName") String teamName, 
        @Param("season") String season
    );
    
}
