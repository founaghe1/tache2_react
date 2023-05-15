import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { login } from "../store.ts";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Logins = () =>{
    const [newUsername, setNewUsername] = useState("");
    const dispatch = useDispatch();
    const username = useSelector((state) => state.user.value.username);
    return(
        <div className="bg-warning py-2 mx-5">
            <h3 className="text-light">This is the Login Page: {username}   </h3>
            <div>
                <input type="text" onChange={(e) =>{
                    setNewUsername(e.target.value);
                }}/>

                <Link to='/'>
                    <Button className="px-3 mt-4 ms-2" onClick={() =>
                        dispatch(login({username: newUsername}))
                    }>Login</Button>
                </Link>    
            </div>
        </div>
    )
}