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

const landingFeatures = [
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-12 "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
        />
      </svg>
    ),
    title: "Player Insights",
    description:
      "Unlock the secrets of your players&apos; performance with comprehensive Player Insights, empowering you to make informed decisions and optimize strategies for success.",
    buttonContent: "Watch Players",
    buttonLink: "/allplayer",
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-12 "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z"
        />
      </svg>
    ),
    title: "Compare Players",
    description:
      "Compare players effortlessly to identify strengths, weaknesses, and key performance metrics, empowering you to make data-driven decisions and gain a competitive edge.",
    buttonContent: "Compare",
    buttonLink: "/comp",
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-12 "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
        />
      </svg>
    ),
    title: "Match Simulation",
    description:
      "Compare players effortlessly to identify strengths, weaknesses, and key performance metrics, empowering you to make data-driven decisions and gain a competitive edge.",
    buttonContent: "Simulate",
    buttonLink: "/simulate",
  },
];

export { labeledPlayerStats, lowerBetterStats, landingFeatures };
