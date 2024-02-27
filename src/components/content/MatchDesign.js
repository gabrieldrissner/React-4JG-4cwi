import React from "react";

export default function MatchDesign({ index, team }) {
  return (
    
    <div className="p-4 mt-7 h-16 flex items-center gap-4 rounded-2xl bg-[#F2F2F2] hover:bg-slate-100">
      <div className="font-bold">{index + 1}</div>
     
      <div className="flex-grow">{team.matchDateTime}</div>

    </div>
  );
}
