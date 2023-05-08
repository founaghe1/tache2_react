import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";

export const Contact = () =>{
    const { username } = useContext(AppContext);
    return(
        <div className="bg-danger py-5 mx-5">
            <h3 className="text-light">This is the Contact Page and the userName is : {username}</h3>
        </div>
    )
}