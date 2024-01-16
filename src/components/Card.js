import React, { useEffect } from "react";

export default function Card({ imgUrl, title, description }) {

  console.log("title", title);
  return (
    <div className="text-2xl font-sans shadow bg-white">
      <div className="">
        <img src={imgUrl} className="w-full h-32 object-cover" />
      </div>
      <div className="p-4">
        <div className="font-bold">{title}</div>
        <div className="text-sm">{description}</div>
      </div>
    </div>
  );
}
