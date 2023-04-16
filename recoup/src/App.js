import './App.css'
import { Authenticate } from './Authenticate.js'
import { SignOut, useAuthentication } from './services/authService.js'

function App() {
  const user = useAuthentication()
  return <div className="LoginPage">{!user ? <Authenticate /> : <SignOut />}</div>
}

export default App
