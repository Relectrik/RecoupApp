import './styles/Authenticate.css'
import googlelogo from './images/googlelogo.png'
import logo from './images/recouplogo.png'
import { SignIn } from './services/authService.js'

export const Authenticate = () => {
  return (
    <div>
      <h1>Login Here</h1>
      <div className="LoginBox">
        <div className="LoginInput">
          {/* <input className="EmailInput" placeholder="Email" />{' '}
          <input className="PasswordInput" placeholder="Password" /> */}
          {/* <button>Login</button> */}
          {/* <button>
            <img src={googlelogo} alt="googlelogo" id="googlelogo"></img>
            Login with Google
          </button> */}
          <SignIn />
        </div>
        <div className="Logo">
          <img src={logo} alt="logo" id="logoimg" />
        </div>
      </div>
    </div>
  )
}
