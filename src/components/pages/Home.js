import React from "react";
import Menu from "../header/Menu";
import TableDataShort from "../content/TableDataShort";
import MatchdayDataLastMatch from "../content/MatchdayDataLastMatch";

export default function Home() {
  return (
    <div>
      <Menu />
      <div className="text-xl flex justify-center mt-10">
        <span className="font-bold">Ho</span>
        <span className="">me</span>
    </div>
      <div className="flex bg-[#F2F2F2] mt-10 ml-10 mr-10 rounded-2xl justify-between">
        <div className="mb-11 ml-11 p-1">
          <TableDataShort />
        </div>
        <div className="mr-11 mb-11 p-1">
          <MatchdayDataLastMatch />
        </div>
      </div>
    </div>
  );
}
