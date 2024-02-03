import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Signup from "./pages/Signup";
import Homepage from "./pages/Home";
import Login from "./pages/Login";
import Mainpage from "./pages/Mainpage";
import Resutpage from "./pages/Resutpage";
import { useState } from "react";
import Playwithpdf from "./pages/Playwithpdf";
import Webpage from "./pages/Webpage";
function App() {
  const [handlerightside, sethandlerightside] = useState(false);
  const [handleleftside, sethandleleftside] = useState(false);
  const [handlesearch, sethandlesearch] = useState("");
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/mainpage"
            element={
              <Mainpage
                value={{
                  handleleftside,
                  handlerightside,
                  sethandleleftside,
                  sethandlerightside,
                  handlesearch,
                  sethandlesearch,
                }}
              />
            }
          />
          <Route
            exact
            path="/webpage"
            element={
              <Webpage
                value={{
                  handleleftside,
                  handlerightside,
                  sethandleleftside,
                  sethandlerightside,
                  handlesearch,
                  sethandlesearch,
                }}
              />
            }
          />
          <Route
            exact
            path="/result"
            element={
              <Resutpage
                value={{
                  handleleftside,
                  handlerightside,
                  sethandleleftside,
                  sethandlerightside,
                  handlesearch,
                  sethandlesearch,
                }}
              />
            }
          />
          <Route
            exact
            path="/pdf"
            element={
              <Playwithpdf
                value={{
                  handleleftside,
                  sethandleleftside,
                }}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
