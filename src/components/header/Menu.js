import React from "react";
import Logo from "./logo";
import Headline from "./Headline";
import Navigation from "./Navigation";

export default function Menu() {
  return (
    <>
      <div className="bg-[#F2F2F2] flex justify-between items-center p-8">
        <div>
          <Navigation />
        </div>
        <div>
          <Headline />
        </div>
        <div>
          <Logo />
        </div>
      </div>
    </>
  );
}
