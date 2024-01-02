import React from "react";
import { useNavigate } from "react-router-dom";

function RegisterPart() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto my-36 bg-black p-5 md:p-10 w-5/6 md:w-4/6 rounded-3xl text-white">
      <h1 className="text-lg text-center md:text-left md:text-3xl font-bold">
        Register for a seamless carrier
      </h1>
      <div className="w-full flex flex-col md:flex-row mt-6">
        <p className="w-full md:w-4/6 text-xs text-left md:text-lg">
          Drive more results for your team by optimizing your scheduling 
          processes, integrating with key tools, and automating communications{" "}
          so you can connect with the right people, faster.
        </p>
        <div className="w-full md:w-2/6 flex justify-center items-center">
          <button
            onClick={() => navigate("/register")}
            className="text-sm md:text-md text-white font-semibold border-none rounded-md md:rounded-lg  bg-default py-1 px-3 m-3 md:px-5 md:py-3"
          >
            Regiser Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterPart;
