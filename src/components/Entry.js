import React from 'react';
import '../styles/entries.css';

const Entry = ({entry}) => {
    return(
        <>
           <div className="entry-container" style={{
           background: entry.mood 
           }}>
               <div className="entry">
                    <p className="entry-text" key={`text_${entry.id}`}>{entry.title}</p>
                    <p className="entry-date" key={`date_${entry.id}`}>{entry.localDate}</p>
                    <p className="entry-code" key={`code_${entry.id}`}>Feeling {entry.code}</p>
                </div>
            </div>
            
        </>
    )
}
export default Entry;