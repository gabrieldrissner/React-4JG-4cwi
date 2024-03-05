import React, { useEffect, useState } from "react";
import NextMatchDesign from "./NextMatchDesign";

export default function NextMatchData() {
  const [matchData, setMatchData] = useState([]);

  useEffect(() => {
    fetch("https://api.openligadb.de/getmatchdata/bl1/2023/23").then((res) =>
      res.json().then((data) => {
        setMatchData(data);
      })
    );
  }, []);

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {matchData.map((data, index) => {
          return <NextMatchDesign key={index} index={index} match={data} />;
        })}
      </div>
    </div>
  );
}
