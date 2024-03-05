import React from "react";

export default function TableDesignShort({ index, team }) {
  return (
    <div className="p-4 mt-7 flex items-center gap-4 rounded-2xl bg-[#D9D9D9] hover:bg-slate-100 w-72 h-16">
      <div className="font-bold">{index + 1}</div>
      <div className="w-8">
        <img src={team.teamIconUrl} />
      </div>
      <div className="flex-grow">{team.teamName}</div>
      <div className="ml-auto font-bold">{team.points}</div>
    </div>
  );
}
