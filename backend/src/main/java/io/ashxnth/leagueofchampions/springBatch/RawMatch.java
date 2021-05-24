package io.ashxnth.leagueofchampions.springBatch;

public class RawMatch {
    private String season;
    private String date;
    private String homeTeam;
    private String awayTeam;
    private String homeGoals;
    private String awayGoals;
    private String winningTeam;

    public RawMatch() {}

    public RawMatch(String season, String date, String homeTeam, String awayTeam, String homeGoals, String awayGoals, String winningTeam) {
        this.season = season;
        this.date = date;
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
        this.homeGoals = homeGoals;
        this.awayGoals = awayGoals;
        this.winningTeam = winningTeam;
    }

    public String getSeason() {
        return season;
    }
    public void setSeason(String season) {
        this.season = season;
    }
    public String getDate() {
        return date;
    }
    public void setDate(String date) {
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
    public String getHomeGoals() {
        return homeGoals;
    }
    public void setHomeGoals(String homeGoals) {
        this.homeGoals = homeGoals;
    }
    public String getAwayGoals() {
        return awayGoals;
    }
    public void setAwayGoals(String awayGoals) {
        this.awayGoals = awayGoals;
    }
    public String getWinningTeam() {
        return winningTeam;
    }
    public void setWinningTeam(String winningTeam) {
        this.winningTeam = winningTeam;
    }

}
