import React, { useEffect, useState } from "react";
import MatchDesign from "./MatchDesign";
import { useNavigate } from "react-router-dom";

export default function MatchdayData() {
  const [MatchdayData, setMatchdayData] = useState([]);

  useEffect(() => {
    fetch("https://api.openligadb.de/getmatchdata/bl1/2023/14").then((res) =>
      res.json().then((data) => {
        setMatchdayData(data);
      })
    );
  }, []);

  return (
    <div className="">
      <div class="grid grid-cols-2 ">
        {MatchdayData.map((data, index) => {
          return <MatchDesign key={index} index={index} team={data} />;
        })}
      </div>
    </div>
  );
}
