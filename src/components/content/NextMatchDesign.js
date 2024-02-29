import React from "react";

export default function NextMatchDesign({ index, match }) {
  return (
    <div className="flex items-center justify-center rounded-2xl bg-[#F2F2F2] p-4 gap-4 w-72 mt-7 ml-7 h-16">
        <div className="flex-grow font-bold">{match.matchDateTime}</div>
        <div className="w-8">
        <img src={ match.team1.teamIconUrl} />
      </div>
      <div className="flex-1 text-center">{match.team1.teamName}</div>

      <div className="flex-grow justify-center">-</div>
      <div className="w-8">
        <img src={ match.team2.teamIconUrl} />
      </div>
      <div className="flex-1 text-center">{match.team2.teamName}</div>
    </div>
  );
}
