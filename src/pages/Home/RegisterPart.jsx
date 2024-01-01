import React from "react";
import { useNavigate } from "react-router-dom";

function RegisterPart() {

    const navigate = useNavigate()

  return (
    <div className="mx-auto my-36 bg-black flex p-16 w-4/6 rounded-3xl">
      <div className="w-4/6 text-white">
        <h1 className="text-3xl my-3 font-bold" >Register for a seamless carrier</h1>
        <p className="text-lg" >
          Drive more results for your team by optimizing your scheduling <br />
          processes, integrating with key tools, and automating communications <br />
          so you can connect with the right people, faster.
        </p>
      </div>
      <div className="w-2/6 flex justify-center items-center">
        <button onClick={()=>navigate('/register')} className="text-white font-semibold border-none rounded-lg bg-default px-5 py-3">
          Regiser Now
        </button>
      </div>
    </div>
  );
}

export default RegisterPart;
