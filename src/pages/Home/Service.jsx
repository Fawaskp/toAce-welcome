import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPart() {
  return (
    <div className="lg:bg-gray-100 dark:bg-gray-800 dark:text-white min-h-[100px] border-b-8 md:border-b-16 border-default lg:-mt-16">
      <div className=" max-w-7xl mx-auto md:p-10 flex flex-col">
        
        <div className="flex p-3 mt-2 md:my-10 justify-around border flex-col items-center md:flex-row border-dashed border-gray-700 rounded-md mx-5">
          <div className="md:w-1/4  overflow-hidden">
            <img
              src="https://img.freepik.com/free-vector/interview-concept-illustration_114360-1678.jpg"
              alt="Interview Image"
              className="object-cover w-full h-32 md:h-full"
            />
          </div>
          <div className="md:w-3/5 text-lg flex flex-col justify-center">
            <h1 className="font-bold text-xl md:text-2xl py-1 text-center">
              Tired of generic applications?
            </h1>
            <p className="text-sm md:text-md">
              Join our innovative platform where comprehensive 90-minute
              interviews highlight your true potential. We capture your skills,
              experience, and personality through video and detailed
              assessments, creating a rich profile that sets you apart from the
              crowd. Companies searching for your unique talents can easily find
              you, saving them time and effort while ensuring they find the
              perfect match. Ready to accelerate your career journey? Sign up
              today!
            </p>
          </div>
        </div>

        <div className="flex p-3 my-5 md:my-10 justify-around border flex-col-reverse items-center md:flex-row border-dashed border-gray-700 rounded-md mx-5">
          <div className="md:w-3/5 text-lg flex flex-col justify-center">
            <h1 className="font-bold text-xl md:text-2xl py-1 text-center">
              Struggling to get your resume noticed?
            </h1>
            <p className="text-sm md:text-md">
              Ditch the traditional job search and land interviews through our
              revolutionary platform. We showcase your strengths and expertise
              through engaging video interviews and in-depth skill assessments,
              giving companies a clear picture of what you bring to the table.
              No more lost in the resume pile – stand out from the crowd and get
              matched with opportunities that perfectly align with your
              aspirations. Sign up and become the job market's hidden gem!
            </p>
          </div>
          <div className="md:w-1/4  overflow-hidden">
            <img
              src="https://unblast.com/wp-content/uploads/2020/05/Writing-CV-Illustration.jpg"
              alt="Interview Image"
              className="object-cover w-full h-32 md:h-full"
            />
          </div>
        </div>

        <div className="flex p-3 mb-5 md:my-10 justify-around border flex-col items-center md:flex-row border-dashed border-gray-700 rounded-md mx-5">
          <div className="md:w-1/4 overflow-hidden">
            <img
              src="https://img.freepik.com/free-vector/cv-best-candidate-mans-hands-flat-vector-illustration-company-looking-employee-headhunter-hiring-people-human-resource-management-job-interview-concept_74855-24461.jpg"
              alt="Interview Image"
              className="object-cover w-full h-32 md:h-full"
            />
          </div>
          <div className="md:w-3/5 text-lg flex flex-col justify-center">
            <h1 className="font-bold  text-xl md:text-2xl py-1 text-center">
              Experience the future of hiring
            </h1>
            <p className="text-sm md:text-md">
              Our platform empowers job seekers like you to ditch the cover
              letter and generic applications. Instead, let your skills and
              personality shine through a comprehensive 90-minute interview. We
              create a personalized profile that captures your essence, making
              it easy for companies seeking specific talents to discover you. No
              more endless job boards and unanswered applications – connect with
              your ideal opportunities effortlessly. Join the talent revolution,
              sign up now!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPart;
