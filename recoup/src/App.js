import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route>
            path="/" element=<div>hi</div>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
