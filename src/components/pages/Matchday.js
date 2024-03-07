import React from "react";
import Menu from "../header/Menu";
import NextMatchData from "../content/NextMatchData";

export default function Matchday() {
  return (
    <div>
      <Menu />
      <div className="text-xl flex justify-center mt-20 mb-16 gap-2">
        <div>
          <span className="font-bold">Nä</span>
          <span className="">chster</span>
        </div>

        <div className="">
          <span className="font-bold">Spiel</span>
          <span className="">tag</span>
        </div>
      </div>
      <div className="bg-[#F2F2F2] mt-10 ml-10 mr-10 rounded-2xl p-4">
        <div className="mb-10">
          <NextMatchData />
        </div>
      </div>
    </div>
  );
}
