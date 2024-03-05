import React from "react";
import Menu from "../header/Menu";
import NextMatchData from "../content/NextMatchData";

export default function Matchday() {
  return (
    <div>
      <Menu />
      <div className="text-xl flex justify-center mt-10 gap-2">
        <div>
        <span className="font-bold">Nä</span>
        <span className="">chster</span>
        </div>
      
        <div className="">
        <span className="font-bold">Spiel</span>
        <span className="">tag</span>
        </div>
    </div>
    <NextMatchData/>
    </div>
  );
}
