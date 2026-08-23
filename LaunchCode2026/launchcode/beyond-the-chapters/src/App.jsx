import Quiz from './components/pages/personality-quiz/Quiz'
import { Routes, Route } from "react-router"
import './App.css'
import Results from './components/pages/personality-quiz/Results'

function App() {
 
//TODO: Add a Homepage to Route
  return (
    <Routes>
      <Route path='/quiz' element={<Quiz/>} />
      <Route path='/results' element={<Results/>} />
      <Route path='*' element={<Navigate to="/"/>} />
    </Routes>
  )
}

export default App
