import React, { useEffect, useState } from "react";
import TableDesignFull from "./TableDesignFull";

export default function TableDataFull() {
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
      <div class="grid grid-cols-2 ">
        {BundesligaData.map((data, index) => {
          return <TableDesignFull key={index} index={index} team={data} />;
        })}
      </div>
    </div>
  );
}
