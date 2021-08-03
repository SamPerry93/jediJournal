import React, { useEffect, useState } from 'react';
import db from '../lib/firebase';
import Entry from './Entry';
const Entries = () => {
    const [entries,setEntries] = useState([]);

useEffect(()=>{
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
        setEntries(data);
      });
}, []);

useEffect(()=>{
    db.collection("entries")
    .orderBy("createdAt", "desc")
    .onSnapshot((querySnapshot) => {
        const _entries = [];
        querySnapshot.forEach((doc) =>{
            _entries.push({
                id: doc.id,
                ...doc.data()
            })
        })
        setEntries(_entries)
    });
}, []);
return(
    <>
    <h1>Entries</h1>
    
    {entries.map((entry) => (
        // console.log(entry.text)
          <Entry entry={entry} key={entry.id}/>

    ))}
</>
)}
export default Entries;