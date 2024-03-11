import React, { useEffect, useState } from "react";
import MatchDesignLastMatch from "./MatchDesignLastMatch";

export default function MatchdayDataLastMatch() {
  const [matchData, setMatchData] = useState([]);
  const [filteredMatchData, setFilteredMatchData] = useState([]);

  useEffect(() => {
    fetch("https://api.openligadb.de/getmatchdata/bl1/2023").then((res) =>
      res.json().then((data) => {
        setMatchData(data);
        filterMatches(data);
      })
    );
  }, []);

  const filterMatches = (matches) => {
    let newData = matches.filter((match) => {
      if (match.group.groupOrderID == 20) {
        return true;
      } else {
        return false;
      }
    });
    setFilteredMatchData(newData);
  };

  return (
    <div className="flex lg:w-1/2 justify-center">
      <div className="">
        {filteredMatchData.map((data, index) => {
          return (
            <MatchDesignLastMatch key={index} index={index} match={data} />
          );
        })}
      </div>
    </div>
  );
}
