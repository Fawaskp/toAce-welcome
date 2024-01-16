import React, { useState } from "react";
import { Button } from "../../components/CustomElements";
import { toast } from "react-toastify";

function FilterPage() {
  const options = ["lodash", "Expres.js", "request", "fs"];
  const questions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [questionNumber, setQuestionNumber] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChangeQustion = () => {
    if (selectedOption) {
      if (questionNumber < questions.length) {
        setQuestionNumber(questionNumber + 1);
        setSelectedOption(null);
      }
    } else {
      toast.warn("Select an option");
    }
  };

  const handleSelectOption = (optionId) => {
    setSelectedOption(optionId);
  };

  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center dark:text-gray-900">
      <div className="h-96 rounded-lg w-1/2 m-6 border flex flex-col justify-between p-3">
        <p className="font-semibold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
          assumenda laboriosam temporibus harum. Cupiditate ducimus eaque nisi,
          suscipit maxime quod recusandae harum?
        </p>
        <div className="flex items-center">
          <div className="p-4 flex justify-between w-full mx-4">
            {questions.map((quest, idx) => (
              <div
                className={`${
                  idx < questionNumber ? "bg-blue-500" : "bg-gray-300"
                } h-5 w-5 transition-all duration-300 rounded-full`}
              />
            ))}
          </div>
          <Button
            disabled={selectedOption ? false : true}
            onClick={handleChangeQustion}
            className="!rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </Button>
        </div>
      </div>

      <div className="rounded-lg w-1/2 m-6 flex flex-col justify-between p-3">
        {options.map((option, idx) => (
          <label htmlFor={"option" + idx}>
            <div className="my-2 border grid h-24 p-4 rounded-lg">
              <input
                checked={selectedOption == idx}
                onClick={() => handleSelectOption(idx)}
                name="opt"
                className="justify-self-end self-start"
                id={"option" + idx}
                type="radio"
              />
              <span className="mx-3 justify-self-center font-semibold">
                {option}
              </span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}

export default FilterPage;
