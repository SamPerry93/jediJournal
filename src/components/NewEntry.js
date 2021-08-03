import React, { useState } from "react";
import db from "../lib/firebase";
import '../styles/entries.css';

const NewEntry = () => {
    
    const [title, setTitle] = useState("");
    const [code, setCode] = useState("")
    const [mood, setMood] = useState("")

   

    const handleSubmit = async () => {
        const date = new Date();

        await db.collection("entries").add({
            title,
            mood,
            code,
            createdAt: date.toUTCString(),
            localDate: date.toDateString()
        });
        
        setTitle("");
        setMood("");
        setCode("")
    };

    return(
        <>
        <div className="new-entry-container">
            <h2>Your Entry</h2>
            <div className="new-entry-form">
            <textarea maxLength="245" placeholder="What is your thought for today..." value={title} cols="60" rows="5" onChange={(e) => setTitle(e.target.value)}/>
            
                <div className="button-group" >
                    <h3>How did you live the Jedi Code?</h3>
                    <div className="code-buttons" >
                        <button value="Peaceful" onClick={(e)=>setCode(e.target.value)}>Peace</button> 
                        <button value="Harmonious" onClick={(e)=>setCode(e.target.value)}>Harmony</button>  
                        <button value="Serenity" onClick={(e)=>{setCode(e.target.value) }}>Serenity</button>
                    </div>
                    <h3>How did you feel?</h3>
                <div className="mood-buttons" >
                    <button value="#63b4ff" onClick={(e)=>setMood(e.target.value)}>Physical</button>   
                    <button value="#58d381" onClick={(e)=>setMood(e.target.value)}>Spiritual</button> 
                    <button value="#e4e06b" onClick={(e)=>setMood(e.target.value)}>Skillful</button>
                    <button value="#ebf5ff" onClick={(e)=>setMood(e.target.value)}>Balanced</button>
                </div> 
                </div>   
                <button onClick={handleSubmit} style={{background: mood}}>Save Entry</button>
            </div>
        </div>
        </>
    )
}
export default NewEntry;
