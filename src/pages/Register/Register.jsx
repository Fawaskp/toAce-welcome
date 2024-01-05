import axios from "axios";
import React, { useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const scriptUrl = import.meta.env.VITE_GOOGLE_SHEET_LINK;

function Register() {
  const formRef = useRef();
  const [onLoading, setOnLoading] = useState(false);
  const validationErrorClassNames = "text-red-500 text-xs mx-1";

  const formik = useFormik({
    initialValues: {
      name: "",
      phonenumber: "",
      email: "",
      education: "",
      department: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Please enter your name"),
      phonenumber: Yup.string()
        .matches(
          /^[0-9]{10}$/,
          "Invalid phone number format. Please enter a 10-digit number"
        )
        .required("Phone number is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Please enter your email"),
      education: Yup.string().required(
        "Please enter your education background"
      ),
      department: Yup.string().required("Please enter your department"),
    }),
    onSubmit: (values, { resetForm }) => {
      setOnLoading(true);
      fetch(scriptUrl, { method: "POST", body: new FormData(formRef.current) })
        .then((res) => {
          console.log(res);
          console.log("SUCCESSFULLY SUBMITTED");
          toast.success("Form submitted successfully");
        })
        .catch((err) => toast.error("Something went wrong"))
        .finally(() => {
          setOnLoading(false);
          resetForm();
        });
    },
  });

  return (
    <div className="dark:bg-gray-800 dark:text-white border-b-8 md:border-b-16 border-default py-7">
      <div className="max-w-3xl mx-auto px-10">
        <form
          className="mb-4"
          ref={formRef}
          onSubmit={formik.handleSubmit}
          name="google-sheet"
        >
          <h1 className="text-3xl font-bold py-3">Register </h1>
          <div className="grid gap-6 mb-6 md:grid-cols-1">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white "
              >
                Full Name
              </label>
              <input
                name="name"
                type="text"
                id="name"
                className=" bg-gray-50 dark:bg-gray-700 dark:text-gray-50 border border-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your name here"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name && (
                <div className={validationErrorClassNames}>
                  {formik.errors.name}
                </div>
              )}
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm text-white ">
                Phone number
              </label>
              <input
                type="tel"
                name="phonenumber"
                id="phone"
                className=" bg-gray-50 dark:bg-gray-700 dark:text-gray-50 border border-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your mobile number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phonenumber}
              />
              {formik.touched.phonenumber && formik.errors.phonenumber && (
                <div className={validationErrorClassNames}>
                  {formik.errors.phonenumber}
                </div>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-white ">
                Email address
              </label>
              <input
                name="email"
                type="email"
                id="email"
                className=" bg-gray-50 dark:bg-gray-700 dark:text-gray-50 border border-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="john.doe@company.com"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && (
                <div className={validationErrorClassNames}>
                  {formik.errors.email}
                </div>
              )}
            </div>

            <div>
              <label htmlFor="education" className="block text-sm text-white ">
                Education
              </label>
              <input
                name="education"
                type="text"
                id="education"
                className=" bg-gray-50 dark:bg-gray-700 dark:text-gray-50 border border-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Current educational background"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.education}
              />
              {formik.touched.education && formik.errors.education && (
                <div className={validationErrorClassNames}>
                  {formik.errors.education}
                </div>
              )}
            </div>
            <div>
              <label htmlFor="department" className="block text-sm text-white ">
                Department
              </label>
              <input
                name="department"
                type="text"
                id="department"
                className=" bg-gray-50 dark:bg-gray-700 dark:text-gray-50 border border-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="ex: MERN or Django+React"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.department}
              />
              {formik.touched.department && formik.errors.department && (
                <div className={validationErrorClassNames}>
                  {formik.errors.department}
                </div>
              )}
            </div>
          </div>
          <button
            type="submit"
            disabled={onLoading ? true : false}
            className="block mx-auto text-white bg-default hover:bg-default-dark focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {onLoading ? "Loading..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
