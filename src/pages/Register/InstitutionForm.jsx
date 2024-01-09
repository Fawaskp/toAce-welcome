import React, { useRef, useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const scriptUrl = import.meta.env.VITE_INST_GOOGLE_SHEET_LINK;

function InstitutionForm() {
  const formRef = useRef();
  const [onLoading, setOnLoading] = useState(false);

  const validationErrorClassNames = "text-sm text-red-500";

  const formik = useFormik({
    initialValues: {
      name: "",
      phonenumber: "",
      website: "",
      email: "",
      place: "",
      industry: "",
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
      place: Yup.string().required("Please enter the place"),
      website: Yup.string().url(
        "Invalid URL format. Please enter a valid website URL"
      ),
      industry: Yup.string().required("Please enter your industry"),
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
    <div className="max-w-3xl mx-auto px-10 pt-3">
      <form
        className="mb-4"
        ref={formRef}
        onSubmit={formik.handleSubmit}
        name="google-sheet"
      >
        <h1 className="text-xl font-bold py-2 md:text-3xl md:py-3">
          Register as Individual
        </h1>

        <div className="grid gap-6 mb-6 md:grid-cols-1">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white "
            >
              Name
            </label>
            <input
              name="name"
              type="text"
              id="name"
              className=" bg-gray-50 dark:bg-gray-700 dark:text-gray-50 border border-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Institution name here"
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
            <label htmlFor="place" className="block text-sm text-white ">
              Place
            </label>
            <input
              name="place"
              type="text"
              id="place"
              className=" bg-gray-50 dark:bg-gray-700 dark:text-gray-50 border border-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Current educational background"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.place}
            />
            {formik.touched.place && formik.errors.place && (
              <div className={validationErrorClassNames}>
                {formik.errors.place}
              </div>
            )}
          </div>

          <div>
            <label htmlFor="website" className="block text-sm text-white ">
              Website
            </label>
            <input
              name="website"
              type="text"
              id="website"
              className=" bg-gray-50 dark:bg-gray-700 dark:text-gray-50 border border-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Company website url"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.website}
            />
            {formik.touched.website && formik.errors.website && (
              <div className={validationErrorClassNames}>
                {formik.errors.website}
              </div>
            )}
          </div>

          <div>
            <label htmlFor="industry" className="block text-sm text-white ">
              Industry
            </label>
            <input
              name="industry"
              type="text"
              id="industry"
              className=" bg-gray-50 dark:bg-gray-700 dark:text-gray-50 border border-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="ex: Technology, Fashion"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.industry}
            />
            {formik.touched.industry && formik.errors.industry && (
              <div className={validationErrorClassNames}>
                {formik.errors.industry}
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
  );
}

export default InstitutionForm;
