import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { Button } from "../../components/CustomElements";
import { toast } from "react-toastify";

function ScreeningQuestion({ stopRecording }) {
  const [currques, setCurrquest] = useState(0);
  const [answers, setAnswers] = useState([]);

  const questions = [
    "What are the advantages of ReactJS?",
    "How does React work?",
    "What is the use of refs?",
    "Who invented that?",
  ];

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return (
      <span className="font-bold text-red-500 text-center">
        Browser doesn't support speech recognition!!
      </span>
    );
  }

  const calculateScore = () => {
    var ansLength = 0;
    for (let i = 0; i < answers.length; i++) {
      ansLength += answers[i].length;
    }
    while(ansLength>10){
      ansLength/=10
    }
    console.log(ansLength+' out of 10');
  };

  const handleTimeout = () =>{

  }

  const handleSubmit = () => {
    if (currques <= questions.length) {
      if (transcript.trim() == "") {
        toast.warn("Say answer again, its not captured");
        return;
      }
      setAnswers(transcript);
      setCurrquest(currques + 1);
      resetTranscript();
      console.log("Answers --> ", answers);
      if (currques == questions.length - 1) {
        stopRecording();
        alert("You are completed test successfully");
        console.log(answers);
        calculateScore();
      }
    }
  };

  useEffect(() => {
    if (!browserSupportsSpeechRecognition) {
      alert("Your Browser don't support this test technology");
    } else {
      SpeechRecognition.startListening({ language: "en-IN", continuous: true });
    }
  }, []);

  return (
    <div className="w-1/2 flex flex-col items-center">
      <div className="flex justify-around my-3">
        {questions.map((data, idx) => {
          return (
            <span
              key={"btn" + data}
              className={`p-2 mx-2 rounded-full shadow-md ${
                currques == idx ? "bg-blue-500 text-white" : ""
              }`}
            >
              {idx + 1}
            </span>
          );
        })}
      </div>
      <p className="py-3 font-bold">{questions[currques]}</p>
      <Button onClick={handleSubmit} className="rounded-full w-1/3">
        Submit Answer
      </Button>
      <Button
        onClick={resetTranscript}
        className="bg-transparent !text-black border py-1 px-3 hover:bg-blue-500 hover:text-white text-xs font-normal m-0 rounded-full"
      >
        re-answer
      </Button>
      <p className="py-4 italic font-light ">{transcript}</p>
    </div>
  );
}

export default ScreeningQuestion;
