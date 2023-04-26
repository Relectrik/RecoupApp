import './Homepage.css'
import recouptitle from './images/recouptitle.png'
import InputField from './InputField.js'
import { SignOut } from './services/authService.js'

import { useState } from 'react'
const Homepage = () => {
  let [displaySearch, setDisplaySearch] = useState(false)
  const [data, setData] = useState('')
  async function askOpenAI(query) {
    const response = await fetch(`https://recoup.rtoal.repl.co/ask?q=${query}`)
    const suggestion = await response.text()
    setData(suggestion)
  }
  return (
    <div className="HomePage">
      <div className="top"></div>
      <div className="userinfo">
        {' '}
        <SignOut />
      </div>
      <div className="navbar">
        <ul>
          <li>About</li>
          <li onClick={() => setDisplaySearch(!displaySearch)}>Search</li>
          <li></li>
        </ul>
      </div>
      <img src={recouptitle} alt="header" id="homepageheader"></img>

      <div id="search">{displaySearch ? <InputField action={askOpenAI} /> : ''}</div>
      <div id="here">{data}</div>
    </div>
  )
}
export default Homepage
