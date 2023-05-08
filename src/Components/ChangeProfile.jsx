import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import { Link } from "react-router-dom";

export const ChangeProfile = () =>{
    const { setUsername } = useContext(AppContext)
    const [newUsername, setNewUsername] = useState("")
    return(
        <div className="bg-warning  mx-5">
             <h5 className="text-light">In this page you can change your username</h5> 
            <input  type="text" onChange={(event) => {setNewUsername(event.target.value)}} placeholder="username..." />
            <Link to='/'>
                <Button onClick={() => {
                    setUsername(newUsername);
                }} className="mt-4 ms-2">Change</Button>
            </Link>
            
        </div>
    )
}