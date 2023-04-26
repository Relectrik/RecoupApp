import './styles/Authenticate.css'
// import googlelogo from './images/googlelogo.png'
import logo from './images/applogo2.png'
import { SignIn } from './services/authService.js'

export const Authenticate = () => {
  return (
    <div id="login"> 
    {/* <div className="LoginBox"> */}
      <h1 id="title">Recoup</h1>
     
        {/* <div className="LoginInput"> */}
          <SignIn />
        {/* </div> */}
        {/* <div className="Logo"> */}
          <img src={logo} alt="logo" id="logoimg" />
        {/* </div> */}
      {/* </div> */}
    </div>
  )
}
