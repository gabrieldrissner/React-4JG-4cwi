import React from "react";

export default function MatchDesignLastMatch({ index, match }) {
  if (match.matchResults.length == 0) {
    return <></>;
  }
  return (
    <div className="">
      <div className="flex items-center justify-center rounded-2xl bg-[#D9D9D9] w-72 p-4 gap-4 mt-6 h-16 hover:bg-slate-100">
        
        <div className="flex-1 text-center">{match.team1.shortName}</div>
        <div className="flex-1 text-center">
          {match.matchResults[1].pointsTeam1 +
            " : " +
            match.matchResults[1].pointsTeam2}
        </div>
        <div className="flex-1 text-center">{match.team2.shortName}</div>
      </div>
    </div>
  );
}
