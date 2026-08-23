import Quiz from './components/pages/personality-quiz/Quiz'
import { Routes, Route, useNavigate } from "react-router"
import './App.css'
import Results from './components/pages/personality-quiz/Results'

function App() {
 
//TODO: Add a Homepage to Route. <Route path='*' element={<Navigate to="/"/>} />
  return (
    <Routes>
      <Route path='/quiz' element={<Quiz/>} />
      <Route path='/results' element={<Results/>} />
    </Routes>
  )
}

export default App
