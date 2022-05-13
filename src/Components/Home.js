import Axios from 'axios'
import React from 'react'


function Home() {

    const getJoke = () => {
        Axios.get("https://api.chucknorris.io/jokes/random").then((response) => {
            console.log(response)
        })
    }
  return (
    <div>Wassup
        <button onClick={getJoke}>Click For the Joke</button>
    </div>
  )
}

export default Home