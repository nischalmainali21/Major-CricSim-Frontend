import React from "react";

const TwoPlayerTable = ({
  firstPlayerStats,
  firstPlayerName,
  secondPlayerStats,
  secondPlayerName,
}) => {
  // player batting stats

  const firstPlayerTableStats = new Object({
    // PlayerName: firstPlayerName,
    "Bat Matches Played": firstPlayerStats["batter_matches_played"],
    "Runs Scored": firstPlayerStats["runs_scored"],
    "Batting Avg": firstPlayerStats["batting_average"],
    "Bat Strike Rate": firstPlayerStats["strike_rate_x"],
    Explosivity: firstPlayerStats["explosivity_rating"],
    "Half Century": firstPlayerStats["50_scored"],
    Century: firstPlayerStats["100_scored"],
    "Bowl Matches Played": firstPlayerStats["bowler_matches_played"],
    "Runs Conceded": firstPlayerStats["runs_conceded"],
    "Bowling Avg": firstPlayerStats["bowling_average"],
    "Bowl Strike Rate": firstPlayerStats["strike_rate_y"],
    Economy: firstPlayerStats["economy"],
    "Wickets Taken": firstPlayerStats["wickets_taken"],
    "Balls Bowled": firstPlayerStats["balls_bowled"],
  });
  const secondPlayerTableStats = new Object({
    // PlayerName: secondPlayerName,
    "Matches Played": secondPlayerStats["batter_matches_played"],
    "Runs Scored": secondPlayerStats["runs_scored"],
    "Batting Avg": secondPlayerStats["batting_average"],
    "Strike Rate": secondPlayerStats["strike_rate_x"],
    Explosivity: secondPlayerStats["explosivity_rating"],
    "Half Century": secondPlayerStats["50_scored"],
    Century: secondPlayerStats["100_scored"],
    "Bowl Matches Played": secondPlayerStats["bowler_matches_played"],
    "Runs Conceded": secondPlayerStats["runs_conceded"],
    "Bowling Avg": secondPlayerStats["bowling_average"],
    "Bowl Strike Rate": secondPlayerStats["strike_rate_y"],
    Economy: secondPlayerStats["economy"],
    "Wickets Taken": secondPlayerStats["wickets_taken"],
    "Balls Bowled": secondPlayerStats["balls_bowled"],
  });
  //player bowling stats
  const labels = Object.keys(firstPlayerTableStats);
  console.log(labels);

  return (
    <div>
      <table className="border-stone-600 border-[2px] text-center">
        <thead className="border-stone-600 border-[2px] font-normal">
          <tr className="border-stone-800 border-b-[4px]">
            <th></th>
            <th className="border-stone-600 border-r-[2px] font-semibold text-xl p-1">
              Stats
            </th>
            <th className="border-stone-600 border-[2px] font-bold text-xl p-2">
              {firstPlayerName}
            </th>
            <th className="border-stone-600 border-[2px] font-bold text-xl p-2">
              {secondPlayerName}
            </th>
          </tr>
        </thead>
        <tbody>
          {labels.map((item) => (
            <tr
              key={item}
              className="border-stone-600 border-[2px] font-normal p-2"
            >
              <td></td>
              <td className="border-stone-600 border-r-[2px] font-semibold p-2">
                {item}
              </td>
              <td className="border-stone-600 border-[2px] font-bold p-2">
                {firstPlayerTableStats[item]}
              </td>
              <td className="font-bold p-2 ">{secondPlayerTableStats[item]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TwoPlayerTable;
