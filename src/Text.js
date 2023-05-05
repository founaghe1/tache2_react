import React from "react";
import { useState, useEffect } from "react";

export const Text = () => {
    const [text, setText] = useState("Change me");

    useEffect(() =>{
        // setText("Change me again");
        console.log("Component mounted");

        return () =>{
            console.log("Component unmounted");
        }
    }, []);

    return (
    <div>
        <input type="text" placeholder="Tape something" className="mb-3" onChange={(event) => {
            setText(event.target.value);
        }} />
        <h4>{text}</h4>
    </div>);
};



