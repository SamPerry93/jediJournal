import React from 'react';

const Entry = ({entry}) => {
    return(
        <>
           <div className="entry-container">
                <p key={entry.id}>{entry.title}</p>
            </div>
        </>
    )
}
export default Entry;