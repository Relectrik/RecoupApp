import './App.css'
import { Authenticate } from './Authenticate.js'
import Homepage from './Homepage.js'
import { useAuthentication } from './services/authService.js'

function App() {
  const user = useAuthentication()
  return <div className="LoginPage">{!user ? <Authenticate /> : <Homepage />}</div>
}

export default App
