const playerStatsLabels = {
  batter_matches_played: "Batter Matches Played",
  runs_scored: "Runs Scored",
  dismissals: "Dismissals",
  balls_faced: "Balls Faced",
  "0s_scored": "Dot Balls Scored",
  "1s_scored": "Singles Scored",
  "2s_scored": "Doubles Scored",
  "4s_scored": "Fours Scored",
  high_score: "Highest Scored in a Single Match",
  "25_scored": "25s Scored",
  "50_scored": "Half Century Scored",
  "75_scored": "75s Scored",
  "100_scored": "Century Scored",
  strike_rate_x: "Batting Strike Rate",
  batting_average: "Batting Average",
  explosivity_rating: "Explosivity Rating",
  bowler_matches_played: "Bowler Matches Played",
  runs_conceded: "Runs Conceded",
  wickets_taken: "Wickets Taken",
  balls_bowled: "Balls Bowled",
  "0_wickets_taken": "0 Wickets Taken",
  "1_wickets_taken": "1 Wickets Taken",
  "2_wickets_taken": "2 Wickets Taken",
  "3_wickets_taken": "3 Wickets Taken",
  "4_wickets_taken": "4 Wickets Taken",
  "5_wickets_taken": "5 Wickets Taken",
  "6_wickets_taken": "6 Wickets Taken",
  "0s_conceded": "Dot Balls Conceded",
  "1s_conceded": "Singles Conceded",
  "2s_conceded": "Doubles Conceded",
  "4s_conceded": "Fours Conceded",
  "6s_conceded": "Sixes Conceded",
  highest_conceded: "Highest Runs Conceded",
  strike_rate_y: "Bowling Strike Rate",
  bowling_average: "Bowling Average",
  economy: "Bowling Economy",
  total_runs_conceded: "Total Runs Conceded",
};

const labeledPlayerStats = {};

Object.keys(playerStatsLabels).forEach((stat) => {
  labeledPlayerStats[stat] = { LabelName: playerStatsLabels[stat] };
});

const lowerBetterStats = [
  "runs_conceded",
  "extras_runs_conceded",
  "4s_conceded",
  "6s_conceded",
  "0s_conceded",
  "1s_conceded",
  "2s_conceded",
  "highest_conceded",
  "strike_rate_y",
  "bowling_average",
  "economy",
  "total_runs_conceded",
];

export { labeledPlayerStats, lowerBetterStats };
