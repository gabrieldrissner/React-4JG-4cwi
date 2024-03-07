import React from "react";
import Menu from "../header/Menu";
import TableDataFull from "../content/TableDataFull";

export default function Table() {
  return (
    <div>
      <Menu />
      <div className="text-xl flex justify-center mt-20 mb-16">
        <span className="font-bold">Tab</span>
        <span className="">elle</span>
    </div>
    <div className="bg-[#F2F2F2] mt-10 ml-10 mr-10 rounded-2xl p-4">
     <div className="mb-10"><TableDataFull/></div> </div>

    </div>
  );
}
