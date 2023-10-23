import React from "react";

function Hero() {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white space-y-6 z-50">
      <p className="text-4xl text-center">
        Download High-Quality Images by creators
      </p>
      <p className="text-1xl text-center">
        Over 2.4 million+ stock Images by our talented community
      </p>
      <input
        type="text"
        placeholder="Search high resolution Images, categories, wallpapers"
        className="w-2/4 bg-gray-200 h-10 text-left px-3"
      />
    </div>
  );
}

export default Hero;
