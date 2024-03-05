import React, { useEffect, useState } from "react";
import TableDesignShort from "./TableDesignShort";

export default function TableDataShort() {
  const [BundesligaData, setBundesligaData] = useState([]);

  useEffect(() => {
    fetch("https://api.openligadb.de/getbltable/bl1/2023").then((res) =>
      res.json().then((data) => {
        setBundesligaData(data);
      })
    );
  }, []);

  return (
    <div className="">
      <div class="grid grid-cols-2 gap-4">
        {BundesligaData.map((data, index) => {
          return <TableDesignShort key={index} index={index} team={data} />;
        })}
      </div>
    </div>
  );
}
