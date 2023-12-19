import React from "react";
import PlayerChart from "./PlayerChart";

const PlayerCard = ({ playerStats, playerName }) => {
  // console.log(playerStats);
  const chartStats = new Object({
    battingStrikeRate: playerStats["strike_rate_x"],
    battingAverage: playerStats["batting_average"],
    explosivityRating: playerStats["explosivity_rating"],
    bowlingStrikeRate: playerStats["strike_rate_y"],
    bowlingAverage: playerStats["bowling_average"],
    economy: playerStats["economy"],
  });

  return (
    <div>
      <h1>{playerName}</h1>
      <div className="flex gap-4">
        <div>
          <h2>Batting Stats</h2>
          <p>Batter matches playerd: {playerStats["batter_matches_played"]}</p>
          <p>Runs Scored: {playerStats["runs_scored"]}</p>
          <p>dismissals: {playerStats["dismissals"]}</p>
          <p>balls_faced: {playerStats["balls_faced"]}</p>
          <p>Dot Balls Scored: {playerStats["0s_scored"]}</p>
          <p>Singles scored: {playerStats["1s_scored"]}</p>
          <p>Double Scored: {playerStats["2s_scored"]}</p>
          <p>Four Scored: {playerStats["4s_scored"]}</p>
          <p>Highest Scored in a single match: {playerStats["high_score"]}</p>
          <p>25 Scored: {playerStats["25s_scored"]}</p>
          <p>half century Scored: {playerStats["50s_scored"]}</p>
          <p>75 Scored: {playerStats["75s_scored"]}</p>
          <p>century Scored: {playerStats["100s_scored"]}</p>
          <p>strike rate: {playerStats["strike_rate_x"]}</p>
          <p>Batting Average: {playerStats["batting_average"]}</p>
          <p>explosivity Rating: {playerStats["explosivity_rating"]}</p>
        </div>
        <div>
          <h2>Bowling Stats</h2>
          <p>Bowler matches playerd: {playerStats["bowler_matches_played"]}</p>
          <p>Runs Conceded: {playerStats["runs_conceded"]}</p>
          <p>Wickets Taken: {playerStats["wickets_taken"]}</p>
          <p>Balls Bowled: {playerStats["balls_bowled"]}</p>
          <p>0_wickets_taken: {playerStats["0_wickets_taken"]}</p>
          <p>1_wickets_taken: {playerStats["1_wickets_taken"]}</p>
          <p>2_wickets_taken: {playerStats["2_wickets_taken"]}</p>
          <p>3_wickets_taken: {playerStats["3_wickets_taken"]}</p>
          <p>4_wickets_taken: {playerStats["4_wickets_taken"]}</p>
          <p>5_wickets_taken: {playerStats["5_wickets_taken"]}</p>
          <p>6_wickets_taken: {playerStats["6_wickets_taken"]}</p>
          <p>0s_conceded: {playerStats["0s_conceded"]}</p>
          <p>1s_conceded: {playerStats["1s_conceded"]}</p>
          <p>2s_conceded: {playerStats["2s_conceded"]}</p>
          <p>4s_conceded: {playerStats["4s_conceded"]}</p>
          <p>6s_conceded: {playerStats["6s_conceded"]}</p>
          <p>highest_conceded: {playerStats["highest_conceded"]}</p>
          <p>strike rate: {playerStats["strike_rate_y"]}</p>
          <p>Bowling Average: {playerStats["bowling_average"]}</p>
          <p>Economy: {playerStats["economy"]}</p>
          <p>Total Runs Conceded: {playerStats["total_runs_conceded"]}</p>
        </div>
      </div>
      <PlayerChart playerStats={chartStats} playerName={playerName} />
    </div>
  );
};

export default PlayerCard;
