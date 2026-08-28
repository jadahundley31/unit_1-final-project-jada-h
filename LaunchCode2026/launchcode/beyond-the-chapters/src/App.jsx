import Quiz from './components/pages/personality-quiz/Quiz';
import Results from './components/pages/personality-quiz/Results';
import UserPersonal from './components/pages/UserPersonal';
import { Routes, Route, useNavigate } from "react-router";
import './App.css'


function App() {
 
//TODO: Add a Homepage to Route. <Route path='*' element={<Navigate to="/"/>} />
  return (
    <Routes>
      <Route path='/quiz' element={<Quiz/>} />
      <Route path='/results' element={<Results/>} />
      <Route path='/user' element={<UserPersonal/>} />
    </Routes>
  )
}

export default App
