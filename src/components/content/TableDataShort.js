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
    <div className=" flex lg:block justify-center">
      <div class="md:grid md:grid-cols-2 gap-4 lg:ml-5">
        {BundesligaData.map((data, index) => {
          return <TableDesignShort key={index} index={index} team={data} />;
        })}
      </div>
    </div>
  );
}
