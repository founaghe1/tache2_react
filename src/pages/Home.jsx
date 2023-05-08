import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";

export const Home = () =>{
    const { username } = useContext(AppContext);
    return(
        <div className="bg-success py-5 mx-5">
            <h3 className="text-light">This is the Home Page  and user name is: {username}</h3>
        </div>
    )
}