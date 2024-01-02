import React from "react";

function MainContent() {
  return (
    <div>

    <div className="max-w-7xl mx-auto h-96 md:p-10 my-4 flex items-center flex-col md:flex-row">
      <div className="w-full md:w-1/2 px-4" >
        <h1 className="text-3xl md:text-5xl font-bold">
          Master the <br /> interview & land a <br /> job worth loving.
        </h1>
        <p className="text-xl my-5" >
          Simulate realistic interviews for over 120 different job positions and
          level up your skills in no time.
        </p>
      </div>
      <div className="w-full md:w-1/2 px-7 md:px-3" >
        <img className="max-w-full " src="https://myinterviewpractice.com/images/hmBannerImg.webp" alt="Interview Image" />
      </div>
    </div>
    </div>
  );
}

export default MainContent;
