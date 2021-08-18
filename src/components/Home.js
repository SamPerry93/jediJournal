import React, { useEffect, useState } from 'react'
import { FaJediOrder } from 'react-icons/fa'
import '../styles/home.css'
import Title from './Title'
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
    const nextRandomQuote = ()=>{
        getData()
    }
    return (
        <>
        <div className="home-container">
            <span style={{fontSize:'2rem'}}>{randomQuote.quote}</span>
            <p>{randomQuote.author}</p>
            <button className="shuffle-button" onClick={nextRandomQuote}><FaJediOrder/></button>
        </div>
        <Title/>
        </>
    )
}
export default Home;