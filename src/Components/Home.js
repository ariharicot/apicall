import Axios from 'axios'
import React, { useState } from 'react';
import './index.css';


function Home() {

    const [joke, setJoke] = useState("")

    const getJoke = () => {
        fetch("https://api.chucknorris.io/jokes/random").then((response) => response.json()).then((data)=> {
          setJoke(data.value);
        });
    }
  return (
    <div className='main-content'>
        <button onClick={getJoke}>Click For the Joke</button>
        {joke}
    </div>
  )
}

export default Home