import React, { useEffect, useState } from "react";
import MatchDesignLastMatch from "./MatchDesignLastMatch";

export default function MatchdayDataLastMatch() {
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
      <div className="">
        {matchData.map((data, index) => {
          return (
            <MatchDesignLastMatch key={index} index={index} match={data} />
          );
        })}
      </div>
    </div>
  );
}
