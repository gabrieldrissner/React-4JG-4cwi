import React from "react";
import Menu from "../header/Menu";
import TableDataShort from "../content/TableDataShort";
import MatchdayDataLastMatch from "../content/MatchdayDataLastMatch";

export default function Home() {
  return (
    <div>
      <Menu />
      <div className="text-xl flex justify-center mt-20 mb-16">
        <span className="font-bold">Ho</span>
        <span className="">me</span>
      </div>
      <div className=" bg-[#F2F2F2] mt-10 justify-between rounded-2xl mr-10 ml-10">
        <div className="lg:flex justify-between ">
          <div className="mb-10">
            <TableDataShort /> 
          </div>
          <div className="mb-10">
            <MatchdayDataLastMatch />
          </div>
        </div>
      </div>
    </div>
  );
}
