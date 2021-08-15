import React, { useEffect, useState } from 'react'
import '../styles/home.css'
const Home = () => {
    const [quotes, setQuotes] = useState([])
    const [randomQuote, setRandomQuote] = useState({})
    
    useEffect(()=>{
        getData()
        setRandomQuote('')
    },[])
    const getData = async () => {
        await fetch('./quotes.json')
        .then(res => res.json())
        .then(quote =>{
            const newQuo = quote[Math.floor(Math.random() * quote.length)]
            console.log(newQuo)
            setRandomQuote(newQuo)
            }
        )
    }
    return (
        <div className="home-container" style={{margin: '10%'}}>
            <span style={{fontSize:'2rem'}}>{randomQuote.quote}</span>
            <p>{randomQuote.author}</p>
        </div>
    )
}
export default Home;