import React from "react";

function GetHired() {
  return (
    <div className="container">
      <div className="w-full p-16 flex justify-center ">
        <div>
          <h3 className="text-3xl font-semibold">How get into a career?</h3>
        </div>
      </div>
      <div className="flex justify-evenly">
        <div className="rounded-xl shadow-md ring-1 ring-gray-700 offset-x-0 offset-y-0 p-8">
          <div className="flex items-center gap-2 mb-5">
            <img
              className="filter brightness-95 saturate-150  hue-rotate-90"
              src="https://turing.cdn.prismic.io/turing/972c34c8-9f48-4509-bc2b-5a769ea8e40b_thumbsup_40b9a7473f_b941d9a949.svg?auto=compress,format"
              alt="Quality icon"
              width="48"
              height="48"
            />
            <h3 className="font-medium">Quality</h3>
          </div>
          <p className="text-blue-500 font-semibold mb-3 text-2xl">
            95% trial success rate
          </p>
          <span className="whitespace-pre-line">
            <div className="mb-3 text-lg">
              <p>
                for smarter, more <br />
                productive teams
              </p>
            </div>
          </span>
        </div>
        <div className="rounded-xl shadow-md ring-1 ring-gray-700 offset-x-0 offset-y-0 p-8">
          <div className="flex items-center gap-2 mb-5">
            <img
              className="filter brightness-95 saturate-150  hue-rotate-90"
              src="https://turing.cdn.prismic.io/turing/359173a3-1682-476c-b766-125dbbe2f9e0_bolt_1d50a64b59_8c1b189289.svg?auto=compress,format"
              srcset="https://turing.cdn.prismic.io/turing/359173a3-1682-476c-b766-125dbbe2f9e0_bolt_1d50a64b59_8c1b189289.svg?auto=compress%2Cformat&amp;width=640 640w, https://turing.cdn.prismic.io/turing/359173a3-1682-476c-b766-125dbbe2f9e0_bolt_1d50a64b59_8c1b189289.svg?auto=compress%2Cformat&amp;width=828 828w, https://turing.cdn.prismic.io/turing/359173a3-1682-476c-b766-125dbbe2f9e0_bolt_1d50a64b59_8c1b189289.svg?auto=compress%2Cformat&amp;width=1200 1200w, https://turing.cdn.prismic.io/turing/359173a3-1682-476c-b766-125dbbe2f9e0_bolt_1d50a64b59_8c1b189289.svg?auto=compress%2Cformat&amp;width=2048 2048w, https://turing.cdn.prismic.io/turing/359173a3-1682-476c-b766-125dbbe2f9e0_bolt_1d50a64b59_8c1b189289.svg?auto=compress%2Cformat&amp;width=3840 3840w"
              alt="Efficiency icon"
              width="48"
              height="48"
            />
            <h3>Efficiency</h3>
          </div>
          <p className="text-blue-500 font-semibold mb-3 text-2xl">
            97% engagement success
          </p>
          <span className="whitespace-pre-line">
            <div className="mb-3 text-lg">
              <p>
                for accelerated results with greater <br />
                efficiency
              </p>
            </div>
          </span>
        </div>
        <div className="rounded-xl shadow-md ring-1 ring-gray-700 offset-x-0 offset-y-0 p-8">
          <div className="flex items-center gap-2 mb-5">
            <img
              className="filter brightness-95 saturate-150  hue-rotate-90"
              src="https://turing.cdn.prismic.io/turing/c91be523-b9ea-48a6-a9f4-ec0d8802801a_Stopwatch_084a08494d_0682a6276d.svg?auto=compress,format"
              srcset="https://turing.cdn.prismic.io/turing/c91be523-b9ea-48a6-a9f4-ec0d8802801a_Stopwatch_084a08494d_0682a6276d.svg?auto=compress%2Cformat&amp;width=640 640w, https://turing.cdn.prismic.io/turing/c91be523-b9ea-48a6-a9f4-ec0d8802801a_Stopwatch_084a08494d_0682a6276d.svg?auto=compress%2Cformat&amp;width=828 828w, https://turing.cdn.prismic.io/turing/c91be523-b9ea-48a6-a9f4-ec0d8802801a_Stopwatch_084a08494d_0682a6276d.svg?auto=compress%2Cformat&amp;width=1200 1200w, https://turing.cdn.prismic.io/turing/c91be523-b9ea-48a6-a9f4-ec0d8802801a_Stopwatch_084a08494d_0682a6276d.svg?auto=compress%2Cformat&amp;width=2048 2048w, https://turing.cdn.prismic.io/turing/c91be523-b9ea-48a6-a9f4-ec0d8802801a_Stopwatch_084a08494d_0682a6276d.svg?auto=compress%2Cformat&amp;width=3840 3840w"
              alt="Expertise icon"
              width="48"
              height="48"
            />
            <h3>Expertise</h3>
          </div>
          <p className="text-blue-500 font-semibold mb-3 text-2xl">
            125+ combined years
          </p>
          <span className="whitespace-pre-line">
            <div className="mb-3 text-lg">
              <p>
                for truly transformational <br />
                outcomes
              </p>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default GetHired;
