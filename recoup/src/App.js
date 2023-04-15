import "./App.css";
import logo from "./images/recouplogo.png";

function App() {
  return (
    <div className="LoginPage">
      <h1>Login Here</h1>
      <div className="LoginBox">
        <div className="LoginInput"></div>
        <div className="Logo">
          <img src={logo} alt="logo" id="logoimg" />
        </div>

        <a></a>
      </div>
    </div>
  );
}

export default App;
