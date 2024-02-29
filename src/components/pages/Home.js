import React from "react";
import Menu from "../header/Menu";
import TableDataShort from "../content/TableDataShort";
import MatchdayDataLastMatch from "../content/MatchdayDataLastMatch";

export default function Home() {
  return (
    <div>
      <Menu />
      <MatchdayDataLastMatch/>
      <TableDataShort/>
    </div>
  );
}
