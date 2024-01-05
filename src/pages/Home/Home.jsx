import React, { useEffect } from "react";
import MainContent from "./MainContent";
import RegisterPart from "./RegisterPart";
import PathPart from "./PathPart";
import GetHired from "./GetHired";
import axios from "axios";

function Home() {
  return (
    <>
      <MainContent />
      <RegisterPart />
    </>
  );
}

export default Home;
