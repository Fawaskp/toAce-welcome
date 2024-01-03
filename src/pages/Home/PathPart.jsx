import React from "react";
import "./PathPart.css";

function PathPart() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-center font-bold text-2xl md:text-3xl my-12">
        How get entered?
      </h1>
      <div className=" w-4/6 mx-auto ">
        <div className="card w-full">
          <div className="info bg-gray-200">
            <h3 className="title font-semibold">Title 1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="info bg-gray-100">
            <h3 className="title font-semibold">Title 2</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="info bg-gray-200">
            <h3 className="title font-semibold">Title 3</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PathPart;
