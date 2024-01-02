import axios from "axios";
import React, { useRef } from "react";

function Register() {
  const formRef = useRef();

  const scriptUrl = import.meta.env.VITE_userBaseUrl

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(scriptUrl, { method: "POST", body: new FormData(formRef.current) })
      .then((res) => {
        console.log(res);
        console.log("SUCCESSFULLY SUBMITTED");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="max-w-3xl mx-auto px-10">
      <form ref={formRef} onSubmit={handleSubmit} name="google-sheet">
        <h1 className="text-3xl font-bold py-3">Register </h1>
        <div className="grid gap-6 mb-6 md:grid-cols-1">
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Full Name
            </label>
            <input
              name="name"
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5     dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your name here"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Phone number
            </label>
            <input
              type="tel"
              name="phonenumber"
              id="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5     dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="123-45-678"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Email address
            </label>
            <input
              name="email"
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5     dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="john.doe@company.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="education"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Education
            </label>
            <input
              name="education"
              type="url"
              id="education"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5     dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Current educational background"
              required
            />
          </div>
          <div>
            <label
              htmlFor="department"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Department
            </label>
            <input
              name="department"
              type="url"
              id="department"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5     dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="ex: MERN or Django+React"
              required
            />
          </div>
        </div>
        <button
          onClick={handleSubmit}
          type="submit"
          className="block mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
