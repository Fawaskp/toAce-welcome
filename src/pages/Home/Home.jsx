import React, { useEffect } from "react";
import MainContent from "./MainContent";
import RegisterPart from "./RegisterPart";
import PathPart from "./PathPart";
import GetHired from "./GetHired";
import axios from "axios";

function Home() {
  useEffect(() => {
    const res = [];
    const pageIndex = 0;

    axios
      .post(
        "https://brototype.com/api/v1/aluminies",
        {
          pageIndex,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <MainContent />
      <RegisterPart />
      <PathPart />
      <GetHired />
    </>
  );
}

export default Home;
