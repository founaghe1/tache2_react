import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { logout } from "../store.ts";


export const Homes = () =>{
   
    const username = useSelector((state) => state.user.value.username);
    const dispatch = useDispatch();

    return(
        <div className="bg-success py-2 mx-5">
            <h3 className="text-light">This is the Homes Page : {username}</h3>
            <Link to="/login">
                <Button className="px-3 mt-4 ms-2" onClick={() => dispatch(logout())}>Logout</Button>
            </Link>
        </div>
    )
}