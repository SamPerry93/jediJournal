import React from 'react';
import '../styles/entries.css';

const Entry = ({entry}) => {
    return(
        <>
           
               <div className="entry">
                    <p className="entry-text" key={`text_${entry.id}`}>{entry.title}</p>
                    <span className="entry-date" key={`date_${entry.id}`}>{entry.localDate}</span>
                    <span className="entry-code" key={`code_${entry.id}`}>Feeling {entry.code}</span>
                    <div className="entry-container" style={{
           background: entry.mood, width: '15px', height: '15px',borderRadius:'100%'
           }}></div>
            </div>
            
        </>
    )
}
export default Entry;