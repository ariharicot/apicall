import Axios from 'axios'
import React, { useState } from 'react'


function Home() {

    //const [affirmation, setJoke] = useState("")

    const getJoke = () => {
        Axios.get("https://www.affirmations.dev/").then((response) => {
            console.log(response);
            //setJoke(response.data.affirmation)
        });
    }
  return (
    <div>
        <button onClick={getJoke}>Click For the Affirmation</button>

    </div>
  )
}

export default Home