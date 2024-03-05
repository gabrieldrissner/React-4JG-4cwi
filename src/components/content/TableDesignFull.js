import React from "react";

export default function TableDesignFull({ index, team }) {
  return (
    <div className="p-4 mt-7 h-16 flex items-center gap-4 rounded-2xl bg-[#D9D9D9] hover:bg-slate-100">
      <div className="font-bold">{index + 1}</div>
      <div className="w-8">
        <img src={team.teamIconUrl} />
      </div>
      <div className="flex-grow">{team.teamName}</div>
      <div className="font-bold ml-auto">{team.matches}</div>
      <div className="ml-auto">{team.won}</div>
      <div className="ml-auto">{team.lost}</div>
      <div className="ml-auto">{team.goals}</div>
      <div className="ml-auto">{team.opponentGoals}</div>
      <div className="ml-auto">{team.goalDiff}</div>
      <div className="ml-auto font-bold">{team.points}</div>
    </div>
  );
}
