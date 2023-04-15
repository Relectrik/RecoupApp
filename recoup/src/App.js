import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Route>
        <Routes>
          <Route>
            path="/" element=<div>hi</div>
          </Route>
        </Routes>
      </Route>
    </div>
  )
}

export default App
