import React from "react";
import { ChangeProfile } from "../Components/ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App";

export const Menu = () =>{
    const { username } = useContext(AppContext)
    return(
        <div className="bg-warning py-5 mx-5">
            <h3 className="text-light">This is the Profil Page and user name is : {username} </h3>

        </div>
    )
}