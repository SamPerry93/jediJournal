import React, { useState } from "react";
import { FaJournalWhills, FaRunning } from 'react-icons/fa';
import { GiFluffyTrefoil, GiRadialBalance } from 'react-icons/gi';
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
            <div className="new-entry-form">
            <span >What are you struggling with today?</span>
            <div className="mood-buttons" >
                    <button value="Physical Strength" onClick={(e)=>setMood(e.target.value)}><FaRunning/></button>   
                    <button value="Peacefullness" onClick={(e)=>setMood(e.target.value)}><FaJournalWhills/></button> 
                    <button value="Knowlege" onClick={(e)=>setMood(e.target.value)}><GiFluffyTrefoil/></button>
                    <button value="Balance" onClick={(e)=>setMood(e.target.value)}><GiRadialBalance/></button>
                    
                </div> 
                <button onClick={handleSubmit} style={{background: mood}}>Save Entry</button>
                <div className="text-area">
                    <label  htmlFor="textarea">What are your thoughts for today... </label>
                    <textarea placeholder="..." value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                {/* <div className="button-group" >
                    <label>How did you live the Jedi Code?</label>
                    <div className="code-buttons" >
                        <button value="Peaceful" onClick={(e)=>setCode(e.target.value)}>Peace</button> 
                        <button value="Harmonious" onClick={(e)=>setCode(e.target.value)}>Harmony</button>  
                        <button value="Serenity" onClick={(e)=>{setCode(e.target.value) }}>Serenity</button>
                    </div>
                    
                
                </div>    */}
                
            </div>
        </div>
        </>
    )
}
export default NewEntry;
