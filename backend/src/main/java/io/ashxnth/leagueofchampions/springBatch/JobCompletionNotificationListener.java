package io.ashxnth.leagueofchampions.springBatch;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.core.BatchStatus;
import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.listener.JobExecutionListenerSupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

@Component
public class JobCompletionNotificationListener extends JobExecutionListenerSupport {

  private static final Logger log = LoggerFactory.getLogger(JobCompletionNotificationListener.class);

  private final JdbcTemplate jdbcTemplate;

  @Autowired
  public JobCompletionNotificationListener(JdbcTemplate jdbcTemplate) {
    this.jdbcTemplate = jdbcTemplate;
  }

  @Override
  public void afterJob(JobExecution jobExecution) {
    if(jobExecution.getStatus() == BatchStatus.COMPLETED) {
      log.info("Spring Batch Job Finished. Verifying Results Now.");

      jdbcTemplate.query("SELECT season, date, home_team, away_team, home_goals, away_goals, winning_team FROM match",
        (rs, row) -> "Season: " + rs.getString(1) 
        + " Date: " + rs.getString(2) 
        + " Home Team: " + rs.getString(3) 
        + " Away Team: " + rs.getString(4) 
        + " Home Team Score: " + rs.getInt(5) 
        + " Away Team Score: " + rs.getInt(6) 
        + " Winning Team: " + rs.getString(7)
      ).forEach(match -> System.out.println(match));
    }
  }
}
