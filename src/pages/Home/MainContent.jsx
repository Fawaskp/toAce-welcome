import React from "react";
import { useNavigate } from "react-router-dom";

function MainContent() {
  const navigate = useNavigate()
  return (
    <div className="relative dark:bg-gray-800 lg:dark:bg-transparent">
      <svg
        className="dark:bg-black absolute hidden lg:block mx-auto -top-6 w-full h-full -z-20"
        viewBox="0 0 29849 14491"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17935.8 7131.66C12998.2 12142.7 3914.74 10214 0 9077.99V14491H29849V793.222C26286.8 389.267 24854.6 110.169 17935.8 7131.66Z"
          fill="#1B85E7"
        />
        <path
          d="M10929 9819.8C5417.48 7974.82 2137.32 10368.2 0.000415081 11795.5L0 14491H29849V0C28534.3 2884 24922.1 8104.09 20991.2 5912.44C16077.6 3172.89 17818.3 12126 10929 9819.8Z"
          className="fill-white dark:fill-black"
        />
        <path
          d="M10929 10010.8C5417.48 8165.78 2137.32 10559.2 0.000415081 11986.5L0 14491H29849V190.961C28534.3 3074.96 24922.1 8295.05 20991.2 6103.41C16077.6 3363.85 17818.3 12317 10929 10010.8Z"
          className="fill-gray-100 dark:fill-gray-800"
        />
      </svg>

      <div className="max-w-7xl mx-auto lg:h-screen md:p-10 pt-2 flex flex-col md:flex-row">
        <div className="lg:w-2/3 p-5 md:p-0   2xl:p-5 h-full">
          <div className="text-2xl sm:text-3xl 2xl:text-5xl pb-2 font-bold dark:text-white" >
            <h1 className="sm:py-2">
              Easy to <span className="text-default"> Hire</span>{" "}
            </h1>
            <h1 className="2xl:py-3">
              Talented <span className="text-default">Developers </span> &
            </h1>
            <h1 className="sm:pt-2">
              Professional <span>Agencies! </span>{" "}
            </h1>
          </div>
          <p className="text-sm sm:text-md text-gray-500 dark:text-gray-200 font-extralight py-2 2xl:py-4">
            Lörem ipsum doktiga povärunt. Kingen pons anarusade de astrojåbel.
            Anan tinade. Kvasifyra dobel semimårade ultran så nide. Anasm
            nenöröna, sverka. Tredat uskap ifall triage, och ohägon oliga.
          </p>
          <button onClick={()=>navigate('/register')} className="bg-default px-3 py-2 sm:px-8 sm:py-3 text-white text-sm md:text-lg my-2 rounded-md font-semibold">
            Register Now !
          </button>
        </div>
        <div className="w-1/3"></div>
      </div>
    </div>
  );
}

export default MainContent;
