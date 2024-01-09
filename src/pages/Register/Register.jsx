import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import IndividualForm from "./IndividualForm";
import InstitutionForm from "./InstitutionForm";

function Register() {
  const [formtype, setFormType] = useState(1);

  return (
    <div className="dark:bg-gray-800 dark:text-white border-b-8 md:border-b-16 border-default py-7">
      <div className="flex justify-center">
        <div className="flex">
          <button
            onClick={() => setFormType(1)}
            data-tooltip="Register as individual if your are job seeker"
            data-tooltip-location="bottom"
            type="submit"
            className={`block border-b-2 ${
              formtype == 1
                ? "border-default"
                : "border-transparent hover:border-gray-700 dark:hover:border-white"
            } transition-all mx-3 font-semibold  text-sm w-full sm:w-auto px-5 py-2.5 text-center`}
          >
            Individual
          </button>
          <button
            onClick={() => setFormType(2)}
            data-tooltip="Choose Institute if you provide course to students"
            data-tooltip-location="bottom"
            type="submit"
            className={`block border-b-2 ${
              formtype == 2
                ? "border-default"
                : "border-transparent  hover:border-gray-700 dark:hover:border-white"
            } transition-all duration-300 mx-3 font-semibold  text-sm w-full sm:w-auto px-5 py-2.5 text-center`}
          >
            Institute
          </button>
        </div>
      </div>
      {formtype == 1 ? (
        <IndividualForm />
      ) : formtype == 2 ? (
        <InstitutionForm />
      ) : (
        "Something went wrong"
      )}
    </div>
  );
}

export default Register;
