import Quiz from "./components/pages/personality-quiz/Quiz";
import Results from "./components/pages/personality-quiz/Results";
import UserPersonal from "./components/pages/UserPersonal";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import About from "./components/pages/common/About";
import { Routes, Route, useNavigate } from "react-router";
import "./App.css";
import Home from "./components/pages/common/Home";


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/about" element={<About />} />
        <Route path="/results" element={<Results />} />
        <Route path="/user" element={<UserPersonal />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
