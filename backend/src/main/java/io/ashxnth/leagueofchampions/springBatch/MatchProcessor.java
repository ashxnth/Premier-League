package io.ashxnth.leagueofchampions.springBatch;

import java.time.LocalDate;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.item.ItemProcessor;

public class MatchProcessor implements ItemProcessor<RawMatch, Match> {
    private static final Logger log = LoggerFactory.getLogger(MatchProcessor.class);

  @Override
  public Match process(final RawMatch rawMatch) throws Exception {
    final String season = rawMatch.getSeason();
    final LocalDate date = LocalDate.parse(rawMatch.getDate().split("T")[0]);
    if (date.getYear() < 2000) return null;
    final String homeTeam = rawMatch.getHomeTeam();
    final String awayTeam = rawMatch.getAwayTeam();
    final int homeGoals = Integer.parseInt(rawMatch.getHomeGoals());
    final int awayGoals = Integer.parseInt(rawMatch.getAwayGoals());
    final String winningTeam = rawMatch.getWinningTeam();

    final Match transformedMatch = new Match(season, date, homeTeam, awayTeam, homeGoals, awayGoals, winningTeam);

    log.info("Converting (" + rawMatch + ") into (" + transformedMatch + ")");

    return transformedMatch;
  }
    
}
