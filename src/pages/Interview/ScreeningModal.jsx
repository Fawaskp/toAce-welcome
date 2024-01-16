import React, { useState } from "react";
import "./modal.css";
import { Button } from "../components/CustomElements";
import { useNavigate } from "react-router-dom";

function Screening({ isOpen, onClose }) {
  const navigate = useNavigate()
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={onClose}
          ></div>
          <div className="relative p-5 md:max-w-xl 2xl:max-w-3xl w-80pt mx-auto my-6">
            <div className="relative flex flex-col w-full bg-white border-2 border-gray-300 rounded-lg outline-none focus:outline-none p-6">
              <div className="flex gap-3 mb-4">
                <img
                  className="w-20"
                  src="https://ats.uplers.com/images/masters/assessment/icon-ai_screening.svg"
                  alt="skillImageAI Screening"
                />
                <div className="">
                  <h4 className="font-bold text-2xl">Non AI Screening</h4>
                  <div className="attribs font-light">
                    <span className="text-gray-600 font-medium" >
                      Passing score benchmark:{" "}
                      <strong className="text-green-700 mx-2">66%</strong>
                    </span>
                    <span className="text-blue-700 mx-2">Duration: 30 Mins</span>
                  </div>
                </div>
              </div>
              <p className="description aiScreening">
                This screening will cover your communication skills as well as
                your technical skills for the role of ‘
                <span className="font-bold">Front End Developer</span>’
              </p>
              <div className="flex  md:text-xl font-extralight my-4">
                <img
                  className="me-2"
                  src="https://ats.uplers.com/images/talent/impPointBulb.svg"
                />
                Important points to consider :
              </div>

              <div className="flex flex-col px-5">
                <div>
                  <div>
                    <ul className="screeningTips font-light leading-5 text-xs">
                      <li className="my-3">
                        It is a proctored screening, so please make sure that
                        you do not change tabs or refresh while the screening is
                        taking place.
                      </li>
                      <li className="my-3">
                        Please make sure your device isn’t connected to any
                        other screens during this screening
                      </li>
                      <li className="my-3">
                        You won’t be allowed a retest so dont start it casually
                      </li>
                      <li className="my-3">
                        You will be marked as unqualified for this opportunity
                        if any cheating is detected
                      </li>
                    </ul>
                    <Button onClick={()=>navigate('/screening')} type="button" className="rounded-full md:w-1/3 -ms-5">
                      Start Screening
                    </Button>
                    <div className="text-sm text-gray-500 font-light -ms-5">
                      Your test will open in another tab
                    </div>
                  </div>
                </div>
              </div>
                  <div className="warning pt-2 border-t flex mt-6 font-light text-sm">
                    <svg
                    className="w-1/4"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2898 3.8602L1.81978 18.0002C1.64514 18.3026 1.55274 18.6455 1.55177 18.9947C1.55079 19.3439 1.64127 19.6873 1.8142 19.9907C1.98714 20.2941 2.2365 20.547 2.53748 20.7241C2.83847 20.9012 3.18058 20.9964 3.52978 21.0002H20.4698C20.819 20.9964 21.1611 20.9012 21.4621 20.7241C21.763 20.547 22.0124 20.2941 22.1853 19.9907C22.3583 19.6873 22.4488 19.3439 22.4478 18.9947C22.4468 18.6455 22.3544 18.3026 22.1798 18.0002L13.7098 3.8602C13.5315 3.56631 13.2805 3.32332 12.981 3.15469C12.6814 2.98605 12.3435 2.89746 11.9998 2.89746C11.656 2.89746 11.3181 2.98605 11.0186 3.15469C10.7191 3.32332 10.468 3.56631 10.2898 3.8602V3.8602Z"
                        stroke="#B60707"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M12 9V13"
                        stroke="#B60707"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M12 17H12.0105"
                        stroke="#B60707"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <p>
                      The test will be regarded as a ‘failed attempt’ if you
                      pause or leave in-between. If you have a genuine reason or
                      a system/network issue, please take a screenshot or a
                      short video as proof and contact your Uplers point of
                      contact to request a re-test
                    </p>
                  </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Screening;
