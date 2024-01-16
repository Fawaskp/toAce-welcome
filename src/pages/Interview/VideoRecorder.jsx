import React, { useEffect, useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import { Button } from "../../components/CustomElements";
import ScreeningQuestion from "./ScreeningQuestion";

const VideoRecorder = () => {
  const subject = "React";


  const { status, startRecording, stopRecording, mediaBlobUrl, previewStream } =
    useReactMediaRecorder({ video: true });

  const handleStopRecording = () => {
    stopRecording();
  };

  useEffect(() => {
    startRecording();

    const handleBeforeUnload = (event) => {
      const message =
        "Are you sure you want to leave? Your changes may not be saved.";
      event.returnValue = message;
      return message;
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <>
      <h1 className="text-xl overflow-hidden sm:text-2xl md:text-4xl font-bold m-3 text-center">
        {subject ? subject : ""} Interview
      </h1>
      <div className="mx-auto h-screen flex-col md:flex-row flex justify-center md:items-center md:justify-around">
        <div className="md:w-1/2 p-3 flex flex-col items-center">
          <video
            controls
            autoPlay
            className="w-80pt rounded-md"
            ref={(videoRef) => {
              if (videoRef && previewStream) {
                videoRef.srcObject = previewStream;
              }
            }}
          />
          <Button
            onClick={handleStopRecording}
            disabled={status !== "recording"}
          >
            Exit Session
          </Button>
        </div>
        <ScreeningQuestion stopRecording={stopRecording} />
      </div>
    </>
  );
};

export default VideoRecorder;
