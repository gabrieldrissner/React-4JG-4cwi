import React, { useEffect, useState } from "react";
import TableDesign from "./TableDesign";
import { useNavigate } from "react-router-dom";

export default function TableData() {
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
          return <TableDesign key={index} index={index} team={data} />;
        })}
      </div>
    </div>
  );
}
