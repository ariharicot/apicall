import { Axios } from 'axios'
import React from 'react'
import { Button } from 'react-bootstrap';

const Home = () => {
    // function to get the joke
    const getJoke = () => {
        Axios.Get("https://api.chucknorris.io/jokes/random").then((response) => {
        console.log(response)
        })
    }
    return (
        <div>Salut
            <button onClick={getJoke}>Blague</button>
        </div>

    )
}

export default Home