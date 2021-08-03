import React, { useState } from "react";
import styled from 'styled-components';
import db from "../lib/firebase";

const NewEntry = () => {
    
    const [title, setTitle] = useState("");
    

    const Button = styled.button`
        background: #333;
        color: #fefefe;
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border-radius: 3px;
    `
    const Text = styled.textarea`
        height: 140px;
        width: 50vw;
        background: #3d3d3d;
        color: #fefefe;
        font-size: 1em;
        margin: 1em;
        margin-bottom: 0;
        padding: 0.25em 1em;
        border: 2px solid #fefefe;
    `
    const Flex = styled.div`
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
    `

    const handleSubmit = async () => {
        const date = new Date();

        await db.collection("entries").add({
            title,
            createdAt: date.toUTCString(),
        });
        
        setTitle("");
    };

    return(
        <>
            <Flex>
            <Text value={title} cols="60" rows="5" onChange={(e) => setTitle(e.target.value)}/>
            <Button onClick={handleSubmit}>Click</Button>
            </Flex>
        </>
    )
}
export default NewEntry;
