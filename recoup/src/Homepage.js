import './Homepage.css'
import recouptitle from './images/recouptitle.png'
import InputField from './InputField.js'
import { useState } from 'react'

async function askOpenAI(query) {
  //     const url =""
  //   const response = await fetch(`url?query=${query}`)
  //   const data = response.json()

  const data = 'Option 1: Recycle through ajdnajkfjklsanfkljndfsjklndsfkjlndsfajklndsafkjlnf'
  console.log(`I am asking OpenAI ${query}`)
}

const Homepage = () => {
  let [displaySearch, setDisplaySearch] = useState(false)
  return (
    <div className="HomePage">
      <div className="top"></div>
      <div className="userinfo"></div>
      <div className="navbar">
        <ul>
          <li>About</li>
          <li onClick={() => setDisplaySearch(!displaySearch)}>Search</li>
          <li>Logout</li>
        </ul>
      </div>
      <img src={recouptitle} alt="header" id="homepageheader"></img>
      <div id="search">{displaySearch ? <InputField action={askOpenAI} /> : ''}</div>
    </div>
  )
}

export default Homepage
