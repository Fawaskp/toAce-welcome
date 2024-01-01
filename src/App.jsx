import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import "./index.css";
import Register from "./pages/Home/Register";
import Layout from "./pages/Layout";

function App() {
  return (
    <Routes>
      <Route path="" element={<Layout/>} >
        <Route exact path="/toAce-welcome/" element={<Home />} />
        <Route exact path="/toAce-welcome/register" element={<Register />} />
      </Route>
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
