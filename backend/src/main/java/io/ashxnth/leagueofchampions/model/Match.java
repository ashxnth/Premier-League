package io.ashxnth.leagueofchampions.model;

import java.time.LocalDate;
import java.util.UUID;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Match {
    @Id
    private String id;
    private String season;
    private LocalDate date;
    private String homeTeam;
    private String awayTeam;
    private int homeGoals;
    private int awayGoals;
    private String winningTeam;

    public Match(String season, LocalDate date, String homeTeam, String awayTeam, int homeGoals, int awayGoals, String winningTeam) {
        this.id = UUID.randomUUID().toString(); 
        this.season = season;
        this.date = date;
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
        this.homeGoals = homeGoals;
        this.awayGoals = awayGoals;
        this.winningTeam = winningTeam;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getSeason() {
        return season;
    }
    public void setSeason(String season) {
        this.season = season;
    }
    public LocalDate getDate() {
        return date;
    }
    public void setDate(LocalDate date) {
        this.date = date;
    }
    public String getHomeTeam() {
        return homeTeam;
    }
    public void setHomeTeam(String homeTeam) {
        this.homeTeam = homeTeam;
    }
    public String getAwayTeam() {
        return awayTeam;
    }
    public void setAwayTeam(String awayTeam) {
        this.awayTeam = awayTeam;
    }
    public int getHomeGoals() {
        return homeGoals;
    }
    public void setHomeGoals(int homeGoals) {
        this.homeGoals = homeGoals;
    }
    public int getAwayGoals() {
        return awayGoals;
    }
    public void setAwayGoals(int awayGoals) {
        this.awayGoals = awayGoals;
    }
    public String getWinningTeam() {
        return winningTeam;
    }
    public void setWinningTeam(String winningTeam) {
        this.winningTeam = winningTeam;
    }

}
