import React from "react";

export default function Card({ imgUrl, title, description }) {
  console.log("title", description);
  return (
    <div className="text-2xl font-sans shadow ">
      <div className="">
        <img src={imgUrl} className="h-32 object-cover" alt="" />
      </div>
      <div className="p-4">
        <div className="font-bold">{title}</div>
        <div className="text-sm">{description}</div>
      </div>
    </div>
  );
}
