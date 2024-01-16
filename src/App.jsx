import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import "./index.css";
import Register from "./pages/Register/Register";
import Layout from "./pages/Layout";
import VideoRecorder from "./pages/Interview/VideoRecorder";
import FilterPage from "./pages/FilterPage/FilterPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>} >
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/interview" element={<VideoRecorder />} />
        <Route exact path="/filter" element={<FilterPage />} />
      </Route>
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
