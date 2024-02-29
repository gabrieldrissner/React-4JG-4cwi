import React from "react";

export default function MatchDesignLastMatch({ index, match }) {
  return (
    <div className="flex items-center justify-center rounded-2xl bg-[#F2F2F2] p-4 gap-4 w-72 mt-7 ml-7 h-16">
      <div className="flex-1 text-center">{match.team1.shortName}</div>
      <div className="flex-1 text-center">
        {match.matchResults[1].pointsTeam1 +
          " : " +
          match.matchResults[1].pointsTeam2}
      </div>
      <div className="flex-1 text-center">{match.team2.shortName}</div>
    </div>
  );
}
