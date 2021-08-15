import React, { useEffect, useState } from 'react';
import db from '../lib/firebase';
import Entry from './Entry';
const Entries = () => {
    const [entries,setEntries] = useState([]);
    const [loading, setLoading] = useState(true)

useEffect(()=>{
    setLoading(true)
    db.collection("entries")
    .orderBy("createdAt", "desc")
    .get()
    //getting the querySnapshot
    .then((querySnapshot) => {
        //mapping through the array
        const data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        //setting the state of posts
        setLoading(false)
        setEntries(data);
      });
}, []);

useEffect( ()=>{
    setLoading(true)
    let isMounted = true;
     db.collection("entries")
    .orderBy("createdAt", "asc")
    .onSnapshot((querySnapshot) => {
        
        const _entries = [];
        querySnapshot.forEach((doc) =>{
            
            _entries.push({
                id: doc.id,
                ...doc.data()
            })
        })
        if(isMounted){setEntries(_entries)}
        setLoading(false)
    });return() => {isMounted = false}
}, []);
return(
    <>
    <h3>Entries</h3>
    {loading ? (<><div className="entry"/><div className="entry"/><div className="entry"/></>):(
        <div className="all-entries-container">
        {entries.map((entry) => (
          <Entry entry={entry} key={entry.id}/>))}
        </div>
    )}
    </>
)}
export default Entries;