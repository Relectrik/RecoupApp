import * as dotenv from 'dotenv'
import { Configuration, OpenAIApi } from 'openai'
// import util from 'util'
// const dotenv = require('dotenv')

dotenv.config()

const key = process.env.OPEN_AI_API
const config = new Configuration({ apiKey: key })
const openai = new OpenAIApi(config)

// Feed the given query to OpenAI and return the response when it is given.
async function askQuery(query) {
  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `What options are there to recycle the following item and provide clear specific instructions for said options? ${query}`,
      temperature: 0.9,
      n: 1,
      max_tokens: 420,
      stream: false,
      stop: [' Human:', ' AI:'],
    })

    return response.data.choices[0].text
  } catch (error) {
    if (error.response) {
      console.log(error.response.status)
      console.log(error.response.data)
    } else {
      console.log(error.message)
    }
  }
}

// console.log(
//   askQuery(
//     'What options are there to recycle the following item and provide clear specific instructions for said options? "hair dye"'
//   )
// );

const test = async () => {
  const response = await askQuery('greasy pizza box')
  console.log('Response is: ', response)
}

test()

export { askQuery }
